import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/stylex/field/field";

const ITEMS = [
  { defaultChecked: true, id: "hard-disks", label: "Hard disks" },
  { defaultChecked: true, id: "external-disks", label: "External disks" },
  { defaultChecked: false, id: "cds-dvds", label: "CDs, DVDs, and iPods" },
  { defaultChecked: false, id: "servers", label: "Connected servers" },
];

export default function CheckboxGroup() {
  return (
    <FieldSet>
      <FieldLegend variant="label">
        Show these items on the desktop:
      </FieldLegend>
      <FieldDescription>
        Select the items you want to show on the desktop.
      </FieldDescription>
      <FieldGroup className="gap-3">
        {ITEMS.map((item) => (
          <Field key={item.id} orientation="horizontal">
            <Checkbox
              defaultChecked={item.defaultChecked}
              id={item.id}
              name={item.id}
            />
            <FieldLabel className="font-normal" htmlFor={item.id}>
              {item.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
