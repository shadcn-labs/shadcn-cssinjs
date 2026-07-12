"use client";

import { Checkbox } from "@/registry/bases/panda/checkbox/checkbox";

export default function CheckboxDemo() {
  return (
    <label style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Checkbox defaultChecked />
      <span style={{ fontSize: 14 }}>Accept terms and conditions</span>
    </label>
  );
}
