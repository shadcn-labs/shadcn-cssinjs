"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/stylex/ui/chart";
import type { ChartConfig } from "@/registry/bases/stylex/ui/chart";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      april: "أبريل",
      desktop: "سطح المكتب",
      february: "فبراير",
      january: "يناير",
      june: "يونيو",
      march: "مارس",
      may: "مايو",
      mobile: "الجوال",
    },
  },
  en: {
    dir: "ltr",
    values: {
      april: "April",
      desktop: "Desktop",
      february: "February",
      january: "January",
      june: "June",
      march: "March",
      may: "May",
      mobile: "Mobile",
    },
  },
  he: {
    dir: "rtl",
    values: {
      april: "אפריל",
      desktop: "מחשב",
      february: "פברואר",
      january: "ינואר",
      june: "יוני",
      march: "מרץ",
      may: "מאי",
      mobile: "נייד",
    },
  },
};

const chartData = [
  { desktop: 186, mobile: 80, month: "january" },
  { desktop: 305, mobile: 200, month: "february" },
  { desktop: 237, mobile: 120, month: "march" },
  { desktop: 73, mobile: 190, month: "april" },
  { desktop: 209, mobile: 130, month: "may" },
  { desktop: 214, mobile: 140, month: "june" },
];

export default function ChartRtl() {
  const { t, dir } = useTranslation(translations, "ar");

  const chartConfig = {
    desktop: {
      color: "var(--chart-2)",
      label: t.desktop,
    },
    mobile: {
      color: "var(--chart-1)",
      label: t.mobile,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid
          vertical={false}
          orientation={dir === "rtl" ? "right" : "left"}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            (t[value as keyof typeof t] as string).slice(0, 3)
          }
          reversed={dir === "rtl"}
        />
        <ChartTooltip content={<ChartTooltipContent />} labelClassName="w-32" />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
