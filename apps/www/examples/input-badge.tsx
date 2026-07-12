import { Badge } from "@/registry/bases/stylex/badge/badge";
import { Field, FieldLabel } from "@/registry/bases/stylex/field/field";
import { Input } from "@/registry/bases/stylex/input/input";

export default function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  );
}
