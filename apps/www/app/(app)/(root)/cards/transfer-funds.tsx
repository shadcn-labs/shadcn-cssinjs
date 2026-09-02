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
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/bases/stylex/ui/input-group";
import { Item, ItemContent } from "@/registry/bases/stylex/ui/item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  button1: {
    backgroundColor: "var(--muted)",
  },
  item1: {
    alignItems: "stretch",
    flexDirection: "column",
  },
  itemContent1: {
    gap: "0.75rem",
  },
  selectTrigger1: {
    width: "100%",
  },
});

const FROM_ACCOUNTS = [
  { label: "Main Checking (··8402) — $12,450.00", value: "checking" },
  { label: "Business (··7731) — $8,920.00", value: "business" },
];

const TO_ACCOUNTS = [
  { label: "High Yield Savings (··1192) — $42,100.00", value: "savings" },
  { label: "Investment (··3349) — $18,200.00", value: "investment" },
];

export const TransferFunds = () => (
  <Card>
    <CardHeader>
      <CardTitle>Transfer Funds</CardTitle>
      <CardDescription>
        Move money between your connected accounts.
      </CardDescription>
      <CardAction>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Dismiss transfer funds"
          style={styles.button1}
        >
          <Cancel01Icon strokeWidth={2} />
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="transfer-amount">Amount to Transfer</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="transfer-amount" defaultValue="1,200.00" />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="from-account">From Account</FieldLabel>
          <Select items={FROM_ACCOUNTS} defaultValue="checking">
            <SelectTrigger id="from-account" style={styles.selectTrigger1}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {FROM_ACCOUNTS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="to-account">To Account</FieldLabel>
          <Select items={TO_ACCOUNTS} defaultValue="savings">
            <SelectTrigger id="to-account" style={styles.selectTrigger1}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TO_ACCOUNTS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Item variant="muted" style={styles.item1}>
          <ItemContent style={styles.itemContent1}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Estimated arrival
              </span>
              <span className="text-sm font-medium">Today, Apr 14</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Transaction fee
              </span>
              <span className="text-sm font-medium tabular-nums">$0.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total amount</span>
              <span className="text-sm font-semibold tabular-nums">
                $1,200.00
              </span>
            </div>
          </ItemContent>
        </Item>
      </FieldGroup>
    </CardContent>
    <CardFooter>
      <Button style={styles.selectTrigger1}>Confirm Transfer</Button>
    </CardFooter>
  </Card>
);
