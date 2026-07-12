import { panda } from "@/src/engines/panda";
import { stylex } from "@/src/engines/stylex";
import { tokenami } from "@/src/engines/tokenami";
import type { Engine } from "@/src/engines/types";

const adapters = { panda, stylex, tokenami };

export function getEngineAdapter(engine: Engine) {
  return adapters[engine];
}

export { panda, stylex, tokenami };
