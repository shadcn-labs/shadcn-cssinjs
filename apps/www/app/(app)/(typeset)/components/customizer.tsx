"use client";

import * as stylex from "@stylexjs/stylex";
import {
  Code2Icon,
  LockIcon,
  MenuIcon,
  Redo2Icon,
  RotateCcwIcon,
  ShuffleIcon,
  SunMoonIcon,
  Undo2Icon,
  UnlockIcon,
} from "lucide-react";
import * as React from "react";

import { TypesetDocsContent } from "@/app/(app)/(typeset)/components/docs-panel";
import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { useHistory } from "@/app/(app)/(typeset)/hooks/use-history";
import { useLocks } from "@/app/(app)/(typeset)/hooks/use-locks";
import type { LockableParam } from "@/app/(app)/(typeset)/hooks/use-locks";
import { useShuffle } from "@/app/(app)/(typeset)/hooks/use-shuffle";
import { useThemeToggle } from "@/app/(app)/(typeset)/hooks/use-theme-toggle";
import { FONTS } from "@/app/(app)/(typeset)/lib/fonts";
import {
  TYPESET_FLOWS,
  TYPESET_LEADINGS,
  TYPESET_MEASURES,
  TYPESET_SIZES,
  useTypesetSearchParams,
} from "@/app/(app)/(typeset)/lib/search-params";
import type { TypesetSearchParams } from "@/app/(app)/(typeset)/lib/search-params";

interface Option {
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
      {...stylex.props(styles.iconButton)}
      aria-label={label}
      title={label}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function LockButton({ param }: { param: LockableParam }) {
  const { isLocked, toggleLock } = useLocks();
  const locked = isLocked(param);

  return (
    <div {...stylex.props(styles.lockButton)}>
      <IconButton
        label={locked ? `Unlock ${param}` : `Lock ${param}`}
        onClick={() => toggleLock(param)}
      >
        {locked ? (
          <LockIcon {...stylex.props(styles.icon)} />
        ) : (
          <UnlockIcon {...stylex.props(styles.icon)} />
        )}
      </IconButton>
    </div>
  );
}

function Control({
  label,
  param,
  options,
  value,
  onChange,
}: {
  label: string;
  param: LockableParam;
  options: readonly Option[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label {...stylex.props(styles.control)}>
      <span {...stylex.props(styles.controlLabel)}>{label}</span>
      <select
        {...stylex.props(styles.controlSelect)}
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

function MainMenu() {
  const { canGoBack, canGoForward, goBack, goForward } = useHistory();
  const { reset } = useShuffle();
  const { toggleTheme } = useThemeToggle();

  return (
    <div {...stylex.props(styles.menu)}>
      <MenuIcon {...stylex.props(styles.icon)} aria-hidden />
      <span {...stylex.props(styles.controlValue)}>Menu</span>
      <IconButton disabled={!canGoBack} label="Undo" onClick={goBack}>
        <Undo2Icon {...stylex.props(styles.icon)} />
      </IconButton>
      <IconButton disabled={!canGoForward} label="Redo" onClick={goForward}>
        <Redo2Icon {...stylex.props(styles.icon)} />
      </IconButton>
      <IconButton label="Toggle theme" onClick={toggleTheme}>
        <SunMoonIcon {...stylex.props(styles.icon)} />
      </IconButton>
      <IconButton label="Reset" onClick={reset}>
        <RotateCcwIcon {...stylex.props(styles.icon)} />
      </IconButton>
    </div>
  );
}

export function TypesetGetCodeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      {...stylex.props(styles.dialogOverlay)}
      aria-label="Typeset code"
      role="dialog"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onOpenChange(false);
        }
      }}
    >
      <div {...stylex.props(styles.dialog)}>
        <div {...stylex.props(styles.docsHeader)}>
          <h2 {...stylex.props(styles.docsTitle)}>Get typeset code</h2>
          <IconButton label="Close" onClick={() => onOpenChange(false)}>
            <Code2Icon {...stylex.props(styles.icon)} />
          </IconButton>
        </div>
        <TypesetDocsContent />
      </div>
    </div>
  );
}

export function TypesetCustomizer() {
  const [params, setParams] = useTypesetSearchParams();
  const { shuffle } = useShuffle();
  const [codeOpen, setCodeOpen] = React.useState(false);

  const set = React.useCallback(
    <K extends keyof TypesetSearchParams>(key: K, value: string) => {
      void setParams({ [key]: value } as Partial<TypesetSearchParams>);
    },
    [setParams]
  );

  const bodyFonts = FONTS.filter((font) => font.type !== "mono");
  const monoFonts = FONTS.filter((font) => font.type === "mono");
  const fontOptions = bodyFonts.map((font) => ({
    label: font.label,
    value: font.id,
  }));
  const headingOptions = [
    { label: "Inherit body", value: "inherit" },
    ...fontOptions,
  ];

  return (
    <>
      <aside {...stylex.props(styles.customizer)}>
        <header {...stylex.props(styles.cardHeader)}>
          <MainMenu />
        </header>
        <div {...stylex.props(styles.cardContent)}>
          <div {...stylex.props(styles.controlGrid)}>
            <Control
              label="Measure"
              param="measure"
              options={TYPESET_MEASURES}
              value={params.measure}
              onChange={(value) => set("measure", value)}
            />
            <div {...stylex.props(styles.fieldSeparator)} />
            <Control
              label="Heading"
              param="heading"
              options={headingOptions}
              value={params.heading}
              onChange={(value) => set("heading", value)}
            />
            <Control
              label="Body"
              param="body"
              options={fontOptions}
              value={params.body}
              onChange={(value) => set("body", value)}
            />
            <Control
              label="Mono"
              param="mono"
              options={monoFonts.map((font) => ({
                label: font.label,
                value: font.id,
              }))}
              value={params.mono}
              onChange={(value) => set("mono", value)}
            />
            <div {...stylex.props(styles.fieldSeparator)} />
            <Control
              label="Size"
              param="scale"
              options={TYPESET_SIZES}
              value={params.scale}
              onChange={(value) => set("scale", value)}
            />
            <Control
              label="Leading"
              param="leading"
              options={TYPESET_LEADINGS}
              value={params.leading}
              onChange={(value) => set("leading", value)}
            />
            <Control
              label="Flow"
              param="flow"
              options={TYPESET_FLOWS}
              value={params.flow}
              onChange={(value) => set("flow", value)}
            />
          </div>
        </div>
        <footer {...stylex.props(styles.cardFooter)}>
          <button
            {...stylex.props(styles.button, styles.buttonPrimary)}
            type="button"
            onClick={shuffle}
          >
            <ShuffleIcon {...stylex.props(styles.icon)} />
            Shuffle
          </button>
          <button
            {...stylex.props(styles.button)}
            type="button"
            onClick={() => setCodeOpen(true)}
          >
            <Code2Icon {...stylex.props(styles.icon)} />
            Get Code
          </button>
        </footer>
      </aside>
      <TypesetGetCodeDialog open={codeOpen} onOpenChange={setCodeOpen} />
    </>
  );
}
