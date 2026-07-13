import * as stylex from "@stylexjs/stylex";
import { Suspense } from "react";

import { previewStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";
import { previewFontVariables } from "@/app/(view)/preview/fonts";
import { cx } from "@/lib/utils";

export default function TypesetPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scope = stylex.props(styles.fontScope);

  return (
    // The fixture renderer reads URL state through Nuqs. Keep that client
    // bailout inside the preview subtree so static fixture pages can render.
    <Suspense>
      <div
        className={cx(previewFontVariables, scope.className)}
        style={scope.style}
      >
        {children}
      </div>
    </Suspense>
  );
}
