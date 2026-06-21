"use client";

import { createContext, useContext, useId } from "react";
import * as RechartsPrimitive from "recharts";

import { cx, x } from "@/lib/utils";

import { styles } from "./chart.stylex";

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
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) => {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replaceAll(":", "")}`;
  const cssVars = Object.fromEntries(
    Object.entries(config)
      .filter(([, item]) => item.color)
      .map(([key, item]) => [`--color-${key}`, item.color])
  );
  const container = x(styles.container);
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cx(container.className, className)}
        data-chart={chartId}
        data-slot="chart"
        style={{ ...container.style, ...cssVars, ...style }}
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
  const tooltip = x(styles.tooltip);
  return (
    <div className={tooltip.className} style={tooltip.style}>
      {label !== undefined && (
        <div className={x(styles.tooltipLabel).className}>{label}</div>
      )}
      {payload.map((item) => {
        const key = String(item.dataKey ?? item.name);
        const itemConfig = config[key];
        return (
          <div className={x(styles.item).className} key={key}>
            <span className={x(styles.itemLabel).className}>
              <span
                className={x(styles.indicator).className}
                style={{ backgroundColor: item.color }}
              />
              {itemConfig?.label ?? item.name}
            </span>
            <span className={x(styles.itemValue).className}>{item.value}</span>
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
  return (
    <div className={x(styles.legend).className}>
      {payload.map((item) => {
        const key = String(item.dataKey ?? item.value);
        return (
          <div className={x(styles.legendItem).className} key={key}>
            <span
              className={x(styles.indicator).className}
              style={{ backgroundColor: item.color }}
            />
            {config[key]?.label ?? item.value}
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
