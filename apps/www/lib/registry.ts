import path from "node:path";

import { readFileFromRoot } from "@/lib/read-file";

export type ComponentBase = "stylex" | "panda";

/** Non-StyleX bases that ship a parallel component set + demos. */
export const ALTERNATE_BASES: ComponentBase[] = ["panda"];

export const readOptionalFromRoot = async (
  relativePath: string
): Promise<string | null> => {
  try {
    return await readFileFromRoot(relativePath);
  } catch {
    return null;
  }
};

const EXAMPLES_DIR: Record<ComponentBase, string> = {
  panda: "examples-panda",
  stylex: "examples",
};

const examplesDir = (base: ComponentBase): string => EXAMPLES_DIR[base];

export const getRegistryUiSourceCandidates = ({
  name,
  base = "stylex",
}: {
  name: string;
  base?: ComponentBase;
}) => {
  if (base === "panda") {
    return [path.join("registry", "bases", base, name, `${name}.tsx`)];
  }
  return [
    path.join("registry", "bases", "stylex", "ui", `${name}.tsx`),
    path.join("registry", "new-york", `${name}.tsx`),
  ];
};

export const getDemoSource = (
  name: string,
  base: ComponentBase = "stylex"
): Promise<string | null> =>
  readOptionalFromRoot(path.join(examplesDir(base), `${name}.tsx`));

export const getRegistrySource = async (
  name: string,
  base: ComponentBase = "stylex"
): Promise<string | null> => {
  const candidates = getRegistryUiSourceCandidates({ base, name });

  for (const candidate of candidates) {
    const code = await readOptionalFromRoot(candidate);
    if (code) {
      return code;
    }
  }

  return null;
};

/** Whether a demo exists for the given preview name in the given base. */
export const hasDemo = async (
  name: string,
  base: ComponentBase
): Promise<boolean> => {
  const demo = await getDemoSource(name, base);
  return demo !== null;
};

/**
 * Bases that have a live demo for the given preview name. StyleX is always
 * included (the canonical base); alternate bases are added when they ship a
 * matching demo, which is what drives the per-preview base switcher.
 */
export const getAvailableBases = async (
  name: string
): Promise<ComponentBase[]> => {
  const present = await Promise.all(
    ALTERNATE_BASES.map(async (base) =>
      (await hasDemo(name, base)) ? base : null
    )
  );
  return ["stylex", ...present.filter((b): b is ComponentBase => b !== null)];
};
