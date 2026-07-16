"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/stylex/ui/calendar";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";

export default function CalendarWeekNumbers() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), 0, 12)
  );

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  );
}
