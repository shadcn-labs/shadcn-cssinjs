"use client";

import * as React from "react";

import { useCreateLocks } from "@/app/(app)/(create)/hooks/use-locks";
import type { LockableCreateParam } from "@/app/(app)/(create)/hooks/use-locks";
import {
  BASE_COLORS,
  BASES,
  DEFAULT_CREATE_CONFIG,
  FONTS,
  ICON_LIBRARIES,
  MENU_ACCENTS,
  MENU_COLORS,
  RADII,
  STYLES,
  THEMES,
} from "@/app/(app)/(create)/lib/config";
import { useCreateSearchParams } from "@/app/(app)/(create)/lib/search-params";
import type { CreateSearchParams } from "@/app/(app)/(create)/lib/search-params";

function random<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)] as T;
}

export function useCreateRandom() {
  const { locks } = useCreateLocks();
  const [, setParams] = useCreateSearchParams();

  const randomize = React.useCallback(() => {
    const bodyFont = random(FONTS).value;
    const next: Partial<CreateSearchParams> = {
      base: random(BASES).value,
      baseColor: random(BASE_COLORS).value,
      chartColor: random(THEMES).value,
      font: bodyFont,
      fontHeading: random(["inherit", ...FONTS.map((font) => font.value)]),
      iconLibrary: random(ICON_LIBRARIES).value,
      menuAccent: random(MENU_ACCENTS).value,
      menuColor: random(MENU_COLORS).value,
      radius: random(RADII).value,
      style: random(STYLES).value,
      theme: random(THEMES).value,
    };

    const unlocked = Object.fromEntries(
      Object.entries(next).filter(
        ([key]) => !locks.has(key as LockableCreateParam)
      )
    ) as Partial<CreateSearchParams>;

    void setParams(unlocked, { history: "replace" });
  }, [locks, setParams]);

  const reset = React.useCallback(() => {
    void setParams(
      { ...DEFAULT_CREATE_CONFIG, preset: null },
      { history: "replace" }
    );
  }, [setParams]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key === "r") {
        event.preventDefault();
        randomize();
      } else if (event.key === "R") {
        event.preventDefault();
        reset();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [randomize, reset]);

  return { randomize, reset };
}
