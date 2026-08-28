import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonSizes() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
