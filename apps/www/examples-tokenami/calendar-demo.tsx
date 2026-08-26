"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/tokenami/calendar/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      onSelect={setDate}
      selected={date}
      style={
        {
          "--border-color": "var(--color_border)",
          "--border-radius": "var(---, 0.5rem)",
          "--border-style": "solid",
          "--border-width": "var(---, 1px)",
        } as React.CSSProperties
      }
    />
  );
}
