import { EyeOffIcon } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/stylex/ui/input-group";

export default function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          placeholder="Enter password"
          type="password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon className="size-4" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  );
}
