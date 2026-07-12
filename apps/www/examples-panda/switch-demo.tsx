"use client";

import { Switch } from "@/registry/bases/panda/switch/switch";

export default function SwitchDemo() {
  return (
    <label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Switch defaultChecked />
      <span style={{ fontSize: 14 }}>Airplane Mode</span>
    </label>
  );
}
