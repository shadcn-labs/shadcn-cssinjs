"use client";

import * as stylex from "@stylexjs/stylex";
import { ExternalLinkIcon } from "lucide-react";
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
import { darkColors } from "@/registry/bases/stylex/tokens.stylex";

function TypesetToolbar() {
  const [params, setParams] = useTypesetSearchParams();
  const previewUrl = serializeTypesetSearchParams(
    `/preview/typeset/${params.item}`,
    params
  );
  const toolbarGroup = stylex.props(darkColors, styles.toolbarGroup);

  return (
    <div {...stylex.props(styles.toolbar)}>
      <div {...toolbarGroup} className={`dark ${toolbarGroup.className ?? ""}`}>
        {AVAILABLE_CONTENT_OPTIONS.map((option, index) => (
          <button
            {...stylex.props(styles.toolbarPill)}
            aria-label={option.label}
            data-active={params.item === option.value}
            key={option.value}
            title={option.label}
            type="button"
            onClick={() => void setParams({ item: option.value })}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <div {...toolbarGroup} className={`dark ${toolbarGroup.className ?? ""}`}>
        <a
          {...stylex.props(styles.toolbarLink)}
          aria-label="Open preview in new tab"
          href={previewUrl}
          rel="noreferrer"
          target="_blank"
          title="Open preview in new tab"
        >
          <ExternalLinkIcon {...stylex.props(styles.toolbarLinkIcon)} />
          <span>Open in New Tab</span>
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
