import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/stylex/field/field";

export default function FieldGroupExample() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>Responses</FieldLabel>
        <FieldDescription>
          Get notified when ChatGPT responds to requests that take time, like
          research or image generation.
        </FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox defaultChecked disabled id="push" />
            <FieldLabel className="font-normal" htmlFor="push">
              Push notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Tasks</FieldLabel>
        <FieldDescription>
          Get notified when tasks you&apos;ve created have updates.{" "}
          <a href="#tasks">Manage tasks</a>
        </FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="push-tasks" />
            <FieldLabel className="font-normal" htmlFor="push-tasks">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="email-tasks" />
            <FieldLabel className="font-normal" htmlFor="email-tasks">
              Email notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}
