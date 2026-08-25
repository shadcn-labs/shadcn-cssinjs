export const BASES = [
  {
    description: "Type-safe CSS-in-JS styles compiled at build time.",
    name: "stylex",
    title: "StyleX",
  },
  {
    description: "Zero-runtime CSS-in-TS with build-time codegen.",
    name: "panda",
    title: "Panda CSS",
  },
] as const;

export type Base = (typeof BASES)[number];
export type BaseName = Base["name"];

export const DEFAULT_BASE = BASES[0].name;

export const BASE_NAMES = BASES.map((base) => base.name) as [
  BaseName,
  ...BaseName[],
];

export const getBase = (name: BaseName) =>
  BASES.find((base) => base.name === name);
