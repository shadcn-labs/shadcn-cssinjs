"use client";

import * as stylex from "@stylexjs/stylex";
import {
  ActivityIcon,
  BarChart3Icon,
  BellIcon,
  BoxIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { designStyles as styles } from "@/app/(app)/(create)/components/create.stylex";
import { CREATE_PARAMS_MESSAGE } from "@/app/(app)/(create)/components/preview";
import {
  BASES,
  FONTS,
  ICON_LIBRARIES,
  RADII,
  STYLES,
} from "@/app/(app)/(create)/lib/config";
import { useCreateSearchParams } from "@/app/(app)/(create)/lib/search-params";
import type { CreateSearchParams } from "@/app/(app)/(create)/lib/search-params";

const PRIMARY = {
  blue: { dark: "#60a5fa", light: "#2563eb" },
  green: { dark: "#4ade80", light: "#16a34a" },
  neutral: { dark: "#e5e5e5", light: "#171717" },
  orange: { dark: "#fb923c", light: "#ea580c" },
  red: { dark: "#f87171", light: "#dc2626" },
  rose: { dark: "#fb7185", light: "#e11d48" },
  violet: { dark: "#a78bfa", light: "#7c3aed" },
  yellow: { dark: "#facc15", light: "#ca8a04" },
} as const;

const BASE_TINT = {
  gray: { dark: "#111827", light: "#f9fafb" },
  neutral: { dark: "#121212", light: "#fafafa" },
  slate: { dark: "#0f172a", light: "#f8fafc" },
  stone: { dark: "#1c1917", light: "#fafaf9" },
  zinc: { dark: "#18181b", light: "#fafafa" },
} as const;

function palette(
  baseColor: keyof typeof BASE_TINT,
  theme: keyof typeof PRIMARY,
  dark: boolean
) {
  const background = BASE_TINT[baseColor][dark ? "dark" : "light"];
  const foreground = dark ? "#f5f5f5" : "#171717";
  const primary = PRIMARY[theme][dark ? "dark" : "light"];
  const primaryForeground =
    (theme === "yellow" && !dark) || (dark && theme === "neutral")
      ? "#171717"
      : "#ffffff";
  return {
    accent: dark ? "#292929" : "#f1f1f1",
    background,
    border: dark ? "#343434" : "#e4e4e7",
    card: dark ? "#1d1d1f" : "#ffffff",
    foreground,
    muted: dark ? "#29292c" : "#f4f4f5",
    mutedForeground: dark ? "#a1a1aa" : "#71717a",
    primary,
    primaryForeground,
  };
}

const styleMap = {
  luma: styles.styleLyra,
  lyra: styles.styleLyra,
  maia: styles.styleMaia,
  mira: styles.styleMira,
  nova: styles.styleNova,
  rhea: styles.styleRhea,
  sera: styles.styleSera,
  vega: undefined,
} as const;

function MetricCard({
  label,
  value,
  delta,
}: {
  delta: string;
  label: string;
  value: string;
}) {
  return (
    <article {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.toolbar)}>
        <span {...stylex.props(styles.muted)}>{label}</span>
        <ActivityIcon height={15} width={15} />
      </div>
      <strong {...stylex.props(styles.metric)}>{value}</strong>
      <span {...stylex.props(styles.muted)}>{delta} from last month</span>
    </article>
  );
}

function Chart({ color }: { color: string }) {
  return (
    <div {...stylex.props(styles.chart)} aria-label="Revenue chart">
      {[35, 52, 41, 66, 58, 83, 72, 94, 77, 88, 68, 96].map((height, index) => (
        <span
          key={`${height}-${index}`}
          {...stylex.props(styles.chartBar, styles.bar(height, color))}
        />
      ))}
    </div>
  );
}

function Dashboard({ chartColor }: { chartColor: string }) {
  return (
    <>
      <header {...stylex.props(styles.dashboardHeader)}>
        <div {...stylex.props(styles.section)}>
          <h1 {...stylex.props(styles.title)}>Dashboard</h1>
          <p {...stylex.props(styles.muted)}>
            Overview of your workspace performance.
          </p>
        </div>
        <div {...stylex.props(styles.row, styles.rowWrap)}>
          <button
            {...stylex.props(styles.button, styles.buttonOutline)}
            type="button"
          >
            <CalendarDaysIcon height={15} width={15} /> Last 30 days
          </button>
          <button {...stylex.props(styles.button)} type="button">
            Download report
          </button>
        </div>
      </header>
      <div {...stylex.props(styles.grid, styles.gridThree)}>
        <MetricCard delta="+12.4%" label="Revenue" value="$45,231" />
        <MetricCard delta="+8.2%" label="Subscriptions" value="2,350" />
        <MetricCard delta="+19.1%" label="Active now" value="573" />
      </div>
      <div {...stylex.props(styles.grid)}>
        <article {...stylex.props(styles.card)}>
          <div>
            <h2 {...stylex.props(styles.heading)}>Revenue</h2>
            <p {...stylex.props(styles.muted)}>Daily recurring revenue</p>
          </div>
          <Chart color={chartColor} />
        </article>
        <article {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.heading)}>Recent activity</h2>
          <div {...stylex.props(styles.list)}>
            {[
              "Olivia Martin",
              "Jackson Lee",
              "Isabella Nguyen",
              "William Kim",
            ].map((name, index) => (
              <div key={name} {...stylex.props(styles.listItem)}>
                <div {...stylex.props(styles.row)}>
                  <span {...stylex.props(styles.avatar)}>
                    {name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <strong>{name}</strong>
                    <div {...stylex.props(styles.muted)}>
                      team{index + 1}@example.com
                    </div>
                  </div>
                </div>
                <strong>+${[199, 39, 299, 99][index]}.00</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function Components() {
  return (
    <>
      <header {...stylex.props(styles.dashboardHeader)}>
        <div>
          <h1 {...stylex.props(styles.title)}>Components</h1>
          <p {...stylex.props(styles.muted)}>
            Reusable interface primitives powered by StyleX.
          </p>
        </div>
        <span {...stylex.props(styles.badge)}>Base UI + StyleX</span>
      </header>
      <div {...stylex.props(styles.grid)}>
        <article {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.heading)}>Account</h2>
          <label {...stylex.props(styles.field)}>
            <span {...stylex.props(styles.label)}>Email</span>
            <input
              {...stylex.props(styles.input)}
              defaultValue="ava@example.com"
            />
          </label>
          <label {...stylex.props(styles.field)}>
            <span {...stylex.props(styles.label)}>Role</span>
            <select {...stylex.props(styles.input)} defaultValue="designer">
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
            </select>
          </label>
          <div {...stylex.props(styles.row)}>
            <button {...stylex.props(styles.button)} type="button">
              Save changes
            </button>
            <button
              {...stylex.props(styles.button, styles.buttonOutline)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </article>
        <article {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.heading)}>Team members</h2>
          <div {...stylex.props(styles.list)}>
            {["Mina", "Akash", "Jamie"].map((name) => (
              <div key={name} {...stylex.props(styles.listItem)}>
                <div {...stylex.props(styles.row)}>
                  <span {...stylex.props(styles.avatar)}>{name[0]}</span>
                  <span>{name}</span>
                </div>
                <span {...stylex.props(styles.badge)}>Editor</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function Authentication() {
  return (
    <div {...stylex.props(styles.contentWide)}>
      <article {...stylex.props(styles.card)}>
        <div>
          <h1 {...stylex.props(styles.title)}>Welcome back</h1>
          <p {...stylex.props(styles.muted)}>
            Enter your details to access your workspace.
          </p>
        </div>
        <label {...stylex.props(styles.field)}>
          <span {...stylex.props(styles.label)}>Email</span>
          <input
            {...stylex.props(styles.input)}
            placeholder="name@example.com"
            type="email"
          />
        </label>
        <label {...stylex.props(styles.field)}>
          <span {...stylex.props(styles.label)}>Password</span>
          <input
            {...stylex.props(styles.input)}
            placeholder="••••••••"
            type="password"
          />
        </label>
        <button {...stylex.props(styles.button)} type="button">
          Sign in
        </button>
        <button
          {...stylex.props(styles.button, styles.buttonOutline)}
          type="button"
        >
          Continue with GitHub
        </button>
      </article>
    </div>
  );
}

function DataTable() {
  return (
    <article {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.toolbar)}>
        <div>
          <h2 {...stylex.props(styles.heading)}>Recent invoices</h2>
          <p {...stylex.props(styles.muted)}>
            Manage payments and subscriptions.
          </p>
        </div>
        <button
          {...stylex.props(styles.button, styles.buttonSmall)}
          type="button"
        >
          Add invoice
        </button>
      </div>
      <table {...stylex.props(styles.table)}>
        <thead>
          <tr>
            <th {...stylex.props(styles.tableCell, styles.tableHead)}>
              Customer
            </th>
            <th {...stylex.props(styles.tableCell, styles.tableHead)}>
              Status
            </th>
            <th {...stylex.props(styles.tableCell, styles.tableHead)}>
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Acme Inc.", "Paid", "$1,250"],
            ["Linear Labs", "Pending", "$840"],
            ["Northstar", "Paid", "$2,100"],
            ["Kite Studio", "Draft", "$460"],
          ].map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={cell} {...stylex.props(styles.tableCell)}>
                  {index === 1 ? (
                    <span {...stylex.props(styles.badge)}>{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

function Menu({
  bold,
  inverted,
  translucent,
}: {
  bold: boolean;
  inverted: boolean;
  translucent: boolean;
}) {
  const theme = inverted
    ? {
        accent: "#292524",
        background: "#171717",
        foreground: "#fafafa",
        primary: "#fafafa",
        primaryForeground: "#171717",
      }
    : {
        accent: "var(--accent)",
        background: "var(--card)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
      };
  return (
    <aside
      {...stylex.props(
        styles.menu,
        styles.menuTheme(
          theme.background,
          theme.foreground,
          theme.accent,
          theme.primary,
          theme.primaryForeground,
          translucent
        )
      )}
    >
      <div {...stylex.props(styles.menuBrand)}>
        <BoxIcon height={18} width={18} /> Acme Inc.
      </div>
      {[
        { icon: LayoutDashboardIcon, label: "Dashboard" },
        { icon: BarChart3Icon, label: "Analytics" },
        { icon: UsersIcon, label: "Customers" },
        { icon: CreditCardIcon, label: "Billing" },
      ].map(({ icon: Icon, label }, index) => (
        <div
          key={label}
          {...stylex.props(
            styles.menuItem,
            bold && index === 0 && styles.menuBold
          )}
        >
          <Icon height={16} width={16} />
          {label}
          {index === 0 ? <ChevronRightIcon height={14} width={14} /> : null}
        </div>
      ))}
      <div {...stylex.props(styles.spacer)} />
      <div {...stylex.props(styles.menuItem)}>
        <SettingsIcon height={16} width={16} /> Settings
      </div>
    </aside>
  );
}

function PreviewContent({
  chartColor,
  item,
  primary,
}: {
  chartColor: string;
  item: string;
  primary: string;
}) {
  if (item === "components") {
    return <Components />;
  }
  if (item === "authentication") {
    return <Authentication />;
  }
  if (item === "charts") {
    return (
      <>
        <header>
          <h1 {...stylex.props(styles.title)}>Analytics</h1>
          <p {...stylex.props(styles.muted)}>Live design-system chart colors</p>
        </header>
        <div {...stylex.props(styles.grid)}>
          <article {...stylex.props(styles.card)}>
            <h2 {...stylex.props(styles.heading)}>Visitors</h2>
            <Chart color={chartColor} />
          </article>
          <article {...stylex.props(styles.card)}>
            <h2 {...stylex.props(styles.heading)}>Conversions</h2>
            <Chart color={primary} />
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <Dashboard chartColor={chartColor} />
      <DataTable />
    </>
  );
}

export function DesignPreview({ name }: { name: string }) {
  const [params, setParams] = useCreateSearchParams({ history: "replace" });
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        !event.data ||
        typeof event.data !== "object" ||
        event.data.type !== CREATE_PARAMS_MESSAGE
      ) {
        return;
      }
      void setParams(event.data.data as Partial<CreateSearchParams>, {
        history: "replace",
      });
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [setParams]);

  const dark = resolvedTheme === "dark";
  const colors = palette(params.baseColor, params.theme, dark);
  const chartColor = PRIMARY[params.chartColor][dark ? "dark" : "light"];
  const radiusValue =
    RADII.find((item) => item.value === params.radius)?.radius ?? "0.625rem";
  const bodyFont =
    FONTS.find((font) => font.value === params.font)?.family ?? FONTS[0].family;
  const headingFont =
    params.fontHeading === "inherit"
      ? bodyFont
      : (FONTS.find((font) => font.value === params.fontHeading)?.family ??
        bodyFont);
  const item = name === "preview" || name === "preview-02" ? params.item : name;
  const menuInverted = params.menuColor.startsWith("inverted");
  const menuTranslucent = params.menuColor.endsWith("translucent");

  return (
    <main
      {...stylex.props(
        styles.page,
        styles.theme(
          colors.background,
          colors.foreground,
          colors.card,
          colors.muted,
          colors.mutedForeground,
          colors.primary,
          colors.primaryForeground,
          colors.border,
          colors.accent,
          radiusValue,
          bodyFont,
          headingFont,
          params.rtl ? "rtl" : "ltr",
          params.pointer ? "pointer" : "default"
        ),
        styleMap[params.style]
      )}
    >
      <Menu
        bold={params.menuAccent === "bold"}
        inverted={menuInverted}
        translucent={menuTranslucent}
      />
      <div {...stylex.props(styles.content)}>
        <div {...stylex.props(styles.toolbar, styles.toolbarBorder)}>
          <div {...stylex.props(styles.row)}>
            <MenuIcon height={17} width={17} />
            <span {...stylex.props(styles.badge)}>
              {BASES.find((base) => base.value === params.base)?.label}
            </span>
            <span {...stylex.props(styles.badge)}>
              {
                STYLES.find((itemStyle) => itemStyle.value === params.style)
                  ?.label
              }
            </span>
          </div>
          <div {...stylex.props(styles.row)}>
            <SearchIcon height={17} width={17} />
            <BellIcon height={17} width={17} />
            <CircleUserRoundIcon height={19} width={19} />
          </div>
        </div>
        <PreviewContent
          chartColor={chartColor}
          item={item}
          primary={colors.primary}
        />
        <p {...stylex.props(styles.muted)}>
          Icons:{" "}
          {
            ICON_LIBRARIES.find(
              (library) => library.value === params.iconLibrary
            )?.label
          }{" "}
          · StyleX tokens update live
        </p>
      </div>
    </main>
  );
}
