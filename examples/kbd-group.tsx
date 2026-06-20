import { Kbd, KbdGroup } from "@/registry/bases/stylex/kbd/kbd";

export default function KbdGroupExample() {
  return (
    <div
      style={{
        alignItems: "center",
        color: "var(--muted-foreground)",
        display: "flex",
        fontSize: 14,
        gap: 8,
      }}
    >
      <span>Press</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <span>to open the command palette.</span>
    </div>
  );
}
