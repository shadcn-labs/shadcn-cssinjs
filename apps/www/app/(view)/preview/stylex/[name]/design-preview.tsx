"use client";

import * as stylex from "@stylexjs/stylex";
import {
  BarChart3Icon,
  BellIcon,
  BoxIcon,
  ChevronRightIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  MailIcon,
  MenuIcon,
  PanelLeftIcon,
  PlusCircleIcon,
  SearchIcon,
  SettingsIcon,
  TrendingDownIcon,
  TrendingUpIcon,
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
  detail,
  direction,
  label,
  note,
  value,
  delta,
}: {
  detail: string;
  delta: string;
  direction: "down" | "up";
  label: string;
  note: string;
  value: string;
}) {
  const TrendIcon = direction === "up" ? TrendingUpIcon : TrendingDownIcon;

  return (
    <article {...stylex.props(styles.dashboardMetricCard)}>
      <div {...stylex.props(styles.dashboardMetricHeader)}>
        <span {...stylex.props(styles.muted)}>{label}</span>
        <span {...stylex.props(styles.dashboardDelta)}>
          <TrendIcon height={13} width={13} /> {delta}
        </span>
      </div>
      <strong {...stylex.props(styles.metric)}>{value}</strong>
      <div {...stylex.props(styles.dashboardMetricFooter)}>
        <span {...stylex.props(styles.dashboardMetricDetail)}>
          {detail} <TrendIcon height={15} width={15} />
        </span>
        <span {...stylex.props(styles.muted)}>{note}</span>
      </div>
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
    <div {...stylex.props(styles.dashboardBlockBody)}>
      <div {...stylex.props(styles.dashboardMetricGrid)}>
        <MetricCard
          delta="+12.5%"
          detail="Trending up this month"
          direction="up"
          label="Total Revenue"
          note="Visitors for the last 6 months"
          value="$1,250.00"
        />
        <MetricCard
          delta="-20%"
          detail="Down 20% this period"
          direction="down"
          label="New Customers"
          note="Acquisition needs attention"
          value="1,234"
        />
        <MetricCard
          delta="+12.5%"
          detail="Strong user retention"
          direction="up"
          label="Active Accounts"
          note="Engagement exceed targets"
          value="45,678"
        />
        <MetricCard
          delta="+4.5%"
          detail="Steady performance increase"
          direction="up"
          label="Growth Rate"
          note="Meets growth projections"
          value="4.5%"
        />
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
    </div>
  );
}

function DashboardMenu({ example = false }: { example?: boolean }) {
  return (
    <aside
      {...stylex.props(
        styles.dashboardMenu,
        example && styles.dashboardMenuExample
      )}
    >
      <div {...stylex.props(styles.dashboardBrand)}>
        <BoxIcon height={18} width={18} /> Acme Inc.
      </div>
      {example ? (
        <span {...stylex.props(styles.dashboardMenuLabel)}>Home</span>
      ) : (
        <div {...stylex.props(styles.dashboardQuickRow)}>
          <button {...stylex.props(styles.dashboardQuickCreate)} type="button">
            <PlusCircleIcon height={16} width={16} /> Quick Create
          </button>
          <button
            {...stylex.props(styles.dashboardMessageButton)}
            aria-label="Messages"
            type="button"
          >
            <MailIcon height={16} width={16} />
          </button>
        </div>
      )}
      {[
        { icon: LayoutDashboardIcon, label: "Dashboard" },
        { icon: ListChecksIcon, label: "Lifecycle" },
        { icon: BarChart3Icon, label: "Analytics" },
        { icon: FolderIcon, label: "Projects" },
        { icon: UsersIcon, label: "Team" },
      ].map(({ icon: Icon, label }) => (
        <div key={label} {...stylex.props(styles.dashboardMenuItem)}>
          <Icon height={16} width={16} /> {label}
        </div>
      ))}
      {example ? (
        <>
          <span {...stylex.props(styles.dashboardMenuLabel)}>Documents</span>
          {[
            { icon: CreditCardIcon, label: "Data Library" },
            { icon: FolderIcon, label: "Reports" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} {...stylex.props(styles.dashboardMenuItem)}>
              <Icon height={16} width={16} /> {label}
            </div>
          ))}
        </>
      ) : null}
    </aside>
  );
}

function DashboardBlock({
  chartColor,
  example = false,
}: {
  chartColor: string;
  example?: boolean;
}) {
  return (
    <>
      <DashboardMenu example={example} />
      <section {...stylex.props(styles.dashboardBlockMain)}>
        <header
          {...stylex.props(
            styles.dashboardBlockHeader,
            example && styles.dashboardBlockHeaderExample
          )}
        >
          <div {...stylex.props(styles.row)}>
            <PanelLeftIcon height={16} width={16} />
            <span {...stylex.props(styles.dashboardHeaderSeparator)} />
            <h1 {...stylex.props(styles.dashboardBlockTitle)}>Documents</h1>
          </div>
          {example ? (
            <button
              {...stylex.props(
                styles.dashboardQuickCreate,
                styles.dashboardQuickCreateHeader
              )}
              type="button"
            >
              <PlusCircleIcon height={16} width={16} /> Quick Create
            </button>
          ) : (
            <a
              {...stylex.props(styles.dashboardGithub)}
              href="https://github.com/shadcn-ui/ui"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          )}
        </header>
        <Dashboard chartColor={chartColor} />
      </section>
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
    <div {...stylex.props(styles.authPage)}>
      <section {...stylex.props(styles.authBrandPanel)}>
        <div {...stylex.props(styles.authBrand)}>
          <BoxIcon height={24} width={24} /> Acme Inc
        </div>
        <blockquote {...stylex.props(styles.authQuote)}>
          “This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.” —
          Sofia Davis
        </blockquote>
      </section>
      <section {...stylex.props(styles.authFormPanel)}>
        <button {...stylex.props(styles.authLogin)} type="button">
          Login
        </button>
        <form {...stylex.props(styles.authForm)}>
          <div {...stylex.props(styles.authFormHeader)}>
            <h1 {...stylex.props(styles.title)}>Create an account</h1>
            <p {...stylex.props(styles.muted)}>
              Enter your email below to create your account
            </p>
          </div>
          <input
            {...stylex.props(styles.input)}
            placeholder="name@example.com"
            type="email"
          />
          <button {...stylex.props(styles.button)} type="submit">
            Continue with Email
          </button>
          <div {...stylex.props(styles.authDivider)}>OR CONTINUE WITH</div>
          <button
            {...stylex.props(styles.button, styles.buttonOutline)}
            type="button"
          >
            Continue with GitHub
          </button>
          <p {...stylex.props(styles.authTerms)}>
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </form>
      </section>
    </div>
  );
}

function TasksExample() {
  const tasks = [
    [
      "TASK-8782",
      "You can't compress the program without quantifying the open-source SSD pixel!",
      "In Progress",
      "High",
    ],
    [
      "TASK-7878",
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      "Backlog",
      "Medium",
    ],
    ["TASK-7839", "We need to bypass the neural TCP card!", "Todo", "High"],
    [
      "TASK-5562",
      "The SAS interface is down, bypass the open-source pixel so we can back up!",
      "Done",
      "Low",
    ],
    [
      "TASK-8686",
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
      "Canceled",
      "Medium",
    ],
  ];

  return (
    <section {...stylex.props(styles.tasksPage)}>
      <header {...stylex.props(styles.dashboardHeader)}>
        <div>
          <h1 {...stylex.props(styles.title)}>Welcome back!</h1>
          <p {...stylex.props(styles.muted)}>
            Here&apos;s a list of your tasks for this month.
          </p>
        </div>
        <span {...stylex.props(styles.avatar)}>SD</span>
      </header>
      <div {...stylex.props(styles.tasksToolbar)}>
        <input
          {...stylex.props(styles.input, styles.tasksFilter)}
          placeholder="Filter tasks..."
        />
        <button
          {...stylex.props(styles.button, styles.buttonOutline)}
          type="button"
        >
          Status
        </button>
        <button
          {...stylex.props(styles.button, styles.buttonOutline)}
          type="button"
        >
          Priority
        </button>
        <button
          {...stylex.props(
            styles.button,
            styles.buttonOutline,
            styles.tasksView
          )}
          type="button"
        >
          View
        </button>
      </div>
      <div {...stylex.props(styles.tasksTableShell)}>
        <table {...stylex.props(styles.table)}>
          <thead>
            <tr>
              {["Task", "Title", "Status", "Priority"].map((heading) => (
                <th
                  key={heading}
                  {...stylex.props(styles.tableCell, styles.tableHead)}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task[0]}>
                {task.map((cell, index) => (
                  <td key={cell} {...stylex.props(styles.tableCell)}>
                    {index > 1 ? (
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
      </div>
    </section>
  );
}

function PlaygroundExample() {
  return (
    <section {...stylex.props(styles.playgroundPage)}>
      <header {...stylex.props(styles.playgroundHeader)}>
        <h1 {...stylex.props(styles.heading)}>Playground</h1>
        <div {...stylex.props(styles.row)}>
          <select {...stylex.props(styles.input, styles.playgroundPreset)}>
            <option>Load a preset...</option>
          </select>
          <button
            {...stylex.props(styles.button, styles.buttonOutline)}
            type="button"
          >
            Save
          </button>
          <button
            {...stylex.props(styles.button, styles.buttonOutline)}
            type="button"
          >
            View code
          </button>
          <button
            {...stylex.props(styles.button, styles.buttonOutline)}
            type="button"
          >
            Share
          </button>
        </div>
      </header>
      <div {...stylex.props(styles.playgroundBody)}>
        <div {...stylex.props(styles.playgroundPrompt)}>
          <textarea
            {...stylex.props(styles.playgroundTextarea)}
            aria-label="Prompt"
            placeholder="Write a tagline for an ice cream shop"
          />
          <div {...stylex.props(styles.row)}>
            <button {...stylex.props(styles.button)} type="button">
              Submit
            </button>
            <button
              {...stylex.props(styles.button, styles.buttonOutline)}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
        <aside {...stylex.props(styles.playgroundControls)}>
          <div {...stylex.props(styles.field)}>
            <span {...stylex.props(styles.label)}>Mode</span>
            <div {...stylex.props(styles.playgroundModes)}>
              <button type="button">☰</button>
              <button type="button">↓</button>
              <button type="button">✎</button>
            </div>
          </div>
          {[
            ["Model", "text-davinci-003"],
            ["Temperature", "0.56"],
            ["Maximum Length", "256"],
            ["Top P", "0.9"],
          ].map(([label, value]) => (
            <label key={label} {...stylex.props(styles.field)}>
              <span {...stylex.props(styles.label)}>{label}</span>
              <input {...stylex.props(styles.input)} defaultValue={value} />
            </label>
          ))}
        </aside>
      </div>
    </section>
  );
}

function RtlExample() {
  return (
    <section {...stylex.props(styles.rtlPage)} dir="rtl">
      <header>
        <h1 {...stylex.props(styles.title)}>مكوّنات واجهة عربية</h1>
        <p {...stylex.props(styles.muted)}>
          أمثلة كاملة لدعم اتجاه الكتابة من اليمين إلى اليسار.
        </p>
      </header>
      <div {...stylex.props(styles.grid)}>
        <article {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.heading)}>إعدادات المظهر</h2>
          <label {...stylex.props(styles.field)}>
            <span {...stylex.props(styles.label)}>اللغة</span>
            <select {...stylex.props(styles.input)}>
              <option>العربية</option>
            </select>
          </label>
          <label {...stylex.props(styles.switchRow)}>
            <span>الوضع الداكن</span>
            <input defaultChecked type="checkbox" />
          </label>
          <button {...stylex.props(styles.button)} type="button">
            حفظ التغييرات
          </button>
        </article>
        <article {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.heading)}>اكتب رسالتك</h2>
          <textarea
            {...stylex.props(styles.playgroundTextarea, styles.rtlTextarea)}
            placeholder="كيف يمكنني مساعدتك؟"
          />
          <button {...stylex.props(styles.button)} type="button">
            إرسال
          </button>
        </article>
      </div>
    </section>
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

function ContributionHistoryCard({ color }: { color: string }) {
  return (
    <article {...stylex.props(styles.showcaseCard)}>
      <div>
        <h2 {...stylex.props(styles.showcaseTitle)}>Contribution History</h2>
        <p {...stylex.props(styles.showcaseDescription)}>
          Last 6 months of activity
        </p>
      </div>
      <div {...stylex.props(styles.showcaseBars)}>
        {[42, 61, 48, 73, 39, 79].map((height, index) => (
          <div key={height} {...stylex.props(styles.showcaseBarColumn)}>
            <span
              {...stylex.props(
                styles.showcaseBar,
                styles.showcaseBarValue(height, color)
              )}
            />
            <span>{["Dec", "Jan", "Feb", "Mar", "Apr", "May"][index]}</span>
          </div>
        ))}
      </div>
      <div {...stylex.props(styles.showcaseSplit)}>
        <div {...stylex.props(styles.showcaseInset)}>
          <span {...stylex.props(styles.showcaseEyebrow)}>Upcoming</span>
          <strong>May 25, 2024</strong>
          <span {...stylex.props(styles.showcaseDescription)}>
            $1,000 scheduled
          </span>
        </div>
        <div {...stylex.props(styles.showcaseInset)}>
          <span {...stylex.props(styles.showcaseEyebrow)}>Auto-save plan</span>
          <strong>Accelerated</strong>
          <span {...stylex.props(styles.showcaseDescription)}>
            Recurring weekly
          </span>
        </div>
      </div>
      <div {...stylex.props(styles.showcaseFooter)}>
        <button {...stylex.props(styles.showcaseButton)} type="button">
          View Full Report
        </button>
      </div>
    </article>
  );
}

function PayoutThresholdCard() {
  return (
    <article {...stylex.props(styles.showcaseCard)}>
      <div {...stylex.props(styles.showcaseToolbar)}>
        <div>
          <h2 {...stylex.props(styles.showcaseTitle)}>Payout Threshold</h2>
          <p {...stylex.props(styles.showcaseDescription)}>
            Set the minimum balance required before a payout is triggered.
          </p>
        </div>
        <button {...stylex.props(styles.showcaseIconButton)} type="button">
          ×
        </button>
      </div>
      <label {...stylex.props(styles.showcaseField)}>
        <span>Preferred Currency</span>
        <select {...stylex.props(styles.showcaseInput)} defaultValue="usd">
          <option value="usd">USD — United States Dollar</option>
          <option value="eur">EUR — Euro</option>
        </select>
      </label>
      <div {...stylex.props(styles.showcaseField)}>
        <div {...stylex.props(styles.showcaseToolbar)}>
          <span>Minimum Payout Amount</span>
          <strong {...stylex.props(styles.showcaseAmount)}>$2500.00</strong>
        </div>
        <input max="10000" min="50" type="range" defaultValue="2500" />
        <div {...stylex.props(styles.showcaseToolbar)}>
          <span {...stylex.props(styles.showcaseDescription)}>$50 (MIN)</span>
          <span {...stylex.props(styles.showcaseDescription)}>
            $10,000 (MAX)
          </span>
        </div>
      </div>
      <label {...stylex.props(styles.showcaseField)}>
        <span>Notes</span>
        <textarea
          {...stylex.props(styles.showcaseTextarea)}
          placeholder="Add any notes for this payout configuration..."
        />
      </label>
      <div {...stylex.props(styles.showcaseFooter)}>
        <button {...stylex.props(styles.showcaseButton)} type="button">
          Save Threshold
        </button>
      </div>
    </article>
  );
}

function SavingsTargetsCard() {
  return (
    <article {...stylex.props(styles.showcaseCard)}>
      <div>
        <h2 {...stylex.props(styles.showcaseTitle)}>Savings Targets</h2>
        <p {...stylex.props(styles.showcaseDescription)}>
          Active milestones for 2024
        </p>
      </div>
      {["Retirement", "Real Estate"].map((label, index) => (
        <div key={label} {...stylex.props(styles.showcaseTarget)}>
          <span {...stylex.props(styles.showcaseEyebrow)}>{label}</span>
          <strong {...stylex.props(styles.showcaseTargetValue)}>
            {index === 0 ? "$420,000" : "$85,000"}
          </strong>
          <span
            {...stylex.props(
              styles.showcaseProgress,
              styles.showcaseProgressValue(index === 0 ? "65%" : "32%")
            )}
          />
          <span {...stylex.props(styles.showcaseDescription)}>
            {index === 0 ? "65% achieved" : "32% achieved"}
          </span>
        </div>
      ))}
      <p {...stylex.props(styles.showcaseFooterText)}>
        You have not met your targets for this year.
      </p>
    </article>
  );
}

function EmptyDistributeTrackCard() {
  return (
    <article {...stylex.props(styles.showcaseCard, styles.showcaseEmpty)}>
      <span {...stylex.props(styles.showcaseAdd)}>+</span>
      <strong>Distribute Track</strong>
      <p {...stylex.props(styles.showcaseDescription, styles.showcaseCentered)}>
        Upload your first master to start reaching listeners on Spotify, Apple
        Music, and more.
      </p>
      <button
        {...stylex.props(styles.showcaseButton, styles.showcaseButtonFit)}
        type="button"
      >
        Create Release
      </button>
    </article>
  );
}

function ClaimableBalanceCard() {
  return (
    <article {...stylex.props(styles.showcaseCard)}>
      <span {...stylex.props(styles.showcaseDescription)}>
        Claimable Balance
      </span>
      <strong {...stylex.props(styles.showcaseBalance)}>$0.00</strong>
      <span {...stylex.props(styles.showcaseStatus)}>● Pending Setup</span>
      <div {...stylex.props(styles.showcaseInset)}>
        <div {...stylex.props(styles.showcaseToolbar)}>
          <span>Net Royalties</span>
          <strong>$0.00</strong>
        </div>
        <div {...stylex.props(styles.showcaseToolbar)}>
          <span>Processing Fee</span>
          <strong>-$0.00</strong>
        </div>
      </div>
    </article>
  );
}

function TransactionsCard() {
  return (
    <article {...stylex.props(styles.showcaseCard)}>
      <div>
        <h2 {...stylex.props(styles.showcaseTitle)}>Recent Transactions</h2>
        <p {...stylex.props(styles.showcaseDescription)}>
          Your latest account activity.
        </p>
      </div>
      <div {...stylex.props(styles.showcaseTransactions)}>
        {[
          ["Blue Bottle Coffee", "Food & Drink"],
          ["Whole Foods Market", "Groceries"],
          ["Stripe Payout", "Income"],
          ["Uber Technologies", "Transport"],
        ].map(([name, category], index) => (
          <div key={name} {...stylex.props(styles.showcaseTransaction)}>
            <span {...stylex.props(styles.showcaseTransactionIcon)}>
              {index + 1}
            </span>
            <div>
              <strong>{name}</strong>
              <div {...stylex.props(styles.showcaseDescription)}>
                {category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function CardsPreview({ color }: { color: string }) {
  return (
    <div {...stylex.props(styles.showcaseCanvas)}>
      <div {...stylex.props(styles.showcaseGrid)}>
        <div {...stylex.props(styles.showcaseColumn)}>
          <ContributionHistoryCard color={color} />
          <EmptyDistributeTrackCard />
        </div>
        <div {...stylex.props(styles.showcaseColumn)}>
          <PayoutThresholdCard />
          <ClaimableBalanceCard />
        </div>
        <div {...stylex.props(styles.showcaseColumn)}>
          <SavingsTargetsCard />
          <TransactionsCard />
        </div>
      </div>
    </div>
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
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

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

  const dark = mounted && resolvedTheme === "dark";
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

  if (item === "preview-02") {
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
        <CardsPreview color={chartColor} />
      </main>
    );
  }

  if (item === "dashboard" || item === "example-dashboard") {
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
        <DashboardBlock
          chartColor={chartColor}
          example={item === "example-dashboard"}
        />
      </main>
    );
  }

  if (["authentication", "playground", "rtl", "tasks"].includes(item)) {
    return (
      <main
        {...stylex.props(
          styles.page,
          styles.examplePage,
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
            params.rtl || item === "rtl" ? "rtl" : "ltr",
            params.pointer ? "pointer" : "default"
          ),
          styleMap[params.style]
        )}
      >
        {item === "authentication" ? <Authentication /> : null}
        {item === "playground" ? <PlaygroundExample /> : null}
        {item === "rtl" ? <RtlExample /> : null}
        {item === "tasks" ? <TasksExample /> : null}
      </main>
    );
  }

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
