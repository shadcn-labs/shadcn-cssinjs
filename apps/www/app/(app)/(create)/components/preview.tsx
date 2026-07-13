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
import { useTheme } from "next-themes";
import * as React from "react";

import { createStyles } from "@/app/(app)/(create)/components/create.stylex";
import { useCreateHistory } from "@/app/(app)/(create)/hooks/use-history";
import { useCreateRandom } from "@/app/(app)/(create)/hooks/use-random";
import { PREVIEW_ITEMS } from "@/app/(app)/(create)/lib/config";
import {
  serializeCreateSearchParams,
  useCreateSearchParams,
} from "@/app/(app)/(create)/lib/search-params";
import { typesetStyles as shellStyles } from "@/app/(app)/(typeset)/components/typeset.stylex";

export const CREATE_PARAMS_MESSAGE = "stylex-design-system-params";
export const CREATE_COMMAND_MESSAGE = "stylex-design-system-command";

type CreateCommand = "randomize" | "redo" | "reset" | "theme" | "undo";

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

function PreviewToolbar() {
  const [params, setParams] = useCreateSearchParams();
  const { randomize, reset } = useCreateRandom();
  const { canGoBack, canGoForward, goBack, goForward } = useCreateHistory();
  const { resolvedTheme, setTheme } = useTheme();
  const previewUrl = serializeCreateSearchParams(
    `/preview/stylex/${params.item}`,
    params
  );

  return (
    <div {...stylex.props(shellStyles.toolbar)}>
      <div {...stylex.props(shellStyles.toolbarGroup)}>
        <ToolbarButton disabled={!canGoBack} label="Undo" onClick={goBack}>
          <Undo2Icon {...stylex.props(shellStyles.icon)} />
        </ToolbarButton>
        <ToolbarButton
          disabled={!canGoForward}
          label="Redo"
          onClick={goForward}
        >
          <Redo2Icon {...stylex.props(shellStyles.icon)} />
        </ToolbarButton>
        <ToolbarButton label="Randomize" onClick={randomize}>
          <ShuffleIcon {...stylex.props(shellStyles.icon)} />
        </ToolbarButton>
        <ToolbarButton label="Reset" onClick={reset}>
          <RotateCcwIcon {...stylex.props(shellStyles.icon)} />
        </ToolbarButton>
        <ToolbarButton
          label="Toggle theme"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <SunMoonIcon {...stylex.props(shellStyles.icon)} />
        </ToolbarButton>
      </div>
      <div {...stylex.props(shellStyles.toolbarGroup)}>
        <select
          {...stylex.props(shellStyles.controlSelect)}
          aria-label="Preview"
          value={params.item}
          onChange={(event) =>
            void setParams({ item: event.target.value as typeof params.item })
          }
        >
          {PREVIEW_ITEMS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <label {...stylex.props(shellStyles.control)}>
          <span {...stylex.props(shellStyles.controlLabel)}>Scale</span>
          <input
            {...stylex.props(createStyles.range)}
            aria-label="Preview scale"
            max={120}
            min={65}
            type="range"
            value={params.size}
            onChange={(event) =>
              void setParams({ size: Number(event.target.value) })
            }
          />
        </label>
        <a
          {...stylex.props(shellStyles.iconButton)}
          aria-label="Open preview in new tab"
          href={previewUrl}
          rel="noreferrer"
          target="_blank"
          title="Open preview in new tab"
        >
          <ExternalLinkIcon {...stylex.props(shellStyles.icon)} />
        </a>
      </div>
    </div>
  );
}

export function CreatePreview() {
  const [params] = useCreateSearchParams();
  const { randomize, reset } = useCreateRandom();
  const { goBack, goForward } = useCreateHistory();
  const { resolvedTheme, setTheme } = useTheme();
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [previewUrl, setPreviewUrl] = React.useState(() =>
    serializeCreateSearchParams(`/preview/stylex/${params.item}`, params)
  );
  const routeRef = React.useRef(`${params.base}:${params.item}`);

  React.useEffect(() => {
    const route = `${params.base}:${params.item}`;
    if (route !== routeRef.current) {
      routeRef.current = route;
      setPreviewUrl(
        serializeCreateSearchParams(`/preview/stylex/${params.item}`, params)
      );
      return;
    }

    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }
    const send = () =>
      iframe.contentWindow?.postMessage(
        { data: params, type: CREATE_PARAMS_MESSAGE },
        window.location.origin
      );
    send();
    iframe.addEventListener("load", send);
    return () => iframe.removeEventListener("load", send);
  }, [params]);

  React.useEffect(() => {
    const commands: Record<CreateCommand, () => void> = {
      randomize,
      redo: goForward,
      reset,
      theme: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      undo: goBack,
    };
    const receive = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
        !event.data ||
        typeof event.data !== "object" ||
        event.data.type !== CREATE_COMMAND_MESSAGE
      ) {
        return;
      }
      const { command } = event.data;
      if (typeof command === "string" && command in commands) {
        commands[command as CreateCommand]();
      }
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [goBack, goForward, randomize, reset, resolvedTheme, setTheme]);

  return (
    <section {...stylex.props(shellStyles.preview)}>
      <div {...stylex.props(createStyles.previewBackground)}>
        <iframe
          {...stylex.props(
            createStyles.previewFrame,
            createStyles.previewScale(params.size)
          )}
          ref={iframeRef}
          src={previewUrl}
          title="Design system preview"
        />
      </div>
      <PreviewToolbar />
    </section>
  );
}
