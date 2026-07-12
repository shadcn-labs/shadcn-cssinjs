import type { EngineAdapter } from "@/src/engines/types";

export const tokenami: EngineAdapter = {
  id: "tokenami",
  label: "Tokenami",
  async setup() {
    throw new Error("The Tokenami engine adapter is not available yet.");
  },
};
