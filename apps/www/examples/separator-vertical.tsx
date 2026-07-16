import { Separator } from "@/registry/bases/stylex/ui/separator";

export default function SeparatorVertical() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: 14,
        gap: 16,
        height: 24,
      }}
    >
      <span>Profile</span>
      <Separator orientation="vertical" />
      <span>Settings</span>
      <Separator orientation="vertical" />
      <span>Logout</span>
    </div>
  );
}
