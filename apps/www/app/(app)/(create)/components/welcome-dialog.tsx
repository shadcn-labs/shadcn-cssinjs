"use client";

import * as stylex from "@stylexjs/stylex";
import * as React from "react";

import { createStyles } from "@/app/(app)/(create)/components/create.stylex";
import { typesetStyles as shellStyles } from "@/app/(app)/(typeset)/components/typeset.stylex";

const STORAGE_KEY = "shadcn-cssinjs-create-welcome";

export function CreateWelcomeDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(localStorage.getItem(STORAGE_KEY) !== "dismissed");
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      {...stylex.props(shellStyles.dialogOverlay)}
      aria-modal="true"
      role="dialog"
    >
      <div {...stylex.props(shellStyles.dialog)}>
        <div {...stylex.props(createStyles.welcomeArt)}>
          <div {...stylex.props(createStyles.welcomeMark)}>Sx</div>
        </div>
        <div {...stylex.props(shellStyles.docsBody)}>
          <h2 {...stylex.props(shellStyles.docsTitle)}>
            Build your own shadcn-cssinjs
          </h2>
          <p {...stylex.props(shellStyles.docsText)}>
            Customize the component library, StyleX visual style, colors, fonts,
            icons, radius, menu treatment, direction, and framework. The
            generated preset is ready for the CLI.
          </p>
          <button
            {...stylex.props(shellStyles.button, shellStyles.buttonPrimary)}
            type="button"
            onClick={close}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
