import path from "node:path";

import { readFileFromRoot } from "@/lib/read-file";

export type ComponentBase = "stylex" | "tokenami";

export const readOptionalFromRoot = async (
  relativePath: string
): Promise<string | null> => {
  try {
    return await readFileFromRoot(relativePath);
  } catch {
    return null;
  }
};

const examplesDir = (base: ComponentBase): string =>
  base === "tokenami" ? "examples-tokenami" : "examples";

export const getRegistryUiSourceCandidates = ({
  name,
  base = "stylex",
}: {
  name: string;
  base?: ComponentBase;
}) => {
  if (base === "tokenami") {
    return [path.join("registry", "bases", "tokenami", name, `${name}.tsx`)];
  }
  return [
    path.join("registry", "bases", "stylex", name, `${name}.tsx`),
    path.join("registry", "new-york", `${name}.tsx`),
  ];
};

export const getRegistryStyleSource = (name: string): Promise<string | null> =>
  readOptionalFromRoot(
    path.join("registry", "bases", "stylex", name, `${name}.stylex.ts`)
  );

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

/** Whether a Tokenami demo exists for the given preview name. */
export const hasTokenamiDemo = async (name: string): Promise<boolean> => {
  const demo = await getDemoSource(name, "tokenami");
  return demo !== null;
};
