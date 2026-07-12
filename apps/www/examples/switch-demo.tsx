import { Switch } from "@/registry/bases/stylex/switch/switch";

export default function SwitchDemo() {
  return (
    <label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Switch defaultChecked />
      <span style={{ fontSize: 14 }}>Airplane Mode</span>
    </label>
  );
}
