"use client";

import { Slider } from "@/registry/bases/tokenami/slider/slider";

export default function SliderDemo() {
  return (
    <Slider
      defaultValue={50}
      max={100}
      step={1}
      style={{ "--max-width": 80 }}
    />
  );
}
