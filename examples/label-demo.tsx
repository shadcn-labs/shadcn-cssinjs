import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import { Label } from "@/registry/bases/stylex/label/label";

export default function LabelDemo() {
  return (
    <Label htmlFor="terms">
      <Checkbox id="terms" />
      Accept terms and conditions
    </Label>
  );
}
