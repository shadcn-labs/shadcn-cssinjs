"use client";

import * as stylex from "@stylexjs/stylex";
import {
  CheckIcon,
  ClipboardIcon,
  MaximizeIcon,
  MonitorIcon,
  RotateCcwIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { styles } from "@/components/v4-gallery/v4-gallery.stylex";
import type { ColorFormat, ColorPalette } from "@/lib/colors";

const BLOCKS = [
  {
    category: "dashboard",
    description: "A dashboard with sidebar, charts and data table",
    install: "card chart table",
    name: "dashboard-01",
    preview: "dashboard",
  },
  {
    category: "sidebar",
    description: "A collapsible application sidebar",
    install: "sidebar",
    name: "sidebar-07",
    preview: "sidebar",
  },
  {
    category: "sidebar",
    description: "A sidebar with navigation and nested menus",
    install: "sidebar navigation-menu",
    name: "sidebar-03",
    preview: "components",
  },
  {
    category: "login",
    description: "A centered login form with supporting content",
    install: "card input button",
    name: "login-03",
    preview: "authentication",
  },
  {
    category: "authentication",
    description: "An authentication form with account options",
    install: "card input button checkbox",
    name: "login-04",
    preview: "authentication",
  },
] as const;

const CHART_COLORS = [
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#c4b5fd",
  "#2563eb",
  "#0d9488",
  "#16a34a",
  "#ca8a04",
  "#ea580c",
  "#e11d48",
];

const CHART_DATA = [
  { desktop: 186, mobile: 80, month: "Jan" },
  { desktop: 305, mobile: 200, month: "Feb" },
  { desktop: 237, mobile: 120, month: "Mar" },
  { desktop: 273, mobile: 190, month: "Apr" },
  { desktop: 209, mobile: 130, month: "May" },
  { desktop: 314, mobile: 220, month: "Jun" },
];

const EXAMPLE_PREVIEWS: Record<string, string> = {
  authentication: "authentication",
  dashboard: "example-dashboard",
  playground: "playground",
  rtl: "rtl",
  tasks: "tasks",
};

const FORMAT_LABELS: Record<ColorFormat, string> = {
  className: "Class",
  hex: "HEX",
  hsl: "HSL",
  oklch: "OKLCH",
  rgb: "RGB",
  var: "CSS Variable",
};

function CopyButton({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      {...stylex.props(styles.action, styles.actionGhost)}
      type="button"
      onClick={copy}
    >
      {copied ? (
        <CheckIcon height={15} width={15} />
      ) : (
        <ClipboardIcon height={15} width={15} />
      )}
      {copied ? "Copied" : label}
    </button>
  );
}

type BlockViewport = "desktop" | "mobile" | "tablet";

const BLOCK_VIEWPORT_WIDTHS: Record<BlockViewport, string> = {
  desktop: "100%",
  mobile: "390px",
  tablet: "768px",
};

function BlockDisplay({ block }: { block: (typeof BLOCKS)[number] }) {
  const [tab, setTab] = React.useState<"code" | "preview">("preview");
  const [viewport, setViewport] = React.useState<BlockViewport>("desktop");
  const previewUrl = `/preview/stylex/${block.preview}`;
  const installCommand = `npx shadcn-cssinjs add ${block.name}`;

  return (
    <article {...stylex.props(styles.block)}>
      <header {...stylex.props(styles.blockHeader)}>
        <div {...stylex.props(styles.blockHeaderLead)}>
          <div {...stylex.props(styles.blockTabs)}>
            {(["preview", "code"] as const).map((value) => (
              <button
                {...stylex.props(styles.blockTab)}
                data-active={tab === value}
                key={value}
                type="button"
                onClick={() => setTab(value)}
              >
                {value === "preview" ? "Preview" : "Code"}
              </button>
            ))}
          </div>
          <span {...stylex.props(styles.subtitle)}>{block.description}</span>
        </div>
        <div {...stylex.props(styles.blockActions)}>
          <div {...stylex.props(styles.viewportControls)}>
            {(
              [
                ["desktop", MonitorIcon],
                ["tablet", TabletIcon],
                ["mobile", SmartphoneIcon],
              ] as const
            ).map(([value, Icon]) => (
              <button
                {...stylex.props(styles.viewportButton)}
                aria-label={`${value} preview`}
                data-active={viewport === value}
                key={value}
                title={`${value} preview`}
                type="button"
                onClick={() => setViewport(value)}
              >
                <Icon height={15} width={15} />
              </button>
            ))}
            <a
              {...stylex.props(styles.viewportButton)}
              aria-label="Open full-screen preview"
              href={previewUrl}
              rel="noreferrer"
              target="_blank"
              title="Open full-screen preview"
            >
              <MaximizeIcon height={15} width={15} />
            </a>
            <button
              {...stylex.props(styles.viewportButton)}
              aria-label="Reset preview"
              title="Reset preview"
              type="button"
              onClick={() => setViewport("desktop")}
            >
              <RotateCcwIcon height={15} width={15} />
            </button>
          </div>
          <CopyButton label={installCommand} value={installCommand} />
          <a
            {...stylex.props(styles.action)}
            href={previewUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open in v0
          </a>
        </div>
      </header>
      <div {...stylex.props(styles.blockBody)}>
        {tab === "preview" ? (
          <iframe
            {...stylex.props(
              styles.blockFrame,
              styles.blockFrameWidth(BLOCK_VIEWPORT_WIDTHS[viewport])
            )}
            loading="lazy"
            src={previewUrl}
            title={`${block.name} preview`}
          />
        ) : (
          <pre {...stylex.props(styles.blockCode)}>
            <code>{`import { Dashboard } from "@/components/${block.name}"

export default function Page() {
  return <Dashboard />
}`}</code>
          </pre>
        )}
      </div>
    </article>
  );
}

export function BlocksGallery({ category }: { category?: string }) {
  const blocks = category
    ? BLOCKS.filter((block) => block.category === category)
    : BLOCKS;

  return (
    <div {...stylex.props(styles.blocksPage)}>
      {blocks.length === 0 ? (
        <div {...stylex.props(styles.empty)}>
          No blocks in this category yet.
        </div>
      ) : (
        blocks.map((block) => <BlockDisplay block={block} key={block.name} />)
      )}
    </div>
  );
}

function colorValue(
  color: ColorPalette["colors"][number],
  format: ColorFormat
) {
  if (format === "className") {
    return `bg-${color.className}`;
  }
  if (format === "var") {
    return color.var;
  }
  return color[format];
}

export function ColorsGallery({ palettes }: { palettes: ColorPalette[] }) {
  const [format, setFormat] = React.useState<ColorFormat>("hsl");

  return (
    <div {...stylex.props(styles.palettes)}>
      {palettes.map((palette) => (
        <section key={palette.name} {...stylex.props(styles.palette)}>
          <div {...stylex.props(styles.paletteHeader)}>
            <h2 {...stylex.props(styles.paletteTitle)}>{palette.name}</h2>
            <select
              {...stylex.props(styles.formatSelect)}
              aria-label={`${palette.name} color format`}
              value={format}
              onChange={(event) => setFormat(event.target.value as ColorFormat)}
            >
              {Object.entries(FORMAT_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  Format: {label.toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          <div {...stylex.props(styles.colorGrid)}>
            {palette.colors.map((color) => {
              const value = colorValue(color, format);
              return (
                <button
                  key={color.id}
                  {...stylex.props(styles.colorButton)}
                  type="button"
                  onClick={() => navigator.clipboard.writeText(value)}
                >
                  <span
                    {...stylex.props(
                      styles.colorTile,
                      styles.colorSwatch(color.hex)
                    )}
                  />
                  <span {...stylex.props(styles.colorLabel)}>
                    {color.className}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function ChartVisual({
  color,
  index,
  type,
}: {
  color: string;
  index: number;
  type: string;
}) {
  const commonAxis = {
    axisLine: false,
    tickLine: false,
    tickMargin: 10,
  } as const;

  if (type === "bar") {
    return (
      <ResponsiveContainer
        height="100%"
        initialDimension={{ height: 288, width: 480 }}
        minWidth={0}
        width="100%"
      >
        <BarChart data={CHART_DATA}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" {...commonAxis} />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="desktop" fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (type === "line" || type === "tooltip") {
    return (
      <ResponsiveContainer
        height="100%"
        initialDimension={{ height: 288, width: 480 }}
        minWidth={0}
        width="100%"
      >
        <LineChart data={CHART_DATA}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" {...commonAxis} />
          <YAxis hide />
          <Tooltip />
          <Line
            dataKey="desktop"
            dot={index % 2 === 0}
            stroke={color}
            strokeWidth={2}
            type={index % 3 === 0 ? "step" : "monotone"}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === "pie") {
    return (
      <ResponsiveContainer
        height="100%"
        initialDimension={{ height: 288, width: 480 }}
        minWidth={0}
        width="100%"
      >
        <PieChart>
          <Tooltip />
          <Pie
            cx="50%"
            cy="50%"
            data={CHART_DATA.slice(0, 5)}
            dataKey="desktop"
            innerRadius={index % 2 === 0 ? 64 : 0}
            nameKey="month"
            outerRadius={105}
            strokeWidth={2}
          >
            {CHART_DATA.slice(0, 5).map((entry, valueIndex) => (
              <Cell
                fill={CHART_COLORS[(index + valueIndex) % CHART_COLORS.length]}
                key={entry.month}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (type === "radar") {
    return (
      <ResponsiveContainer
        height="100%"
        initialDimension={{ height: 288, width: 480 }}
        minWidth={0}
        width="100%"
      >
        <RadarChart data={CHART_DATA}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <Radar
            dataKey="desktop"
            fill={color}
            fillOpacity={0.4}
            stroke={color}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

  if (type === "radial") {
    return (
      <ResponsiveContainer
        height="100%"
        initialDimension={{ height: 288, width: 480 }}
        minWidth={0}
        width="100%"
      >
        <RadialBarChart
          cx="50%"
          cy="50%"
          data={CHART_DATA.slice(0, 4).map((item, valueIndex) => ({
            ...item,
            fill: CHART_COLORS[(index + valueIndex) % CHART_COLORS.length],
          }))}
          innerRadius="24%"
          outerRadius="90%"
        >
          <PolarAngleAxis domain={[0, 360]} tick={false} type="number" />
          <RadialBar background dataKey="desktop" />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }

  const gradientId = `area-${index}`;
  return (
    <ResponsiveContainer
      height="100%"
      initialDimension={{ height: 288, width: 480 }}
      minWidth={0}
      width="100%"
    >
      <AreaChart data={CHART_DATA}>
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.7} />
            <stop offset="95%" stopColor={color} stopOpacity={0.08} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" {...commonAxis} />
        <YAxis hide />
        <Tooltip />
        <Area
          dataKey="desktop"
          fill={`url(#${gradientId})`}
          stroke={color}
          strokeWidth={2}
          type={index % 3 === 0 ? "step" : "monotone"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function ChartCard({
  color,
  index,
  type,
}: {
  color: string;
  index: number;
  type: string;
}) {
  const displayName = `${type.charAt(0).toUpperCase()}${type.slice(1)} Chart${
    index === 0 ? " - Interactive" : ` ${index + 1}`
  }`;

  return (
    <article
      {...stylex.props(
        styles.chartDisplay,
        index === 0 && styles.chartFullWidth
      )}
    >
      <div {...stylex.props(styles.chartToolbar)}>
        <span {...stylex.props(styles.subtitle)}>{displayName}</span>
        <div {...stylex.props(styles.row)}>
          <CopyButton
            label="Copy"
            value={`npx shadcn-cssinjs add chart-${type}`}
          />
          <button {...stylex.props(styles.chartCodeButton)} type="button">
            View Code
          </button>
        </div>
      </div>
      <div {...stylex.props(styles.chartCard)}>
        <div>
          <h2 {...stylex.props(styles.titleSmall)}>{displayName}</h2>
          <p {...stylex.props(styles.subtitle)}>January – June 2026</p>
        </div>
        <div {...stylex.props(styles.chartCanvas)}>
          <ChartVisual color={color} index={index} type={type} />
        </div>
      </div>
    </article>
  );
}

export function ChartsGallery({ type }: { type: string }) {
  return (
    <div {...stylex.props(styles.chartsGrid)}>
      {CHART_COLORS.map((color, index) => (
        <ChartCard key={color} color={color} index={index} type={type} />
      ))}
    </div>
  );
}

export function ExampleGallery({ name }: { name: string }) {
  const preview = EXAMPLE_PREVIEWS[name] ?? "dashboard";

  return (
    <iframe
      {...stylex.props(styles.exampleFrame)}
      src={`/preview/stylex/${preview}`}
      title={`${name} example`}
    />
  );
}

export function StyleGallery() {
  return (
    <main>
      <PageHeader>
        <PageHeaderHeading>Sera</PageHeaderHeading>
        <PageHeaderDescription>
          A compact StyleX design-system style with editorial typography, direct
          controls, and expressive surface treatments.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/create?style=sera">Open in Create</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div {...stylex.props(styles.contentSoft)}>
        <div {...stylex.props(styles.content, styles.contentBlocks)}>
          <div {...stylex.props(styles.exampleShell)}>
            <iframe
              {...stylex.props(styles.exampleFrame)}
              src="/preview/stylex/components?style=sera"
              title="Sera style preview"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
