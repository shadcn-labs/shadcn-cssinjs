"use client";

import { useState } from "react";

import { Label } from "@/registry/bases/stylex/label/label";
import { Slider } from "@/registry/bases/stylex/slider/slider";

export default function SliderControlled() {
  const [value, setValue] = useState<number[]>([0.3, 0.7]);

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-temperature">Temperature</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-temperature"
        max={1}
        min={0}
        onValueChange={(next) => setValue(next as number[])}
        step={0.1}
        value={value}
      />
    </div>
  );
}
