import * as stylex from "@stylexjs/stylex";

import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";

export function TypesetSkeleton() {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.designer)}>
        <div {...stylex.props(styles.docsPanel, styles.skeleton)} aria-hidden />
        <div {...stylex.props(styles.preview, styles.skeleton)} aria-hidden />
        <div
          {...stylex.props(styles.customizer, styles.skeleton)}
          aria-hidden
        />
      </div>
    </div>
  );
}
