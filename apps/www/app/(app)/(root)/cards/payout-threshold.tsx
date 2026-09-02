import * as stylex from "@stylexjs/stylex";
import { X as Cancel01Icon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Progress } from "@/registry/bases/stylex/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

const styles = stylex.create({
  button1: {
    backgroundColor: "var(--muted)",
  },
  selectTrigger1: {
    width: "100%",
  },
  textarea1: {
    minHeight: "100px",
  },
});

const CURRENCIES = [
  { label: "USD — United States Dollar", value: "usd" },
  { label: "EUR — Euro", value: "eur" },
  { label: "GBP — British Pound", value: "gbp" },
  { label: "JPY — Japanese Yen", value: "jpy" },
];

export const PayoutThreshold = () => (
  <Card>
    <CardHeader>
      <CardTitle>Payout Threshold</CardTitle>
      <CardDescription>
        Set the minimum balance required before a payout is triggered.
      </CardDescription>
      <CardAction>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Dismiss payout threshold"
          style={styles.button1}
        >
          <Cancel01Icon strokeWidth={2} />
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="preferred-currency">
            Preferred Currency
          </FieldLabel>
          <Select items={CURRENCIES} defaultValue="usd">
            <SelectTrigger
              id="preferred-currency"
              style={styles.selectTrigger1}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CURRENCIES.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <div className="flex items-baseline justify-between">
            <FieldLabel id="min-payout-label">Minimum Payout Amount</FieldLabel>
            <span className="text-2xl font-semibold tabular-nums">
              $2500.00
            </span>
          </div>
          <Progress
            value={25}
            aria-labelledby="min-payout-label"
            aria-valuetext="$2,500 of $10,000"
          />
          <div className="flex items-center justify-between">
            <FieldDescription>$50 (MIN)</FieldDescription>
            <FieldDescription>$10,000 (MAX)</FieldDescription>
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="payout-notes">Notes</FieldLabel>
          <Textarea
            id="payout-notes"
            placeholder="Add any notes for this payout configuration..."
            style={styles.textarea1}
          />
        </Field>
      </FieldGroup>
    </CardContent>
    <CardFooter>
      <Button style={styles.selectTrigger1}>Save Threshold</Button>
    </CardFooter>
  </Card>
);
