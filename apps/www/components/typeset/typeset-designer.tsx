"use client";

import * as React from "react";

import { x } from "@/lib/utils";

import { styles } from "./typeset-designer.stylex";

const fonts = {
  Geist: "Geist, ui-sans-serif, system-ui, sans-serif",
  Humanist: "Avenir, Montserrat, Corbel, sans-serif",
  Mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  Serif: "Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif",
  System: "ui-sans-serif, system-ui, sans-serif",
} as const;

const presets = {
  Article: {
    eyebrow: "Design systems",
    heading: "Typography is an interface",
    intro:
      "Good typesetting makes complex ideas feel inevitable. It gives every heading, paragraph, quotation, and aside a clear role without asking the reader to notice the system behind it.",
  },
  Changelog: {
    eyebrow: "Version 2.4",
    heading: "A calmer, faster writing experience",
    intro:
      "This release improves navigation, sharpens hierarchy, and reduces the visual noise around the work that matters.",
  },
  Documentation: {
    eyebrow: "Getting started",
    heading: "Build a readable content surface",
    intro:
      "Use a consistent scale, a comfortable measure, and enough contrast between structural levels to make scanning effortless.",
  },
} as const;

type FontName = keyof typeof fonts;
type PresetName = keyof typeof presets;

const createStyleXCode = (
  font: string,
  size: number,
  leading: number,
  measure: number
) => `import * as stylex from "@stylexjs/stylex";

export const typeset = stylex.create({
  article: {
    fontFamily: ${JSON.stringify(font)},
    fontSize: "${size}px",
    lineHeight: ${leading},
    maxWidth: "${measure}ch",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 4.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.04em",
    lineHeight: 0.98,
  },
  prose: {
    display: "grid",
    gap: "1.25em",
  },
});`;

const RangeControl = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}) => (
  <label {...x(styles.control)}>
    <span {...x(styles.label)}>{label}</span>
    <input
      {...x(styles.input)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  </label>
);

export const TypesetDesigner = () => {
  const root = x(styles.root);
  const [font, setFont] = React.useState<FontName>("Serif");
  const [fontSize, setFontSize] = React.useState(18);
  const [leading, setLeading] = React.useState(1.65);
  const [measure, setMeasure] = React.useState(66);
  const [preset, setPreset] = React.useState<PresetName>("Article");
  const content = presets[preset];
  const code = createStyleXCode(fonts[font], fontSize, leading, measure);

  const randomize = () => {
    const fontNames = Object.keys(fonts) as FontName[];
    setFont(
      fontNames[Math.floor(Math.random() * fontNames.length)] ?? "System"
    );
    setFontSize(Math.floor(Math.random() * 7) + 16);
    setLeading(Number((Math.random() * 0.35 + 1.45).toFixed(2)));
    setMeasure(Math.floor(Math.random() * 20) + 54);
  };

  const reset = () => {
    setFont("Serif");
    setFontSize(18);
    setLeading(1.65);
    setMeasure(66);
    setPreset("Article");
  };

  return (
    <div className={root.className} style={root.style}>
      <div {...x(styles.layout)}>
        <aside {...x(styles.panel)}>
          <div>
            <h1 {...x(styles.title)}>Typeset</h1>
            <p {...x(styles.label)}>
              Typography for content you don&apos;t control, built with StyleX.
            </p>
          </div>
          <div {...x(styles.controlGrid)}>
            <label {...x(styles.control)}>
              <span {...x(styles.label)}>Content</span>
              <select
                {...x(styles.select)}
                value={preset}
                onChange={(event) =>
                  setPreset(event.target.value as PresetName)
                }
              >
                {Object.keys(presets).map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
            <label {...x(styles.control)}>
              <span {...x(styles.label)}>Typeface</span>
              <select
                {...x(styles.select)}
                value={font}
                onChange={(event) => setFont(event.target.value as FontName)}
              >
                {Object.keys(fonts).map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
            <RangeControl
              label={`Size · ${fontSize}px`}
              min={14}
              max={26}
              step={1}
              value={fontSize}
              onChange={setFontSize}
            />
            <RangeControl
              label={`Leading · ${leading}`}
              min={1.2}
              max={2}
              step={0.05}
              value={leading}
              onChange={setLeading}
            />
            <RangeControl
              label={`Measure · ${measure}ch`}
              min={42}
              max={84}
              step={1}
              value={measure}
              onChange={setMeasure}
            />
          </div>
          <div {...x(styles.actionRow)}>
            <button {...x(styles.button)} type="button" onClick={randomize}>
              Randomize
            </button>
            <button {...x(styles.button)} type="button" onClick={reset}>
              Reset
            </button>
            <button
              {...x(styles.button)}
              type="button"
              onClick={() => navigator.clipboard.writeText(code)}
            >
              Copy StyleX
            </button>
          </div>
          <pre {...x(styles.code)}>
            <code>{code}</code>
          </pre>
        </aside>

        <main {...x(styles.preview)}>
          <article
            {...x(styles.article)}
            style={{
              fontFamily: fonts[font],
              fontSize,
              lineHeight: leading,
              maxWidth: `${measure}ch`,
            }}
          >
            <div {...x(styles.articleBody)}>
              <p
                style={{
                  fontFamily: "ui-sans-serif, system-ui",
                  fontSize: "0.75em",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {content.eyebrow}
              </p>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.94,
                }}
              >
                {content.heading}
              </h2>
              <p style={{ fontSize: "1.25em", lineHeight: 1.45 }}>
                {content.intro}
              </p>
              <p>
                Typography creates relationships before a reader processes a
                single sentence. Scale establishes importance, spacing groups
                ideas, and measure controls the rhythm of attention.
              </p>
              <blockquote
                style={{
                  borderInlineStart: "3px solid currentColor",
                  fontSize: "1.2em",
                  fontStyle: "italic",
                  marginInline: 0,
                  paddingInlineStart: "1.25em",
                }}
              >
                The best reading experiences feel designed, but never decorated.
              </blockquote>
              <h3
                style={{
                  fontSize: "1.65em",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                }}
              >
                A practical hierarchy
              </h3>
              <p>
                Start with body copy. Once its size, leading, and width feel
                comfortable, derive every other level from that foundation. The
                result stays coherent across articles, documentation, release
                notes, and product copy.
              </p>
              <ul
                style={{
                  display: "grid",
                  gap: "0.5em",
                  paddingInlineStart: "1.25em",
                }}
              >
                <li>Keep paragraphs within a readable measure.</li>
                <li>Use fewer weights and stronger spacing relationships.</li>
                <li>Let headings compress while body text breathes.</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};
