import { Slider } from "@/registry/bases/stylex/ui/slider";

export default function SliderDemo() {
  return (
    <Slider defaultValue={50} max={100} step={1} style={{ maxWidth: 320 }} />
  );
}
