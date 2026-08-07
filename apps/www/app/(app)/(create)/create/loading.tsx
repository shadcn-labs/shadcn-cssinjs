import * as stylex from "@stylexjs/stylex";

import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";

export default function CreateLoading() {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.designer)}>
        <div {...stylex.props(styles.preview, styles.skeleton)} />
        <div {...stylex.props(styles.customizer, styles.skeleton)} />
      </div>
    </div>
  );
}
