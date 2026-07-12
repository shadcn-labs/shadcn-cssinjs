import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { execa } from "execa";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { EngineContext } from "@/src/engines/types";
import { FRAMEWORKS } from "@/src/utils/frameworks";

import { stylex } from ".";
import { STYLEX_THEME_END, STYLEX_THEME_START } from "./theme";

vi.mock("@/src/utils/get-package-manager", () => ({
  getPackageManager: vi.fn(async () => "pnpm"),
}));

vi.mock("execa", () => ({
  execa: vi.fn(async () => ({})),
}));

const temporaryDirectories: string[] = [];

async function temporaryDirectory() {
  const cwd = await mkdtemp(path.join(os.tmpdir(), "shadcn-cssinjs-"));
  temporaryDirectories.push(cwd);
  return cwd;
}

function context(
  cwd: string,
  framework: "next-app" | "vite",
  globalCss: string
): EngineContext {
  return {
    cwd,
    force: false,
    globalCss,
    project: {
      aliasPrefix: null,
      framework: FRAMEWORKS[framework],
      frameworkVersion: null,
      isRSC: framework === "next-app",
      isSrcDir: false,
      isTsx: true,
      tailwindConfigFile: null,
      tailwindCssFile: null,
      tailwindVersion: null,
    },
    silent: true,
  };
}

afterEach(async () => {
  vi.clearAllMocks();
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { force: true, recursive: true }))
  );
});

describe("StyleX engine", () => {
  it("configures a Next.js project and remains idempotent", async () => {
    const cwd = await temporaryDirectory();
    await writeFile(
      path.join(cwd, "package.json"),
      `${JSON.stringify(
        {
          scripts: { build: "next build", dev: "next dev" },
        },
        null,
        2
      )}\n`
    );
    await writeFile(path.join(cwd, "tsconfig.json"), "{}\n");
    await writeFile(path.join(cwd, "globals.css"), "body { margin: 0; }\n");
    await writeFile(
      path.join(cwd, "next.config.mjs"),
      "const nextConfig = {};\n\nexport default nextConfig;\n"
    );

    const engineContext = context(cwd, "next-app", "globals.css");
    await stylex.setup(engineContext);
    await stylex.setup(engineContext);

    const nextConfig = await readFile(
      path.join(cwd, "next.config.mjs"),
      "utf8"
    );
    const css = await readFile(path.join(cwd, "globals.css"), "utf8");
    const packageJson = JSON.parse(
      await readFile(path.join(cwd, "package.json"), "utf8")
    ) as { scripts: Record<string, string> };
    const tsconfig = JSON.parse(
      await readFile(path.join(cwd, "tsconfig.json"), "utf8")
    ) as {
      compilerOptions: { baseUrl: string; paths: Record<string, string[]> };
    };

    expect(nextConfig).toContain(
      'import { webpack as stylexWebpack } from "@stylexjs/unplugin"'
    );
    expect(nextConfig).toContain("stylexWebpack(");
    expect(nextConfig).toContain("export default withStyleX(nextConfig)");
    expect(nextConfig.split("shadcn-cssinjs StyleX integration")).toHaveLength(
      2
    );
    expect(css).not.toContain("@stylex;");
    expect(css.split(STYLEX_THEME_START)).toHaveLength(2);
    expect(css.split(STYLEX_THEME_END)).toHaveLength(2);
    expect(packageJson.scripts).toEqual({
      build: "next build --webpack",
      dev: "next dev --webpack",
    });
    expect(tsconfig.compilerOptions).toEqual({
      baseUrl: ".",
      paths: { "@/*": ["./*"] },
    });
    expect(vi.mocked(execa)).toHaveBeenCalledWith(
      "pnpm",
      ["add", "@stylexjs/stylex@^0.19.0"],
      expect.objectContaining({ cwd })
    );
    expect(vi.mocked(execa)).toHaveBeenCalledWith(
      "pnpm",
      ["add", "-D", "@stylexjs/unplugin@^0.19.0"],
      expect.objectContaining({ cwd })
    );
  });

  it("configures a Vite React project", async () => {
    const cwd = await temporaryDirectory();
    await writeFile(path.join(cwd, "package.json"), "{}\n");
    await writeFile(path.join(cwd, "tsconfig.json"), "{}\n");
    await writeFile(path.join(cwd, "index.css"), "body {}\n");
    await writeFile(
      path.join(cwd, "vite.config.ts"),
      'import { defineConfig } from "vite";\n\nexport default defineConfig({ plugins: [] });\n'
    );
    await writeFile(
      path.join(cwd, "index.html"),
      '<!doctype html><html><head></head><body><div id="root"></div></body></html>\n'
    );

    const result = await stylex.setup(context(cwd, "vite", "index.css"));
    const vite = await readFile(path.join(cwd, "vite.config.ts"), "utf8");
    const html = await readFile(path.join(cwd, "index.html"), "utf8");
    const css = await readFile(path.join(cwd, "index.css"), "utf8");

    expect(result).toEqual({ aliasPrefix: "@/", globalCss: "index.css" });
    expect(vite).toContain('import stylex from "@stylexjs/unplugin"');
    expect(vite).toContain("stylex.vite({ useCSSLayers: true })");
    expect(html).toContain("/virtual:stylex.css");
    expect(html).toContain('import("virtual:stylex:runtime")');
    expect(css).not.toContain("@stylex;");
    expect(css).toContain(STYLEX_THEME_START);
    expect(vi.mocked(execa)).toHaveBeenCalledWith(
      "pnpm",
      ["add", "-D", "@stylexjs/unplugin@^0.19.0"],
      expect.objectContaining({ cwd })
    );
  });
});
