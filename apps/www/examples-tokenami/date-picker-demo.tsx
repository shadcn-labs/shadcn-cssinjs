"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/bases/tokenami/button/button";
import { Calendar } from "@/registry/bases/tokenami/calendar/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/tokenami/popover/popover";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            style={{ "--justify-content": "flex-start", "--width": 60 }}
            variant="outline"
          >
            <CalendarIcon size={16} />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        }
      />
      <PopoverContent style={{ "--padding": 0, "--width": "var(---, auto)" }}>
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </PopoverContent>
    </Popover>
  );
}
