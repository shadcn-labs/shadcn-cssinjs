"use client";

import { useState } from "react";

import { Progress } from "@/registry/bases/stylex/ui/progress";
import { Slider } from "@/registry/bases/stylex/ui/slider";

export default function ProgressControlled() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress className="w-full" value={value} />
      <Slider
        max={100}
        min={0}
        onValueChange={(next) => setValue(next as number)}
        step={1}
        value={value}
      />
    </div>
  );
}
