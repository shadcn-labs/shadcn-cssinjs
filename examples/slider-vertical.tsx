import { Slider } from "@/registry/bases/stylex/slider/slider";

export default function SliderVertical() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
      <Slider
        className="h-40"
        defaultValue={[50]}
        max={100}
        orientation="vertical"
        step={1}
      />
      <Slider
        className="h-40"
        defaultValue={[25]}
        max={100}
        orientation="vertical"
        step={1}
      />
    </div>
  );
}
