import { Button } from "@/registry/bases/stylex/button/button";

export default function ButtonVariants() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
