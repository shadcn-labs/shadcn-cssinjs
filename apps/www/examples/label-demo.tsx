import { Checkbox } from "@/registry/bases/stylex/ui/checkbox";
import { Label } from "@/registry/bases/stylex/ui/label";

export default function LabelDemo() {
  return (
    <Label htmlFor="terms">
      <Checkbox id="terms" />
      Accept terms and conditions
    </Label>
  );
}
