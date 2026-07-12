"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { css, cx } from "styled-system/css";

const root = css({
  padding: "3",
  width: "fit-content",
});

const months = css({
  display: "flex",
  flexDirection: "column",
  gap: "4",
  position: "relative",
});

const month = css({
  display: "flex",
  flexDirection: "column",
  gap: "4",
});

const monthCaption = css({
  alignItems: "center",
  display: "flex",
  height: "8",
  justifyContent: "center",
  position: "relative",
});

const captionLabel = css({
  fontSize: "0.875rem",
  fontWeight: "medium",
});

const nav = css({
  alignItems: "center",
  display: "flex",
  insetInline: "0",
  justifyContent: "space-between",
  position: "absolute",
  top: "0",
});

const navButton = css({
  _hover: { backgroundColor: "accent", opacity: "1" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "md",
  borderWidth: "0",
  color: "foreground",
  cursor: "pointer",
  display: "inline-flex",
  height: "7",
  justifyContent: "center",
  opacity: "0.6",
  outlineStyle: "none",
  width: "7",
  zIndex: "10",
});

const grid = css({
  borderCollapse: "collapse",
  marginTop: "1",
  width: "100%",
});

const weekday = css({
  color: "muted.foreground",
  fontSize: "0.8rem",
  fontWeight: "normal",
  height: "9",
  paddingBottom: "1",
  width: "9",
});

const day = css({
  height: "9",
  padding: "0",
  textAlign: "center",
  width: "9",
});

const dayButton = css({
  _hover: { backgroundColor: "accent", color: "accent.foreground" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "md",
  borderWidth: "0",
  color: "foreground",
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "0.875rem",
  height: "9",
  justifyContent: "center",
  outlineStyle: "none",
  width: "9",
});

const dayOutside = css({
  color: "muted.foreground",
  opacity: "0.5",
});

const dayToday = css({
  backgroundColor: "accent",
  color: "accent.foreground",
});

const daySelected = css({
  _hover: { backgroundColor: "primary", color: "primary.foreground" },
  backgroundColor: "primary",
  color: "primary.foreground",
});

const dayDisabled = css({
  cursor: "not-allowed",
  opacity: "0.4",
});

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) => (
  <DayPicker
    className={cx(root, className)}
    classNames={{
      caption_label: captionLabel,
      day,
      month,
      month_caption: monthCaption,
      month_grid: grid,
      months,
      nav,
      weekday,
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
          className={cx(
            dayButton,
            modifiers.outside && dayOutside,
            modifiers.today && !modifiers.selected && dayToday,
            modifiers.selected && daySelected,
            modifiers.disabled && dayDisabled,
            dbClassName
          )}
          type="button"
          {...btnProps}
        />
      ),
      NextMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={cx(navButton, bClassName)}
          type="button"
          {...bProps}
        />
      ),
      PreviousMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={cx(navButton, bClassName)}
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
