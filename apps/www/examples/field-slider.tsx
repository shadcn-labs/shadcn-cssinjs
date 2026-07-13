"use client";

import { useState } from "react";

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/bases/stylex/ui/field";
import { Slider } from "@/registry/bases/stylex/ui/slider";

export default function FieldSlider() {
  const [value, setValue] = useState<number[]>([200, 800]);

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        aria-label="Price Range"
        className="mt-2 w-full"
        max={1000}
        min={0}
        onValueChange={(next) => setValue(next as number[])}
        step={10}
        value={value}
      />
    </Field>
  );
}
