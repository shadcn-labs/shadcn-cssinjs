"use client";

import { Calendar } from "@/registry/bases/stylex/calendar/calendar";

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  );
}
