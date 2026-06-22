"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/stylex/calendar/calendar";
import { Card, CardContent } from "@/registry/bases/stylex/card/card";

export default function CalendarBookedDates() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), 0, 6)
  );
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 0, 12 + i)
  );

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={bookedDates}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersClassNames={{
            booked: "[&>button]:line-through opacity-100",
          }}
        />
      </CardContent>
    </Card>
  );
}
