import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/radio-group/radio-group";

const OPTIONS = [
  {
    desc: "Standard spacing for most use cases.",
    id: "desc-r1",
    label: "Default",
    value: "default",
  },
  {
    desc: "More space between elements.",
    id: "desc-r2",
    label: "Comfortable",
    value: "comfortable",
  },
  {
    desc: "Minimal spacing for dense layouts.",
    id: "desc-r3",
    label: "Compact",
    value: "compact",
  },
];

export default function RadioGroupDescription() {
  return (
    <RadioGroup className="w-fit" defaultValue="comfortable">
      {OPTIONS.map((o) => (
        <Field key={o.value} orientation="horizontal">
          <RadioGroupItem id={o.id} value={o.value} />
          <FieldContent>
            <FieldLabel htmlFor={o.id}>{o.label}</FieldLabel>
            <FieldDescription>{o.desc}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </RadioGroup>
  );
}
