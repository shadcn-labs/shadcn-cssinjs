"use client";

import { TrendingUpIcon } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/stylex/chart/chart";
import type { ChartConfig } from "@/registry/bases/stylex/chart/chart";

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

export const AnalyticsCard = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Visitors</CardTitle>
      <CardDescription>Last 6 months</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer className="max-h-[180px] w-full" config={chartConfig}>
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
      <div className="text-muted-foreground mt-3 flex items-center gap-2 text-sm">
        <TrendingUpIcon className="size-4" />
        Trending up by 5.2% this month
      </div>
    </CardContent>
  </Card>
);
