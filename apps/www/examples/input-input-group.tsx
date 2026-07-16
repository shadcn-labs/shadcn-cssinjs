import { InfoIcon } from "lucide-react";

import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/bases/stylex/ui/input-group";

export default function InputInputGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
