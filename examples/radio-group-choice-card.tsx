import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/bases/stylex/field/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/radio-group/radio-group";

const PLANS = [
  {
    desc: "For individuals and small teams.",
    id: "plus-plan",
    title: "Plus",
    value: "plus",
  },
  {
    desc: "For growing businesses.",
    id: "pro-plan",
    title: "Pro",
    value: "pro",
  },
  {
    desc: "For large teams and enterprises.",
    id: "enterprise-plan",
    title: "Enterprise",
    value: "enterprise",
  },
];

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup className="max-w-sm" defaultValue="plus">
      {PLANS.map((plan) => (
        <FieldLabel htmlFor={plan.id} key={plan.value}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{plan.title}</FieldTitle>
              <FieldDescription>{plan.desc}</FieldDescription>
            </FieldContent>
            <RadioGroupItem id={plan.id} value={plan.value} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
