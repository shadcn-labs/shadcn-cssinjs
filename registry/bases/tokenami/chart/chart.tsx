"use client";

import type { TokenamiStyle } from "@tokenami/css";
import { createContext, useContext, useId } from "react";
import * as RechartsPrimitive from "recharts";

import { css } from "@/lib/tokenami";

const container = css.compose({
  "--aspect-ratio": "var(---, 16 / 9)",
  "--display": "flex",
  "--font-size": "0.75rem",
  "--justify-content": "center",
  "--width": "var(---, 100%)",
});

const tooltip = css.compose({
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 1.5,
  "--min-width": 32,
  "--padding-block": 2,
  "--padding-inline": 2.5,
});

const tooltipLabel = css.compose({
  "--color": "var(--color_foreground)",
  "--font-weight": 500,
});

const item = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 2,
  "--justify-content": "space-between",
  "--width": "var(---, 100%)",
});

const itemLabel = css.compose({
  "--align-items": "center",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
  "--gap": 2,
});

const itemValue = css.compose({
  "--color": "var(--color_foreground)",
  "--font-variant-numeric": "tabular-nums",
  "--font-weight": 500,
});

const indicator = css.compose({
  "--border-radius": "var(---, 2px)",
  "--flex-shrink": "var(---, 0)",
  "--height": 2.5,
  "--width": 2.5,
});

const legend = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-wrap": "wrap",
  "--gap": 4,
  "--justify-content": "center",
  "--padding-top": 3,
});

const legendItem = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 1.5,
});

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  }
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
};

const ChartContainer = ({
  id,
  className,
  children,
  config,
  style,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"div">, "style">> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) => {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replaceAll(":", "")}`;
  const cssVars = Object.fromEntries(
    Object.entries(config)
      .filter(([, cfg]) => cfg.color)
      .map(([key, cfg]) => [`--color-${key}`, cfg.color])
  );
  const [cn, sx] = container();
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(className)}
        data-chart={chartId}
        data-slot="chart"
        style={{ ...sx(style), ...cssVars } as React.CSSProperties}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

interface TooltipPayloadItem {
  name?: string | number;
  value?: string | number;
  dataKey?: string | number;
  color?: string;
}

const ChartTooltipContent = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}) => {
  const { config } = useChart();
  if (!(active && payload?.length)) {
    return null;
  }
  const [tcn, tsx] = tooltip();
  const [lcn] = tooltipLabel();
  const [icn] = item();
  const [ilcn] = itemLabel();
  const [indcn] = indicator();
  const [ivcn] = itemValue();
  return (
    <div className={tcn()} style={tsx()}>
      {label !== undefined && <div className={lcn()}>{label}</div>}
      {payload.map((entry) => {
        const key = String(entry.dataKey ?? entry.name);
        const itemConfig = config[key];
        return (
          <div className={icn()} key={key}>
            <span className={ilcn()}>
              <span
                className={indcn()}
                style={{ backgroundColor: entry.color }}
              />
              {itemConfig?.label ?? entry.name}
            </span>
            <span className={ivcn()}>{entry.value}</span>
          </div>
        );
      })}
    </div>
  );
};

const ChartLegend = RechartsPrimitive.Legend;

interface LegendPayloadItem {
  value?: string;
  dataKey?: string | number;
  color?: string;
}

const ChartLegendContent = ({ payload }: { payload?: LegendPayloadItem[] }) => {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  const [lcn] = legend();
  const [licn] = legendItem();
  const [indcn] = indicator();
  return (
    <div className={lcn()}>
      {payload.map((entry) => {
        const key = String(entry.dataKey ?? entry.value);
        return (
          <div className={licn()} key={key}>
            <span
              className={indcn()}
              style={{ backgroundColor: entry.color }}
            />
            {config[key]?.label ?? entry.value}
          </div>
        );
      })}
    </div>
  );
};

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
};
