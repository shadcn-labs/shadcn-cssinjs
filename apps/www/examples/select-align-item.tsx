"use client";

import { useState } from "react";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/select/select";
import { Switch } from "@/registry/bases/stylex/switch/switch";

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

export default function SelectAlignItem() {
  const [aligned, setAligned] = useState(true);

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
          <FieldDescription>
            Toggle to align the item with the trigger.
          </FieldDescription>
        </FieldContent>
        <Switch
          checked={aligned}
          id="align-item"
          onCheckedChange={setAligned}
        />
      </Field>
      <Field>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={aligned}>
            <SelectGroup>
              {fruits.map((fruit) => (
                <SelectItem key={fruit} value={fruit.toLowerCase()}>
                  {fruit}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}
