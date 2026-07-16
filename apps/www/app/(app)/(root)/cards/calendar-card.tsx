"use client";

import { useState } from "react";

import { Calendar } from "@/registry/bases/stylex/ui/calendar";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";

export const CalendarCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 12));

  return (
    <Card data-slot="card">
      <CardContent className="flex justify-center p-3">
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </CardContent>
    </Card>
  );
};
