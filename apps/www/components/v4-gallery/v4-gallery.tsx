"use client";

import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ClipboardIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { styles } from "@/components/v4-gallery/v4-gallery.stylex";

const BLOCKS = [
  {
    category: "dashboard",
    install: "card chart table",
    name: "dashboard-01",
    preview: "dashboard",
  },
  {
    category: "sidebar",
    install: "sidebar",
    name: "sidebar-07",
    preview: "sidebar",
  },
  {
    category: "sidebar",
    install: "sidebar navigation-menu",
    name: "sidebar-03",
    preview: "components",
  },
  {
    category: "authentication",
    install: "card input button",
    name: "login-03",
    preview: "authentication",
  },
  {
    category: "authentication",
    install: "card input button checkbox",
    name: "login-04",
    preview: "authentication",
  },
] as const;

const PALETTES = [
  {
    colors: [
      "#fafafa",
      "#f4f4f5",
      "#e4e4e7",
      "#d4d4d8",
      "#a1a1aa",
      "#71717a",
      "#52525b",
      "#3f3f46",
      "#27272a",
      "#18181b",
    ],
    name: "Zinc",
  },
  {
    colors: [
      "#eff6ff",
      "#dbeafe",
      "#bfdbfe",
      "#93c5fd",
      "#60a5fa",
      "#3b82f6",
      "#2563eb",
      "#1d4ed8",
      "#1e40af",
      "#172554",
    ],
    name: "Blue",
  },
  {
    colors: [
      "#f0fdf4",
      "#dcfce7",
      "#bbf7d0",
      "#86efac",
      "#4ade80",
      "#22c55e",
      "#16a34a",
      "#15803d",
      "#166534",
      "#052e16",
    ],
    name: "Green",
  },
  {
    colors: [
      "#fff7ed",
      "#ffedd5",
      "#fed7aa",
      "#fdba74",
      "#fb923c",
      "#f97316",
      "#ea580c",
      "#c2410c",
      "#9a3412",
      "#431407",
    ],
    name: "Orange",
  },
  {
    colors: [
      "#fff1f2",
      "#ffe4e6",
      "#fecdd3",
      "#fda4af",
      "#fb7185",
      "#f43f5e",
      "#e11d48",
      "#be123c",
      "#9f1239",
      "#4c0519",
    ],
    name: "Rose",
  },
  {
    colors: [
      "#f5f3ff",
      "#ede9fe",
      "#ddd6fe",
      "#c4b5fd",
      "#a78bfa",
      "#8b5cf6",
      "#7c3aed",
      "#6d28d9",
      "#5b21b6",
      "#2e1065",
    ],
    name: "Violet",
  },
] as const;

const CHART_TYPES = ["area", "bar", "line", "pie", "radar", "radial"] as const;
const CHART_COLORS = ["#7c3aed", "#8b5cf6", "#a78bfa", "#c4b5fd"];
const EXAMPLE_PREVIEWS: Record<string, string> = {
  authentication: "authentication",
  playground: "components",
  rtl: "dashboard?rtl=true",
  tasks: "components",
};

function PageHeader({
  actions,
  description,
  title,
}: {
  actions?: React.ReactNode;
  description: string;
  title: string;
}) {
  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.section)}>
        <h1 {...stylex.props(styles.title)}>{title}</h1>
        <p {...stylex.props(styles.subtitle)}>{description}</p>
      </div>
      {actions}
    </header>
  );
}

function CopyButton({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button {...stylex.props(styles.action)} type="button" onClick={copy}>
      {copied ? (
        <CheckIcon height={15} width={15} />
      ) : (
        <ClipboardIcon height={15} width={15} />
      )}
      {copied ? "Copied" : label}
    </button>
  );
}

export function BlocksGallery({ category }: { category?: string }) {
  const blocks = category
    ? BLOCKS.filter((block) => block.category === category)
    : BLOCKS;

  return (
    <main {...stylex.props(styles.page)}>
      <PageHeader
        title={category ? `${category} blocks` : "Building blocks"}
        description="Production-ready application sections composed from the StyleX registry. Preview, copy, and add the source to your own project."
        actions={
          <nav {...stylex.props(styles.nav)}>
            {["dashboard", "sidebar", "authentication"].map((item) => (
              <Link
                key={item}
                {...stylex.props(styles.action)}
                href={`/blocks/${item}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        }
      />
      {blocks.length === 0 ? (
        <div {...stylex.props(styles.empty)}>
          No blocks in this category yet.
        </div>
      ) : (
        <div {...stylex.props(styles.section)}>
          {blocks.map((block) => (
            <article key={block.name} {...stylex.props(styles.block)}>
              <div {...stylex.props(styles.row)}>
                <h2 {...stylex.props(styles.titleSmall)}>{block.name}</h2>
                <div {...stylex.props(styles.nav)}>
                  <CopyButton
                    label="Copy command"
                    value={`pnpm dlx shadcn-cssinjs@latest add ${block.install}`}
                  />
                  <a
                    {...stylex.props(styles.action)}
                    href={`/preview/stylex/${block.preview}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLinkIcon height={15} width={15} /> Open
                  </a>
                </div>
              </div>
              <iframe
                {...stylex.props(styles.blockFrame)}
                loading="lazy"
                src={`/preview/stylex/${block.preview}`}
                title={`${block.name} preview`}
              />
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export function ColorsGallery() {
  const [format, setFormat] = React.useState<"hex" | "variable">("hex");
  return (
    <main {...stylex.props(styles.page)}>
      <PageHeader
        title="Colors"
        description="Color palettes for design-system tokens. Select a swatch to copy its value in your preferred format."
        actions={
          <button
            {...stylex.props(styles.action)}
            type="button"
            onClick={() => setFormat(format === "hex" ? "variable" : "hex")}
          >
            Format: {format === "hex" ? "HEX" : "CSS variable"}
          </button>
        }
      />
      {PALETTES.map((palette) => (
        <section key={palette.name} {...stylex.props(styles.palette)}>
          <h2 {...stylex.props(styles.titleSmall)}>{palette.name}</h2>
          <div {...stylex.props(styles.colorGrid)}>
            {palette.colors.map((color, index) => {
              const shade = index === 0 ? 50 : index * 100;
              const value =
                format === "hex"
                  ? color
                  : `var(--${palette.name.toLowerCase()}-${shade})`;
              return (
                <button
                  key={color}
                  {...stylex.props(styles.colorButton)}
                  type="button"
                  onClick={() => navigator.clipboard.writeText(value)}
                >
                  <span
                    {...stylex.props(
                      styles.colorTile,
                      styles.colorSwatch(color)
                    )}
                  />
                  <span>{shade}</span>
                  <span {...stylex.props(styles.colorMeta)}>
                    {format === "hex"
                      ? color
                      : `--${palette.name.toLowerCase()}-${shade}`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </main>
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
  const values = [42, 67, 53, 78, 64, 91, 72, 86, 61, 95, 76, 89].map((value) =>
    Math.max(16, value - index * 4)
  );
  return (
    <article {...stylex.props(styles.chartCard)}>
      <div>
        <h2 {...stylex.props(styles.titleSmall)}>
          {type} chart {index + 1}
        </h2>
        <p {...stylex.props(styles.subtitle)}>January – December 2026</p>
      </div>
      <div {...stylex.props(styles.chart)}>
        {values.map((height, valueIndex) => (
          <span
            key={`${height}-${valueIndex}`}
            {...stylex.props(
              styles.chartBar,
              styles.bar(
                type === "line" ? Math.max(3, height / 9) : height * 2.6,
                color
              )
            )}
          />
        ))}
      </div>
    </article>
  );
}

export function ChartsGallery({ type }: { type: string }) {
  return (
    <main {...stylex.props(styles.page)}>
      <PageHeader
        title={`${type} charts`}
        description="Chart compositions that inherit the active StyleX design tokens and remain fully editable."
        actions={
          <nav {...stylex.props(styles.nav)}>
            {CHART_TYPES.map((chartType) => (
              <Link
                key={chartType}
                {...stylex.props(styles.action)}
                href={`/charts/${chartType}`}
              >
                {chartType}
              </Link>
            ))}
          </nav>
        }
      />
      <div {...stylex.props(styles.grid)}>
        {CHART_COLORS.map((color, index) => (
          <ChartCard key={color} color={color} index={index} type={type} />
        ))}
      </div>
    </main>
  );
}

export function ExampleGallery({ name }: { name: string }) {
  const preview = EXAMPLE_PREVIEWS[name] ?? "dashboard";
  return (
    <main {...stylex.props(styles.page)}>
      <PageHeader
        title={name}
        description="A complete StyleX example assembled from open, editable registry components."
        actions={
          <Link
            {...stylex.props(styles.action)}
            href={`/create?item=${encodeURIComponent(preview.split("?")[0] ?? "dashboard")}`}
          >
            Customize
          </Link>
        }
      />
      <iframe
        {...stylex.props(styles.exampleFrame)}
        src={`/preview/stylex/${preview}`}
        title={`${name} example`}
      />
    </main>
  );
}

export function StyleGallery() {
  return (
    <main {...stylex.props(styles.page)}>
      <PageHeader
        title="Sera"
        description="A compact StyleX design-system style with editorial typography, direct controls, and expressive surface treatments."
        actions={
          <Link {...stylex.props(styles.action)} href="/create?style=sera">
            Open in Create
          </Link>
        }
      />
      <iframe
        {...stylex.props(styles.exampleFrame)}
        src="/preview/stylex/components?style=sera"
        title="Sera style preview"
      />
    </main>
  );
}
