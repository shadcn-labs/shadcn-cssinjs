import * as stylex from "@stylexjs/stylex";
import type { Metadata } from "next";

import { CreateCustomizer } from "@/app/(app)/(create)/components/customizer";
import { CreatePreview } from "@/app/(app)/(create)/components/preview";
import { CreateWelcomeDialog } from "@/app/(app)/(create)/components/welcome-dialog";
import { typesetStyles as styles } from "@/app/(app)/(typeset)/components/typeset.stylex";

export const metadata: Metadata = {
  description:
    "Customize a complete React design system and generate a StyleX-powered shadcn-cssinjs preset.",
  title: "Create",
};

export default function CreatePage() {
  return (
    <div {...stylex.props(styles.root)}>
      <div data-slot="designer" {...stylex.props(styles.designer)}>
        <CreatePreview />
        <CreateCustomizer />
      </div>
      <CreateWelcomeDialog />
    </div>
  );
}
