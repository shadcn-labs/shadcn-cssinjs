"use client";

import { BoldIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/panda/toggle/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon size={16} />
    </Toggle>
  );
}
