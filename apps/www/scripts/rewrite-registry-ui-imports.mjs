import { readFile, writeFile } from "node:fs/promises";

const appRoot = new URL("../", import.meta.url);
const registry = JSON.parse(
  await readFile(new URL("registry.json", appRoot), "utf-8")
);
const uiItems = registry.items.filter((item) => item.type === "registry:ui");

const rewriteRegistryImports = (content) => {
  const uiImportCount = content.split("@/registry/bases/stylex/ui/").length - 1;
  const libImportCount =
    content.split("@/registry/bases/stylex/lib/").length - 1;
  const rewrittenContent = content
    .replaceAll("@/registry/bases/stylex/ui/", "@/components/ui/")
    .replaceAll("@/registry/bases/stylex/lib/", "@/lib/");

  return { content: rewrittenContent, count: uiImportCount + libImportCount };
};

let rewrittenImportCount = 0;

for (const item of uiItems) {
  const outputPath = new URL(`public/r/${item.name}.json`, appRoot);
  const output = JSON.parse(await readFile(outputPath, "utf-8"));
  let itemChanged = false;

  for (const file of output.files ?? []) {
    if (typeof file.content !== "string") {
      continue;
    }

    const rewritten = rewriteRegistryImports(file.content);
    file.content = rewritten.content;
    itemChanged ||= rewritten.count > 0;
    rewrittenImportCount += rewritten.count;
  }

  if (itemChanged) {
    await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
  }
}

console.log(
  `Rewrote ${rewrittenImportCount} registry imports for installation.`
);
