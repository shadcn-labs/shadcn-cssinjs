"use client";

import * as stylex from "@stylexjs/stylex";
import { CheckIcon, CopyIcon } from "lucide-react";
import Link from "next/link";
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
      {...stylex.props(styles.docsButton)}
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
      Copy typeset.stylex.ts
    </button>
  );
}

export function TypesetDocsContent() {
  const [params] = useTypesetSearchParams();
  const [framework, setFramework] = React.useState("next");
  const [tab, setTab] = React.useState<"docs" | "prompt">("docs");
  const code = buildStyleXCode(params);
  const prompt = buildPrompt(params);
  const value = tab === "docs" ? code : prompt;

  return (
    <div {...stylex.props(styles.docsContent)}>
      <div {...stylex.props(styles.docsToolbar)}>
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
        <select
          {...stylex.props(styles.docsFrameworkSelect)}
          aria-label="Framework"
          value={framework}
          onChange={(event) => setFramework(event.target.value)}
        >
          <option value="next">Next.js</option>
          <option value="vite">Vite</option>
          <option value="astro">Astro</option>
          <option value="remix">Remix</option>
        </select>
      </div>
      <div {...stylex.props(styles.docsScroll)}>
        {tab === "docs" ? (
          <>
            <section {...stylex.props(styles.docsSection)}>
              <h3 {...stylex.props(styles.docsTitle)}>
                1. Create typeset.stylex.ts
              </h3>
              <p {...stylex.props(styles.docsText)}>
                Copy the generated StyleX recipe into a typeset.stylex.ts file
                next to the surface that renders your rich content.
              </p>
              <CopyButton value={code} />
            </section>
            <section {...stylex.props(styles.docsSection)}>
              <h3 {...stylex.props(styles.docsTitle)}>2. Add the fonts</h3>
              <p {...stylex.props(styles.docsText)}>
                Load the fonts with{" "}
                {framework === "next" ? "next/font" : "@fontsource"} in your
                root layout.
              </p>
            </section>
          </>
        ) : (
          <section {...stylex.props(styles.docsSection)}>
            <h3 {...stylex.props(styles.docsTitle)}>
              AI implementation prompt
            </h3>
            <p {...stylex.props(styles.docsText)}>
              This prompt carries the live settings and the StyleX-only
              constraints into another project.
            </p>
          </section>
        )}

        <div {...stylex.props(styles.docsCodeWrap)}>
          <pre {...stylex.props(styles.code)}>
            <code>{value}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export function TypesetDocsPanel() {
  return (
    <aside {...stylex.props(styles.docsColumn)}>
      <div {...stylex.props(styles.docsPanel)}>
        <TypesetDocsContent />
      </div>
      <Link {...stylex.props(styles.docsLink)} href="/docs/typeset">
        Read the docs
      </Link>
    </aside>
  );
}
