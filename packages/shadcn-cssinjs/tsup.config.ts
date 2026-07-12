import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  // Preserve dist during watch so workspace consumers are not left without
  // the CLI entrypoint between incremental rebuilds.
  clean: !options.watch,
  dts: true,
  entry: [
    "src/index.ts",
    "src/registry/index.ts",
    "src/schema/index.ts",
    "src/mcp/index.ts",
    "src/utils/index.ts",
    "src/icons/index.ts",
  ],
  format: ["esm"],
  sourcemap: false,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
  // Bundle @antfu/ni and its dependency tinyexec to avoid
  // module resolution failures with npx temporary installs.
  noExternal: ["@antfu/ni", "tinyexec"],
}));
