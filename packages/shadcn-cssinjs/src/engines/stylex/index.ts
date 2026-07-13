import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { execa } from "execa";
import { applyEdits, modify, parse } from "jsonc-parser";

import type {
  EngineAdapter,
  EngineContext,
  EngineSetupResult,
} from "@/src/engines/types";
import { getPackageManager } from "@/src/utils/get-package-manager";

import { STYLEX_THEME, STYLEX_THEME_END, STYLEX_THEME_START } from "./theme";

const STYLEX_VERSION = "^0.19.0";

const pluginOptions = {
  genConditionalClasses: true,
  runtimeInjection: false,
  styleResolution: "property-specificity",
  unstable_moduleResolution: {
    rootDir: ".",
    type: "commonJS",
  },
};

async function exists(file: string) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function firstExisting(cwd: string, candidates: string[]) {
  for (const candidate of candidates) {
    if (await exists(path.join(cwd, candidate))) return candidate;
  }
  return null;
}

async function installPackages(
  cwd: string,
  packages: string[],
  options: { dev?: boolean } = {}
) {
  if (packages.length === 0) return;
  const packageManager = await getPackageManager(cwd, { withFallback: true });
  if (packageManager === "deno") {
    throw new Error(
      "StyleX initialization does not support Deno projects yet."
    );
  }

  const args =
    packageManager === "npm"
      ? ["install", ...(options.dev ? ["--save-dev"] : []), ...packages]
      : [
          "add",
          ...(options.dev ? [packageManager === "bun" ? "--dev" : "-D"] : []),
          ...packages,
        ];
  await execa(packageManager, args, { cwd, stdio: "inherit" });
}

async function ensureAlias(context: EngineContext) {
  if (context.project.aliasPrefix) return context.project.aliasPrefix;

  const configName = (await exists(path.join(context.cwd, "tsconfig.json")))
    ? "tsconfig.json"
    : "jsconfig.json";
  const file = path.join(context.cwd, configName);
  const source = (await exists(file)) ? await readFile(file, "utf8") : "{}\n";
  const config = parse(source) as {
    compilerOptions?: { baseUrl?: string; paths?: Record<string, string[]> };
  };
  const target = context.project.isSrcDir ? "./src/*" : "./*";

  let next = source;
  if (!config.compilerOptions?.baseUrl) {
    next = applyEdits(
      next,
      modify(next, ["compilerOptions", "baseUrl"], ".", {
        formattingOptions: { insertSpaces: true, tabSize: 2 },
      })
    );
  }
  const reparsed = parse(next) as typeof config;
  if (!reparsed.compilerOptions?.paths?.["@/*"]) {
    next = applyEdits(
      next,
      modify(next, ["compilerOptions", "paths", "@/*"], [target], {
        formattingOptions: { insertSpaces: true, tabSize: 2 },
      })
    );
  }
  await writeFile(file, next.endsWith("\n") ? next : `${next}\n`, "utf8");
  return "@/";
}

async function configureNext(context: EngineContext) {
  const configName = await firstExisting(context.cwd, [
    "next.config.ts",
    "next.config.mts",
    "next.config.mjs",
    "next.config.js",
    "next.config.cjs",
  ]);
  if (!configName)
    throw new Error("Could not locate a Next.js configuration file.");

  const file = path.join(context.cwd, configName);
  let source = await readFile(file, "utf8");
  if (source.includes("shadcn-cssinjs StyleX integration")) return;

  const isCommonJs =
    configName.endsWith(".cjs") || source.includes("module.exports");
  const importLine = isCommonJs
    ? 'const { webpack: stylexWebpack } = require("@stylexjs/unplugin");\n'
    : 'import { webpack as stylexWebpack } from "@stylexjs/unplugin";\n';
  const helper = `
// shadcn-cssinjs StyleX integration
const withStyleX = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    const configured =
      typeof nextConfig.webpack === "function"
        ? nextConfig.webpack(config, options) ?? config
        : config;
    configured.plugins ??= [];
    configured.plugins.push(
      stylexWebpack(${JSON.stringify(
        {
          ...pluginOptions,
          useCSSLayers: true,
        },
        null,
        6
      )})
    );
    return configured;
  },
});

`;

  const exportPattern = isCommonJs
    ? /module\.exports\s*=\s*([^;]+);?\s*$/s
    : /export\s+default\s+([^;]+);?\s*$/s;
  const match = source.match(exportPattern);
  if (!match || /^(?:async\s+)?function\b/.test(match[1].trim())) {
    throw new Error(
      `Could not safely wrap the default export in ${configName} with StyleX.`
    );
  }

  const exportKeyword = isCommonJs ? "module.exports =" : "export default";
  source = `${importLine}${source.replace(
    exportPattern,
    `${helper}${exportKeyword} withStyleX(${match[1].trim()});\n`
  )}`;
  await writeFile(file, source, "utf8");
}

async function configureNextScripts(context: EngineContext) {
  const file = path.join(context.cwd, "package.json");
  const packageJson = JSON.parse(await readFile(file, "utf8")) as {
    scripts?: Record<string, string>;
    [key: string]: unknown;
  };
  packageJson.scripts ??= {};
  for (const script of ["build", "dev"] as const) {
    const command = packageJson.scripts[script];
    if (command?.includes(`next ${script}`) && !command.includes("--webpack")) {
      packageJson.scripts[script] = command.replace(
        `next ${script}`,
        `next ${script} --webpack`
      );
    }
  }
  await writeFile(file, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
}

async function configureVite(context: EngineContext) {
  const configName = await firstExisting(context.cwd, [
    "vite.config.ts",
    "vite.config.js",
    "vite.config.mts",
    "vite.config.mjs",
  ]);
  if (!configName)
    throw new Error("Could not locate a Vite configuration file.");
  const file = path.join(context.cwd, configName);
  let source = await readFile(file, "utf8");
  if (!source.includes("@stylexjs/unplugin")) {
    source = `import stylex from "@stylexjs/unplugin";\n${source}`;
  }
  if (!source.includes("stylex.vite(")) {
    if (/plugins\s*:\s*\[/.test(source)) {
      source = source.replace(
        /plugins\s*:\s*\[/,
        (match) => `${match}\n    stylex.vite({ useCSSLayers: true }),`
      );
    } else if (/defineConfig\s*\(\s*{/.test(source)) {
      source = source.replace(
        /defineConfig\s*\(\s*{/,
        (match) => `${match}\n  plugins: [stylex.vite({ useCSSLayers: true })],`
      );
    } else {
      throw new Error(`Could not safely add StyleX to ${configName}.`);
    }
  }
  await writeFile(file, source, "utf8");

  const htmlFile = path.join(context.cwd, "index.html");
  if (await exists(htmlFile)) {
    let html = await readFile(htmlFile, "utf8");
    if (!html.includes("/virtual:stylex.css")) {
      html = html.replace(
        "</head>",
        '  <link rel="stylesheet" href="/virtual:stylex.css" />\n  </head>'
      );
    }
    if (!html.includes("virtual:stylex:runtime")) {
      html = html.replace(
        "</body>",
        '  <script type="module">import("virtual:stylex:runtime");</script>\n  </body>'
      );
    }
    await writeFile(htmlFile, html, "utf8");
  }
}

async function findGlobalCss(context: EngineContext) {
  if (
    context.globalCss &&
    (await exists(path.resolve(context.cwd, context.globalCss)))
  ) {
    return context.globalCss;
  }
  const candidate = await firstExisting(context.cwd, [
    "app/globals.css",
    "src/app/globals.css",
    "styles/globals.css",
    "src/styles/globals.css",
    "src/index.css",
    "src/main.css",
  ]);
  if (!candidate) {
    throw new Error("Could not locate the application's global CSS file.");
  }
  return candidate;
}

async function updateTheme(context: EngineContext, globalCss: string) {
  const file = path.resolve(context.cwd, globalCss);
  let source = await readFile(file, "utf8");
  const existingTheme = new RegExp(
    `${STYLEX_THEME_START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${STYLEX_THEME_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
  );
  source = existingTheme.test(source)
    ? source.replace(existingTheme, STYLEX_THEME)
    : `${source.trimEnd()}\n\n${STYLEX_THEME}\n`;
  await writeFile(file, source.endsWith("\n") ? source : `${source}\n`, "utf8");
}

async function setup(context: EngineContext): Promise<EngineSetupResult> {
  const framework = context.project.framework.name;
  if (!framework.startsWith("next") && framework !== "vite") {
    throw new Error(
      `StyleX initialization currently supports Next.js and Vite React projects, not ${framework}.`
    );
  }

  const aliasPrefix = await ensureAlias(context);
  const globalCss = await findGlobalCss(context);
  await installPackages(context.cwd, [`@stylexjs/stylex@${STYLEX_VERSION}`]);

  if (framework.startsWith("next")) {
    await installPackages(
      context.cwd,
      [`@stylexjs/unplugin@${STYLEX_VERSION}`],
      { dev: true }
    );
    await configureNext(context);
    await configureNextScripts(context);
  } else {
    await installPackages(
      context.cwd,
      [`@stylexjs/unplugin@${STYLEX_VERSION}`],
      { dev: true }
    );
    await configureVite(context);
  }

  await updateTheme(context, globalCss);
  return { aliasPrefix, globalCss };
}

export const stylex: EngineAdapter = {
  id: "stylex",
  label: "StyleX",
  setup,
};
