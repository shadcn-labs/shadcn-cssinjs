"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/panda/calendar/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      onSelect={setDate}
      selected={date}
      style={
        {
          borderColor: "var(--border)",
          borderRadius: "0.5rem",
          borderStyle: "solid",
          borderWidth: "1px",
        } as React.CSSProperties
      }
    />
  );
}
