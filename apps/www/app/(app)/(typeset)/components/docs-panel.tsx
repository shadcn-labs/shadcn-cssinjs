"use client";

import * as stylex from "@stylexjs/stylex";
import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { findFontDefinition } from "@/app/(app)/(typeset)/lib/fonts";
import {
  TYPESET_MEASURES,
  useTypesetSearchParams,
} from "@/app/(app)/(typeset)/lib/search-params";

function buildStyleXCode({
  body,
  heading,
  mono,
  scale,
  leading,
  flow,
  measure,
}: ReturnType<typeof useTypesetSearchParams>[0]) {
  const bodyFont = findFontDefinition(body);
  const headingFont =
    heading === "inherit" ? bodyFont : findFontDefinition(heading);
  const monoFont = findFontDefinition(mono);
  const maxWidth =
    TYPESET_MEASURES.find((option) => option.value === measure)?.width ??
    "37em";

  return `import * as stylex from "@stylexjs/stylex";

export const typeset = stylex.create({
  root: {
    color: "var(--foreground)",
    fontFamily: ${JSON.stringify(bodyFont?.family ?? "ui-sans-serif, system-ui")},
    fontSize: "${scale}px",
    lineHeight: ${leading},
    maxWidth: "${maxWidth}",
    overflowWrap: "break-word",
  },
  flow: {
    marginBlockEnd: 0,
    marginBlockStart: "${flow}",
  },
  heading: {
    fontFamily: ${JSON.stringify(headingFont?.family ?? "inherit")},
    fontWeight: 600,
  },
  code: {
    fontFamily: ${JSON.stringify(monoFont?.family ?? "ui-monospace, monospace")},
  },
});`;
}

function buildPrompt(params: ReturnType<typeof useTypesetSearchParams>[0]) {
  const body = findFontDefinition(params.body)?.title ?? params.body;
  const heading =
    params.heading === "inherit"
      ? `inherit ${body}`
      : (findFontDefinition(params.heading)?.title ?? params.heading);
  const mono = findFontDefinition(params.mono)?.title ?? params.mono;
  const measure = TYPESET_MEASURES.find(
    (option) => option.value === params.measure
  );

  return `Build a semantic typography surface using StyleX only.

- Body font: ${body}
- Heading font: ${heading}
- Monospace font: ${mono}
- Base size: ${params.scale}px
- Line height: ${params.leading}
- Vertical flow: ${params.flow}
- Reading measure: ${measure?.label ?? `${params.measure}ch`}

Style every rendered semantic element with stylex.create and stylex.props. Do not use Tailwind utility classes, descendant selectors, or a prose plugin. Preserve accessible focus states, responsive sizing, tables, lists, code blocks, blockquotes, images, and reduced-motion behavior.`;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      {...stylex.props(styles.iconButton, styles.docsCopy)}
      aria-label="Copy"
      title="Copy"
      type="button"
      onClick={copy}
    >
      {copied ? (
        <CheckIcon {...stylex.props(styles.icon)} />
      ) : (
        <CopyIcon {...stylex.props(styles.icon)} />
      )}
    </button>
  );
}

export function TypesetDocsContent() {
  const [params] = useTypesetSearchParams();
  const [tab, setTab] = React.useState<"docs" | "prompt">("docs");
  const code = buildStyleXCode(params);
  const prompt = buildPrompt(params);
  const value = tab === "docs" ? code : prompt;

  return (
    <div {...stylex.props(styles.docsBody)}>
      <div {...stylex.props(styles.tabs)}>
        <button
          {...stylex.props(styles.tab)}
          data-active={tab === "docs"}
          type="button"
          onClick={() => setTab("docs")}
        >
          Docs
        </button>
        <button
          {...stylex.props(styles.tab)}
          data-active={tab === "prompt"}
          type="button"
          onClick={() => setTab("prompt")}
        >
          Prompt
        </button>
      </div>

      {tab === "docs" ? (
        <>
          <section {...stylex.props(styles.docsSection)}>
            <h3 {...stylex.props(styles.docsTitle)}>StyleX typeset recipe</h3>
            <p {...stylex.props(styles.docsText)}>
              Use semantic elements and apply the generated StyleX styles at the
              element boundary. This preserves the original typeset designer
              behavior without relying on descendant selectors.
            </p>
          </section>
          <section {...stylex.props(styles.docsSection)}>
            <h3 {...stylex.props(styles.docsTitle)}>Install</h3>
            <div {...stylex.props(styles.docsSection)}>
              <pre {...stylex.props(styles.code)}>
                <code>pnpm add @stylexjs/stylex</code>
              </pre>
            </div>
          </section>
        </>
      ) : (
        <section {...stylex.props(styles.docsSection)}>
          <h3 {...stylex.props(styles.docsTitle)}>AI implementation prompt</h3>
          <p {...stylex.props(styles.docsText)}>
            This prompt carries the live settings and the StyleX-only
            constraints into another project.
          </p>
        </section>
      )}

      <div {...stylex.props(styles.control)}>
        <CopyButton value={value} />
        <pre {...stylex.props(styles.code)}>
          <code>{value}</code>
        </pre>
      </div>
    </div>
  );
}

export function TypesetDocsPanel() {
  return (
    <aside {...stylex.props(styles.docsPanel)}>
      <header {...stylex.props(styles.docsHeader)}>
        <h2 {...stylex.props(styles.docsTitle)}>Typeset</h2>
        <span {...stylex.props(styles.controlLabel)}>StyleX</span>
      </header>
      <TypesetDocsContent />
    </aside>
  );
}
