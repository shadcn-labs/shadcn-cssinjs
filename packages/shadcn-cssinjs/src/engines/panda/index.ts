import type { EngineAdapter } from "@/src/engines/types";

export const panda: EngineAdapter = {
  id: "panda",
  label: "Panda CSS",
  async setup() {
    throw new Error("The Panda CSS engine adapter is not available yet.");
  },
};
