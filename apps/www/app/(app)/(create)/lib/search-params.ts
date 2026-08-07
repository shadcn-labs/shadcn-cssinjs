"use client";

import { useQueryStates } from "nuqs";
import {
  createLoader,
  createSerializer,
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";
import type { inferParserType, Options } from "nuqs/server";
import * as React from "react";

import {
  BASE_COLORS,
  BASES,
  DEFAULT_CREATE_CONFIG,
  FONTS,
  ICON_LIBRARIES,
  MENU_ACCENTS,
  MENU_COLORS,
  PREVIEW_ITEMS,
  RADII,
  STYLES,
  TEMPLATES,
  THEMES,
} from "@/app/(app)/(create)/lib/config";

const values = <T extends readonly { value: string }[]>(options: T) =>
  options.map((option) => option.value) as [
    T[number]["value"],
    ...T[number]["value"][],
  ];

const createSearchParams = {
  base: parseAsStringLiteral(values(BASES)).withDefault(
    DEFAULT_CREATE_CONFIG.base
  ),
  baseColor: parseAsStringLiteral(values(BASE_COLORS)).withDefault(
    DEFAULT_CREATE_CONFIG.baseColor
  ),
  chartColor: parseAsStringLiteral(values(THEMES)).withDefault(
    DEFAULT_CREATE_CONFIG.chartColor
  ),
  font: parseAsStringLiteral(values(FONTS)).withDefault(
    DEFAULT_CREATE_CONFIG.font
  ),
  fontHeading: parseAsStringLiteral([
    "inherit",
    ...values(FONTS),
  ] as const).withDefault(DEFAULT_CREATE_CONFIG.fontHeading),
  iconLibrary: parseAsStringLiteral(values(ICON_LIBRARIES)).withDefault(
    DEFAULT_CREATE_CONFIG.iconLibrary
  ),
  item: parseAsStringLiteral(values(PREVIEW_ITEMS)).withDefault(
    DEFAULT_CREATE_CONFIG.item
  ),
  menuAccent: parseAsStringLiteral(values(MENU_ACCENTS)).withDefault(
    DEFAULT_CREATE_CONFIG.menuAccent
  ),
  menuColor: parseAsStringLiteral(values(MENU_COLORS)).withDefault(
    DEFAULT_CREATE_CONFIG.menuColor
  ),
  pointer: parseAsBoolean.withDefault(DEFAULT_CREATE_CONFIG.pointer),
  preset: parseAsString.withDefault(""),
  radius: parseAsStringLiteral(values(RADII)).withDefault(
    DEFAULT_CREATE_CONFIG.radius
  ),
  rtl: parseAsBoolean.withDefault(DEFAULT_CREATE_CONFIG.rtl),
  size: parseAsInteger.withDefault(DEFAULT_CREATE_CONFIG.size),
  style: parseAsStringLiteral(values(STYLES)).withDefault(
    DEFAULT_CREATE_CONFIG.style
  ),
  template: parseAsStringLiteral(values(TEMPLATES)).withDefault(
    DEFAULT_CREATE_CONFIG.template
  ),
  theme: parseAsStringLiteral(values(THEMES)).withDefault(
    DEFAULT_CREATE_CONFIG.theme
  ),
};

export const loadCreateSearchParams = createLoader(createSearchParams);
export const serializeCreateSearchParams = createSerializer(createSearchParams);
export type CreateSearchParams = inferParserType<typeof createSearchParams>;

export const CREATE_PARAM_KEYS = Object.keys(
  createSearchParams
) as (keyof CreateSearchParams)[];

const PRESET_KEYS = CREATE_PARAM_KEYS.filter((key) => key !== "preset");

export function encodeCreatePreset(
  config: Partial<CreateSearchParams>
): string {
  const compact = Object.fromEntries(
    PRESET_KEYS.map((key) => [key, config[key]])
  );
  const encoded = btoa(JSON.stringify(compact));
  return encoded.replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/u, "");
}

export function decodeCreatePreset(
  value: string
): Partial<CreateSearchParams> | null {
  try {
    const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "="
    );
    const parsed: unknown = JSON.parse(atob(padded));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Partial<CreateSearchParams>)
      : null;
  } catch {
    return null;
  }
}

export function parsePresetInput(value: string) {
  const input = value.trim();
  if (!input) {
    return null;
  }

  try {
    const url = new URL(input);
    const preset = url.searchParams.get("preset");
    if (preset) {
      return decodeCreatePreset(preset);
    }

    return Object.fromEntries(url.searchParams) as Partial<CreateSearchParams>;
  } catch {
    try {
      const json: unknown = JSON.parse(input);
      if (json && typeof json === "object" && !Array.isArray(json)) {
        return json as Partial<CreateSearchParams>;
      }
    } catch {
      return decodeCreatePreset(input);
    }
  }

  return null;
}

export function parseCreateSnapshot(raw: string) {
  try {
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Partial<CreateSearchParams>)
      : {};
  } catch {
    return {};
  }
}

export function useCreateSearchParams(options: Options = {}) {
  const [params, setParams] = useQueryStates(createSearchParams, {
    history: "push",
    shallow: true,
    ...options,
  });
  const appliedPresetRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (!params.preset || appliedPresetRef.current === params.preset) {
      return;
    }

    appliedPresetRef.current = params.preset;
    const decoded = decodeCreatePreset(params.preset);
    if (decoded) {
      void setParams({ ...decoded, preset: null }, { history: "replace" });
    }
  }, [params.preset, setParams]);

  return [params, setParams] as const;
}
