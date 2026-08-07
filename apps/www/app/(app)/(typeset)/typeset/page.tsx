import * as stylex from "@stylexjs/stylex";
import type { Metadata } from "next";

import { TypesetCustomizer } from "@/app/(app)/(typeset)/components/customizer";
import { TypesetDocsPanel } from "@/app/(app)/(typeset)/components/docs-panel";
import { TypesetPreview } from "@/app/(app)/(typeset)/components/preview";
import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { previewFontVariables } from "@/app/(view)/preview/fonts";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  description: "Typography for markdown you do not control, powered by StyleX.",
  title: "Typeset",
};

export default function TypesetPage() {
  const root = stylex.props(styles.root);

  return (
    <div
      className={cx(previewFontVariables, root.className)}
      style={root.style}
    >
      <div data-slot="designer" {...stylex.props(styles.designer)}>
        <TypesetDocsPanel />
        <TypesetPreview />
        <TypesetCustomizer />
      </div>
    </div>
  );
}
