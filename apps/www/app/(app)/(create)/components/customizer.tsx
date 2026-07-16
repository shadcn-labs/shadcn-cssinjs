"use client";

import * as stylex from "@stylexjs/stylex";
import {
  CheckIcon,
  ClipboardIcon,
  Code2Icon,
  LockIcon,
  MenuIcon,
  Redo2Icon,
  RotateCcwIcon,
  ShuffleIcon,
  SunMoonIcon,
  Undo2Icon,
  UnlockIcon,
  UploadIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { createStyles } from "@/app/(app)/(create)/components/create.stylex";
import { useCreateHistory } from "@/app/(app)/(create)/hooks/use-history";
import { useCreateLocks } from "@/app/(app)/(create)/hooks/use-locks";
import type { LockableCreateParam } from "@/app/(app)/(create)/hooks/use-locks";
import { useCreateRandom } from "@/app/(app)/(create)/hooks/use-random";
import {
  BASE_COLORS,
  BASES,
  FONTS,
  ICON_LIBRARIES,
  MENU_ACCENTS,
  MENU_COLORS,
  RADII,
  STYLES,
  TEMPLATES,
  THEMES,
} from "@/app/(app)/(create)/lib/config";
import {
  encodeCreatePreset,
  parsePresetInput,
  useCreateSearchParams,
} from "@/app/(app)/(create)/lib/search-params";
import type { CreateSearchParams } from "@/app/(app)/(create)/lib/search-params";
import { typesetStyles as shellStyles } from "@/app/(app)/(typeset)/components/typeset.stylex";

interface Option {
  color?: string;
  label: string;
  value: string;
}

function IconButton({
  children,
  label,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      {...stylex.props(shellStyles.iconButton)}
      aria-label={label}
      title={label}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function LockButton({ param }: { param: LockableCreateParam }) {
  const { isLocked, toggleLock } = useCreateLocks();
  const locked = isLocked(param);

  return (
    <div {...stylex.props(shellStyles.lockButton)}>
      <IconButton
        label={locked ? `Unlock ${param}` : `Lock ${param}`}
        onClick={() => toggleLock(param)}
      >
        {locked ? (
          <LockIcon {...stylex.props(shellStyles.icon)} />
        ) : (
          <UnlockIcon {...stylex.props(shellStyles.icon)} />
        )}
      </IconButton>
    </div>
  );
}

function Control({
  label,
  onChange,
  options,
  param,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: readonly Option[];
  param: LockableCreateParam;
  value: string;
}) {
  const selected = options.find((option) => option.value === value);

  return (
    <label {...stylex.props(shellStyles.control)}>
      <span {...stylex.props(shellStyles.controlLabel)}>{label}</span>
      {selected?.color ? (
        <span
          {...stylex.props(
            createStyles.swatch,
            createStyles.colorDot(selected.color)
          )}
        />
      ) : null}
      <select
        {...stylex.props(
          shellStyles.controlSelect,
          Boolean(selected?.color) && createStyles.selectWithSwatch
        )}
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <LockButton param={param} />
    </label>
  );
}

function Dialog({
  children,
  onOpenChange,
  open,
  title,
}: {
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title: string;
}) {
  React.useEffect(() => {
    if (!open) {
      return;
    }
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      {...stylex.props(shellStyles.dialogOverlay)}
      aria-modal="true"
      role="dialog"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onOpenChange(false);
        }
      }}
    >
      <div {...stylex.props(shellStyles.dialog)}>
        <div {...stylex.props(shellStyles.docsHeader)}>
          <h2 {...stylex.props(shellStyles.docsTitle)}>{title}</h2>
          <IconButton label="Close" onClick={() => onOpenChange(false)}>
            <Code2Icon {...stylex.props(shellStyles.icon)} />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}

function MainMenu() {
  const { canGoBack, canGoForward, goBack, goForward } = useCreateHistory();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div {...stylex.props(shellStyles.menu)}>
      <MenuIcon {...stylex.props(shellStyles.icon)} aria-hidden />
      <span {...stylex.props(shellStyles.controlValue)}>Menu</span>
      <IconButton disabled={!canGoBack} label="Undo" onClick={goBack}>
        <Undo2Icon {...stylex.props(shellStyles.icon)} />
      </IconButton>
      <IconButton disabled={!canGoForward} label="Redo" onClick={goForward}>
        <Redo2Icon {...stylex.props(shellStyles.icon)} />
      </IconButton>
      <IconButton
        label="Toggle theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <SunMoonIcon {...stylex.props(shellStyles.icon)} />
      </IconButton>
    </div>
  );
}

function ProjectDialog({
  onOpenChange,
  open,
}: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) {
  const [params, setParams] = useCreateSearchParams();
  const [packageManager, setPackageManager] = React.useState("pnpm");
  const [mode, setMode] = React.useState<"existing" | "new" | "theme">("new");
  const [copied, setCopied] = React.useState(false);
  const preset = encodeCreatePreset(params);
  const runner = {
    bun: "bunx --bun",
    npm: "npx",
    pnpm: "pnpm dlx",
    yarn: "yarn dlx",
  }[packageManager];
  const action = mode === "new" ? "init" : "apply";
  const modeFlag = mode === "theme" ? " --only theme" : "";
  const command = `${runner} shadcn-cssinjs@latest ${action} --preset ${preset}${mode === "new" ? ` --template ${params.template}` : ""}${modeFlag}${params.rtl ? " --rtl" : ""}${params.pointer ? " --pointer" : ""}`;

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={open} title="Create your project">
      <div {...stylex.props(shellStyles.docsBody)}>
        <p {...stylex.props(shellStyles.docsText)}>
          Start a new React project with this complete StyleX design-system
          preset. The CLI handles the compiler, tokens, fonts, and component
          setup.
        </p>
        <div {...stylex.props(shellStyles.tabs)}>
          {[
            { label: "New project", value: "new" },
            { label: "Existing project", value: "existing" },
            { label: "Theme only", value: "theme" },
          ].map((item) => (
            <button
              key={item.value}
              {...stylex.props(shellStyles.tab)}
              data-active={mode === item.value}
              type="button"
              onClick={() => setMode(item.value as typeof mode)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div {...stylex.props(createStyles.formGrid)}>
          <label {...stylex.props(createStyles.dialogField)}>
            <span {...stylex.props(shellStyles.controlLabel)}>Framework</span>
            <select
              {...stylex.props(createStyles.input)}
              disabled={mode !== "new"}
              value={params.template}
              onChange={(event) =>
                void setParams({
                  template: event.target.value as typeof params.template,
                })
              }
            >
              {TEMPLATES.map((template) => (
                <option key={template.value} value={template.value}>
                  {template.label}
                </option>
              ))}
            </select>
          </label>
          <label {...stylex.props(createStyles.dialogField)}>
            <span {...stylex.props(shellStyles.controlLabel)}>
              Package manager
            </span>
            <select
              {...stylex.props(createStyles.input)}
              value={packageManager}
              onChange={(event) => setPackageManager(event.target.value)}
            >
              {[
                { label: "pnpm", value: "pnpm" },
                { label: "npm", value: "npm" },
                { label: "yarn", value: "yarn" },
                { label: "bun", value: "bun" },
              ].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div {...stylex.props(createStyles.formGrid)}>
          <label {...stylex.props(createStyles.switchRow)}>
            <span>Right-to-left layout</span>
            <input
              {...stylex.props(createStyles.checkbox)}
              checked={params.rtl}
              type="checkbox"
              onChange={(event) =>
                void setParams({ rtl: event.target.checked })
              }
            />
          </label>
          <label {...stylex.props(createStyles.switchRow)}>
            <span>Pointer cursor</span>
            <input
              {...stylex.props(createStyles.checkbox)}
              checked={params.pointer}
              type="checkbox"
              onChange={(event) =>
                void setParams({ pointer: event.target.checked })
              }
            />
          </label>
        </div>
        <pre {...stylex.props(shellStyles.code)}>{command}</pre>
        <div {...stylex.props(createStyles.dialogActions)}>
          <button
            {...stylex.props(shellStyles.button, shellStyles.buttonPrimary)}
            type="button"
            onClick={copy}
          >
            {copied ? (
              <CheckIcon {...stylex.props(shellStyles.icon)} />
            ) : (
              <ClipboardIcon {...stylex.props(shellStyles.icon)} />
            )}
            {copied ? "Copied" : "Copy command"}
          </button>
        </div>
      </div>
    </Dialog>
  );
}

function PresetDialog({
  onOpenChange,
  open,
}: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) {
  const [, setParams] = useCreateSearchParams();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const apply = () => {
    const parsed = parsePresetInput(value);
    if (!parsed) {
      setError("Enter a preset code, JSON object, or shared create URL.");
      return;
    }
    void setParams(parsed, { history: "push" });
    setError("");
    onOpenChange(false);
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={open} title="Open preset">
      <div {...stylex.props(shellStyles.docsBody)}>
        <p {...stylex.props(shellStyles.docsText)}>
          Paste a preset code, shared URL, or JSON configuration.
        </p>
        <textarea
          {...stylex.props(createStyles.textarea)}
          aria-label="Preset"
          placeholder="Paste a preset or URL…"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {error ? (
          <span {...stylex.props(createStyles.error)}>{error}</span>
        ) : null}
        <div {...stylex.props(createStyles.dialogActions)}>
          <button
            {...stylex.props(shellStyles.button, shellStyles.buttonPrimary)}
            type="button"
            onClick={apply}
          >
            <UploadIcon {...stylex.props(shellStyles.icon)} />
            Apply preset
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export function CreateCustomizer() {
  const [params, setParams] = useCreateSearchParams();
  const { randomize, reset } = useCreateRandom();
  const [openPreset, setOpenPreset] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const set = React.useCallback(
    <K extends keyof CreateSearchParams>(
      key: K,
      value: CreateSearchParams[K]
    ) => {
      void setParams({ [key]: value } as Partial<CreateSearchParams>);
    },
    [setParams]
  );

  const share = async () => {
    const url = new URL(window.location.href);
    url.pathname = "/create";
    url.search = "";
    url.searchParams.set("preset", encodeCreatePreset(params));
    await navigator.clipboard.writeText(url.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <aside {...stylex.props(shellStyles.customizer)}>
        <header {...stylex.props(shellStyles.cardHeader)}>
          <MainMenu />
        </header>
        <div {...stylex.props(shellStyles.cardContent)}>
          <div {...stylex.props(shellStyles.controlGrid)}>
            <Control
              label="Style"
              options={STYLES}
              param="style"
              value={params.style}
              onChange={(value) => set("style", value as typeof params.style)}
            />
            <Control
              label="Base color"
              options={BASE_COLORS}
              param="baseColor"
              value={params.baseColor}
              onChange={(value) =>
                set("baseColor", value as typeof params.baseColor)
              }
            />
            <Control
              label="Theme"
              options={THEMES}
              param="theme"
              value={params.theme}
              onChange={(value) => set("theme", value as typeof params.theme)}
            />
            <Control
              label="Chart color"
              options={THEMES}
              param="chartColor"
              value={params.chartColor}
              onChange={(value) =>
                set("chartColor", value as typeof params.chartColor)
              }
            />
            <div {...stylex.props(shellStyles.fieldSeparator)} />
            <Control
              label="Heading"
              options={[{ label: "Inherit body", value: "inherit" }, ...FONTS]}
              param="fontHeading"
              value={params.fontHeading}
              onChange={(value) =>
                set("fontHeading", value as typeof params.fontHeading)
              }
            />
            <Control
              label="Font"
              options={FONTS}
              param="font"
              value={params.font}
              onChange={(value) => set("font", value as typeof params.font)}
            />
            <div {...stylex.props(shellStyles.fieldSeparator)} />
            <Control
              label="Icons"
              options={ICON_LIBRARIES}
              param="iconLibrary"
              value={params.iconLibrary}
              onChange={(value) =>
                set("iconLibrary", value as typeof params.iconLibrary)
              }
            />
            <Control
              label="Radius"
              options={RADII}
              param="radius"
              value={params.radius}
              onChange={(value) => set("radius", value as typeof params.radius)}
            />
            <div {...stylex.props(shellStyles.fieldSeparator)} />
            <Control
              label="Menu color"
              options={MENU_COLORS}
              param="menuColor"
              value={params.menuColor}
              onChange={(value) =>
                set("menuColor", value as typeof params.menuColor)
              }
            />
            <Control
              label="Menu accent"
              options={MENU_ACCENTS}
              param="menuAccent"
              value={params.menuAccent}
              onChange={(value) =>
                set("menuAccent", value as typeof params.menuAccent)
              }
            />
            <Control
              label="Component library"
              options={BASES}
              param="base"
              value={params.base}
              onChange={(value) => set("base", value as typeof params.base)}
            />
          </div>
        </div>
        <footer {...stylex.props(shellStyles.cardFooter)}>
          <button
            {...stylex.props(shellStyles.button)}
            type="button"
            onClick={share}
          >
            {copied ? (
              <CheckIcon {...stylex.props(shellStyles.icon)} />
            ) : (
              <ClipboardIcon {...stylex.props(shellStyles.icon)} />
            )}
            {copied ? "Copied" : "Copy preset"}
          </button>
          <button
            {...stylex.props(shellStyles.button)}
            type="button"
            onClick={() => setOpenPreset(true)}
          >
            <UploadIcon {...stylex.props(shellStyles.icon)} />
            Open preset
          </button>
          <button
            {...stylex.props(shellStyles.button)}
            type="button"
            onClick={randomize}
          >
            <ShuffleIcon {...stylex.props(shellStyles.icon)} />
            Randomize
          </button>
          <button
            {...stylex.props(shellStyles.button)}
            type="button"
            onClick={reset}
          >
            <RotateCcwIcon {...stylex.props(shellStyles.icon)} />
            Reset
          </button>
          <button
            {...stylex.props(shellStyles.button, shellStyles.buttonPrimary)}
            type="button"
            onClick={() => setOpenProject(true)}
          >
            <Code2Icon {...stylex.props(shellStyles.icon)} />
            Get code
          </button>
        </footer>
      </aside>
      <PresetDialog onOpenChange={setOpenPreset} open={openPreset} />
      <ProjectDialog onOpenChange={setOpenProject} open={openProject} />
    </>
  );
}
