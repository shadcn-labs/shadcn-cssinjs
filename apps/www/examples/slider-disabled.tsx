import { Slider } from "@/registry/bases/stylex/ui/slider";

export default function SliderDisabled() {
  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      defaultValue={[50]}
      disabled
      max={100}
      step={1}
    />
  );
}
