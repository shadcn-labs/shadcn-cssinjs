import * as stylex from "@stylexjs/stylex";
import {
  CircleAlert as AlertCircleIcon,
  ArrowRight as ArrowRight01Icon,
  LockKeyhole as SquareLock02Icon,
} from "lucide-react";

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
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";

const styles = stylex.create({
  button1: {
    width: "100%",
  },
  cardFooter1: {
    flexDirection: "column",
    gap: "1rem",
  },
  itemDescription1: {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    overflow: "hidden",
  },
});

export const AccountAccess = () => (
  <Card>
    <CardHeader>
      <CardTitle>Account Access</CardTitle>
      <CardDescription>
        Update your credentials or re-authenticate.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email-address">Email Address</FieldLabel>
          <Input
            id="email-address"
            type="email"
            placeholder="artist@studio.inc"
          />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="current-password">Current Password</FieldLabel>
            <a
              href="#"
              className="text-xs font-medium tracking-wider text-muted-foreground uppercase hover:text-foreground"
            >
              Forgot?
            </a>
          </div>
          <Input
            id="current-password"
            type="password"
            placeholder="••••••••••••••••••••••••"
          />
        </Field>
      </FieldGroup>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Button style={styles.button1}>
        <SquareLock02Icon strokeWidth={2} />
        Update Security
      </Button>
      <Item variant="muted" render={<a href="#" />}>
        <ItemMedia variant="icon">
          <AlertCircleIcon className="text-destructive" strokeWidth={2} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Danger Zone</ItemTitle>
          <ItemDescription style={styles.itemDescription1}>
            Archive account and remove catalog
          </ItemDescription>
        </ItemContent>
        <ArrowRight01Icon className="size-4" strokeWidth={2} />
      </Item>
    </CardFooter>
  </Card>
);
