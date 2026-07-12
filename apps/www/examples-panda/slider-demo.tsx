"use client";

import { Slider } from "@/registry/bases/panda/slider/slider";

export default function SliderDemo() {
  return (
    <Slider
      defaultValue={50}
      max={100}
      step={1}
      style={{ maxWidth: "20rem" }}
    />
  );
}
