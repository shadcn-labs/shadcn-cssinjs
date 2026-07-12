"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
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

const translations: Translations = {
  ar: { dir: "rtl", values: { desktop: "سطح المكتب", mobile: "الجوال" } },
  en: { dir: "ltr", values: { desktop: "Desktop", mobile: "Mobile" } },
  he: { dir: "rtl", values: { desktop: "מחשב שולחני", mobile: "נייד" } },
};

export default function ChartRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  const chartConfig = {
    desktop: { color: "var(--primary)", label: t.desktop },
    mobile: {
      color: "color-mix(in oklab, var(--primary) 40%, transparent)",
      label: t.mobile,
    },
  } satisfies ChartConfig;

  return (
    <div dir={dir} style={{ maxWidth: 520, width: "100%" }}>
      <ChartContainer config={chartConfig} style={{ maxHeight: 260 }}>
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
    </div>
  );
}
