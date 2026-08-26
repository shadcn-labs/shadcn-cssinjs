"use client";

import { Checkbox } from "@/registry/bases/tokenami/checkbox/checkbox";
import { Label } from "@/registry/bases/tokenami/label/label";

export default function LabelDemo() {
  return (
    <Label htmlFor="terms">
      <Checkbox id="terms" />
      Accept terms and conditions
    </Label>
  );
}
