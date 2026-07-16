import { Slider } from "@/registry/bases/stylex/ui/slider";

export default function SliderRange() {
  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      defaultValue={[25, 50]}
      max={100}
      step={5}
    />
  );
}
