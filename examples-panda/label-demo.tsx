"use client";

import { Checkbox } from "@/registry/bases/panda/checkbox/checkbox";
import { Label } from "@/registry/bases/panda/label/label";

export default function LabelDemo() {
  return (
    <Label htmlFor="terms">
      <Checkbox id="terms" />
      Accept terms and conditions
    </Label>
  );
}
