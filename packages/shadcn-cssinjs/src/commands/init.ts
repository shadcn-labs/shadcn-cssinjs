import { promises as fs } from "node:fs";
import path from "node:path";

import { Command } from "commander";
import { execa } from "execa";
import fsExtra from "fs-extra";
import prompts from "prompts";
import { z } from "zod";

import { getEngineAdapter } from "@/src/engines";
import { engineSchema, rawConfigSchema } from "@/src/schema";
import { addComponents } from "@/src/utils/add-components";
import {
  getConfig,
  resolveConfigPaths,
  type Config,
} from "@/src/utils/get-config";
import { getPackageManager } from "@/src/utils/get-package-manager";
import {
  getProjectComponents,
  getProjectInfo,
} from "@/src/utils/get-project-info";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";

export const initOptionsSchema = z.object({
  cwd: z.string(),
  name: z.string().optional(),
  preset: z.union([z.boolean(), z.string()]).optional(),
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  reinstall: z.boolean().optional(),
  silent: z.boolean(),
  isNewProject: z.boolean().default(false),
  cssVariables: z.boolean().default(true),
  rtl: z.boolean().optional(),
  pointer: z.boolean().optional(),
  base: z.enum(["radix", "base"]).optional(),
  engine: engineSchema.default("stylex"),
  template: z.enum(["next", "vite"]).optional(),
  monorepo: z.boolean().optional(),
  existingConfig: z.record(z.unknown()).optional(),
  installStyleIndex: z.boolean().default(true),
  registryBaseConfig: rawConfigSchema.deepPartial().optional(),
  menuColor: z
    .enum([
      "default",
      "inverted",
      "default-translucent",
      "inverted-translucent",
    ])
    .optional(),
  menuAccent: z.enum(["subtle", "bold"]).optional(),
  iconLibrary: z.string().optional(),
});

export function applyInitUrlOptions(
  url: URL,
  options: Pick<z.infer<typeof initOptionsSchema>, "rtl" | "pointer">
) {
  if (options.rtl) url.searchParams.set("rtl", "true");
  else if (options.rtl === false) url.searchParams.delete("rtl");
  if (options.pointer) url.searchParams.set("pointer", "true");
  else if (options.pointer === false) url.searchParams.delete("pointer");
  return url;
}

export const init = new Command()
  .name("init")
  .alias("create")
  .description("initialize StyleX and the component registry")
  .argument("[components...]", "component names or registry item addresses")
  .option("-t, --template <template>", "new project template: next or vite")
  .option("--engine <engine>", "styling engine. currently: stylex", "stylex")
  .option("-y, --yes", "skip confirmation prompts.", true)
  .option("-d, --defaults", "use the default Next.js StyleX setup.", false)
  .option("-f, --force", "overwrite existing configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("-n, --name <name>", "create a new project with this name.")
  .option("-s, --silent", "mute output.", false)
  .option("--reinstall", "re-install existing UI components.")
  .option("--no-reinstall", "do not re-install existing UI components.")
  .action(async (components: string[], opts) => {
    try {
      const options = initOptionsSchema.parse({
        ...opts,
        components,
        cwd: path.resolve(opts.cwd),
        reinstall: opts.reinstall,
      });
      await runInit(options);
    } catch (error) {
      handleError(error);
    }
  });

async function isProject(cwd: string) {
  return fsExtra.pathExists(path.join(cwd, "package.json"));
}

async function scaffoldProject(options: z.infer<typeof initOptionsSchema>) {
  let template = options.template;
  let name = options.name;

  if (!template && !options.defaults && !options.yes) {
    const answer = await prompts({
      choices: [
        { title: "Next.js", value: "next" },
        { title: "Vite React", value: "vite" },
      ],
      initial: 0,
      message: "Which React project would you like to create?",
      name: "template",
      type: "select",
    });
    template = answer.template;
  }
  template ??= "next";

  if (!name && !options.yes) {
    const answer = await prompts({
      initial: "my-app",
      message: "What is your project named?",
      name: "name",
      type: "text",
    });
    name = answer.name;
  }
  name ??= "my-app";

  const target = path.resolve(options.cwd, name);
  if (await fsExtra.pathExists(target)) {
    const entries = await fs.readdir(target);
    if (entries.length > 0) {
      throw new Error(`The target directory ${target} is not empty.`);
    }
  }

  const packageManager = await getPackageManager(options.cwd, {
    withFallback: true,
  });
  if (packageManager === "deno") {
    throw new Error("Project creation does not support Deno.");
  }
  const runner =
    packageManager === "pnpm"
      ? ["pnpm", "dlx"]
      : packageManager === "yarn"
        ? ["yarn", "dlx"]
        : packageManager === "bun"
          ? ["bunx"]
          : ["npx"];

  const command = runner[0];
  const args = runner.slice(1);
  if (template === "next") {
    args.push(
      "create-next-app@latest",
      target,
      "--ts",
      "--eslint",
      "--app",
      "--src-dir",
      "--import-alias",
      "@/*",
      "--no-tailwind",
      `--use-${packageManager}`
    );
  } else {
    args.push("create-vite@latest", target, "--template", "react-ts");
  }

  await execa(command, args, { cwd: options.cwd, stdio: "inherit" });
  if (template === "vite") {
    await execa(packageManager, ["install"], { cwd: target, stdio: "inherit" });
  }
  options.isNewProject = true;
  return target;
}

function getAliases(prefix: string) {
  const normalized = prefix.endsWith("/") ? prefix : `${prefix}/`;
  return {
    components: `${normalized}components`,
    hooks: `${normalized}hooks`,
    lib: `${normalized}lib`,
    ui: `${normalized}components/ui`,
    utils: `${normalized}lib/utils`,
  };
}

export async function runInit(input: unknown): Promise<Config> {
  const options = initOptionsSchema.parse(input);
  let cwd = path.resolve(options.cwd);
  if (!(await isProject(cwd))) {
    cwd = await scaffoldProject(options);
    options.cwd = cwd;
  }

  const existingConfig = await getConfig(cwd);
  if (existingConfig && !options.force) {
    const answer = options.yes
      ? { overwrite: false }
      : await prompts({
          initial: false,
          message: `A ${highlighter.info("components.json")} file already exists. Overwrite it?`,
          name: "overwrite",
          type: "confirm",
        });
    if (!answer.overwrite) {
      throw new Error(
        "Initialization cancelled because components.json exists."
      );
    }
  }

  const reinstall =
    existingConfig && options.reinstall !== false
      ? await getProjectComponents(cwd)
      : [];
  const project = await getProjectInfo(cwd);
  if (!project) throw new Error("Could not detect a supported React project.");

  if (options.engine !== "stylex") {
    throw new Error(
      `${options.engine} is reserved for a future adapter. Use --engine stylex.`
    );
  }
  const adapter = getEngineAdapter(options.engine);
  const setup = await adapter.setup({
    cwd,
    force: options.force,
    globalCss: existingConfig?.tailwind.css,
    project,
    silent: options.silent,
  });

  const rawConfig = rawConfigSchema.parse({
    $schema: "https://shadcn-cssinjs.com/schema.json",
    aliases: getAliases(setup.aliasPrefix),
    engine: options.engine,
    iconLibrary: options.iconLibrary ?? "lucide",
    rsc: project.isRSC,
    style: "stylex",
    tailwind: {
      baseColor: "",
      config: "",
      css: setup.globalCss,
      cssVariables: true,
      prefix: "",
    },
    tsx: project.isTsx,
  });
  await fsExtra.writeJSON(path.join(cwd, "components.json"), rawConfig, {
    spaces: 2,
  });
  await fs.appendFile(path.join(cwd, "components.json"), "\n");

  // Resolve the config directly. The initial getConfig() lookup above may
  // have cached a miss before components.json existed.
  const config = await resolveConfigPaths(cwd, rawConfig);

  const components = [
    "stylex-tokens",
    ...(options.components ?? []),
    ...reinstall,
  ].filter((component, index, values) => values.indexOf(component) === index);
  await addComponents(components, config, {
    overwrite: options.force || reinstall.length > 0,
    silent: options.silent,
  });

  if (!options.silent) {
    logger.break();
    logger.log(`Initialized ${highlighter.success(adapter.label)} in ${cwd}.`);
    logger.break();
  }
  return config;
}
