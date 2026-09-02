import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

export default function TextareaInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="Type your message here."
        aria-invalid
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  );
}
