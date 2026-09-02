import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

export default function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  );
}
