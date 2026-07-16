"use client";

import { useState } from "react";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/ui/toggle-group";

const WEIGHTS = [
  { className: "font-light", label: "Light", value: "light" },
  { className: "font-normal", label: "Normal", value: "normal" },
  { className: "font-medium", label: "Medium", value: "medium" },
  { className: "font-bold", label: "Bold", value: "bold" },
];

export default function ToggleGroupCustom() {
  const [fontWeight, setFontWeight] = useState("normal");
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        onValueChange={(value) => setFontWeight(value[0] ?? "normal")}
        size="lg"
        spacing={2}
        value={[fontWeight]}
        variant="outline"
      >
        {WEIGHTS.map((weight) => (
          <ToggleGroupItem
            aria-label={weight.label}
            className="flex size-16 flex-col items-center justify-center rounded-xl"
            key={weight.value}
            value={weight.value}
          >
            <span className={`text-2xl leading-none ${weight.className}`}>
              Aa
            </span>
            <span className="text-xs text-muted-foreground">
              {weight.label}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <FieldDescription>
        Use{" "}
        <code className="rounded-md bg-muted px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        to set the font weight.
      </FieldDescription>
    </Field>
  );
}
