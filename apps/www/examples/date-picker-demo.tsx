"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import { Calendar } from "@/registry/bases/stylex/calendar/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/popover/popover";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            style={{ justifyContent: "flex-start", width: 240 }}
            variant="outline"
          >
            <CalendarIcon size={16} />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        }
      />
      <PopoverContent style={{ padding: 0, width: "auto" }}>
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </PopoverContent>
    </Popover>
  );
}
