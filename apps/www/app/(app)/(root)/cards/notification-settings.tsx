import * as stylex from "@stylexjs/stylex";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import { Checkbox } from "@/registry/bases/stylex/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";

const styles = stylex.create({
  button1: {
    width: "100%",
  },
});

const NOTIFICATIONS = [
  {
    defaultChecked: true,
    description: "Deposits, withdrawals, and transfers.",
    id: "transactions",
    label: "Transaction alerts",
  },
  {
    defaultChecked: true,
    description: "Login attempts and account changes.",
    id: "security",
    label: "Security alerts",
  },
  {
    defaultChecked: false,
    description: "Updates at 25%, 50%, 75%, and 100%.",
    id: "goals",
    label: "Goal milestones",
  },
  {
    defaultChecked: false,
    description: "Daily portfolio summary and price alerts.",
    id: "market",
    label: "Market updates",
  },
];

export const NotificationSettings = () => (
  <Card>
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>
        Choose which email and push alerts you want to receive.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        {NOTIFICATIONS.map((n) => (
          <Field key={n.id} orientation="horizontal">
            <Checkbox id={`notify-${n.id}`} defaultChecked={n.defaultChecked} />
            <FieldContent>
              <FieldLabel htmlFor={`notify-${n.id}`}>{n.label}</FieldLabel>
              <FieldDescription>{n.description}</FieldDescription>
            </FieldContent>
          </Field>
        ))}
      </FieldGroup>
    </CardContent>
    <CardFooter>
      <Button style={styles.button1}>Save Preferences</Button>
    </CardFooter>
  </Card>
);
