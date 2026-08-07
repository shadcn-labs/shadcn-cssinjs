"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  applyThemeColor,
  DEFAULT_THEME_COLOR,
  THEME_COLORS,
  THEME_COLOR_STORAGE_KEY,
} from "@/lib/theme-customizer";
import { cn } from "@/lib/utils";

export const ThemeSelector = ({ className }: { className?: string }) => {
  const [color, setColor] = React.useState(DEFAULT_THEME_COLOR);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setColor(
      localStorage.getItem(THEME_COLOR_STORAGE_KEY) ?? DEFAULT_THEME_COLOR
    );
  }, []);

  const updateColor = (value: string) => {
    setColor(value);
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, value);
    applyThemeColor(value);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <select
        aria-label="Theme"
        className="bg-background h-8 w-36 rounded-lg border px-3 text-sm"
        value={color}
        onChange={(event) => updateColor(event.target.value)}
      >
        {THEME_COLORS.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.value === "default" ? "Neutral" : theme.name}
          </option>
        ))}
      </select>
      <Button
        aria-label="Copy theme link"
        className="size-8 rounded-lg"
        size="icon"
        variant="outline"
        onClick={copy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
};
