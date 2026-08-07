"use client";

import * as stylex from "@stylexjs/stylex";
import { useTheme } from "next-themes";
import * as React from "react";

import { createStyles } from "@/app/(app)/(create)/components/create.stylex";
import { useCreateHistory } from "@/app/(app)/(create)/hooks/use-history";
import { useCreateRandom } from "@/app/(app)/(create)/hooks/use-random";
import {
  serializeCreateSearchParams,
  useCreateSearchParams,
} from "@/app/(app)/(create)/lib/search-params";

export const CREATE_PARAMS_MESSAGE = "stylex-design-system-params";
export const CREATE_COMMAND_MESSAGE = "stylex-design-system-command";

type CreateCommand = "randomize" | "redo" | "reset" | "theme" | "undo";

function PreviewToolbar() {
  const [params, setParams] = useCreateSearchParams();
  const items = [
    { label: "01", value: "preview-02" },
    { label: "02", value: "preview" },
  ] as const;

  return (
    <div {...stylex.props(createStyles.previewSwitcher)}>
      {items.map((item) => (
        <button
          {...stylex.props(createStyles.previewSwitchButton)}
          data-active={params.item === item.value}
          key={item.value}
          type="button"
          onClick={() => void setParams({ item: item.value })}
        >
          {item.label}
        </button>
      ))}
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
    <section {...stylex.props(createStyles.previewShell)}>
      <div {...stylex.props(createStyles.previewBackground)}>
        <iframe
          {...stylex.props(createStyles.previewFrame)}
          ref={iframeRef}
          src={previewUrl}
          title="Design system preview"
        />
      </div>
      <PreviewToolbar />
    </section>
  );
}
