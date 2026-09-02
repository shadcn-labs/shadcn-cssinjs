import { Button } from "@/registry/bases/stylex/ui/button";
import { Field } from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";

export default function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}
