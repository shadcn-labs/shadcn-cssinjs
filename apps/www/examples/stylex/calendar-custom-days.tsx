"use client";

import { addDays } from "date-fns";
import * as React from "react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/registry/bases/stylex/ui/calendar";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";

export default function CalendarCustomDays() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  });

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) =>
              date.toLocaleString("default", { month: "long" }),
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend =
                day.date.getDay() === 0 || day.date.getDay() === 6;

              return (
                <button
                  type="button"
                  className={cn(
                    "relative flex size-(--cell-size) flex-col items-center justify-center rounded-md text-sm transition-colors",
                    modifiers.selected && "bg-primary text-primary-foreground",
                    modifiers.outside && "opacity-40"
                  )}
                  {...props}
                >
                  {children}
                  {!modifiers.outside && (
                    <span
                      className={cn(
                        "text-[0.55rem] leading-none",
                        modifiers.selected
                          ? "opacity-80"
                          : "text-muted-foreground"
                      )}
                    >
                      {isWeekend ? "$120" : "$100"}
                    </span>
                  )}
                </button>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
