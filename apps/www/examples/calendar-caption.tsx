"use client";

import { Calendar } from "@/registry/bases/stylex/ui/calendar";

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  );
}
