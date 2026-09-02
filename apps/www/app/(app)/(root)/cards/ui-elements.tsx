"use client";

import * as stylex from "@stylexjs/stylex";
import {
  ArrowRight as ArrowRight02Icon,
  ArrowUp as ArrowUp01Icon,
  Search as Search01Icon,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/stylex/ui/alert-dialog";
import { Badge } from "@/registry/bases/stylex/ui/badge";
import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import { Checkbox } from "@/registry/bases/stylex/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";
import { Field, FieldGroup } from "@/registry/bases/stylex/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/bases/stylex/ui/input-group";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";
import { Switch } from "@/registry/bases/stylex/ui/switch";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

const styles = stylex.create({
  badge1: {
    display: {
      "@media (min-width: 2000px)": "flex",
      default: "none",
    },
  },
  buttonGroup1: {
    marginLeft: "auto",
  },
  card1: {
    width: "100%",
  },
  cardContent1: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  dropdownMenuContent1: {
    width: "10rem",
  },
  field1: {
    flex: "1 1 0%",
  },
  radioGroup1: {
    display: "flex",
    gap: "0.75rem",
    marginLeft: "auto",
    width: "fit-content",
  },
  switch1: {
    display: {
      "@media (min-width: 2000px)": "none",
      default: "flex",
    },
  },
  textarea1: {
    resize: "none",
  },
});

export const UIElements = () => (
  <Card style={styles.card1}>
    <CardContent style={styles.cardContent1}>
      <div className="flex gap-2">
        <Button>
          Button <ArrowRight02Icon strokeWidth={2} data-icon="inline-end" />
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <FieldGroup>
        <Field>
          <InputGroup>
            <InputGroupInput placeholder="Name" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>
                <Search01Icon strokeWidth={2} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field style={styles.field1}>
          <Textarea placeholder="Message" style={styles.textarea1} />
        </Field>
      </FieldGroup>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline" style={styles.badge1}>
            Outline
          </Badge>
        </div>
        <RadioGroup
          defaultValue="apple"
          aria-label="Fruit preference"
          style={styles.radioGroup1}
        >
          <RadioGroupItem value="apple" aria-label="Apple" />
          <RadioGroupItem value="banana" aria-label="Banana" />
        </RadioGroup>
        <div className="flex gap-3">
          <Checkbox defaultChecked aria-label="Enable email alerts" />
          <Checkbox aria-label="Enable push alerts" style={styles.badge1} />
        </div>
        <Switch
          defaultChecked
          aria-label="Enable compact notifications"
          style={styles.switch1}
        />
      </div>
      <div className="flex items-center gap-4">
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" />}>
            <span className="hidden md:flex style-sera:md:hidden">
              Alert Dialog
            </span>
            <span className="flex md:hidden style-sera:md:flex">Dialog</span>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to allow the USB accessory to connect to this device
                and your data?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
              <AlertDialogAction>Allow</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <ButtonGroup style={styles.buttonGroup1}>
          <Button variant="outline">
            <span className="style-sera:hidden">Button Group</span>
            <span className="hidden style-sera:block">Group</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open quick actions"
                />
              }
            >
              <ArrowUp01Icon strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="top"
              style={styles.dropdownMenuContent1}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                <DropdownMenuItem>Block User</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  Delete Conversation
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
        <Switch
          defaultChecked
          aria-label="Enable advanced setting"
          style={styles.badge1}
        />
      </div>
    </CardContent>
  </Card>
);
