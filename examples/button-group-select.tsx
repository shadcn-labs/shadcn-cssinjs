"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { ButtonGroup } from "@/registry/bases/stylex/button-group/button-group";
import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/registry/bases/stylex/select/select";

const CURRENCIES = [
  { label: "US Dollar", value: "$" },
  { label: "Euro", value: "€" },
  { label: "British Pound", value: "£" },
];

export default function ButtonGroupSelect() {
  const [currency, setCurrency] = useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          onValueChange={(value) => setCurrency(value as string)}
          value={currency}
        >
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CURRENCIES.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.value}{" "}
                  <span className="text-muted-foreground">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon className="size-4" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
