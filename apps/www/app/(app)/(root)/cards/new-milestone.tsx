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
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";

const styles = stylex.create({
  button1: {
    width: "100%",
  },
  cardFooter1: {
    flexDirection: "column",
    gap: "0.5rem",
  },
});

export const NewMilestone = () => (
  <Card>
    <CardHeader>
      <CardTitle>Set a new milestone</CardTitle>
      <CardDescription>
        Define your financial target and we&apos;ll help you pace your savings.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="goal-name">Goal Name</FieldLabel>
          <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="target-amount">Target Amount</FieldLabel>
            <Input id="target-amount" defaultValue="$15,000" />
          </Field>
          <Field>
            <FieldLabel htmlFor="target-date">Target Date</FieldLabel>
            <Input id="target-date" defaultValue="Dec 2025" />
          </Field>
        </div>
      </FieldGroup>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Button style={styles.button1}>Create Goal</Button>
      <Button variant="outline" style={styles.button1}>
        Cancel
      </Button>
    </CardFooter>
  </Card>
);
