import path from "node:path";

import { Command } from "commander";

import { getShadcnRegistryIndex } from "@/src/registry/api";
import { REGISTRY_URL, SHADCN_URL } from "@/src/registry/constants";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";

export const docs = new Command()
  .name("docs")
  .description("get documentation and registry source URLs for components")
  .argument("<components...>", "component names")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("--json", "output as JSON.", false)
  .action(async (components: string[], opts) => {
    try {
      path.resolve(opts.cwd);
      const index = await getShadcnRegistryIndex();
      if (!index) throw new Error("Failed to fetch the registry index.");

      const results = components.map((component) => {
        const item = index.find((entry) => entry.name === component);
        if (!item) {
          throw new Error(
            `Component ${highlighter.info(component)} was not found in the StyleX registry.`
          );
        }
        return {
          component,
          engine: "stylex",
          links: {
            docs: `${SHADCN_URL}/docs/components/${component}`,
            registry: `${REGISTRY_URL}/${component}.json`,
          },
        };
      });

      if (opts.json) {
        console.log(JSON.stringify({ engine: "stylex", results }, null, 2));
        return;
      }
      for (const result of results) {
        logger.log(highlighter.info(result.component));
        logger.log(`  - docs      ${result.links.docs}`);
        logger.log(`  - registry  ${result.links.registry}`);
        logger.break();
      }
    } catch (error) {
      handleError(error);
    }
  });
