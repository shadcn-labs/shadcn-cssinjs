"use client";

import * as stylex from "@stylexjs/stylex";
import {
  ExternalLinkIcon,
  Redo2Icon,
  RotateCcwIcon,
  ShuffleIcon,
  SunMoonIcon,
  Undo2Icon,
} from "lucide-react";
import * as React from "react";

import { TYPESET_COMMAND_MESSAGE } from "@/app/(app)/(typeset)/components/forward-scripts";
import type { TypesetCommand } from "@/app/(app)/(typeset)/components/forward-scripts";
import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { useHistory } from "@/app/(app)/(typeset)/hooks/use-history";
import { useShuffle } from "@/app/(app)/(typeset)/hooks/use-shuffle";
import { useThemeToggle } from "@/app/(app)/(typeset)/hooks/use-theme-toggle";
import { AVAILABLE_CONTENT_OPTIONS } from "@/app/(app)/(typeset)/lib/fixtures";
import {
  serializeTypesetSearchParams,
  TYPESET_PARAMS_MESSAGE,
  useTypesetSearchParams,
} from "@/app/(app)/(typeset)/lib/search-params";

function ToolbarButton({
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

function TypesetToolbar() {
  const [params, setParams] = useTypesetSearchParams();
  const { shuffle, reset } = useShuffle();
  const { canGoBack, canGoForward, goBack, goForward } = useHistory();
  const { toggleTheme } = useThemeToggle({ shortcut: false });
  const previewUrl = serializeTypesetSearchParams(
    `/preview/typeset/${params.item}`,
    params
  );

  return (
    <div {...stylex.props(styles.toolbar)}>
      <div {...stylex.props(styles.toolbarGroup)}>
        <ToolbarButton disabled={!canGoBack} label="Undo" onClick={goBack}>
          <Undo2Icon {...stylex.props(styles.icon)} />
        </ToolbarButton>
        <ToolbarButton
          disabled={!canGoForward}
          label="Redo"
          onClick={goForward}
        >
          <Redo2Icon {...stylex.props(styles.icon)} />
        </ToolbarButton>
        <ToolbarButton label="Shuffle" onClick={shuffle}>
          <ShuffleIcon {...stylex.props(styles.icon)} />
        </ToolbarButton>
        <ToolbarButton label="Reset" onClick={reset}>
          <RotateCcwIcon {...stylex.props(styles.icon)} />
        </ToolbarButton>
        <ToolbarButton label="Toggle theme" onClick={toggleTheme}>
          <SunMoonIcon {...stylex.props(styles.icon)} />
        </ToolbarButton>
      </div>
      <div {...stylex.props(styles.toolbarGroup)}>
        <select
          {...stylex.props(styles.controlSelect)}
          aria-label="Preview content"
          value={params.item}
          onChange={(event) =>
            void setParams({
              item: event.target.value as typeof params.item,
            })
          }
        >
          {AVAILABLE_CONTENT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <a
          {...stylex.props(styles.iconButton)}
          aria-label="Open preview in new tab"
          href={previewUrl}
          rel="noreferrer"
          target="_blank"
          title="Open preview in new tab"
        >
          <ExternalLinkIcon {...stylex.props(styles.icon)} />
        </a>
      </div>
    </div>
  );
}

export function TypesetPreview() {
  const [params] = useTypesetSearchParams();
  const { shuffle, reset } = useShuffle();
  const { goBack, goForward } = useHistory();
  const { toggleTheme } = useThemeToggle({ shortcut: false });
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [previewUrl, setPreviewUrl] = React.useState(() =>
    serializeTypesetSearchParams(`/preview/typeset/${params.item}`, params)
  );
  const itemRef = React.useRef(params.item);

  React.useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    if (params.item !== itemRef.current) {
      itemRef.current = params.item;
      setPreviewUrl(
        serializeTypesetSearchParams(`/preview/typeset/${params.item}`, params)
      );
      return;
    }

    const sendParams = () => {
      iframe.contentWindow?.postMessage(
        { data: params, type: TYPESET_PARAMS_MESSAGE },
        window.location.origin
      );
    };

    sendParams();
    iframe.addEventListener("load", sendParams);
    return () => iframe.removeEventListener("load", sendParams);
  }, [params]);

  React.useEffect(() => {
    const commands: Record<TypesetCommand, () => void> = {
      redo: goForward,
      reset,
      shuffle,
      "toggle-theme": toggleTheme,
      undo: goBack,
    };

    const handleMessage = (event: MessageEvent) => {
      const iframeWindow = iframeRef.current?.contentWindow;
      if (
        !iframeWindow ||
        event.origin !== window.location.origin ||
        event.source !== iframeWindow ||
        !event.data ||
        typeof event.data !== "object" ||
        event.data.type !== TYPESET_COMMAND_MESSAGE
      ) {
        return;
      }

      const { command } = event.data;
      if (typeof command === "string" && command in commands) {
        commands[command as TypesetCommand]();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [goBack, goForward, reset, shuffle, toggleTheme]);

  return (
    <section {...stylex.props(styles.preview)}>
      <iframe
        {...stylex.props(styles.previewFrame)}
        ref={iframeRef}
        src={previewUrl}
        title="Typeset preview"
      />
      <TypesetToolbar />
    </section>
  );
}
