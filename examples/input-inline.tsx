import { Button } from "@/registry/bases/stylex/button/button";
import { Field } from "@/registry/bases/stylex/field/field";
import { Input } from "@/registry/bases/stylex/input/input";

export default function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}
