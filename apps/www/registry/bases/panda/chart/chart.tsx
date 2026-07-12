"use client";

import { createContext, useContext, useId } from "react";
import * as RechartsPrimitive from "recharts";
import { css, cx } from "styled-system/css";

const container = css({
  aspectRatio: "16 / 9",
  display: "flex",
  fontSize: "0.75rem",
  justifyContent: "center",
  width: "100%",
});

const tooltip = css({
  backgroundColor: "background",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5",
  minWidth: "32",
  paddingBlock: "2",
  paddingInline: "2.5",
});

const tooltipLabel = css({
  color: "foreground",
  fontWeight: "medium",
});

const item = css({
  alignItems: "center",
  display: "flex",
  gap: "2",
  justifyContent: "space-between",
  width: "100%",
});

const itemLabel = css({
  alignItems: "center",
  color: "muted.foreground",
  display: "flex",
  gap: "2",
});

const itemValue = css({
  color: "foreground",
  fontVariantNumeric: "tabular-nums",
  fontWeight: "medium",
});

const indicator = css({
  borderRadius: "2px",
  flexShrink: "0",
  height: "2.5",
  width: "2.5",
});

const legend = css({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "4",
  justifyContent: "center",
  paddingTop: "3",
});

const legendItem = css({
  alignItems: "center",
  display: "flex",
  gap: "1.5",
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
}: Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: React.CSSProperties;
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
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cx(container, className)}
        data-chart={chartId}
        data-slot="chart"
        style={{ ...style, ...cssVars } as React.CSSProperties}
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
  return (
    <div className={tooltip}>
      {label !== undefined && <div className={tooltipLabel}>{label}</div>}
      {payload.map((entry) => {
        const key = String(entry.dataKey ?? entry.name);
        const itemConfig = config[key];
        return (
          <div className={item} key={key}>
            <span className={itemLabel}>
              <span
                className={indicator}
                style={{ backgroundColor: entry.color }}
              />
              {itemConfig?.label ?? entry.name}
            </span>
            <span className={itemValue}>{entry.value}</span>
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
    <div className={legend}>
      {payload.map((entry) => {
        const key = String(entry.dataKey ?? entry.value);
        return (
          <div className={legendItem} key={key}>
            <span
              className={indicator}
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
