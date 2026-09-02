"use client";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { Calendar } from "@/registry/bases/stylex/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/ui/popover";

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant={"outline"}
            data-empty={!date}
            className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          />
        }
      >
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        <ChevronDownIcon data-icon="inline-end" />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  );
}
