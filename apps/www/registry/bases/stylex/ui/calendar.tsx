"use client";

import * as stylex from "@stylexjs/stylex";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  captionLabel: {
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  day: {
    height: "2.25rem",
    padding: 0,
    textAlign: "center",
    width: "2.25rem",
  },
  dayButton: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.875rem",
    height: "2.25rem",
    justifyContent: "center",
    outline: "none",
    width: "2.25rem",
  },
  dayDisabled: {
    cursor: "not-allowed",
    opacity: 0.4,
  },
  dayOutside: {
    color: colors.mutedForeground,
    opacity: 0.5,
  },
  daySelected: {
    backgroundColor: { ":hover": colors.primary, default: colors.primary },
    color: {
      ":hover": colors.primaryForeground,
      default: colors.primaryForeground,
    },
  },
  dayToday: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  grid: {
    borderCollapse: "collapse",
    marginTop: "0.25rem",
    width: "100%",
  },
  month: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  monthCaption: {
    alignItems: "center",
    display: "flex",
    height: "2rem",
    justifyContent: "center",
    position: "relative",
  },
  months: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "relative",
  },
  nav: {
    alignItems: "center",
    display: "flex",
    insetInline: 0,
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
  },
  navButton: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: colors.foreground,
    cursor: "pointer",
    display: "inline-flex",
    height: "1.75rem",
    justifyContent: "center",
    opacity: { ":hover": 1, default: 0.6 },
    outline: "none",
    width: "1.75rem",
    zIndex: 10,
  },
  root: {
    padding: "0.75rem",
    width: "fit-content",
  },
  weekday: {
    color: colors.mutedForeground,
    fontSize: "0.8rem",
    fontWeight: 400,
    height: "2.25rem",
    paddingBottom: "0.25rem",
    width: "2.25rem",
  },
});

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) => (
  <DayPicker
    {...stylex.props(styles.root, customClassName(className))}
    classNames={{
      caption_label: stylex.props(styles.captionLabel).className,
      day: stylex.props(styles.day).className,
      month: stylex.props(styles.month).className,
      month_caption: stylex.props(styles.monthCaption).className,
      month_grid: stylex.props(styles.grid).className,
      months: stylex.props(styles.months).className,
      nav: stylex.props(styles.nav).className,
      weekday: stylex.props(styles.weekday).className,
      ...classNames,
    }}
    components={{
      Chevron: ({ orientation, ...iconProps }) =>
        orientation === "left" ? (
          <ChevronLeftIcon size={16} {...iconProps} />
        ) : (
          <ChevronRightIcon size={16} {...iconProps} />
        ),
      DayButton: ({
        day: _day,
        modifiers,
        className: dbClassName,
        ...btnProps
      }) => (
        <button
          {...stylex.props(
            styles.dayButton,
            modifiers.selected && styles.daySelected,
            modifiers.today && !modifiers.selected && styles.dayToday,
            modifiers.outside && styles.dayOutside,
            modifiers.disabled && styles.dayDisabled,
            customClassName(dbClassName)
          )}
          type="button"
          {...btnProps}
        />
      ),
      NextMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          {...stylex.props(styles.navButton, customClassName(bClassName))}
          type="button"
          {...bProps}
        />
      ),
      PreviousMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          {...stylex.props(styles.navButton, customClassName(bClassName))}
          type="button"
          {...bProps}
        />
      ),
    }}
    showOutsideDays={showOutsideDays}
    {...props}
  />
);

export { Calendar };
