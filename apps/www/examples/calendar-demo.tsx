"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/stylex/calendar/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      onSelect={setDate}
      selected={date}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "0.5rem",
      }}
    />
  );
}
