"use client";

import * as stylex from "@stylexjs/stylex";
import * as React from "react";

import { TYPESET_COMMAND_MESSAGE } from "@/app/(app)/(typeset)/components/forward-scripts";
import { previewStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { findFont } from "@/app/(app)/(typeset)/lib/fonts";
import {
  TYPESET_MEASURES,
  TYPESET_PARAMS_MESSAGE,
  useTypesetSearchParams,
} from "@/app/(app)/(typeset)/lib/search-params";

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
const BOOLEAN_ATTRIBUTES = new Set([
  "checked",
  "disabled",
  "multiple",
  "open",
  "readonly",
  "required",
  "selected",
]);

function attributesToProps(element: Element) {
  const props: Record<string, unknown> = {};

  for (const attribute of element.attributes) {
    const name = attribute.name.toLowerCase();
    if (name === "class" || name === "style" || name.startsWith("on")) {
      continue;
    }

    if (BOOLEAN_ATTRIBUTES.has(name)) {
      props[name === "readonly" ? "readOnly" : name] = true;
      continue;
    }

    if (name === "for") {
      props.htmlFor = attribute.value;
    } else if (name === "colspan") {
      props.colSpan = Number(attribute.value);
    } else if (name === "rowspan") {
      props.rowSpan = Number(attribute.value);
    } else if (name === "datetime") {
      props.dateTime = attribute.value;
    } else if (name === "tabindex") {
      props.tabIndex = Number(attribute.value);
    } else {
      props[name] = attribute.value;
    }
  }

  return props;
}

function styleForTag({
  tag,
  parentTag,
  previousTag,
  first,
  headingFont,
}: {
  tag: string;
  parentTag?: string;
  previousTag?: string;
  first: boolean;
  headingFont: string;
}) {
  let flow = null;
  if (first) {
    flow = styles.firstChild;
  } else if (previousTag && HEADING_TAGS.has(previousTag)) {
    flow = styles.afterHeading;
  }

  switch (tag) {
    case "a": {
      return stylex.props(styles.inlineLink);
    }
    case "blockquote": {
      return stylex.props(styles.blockquote, flow);
    }
    case "code": {
      return stylex.props(parentTag === "pre" ? styles.preCode : styles.code);
    }
    case "dd": {
      return stylex.props(styles.dd);
    }
    case "del":
    case "s":
    case "small": {
      return stylex.props(styles.muted);
    }
    case "details": {
      return stylex.props(styles.details, flow);
    }
    case "figcaption": {
      return stylex.props(styles.figcaption);
    }
    case "figure": {
      return stylex.props(styles.figure, flow);
    }
    case "h1": {
      return stylex.props(styles.heading(headingFont), styles.h1, flow);
    }
    case "h2": {
      return stylex.props(styles.heading(headingFont), styles.h2, flow);
    }
    case "h3": {
      return stylex.props(styles.heading(headingFont), styles.h3, flow);
    }
    case "h4": {
      return stylex.props(styles.heading(headingFont), styles.h4, flow);
    }
    case "h5": {
      return stylex.props(styles.heading(headingFont), styles.h5, flow);
    }
    case "h6": {
      return stylex.props(styles.heading(headingFont), styles.h6, flow);
    }
    case "hr": {
      return stylex.props(styles.hr, flow);
    }
    case "img": {
      return stylex.props(styles.image);
    }
    case "li": {
      return stylex.props(styles.listItem);
    }
    case "mark": {
      return stylex.props(styles.mark);
    }
    case "ol": {
      return stylex.props(styles.list, styles.orderedList, flow);
    }
    case "p": {
      return stylex.props(styles.paragraph, flow);
    }
    case "pre": {
      return stylex.props(styles.pre, flow);
    }
    case "section": {
      return stylex.props(styles.section, flow);
    }
    case "strong":
    case "b": {
      return stylex.props(styles.strong);
    }
    case "summary": {
      return stylex.props(styles.summary);
    }
    case "table": {
      return stylex.props(styles.table, flow);
    }
    case "td": {
      return stylex.props(styles.tableCell);
    }
    case "th": {
      return stylex.props(styles.tableCell, styles.tableHead);
    }
    case "ul": {
      return stylex.props(styles.list, styles.unorderedList, flow);
    }
    default: {
      return {};
    }
  }
}

function renderChildren(
  parent: ParentNode,
  headingFont: string,
  parentTag?: string
): React.ReactNode[] {
  const nodes = [...parent.childNodes];
  let previousTag: string | undefined;

  return nodes.map((node, index): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const element = node as Element;
    const tag = element.tagName.toLowerCase();
    const styleProps = styleForTag({
      first: previousTag === undefined,
      headingFont,
      parentTag,
      previousTag,
      tag,
    });
    const props = {
      ...attributesToProps(element),
      ...styleProps,
      key: `${tag}-${index}`,
    };
    const children: React.ReactNode[] = renderChildren(
      element,
      headingFont,
      tag
    );
    previousTag = tag;

    return React.createElement(tag, props, ...children);
  });
}

function ParsedFixture({
  html,
  headingFont,
}: {
  html: string;
  headingFont: string;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return React.useMemo(() => {
    if (!mounted) {
      return null;
    }

    const document = new DOMParser().parseFromString(html, "text/html");
    return renderChildren(document.body, headingFont);
  }, [headingFont, html, mounted]);
}

export function TypesetFixture({
  html,
  chatQuestion,
}: {
  html: string;
  chatQuestion?: string;
}) {
  const [params, setParams] = useTypesetSearchParams();
  const bodyFont =
    findFont(params.body)?.value ?? "ui-sans-serif, system-ui, sans-serif";
  const headingFont =
    params.heading === "inherit"
      ? bodyFont
      : (findFont(params.heading)?.value ?? bodyFont);
  const monoFont =
    findFont(params.mono)?.value ??
    "ui-monospace, SFMono-Regular, Menlo, monospace";
  const measure =
    TYPESET_MEASURES.find((option) => option.value === params.measure)?.width ??
    "37em";

  React.useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.data?.type === TYPESET_PARAMS_MESSAGE &&
        event.data.data
      ) {
        void setParams(event.data.data, { history: "replace" });
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [setParams]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        (event.target instanceof HTMLElement &&
          event.target.isContentEditable) ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      let command: string | null = null;
      const key = event.key.toLowerCase();

      if ((event.metaKey || event.ctrlKey) && key === "z") {
        command = event.shiftKey ? "redo" : "undo";
      } else if (key === "r" && !event.metaKey && !event.ctrlKey) {
        command = event.shiftKey ? "reset" : "shuffle";
      } else if (key === "d" && !event.metaKey && !event.ctrlKey) {
        command = "toggle-theme";
      }

      if (command && window.parent !== window) {
        event.preventDefault();
        window.parent.postMessage(
          { command, type: TYPESET_COMMAND_MESSAGE },
          window.location.origin
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const content = (
    <div
      {...stylex.props(
        styles.typeset,
        styles.root(params.leading, params.flow, monoFont)
      )}
    >
      <ParsedFixture headingFont={headingFont} html={html} />
    </div>
  );

  return (
    <main {...stylex.props(styles.previewPage)}>
      <div
        {...stylex.props(
          styles.content(bodyFont, `${params.scale}px`, measure),
          Boolean(chatQuestion) && styles.chat
        )}
      >
        {chatQuestion ? (
          <>
            <div {...stylex.props(styles.chatQuestion)}>{chatQuestion}</div>
            {content}
          </>
        ) : (
          content
        )}
      </div>
    </main>
  );
}
