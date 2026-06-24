"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/panda/chart/chart";
import type { ChartConfig } from "@/registry/bases/panda/chart/chart";

const chartData = [
  { desktop: 186, mobile: 80, month: "January" },
  { desktop: 305, mobile: 200, month: "February" },
  { desktop: 237, mobile: 120, month: "March" },
  { desktop: 73, mobile: 190, month: "April" },
  { desktop: 209, mobile: 130, month: "May" },
  { desktop: 214, mobile: 140, month: "June" },
];

const chartConfig = {
  desktop: { color: "var(--primary)", label: "Desktop" },
  mobile: {
    color: "color-mix(in oklab, var(--primary) 40%, transparent)",
    label: "Mobile",
  },
} satisfies ChartConfig;

export default function ChartDemo() {
  return (
    <ChartContainer
      config={chartConfig}
      style={{
        maxHeight: "260px",
        maxWidth: "520px",
      }}
    >
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value: string) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
