// oxlint-disable no-empty-interface, no-empty-object-type
import type config from "./tokenami.config";

export type Config = typeof config;

// Tokenami reads its theme/properties from these module-augmented interfaces.
// They are intentionally empty `extends` declarations.
declare module "@tokenami/node" {
  interface TokenamiConfig extends Config {}
}

declare module "tokenami" {
  interface TokenamiConfig extends Config {}
}
