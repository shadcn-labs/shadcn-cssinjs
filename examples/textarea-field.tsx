import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";
import { Textarea } from "@/registry/bases/stylex/textarea/textarea";

export default function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  );
}
