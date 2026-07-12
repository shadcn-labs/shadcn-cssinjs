"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--padding": 3,
  "--width": "var(---, fit-content)",
});

const months = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 4,
  "--position": "relative",
});

const month = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 4,
});

const monthCaption = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 8,
  "--justify-content": "center",
  "--position": "relative",
});

const captionLabel = css.compose({
  "--font-size": "0.875rem",
  "--font-weight": 500,
});

const nav = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--inset-inline": 0,
  "--justify-content": "space-between",
  "--position": "absolute",
  "--top": 0,
});

const navButton = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--height": 7,
  "--hover_background-color": "var(--color_accent)",
  "--hover_opacity": 1,
  "--justify-content": "center",
  "--opacity": 0.6,
  "--outline-style": "none",
  "--width": 7,
  "--z-index": "var(---, 10)",
});

const grid = css.compose({
  "--border-collapse": "collapse",
  "--margin-top": 1,
  "--width": "var(---, 100%)",
});

const weekday = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.8rem",
  "--font-weight": 400,
  "--height": 9,
  "--padding-bottom": 1,
  "--width": 9,
});

const day = css.compose({
  "--height": 9,
  "--padding": 0,
  "--text-align": "center",
  "--width": 9,
});

const dayButton = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--font-size": "0.875rem",
  "--height": 9,
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--justify-content": "center",
  "--outline-style": "none",
  "--width": 9,
});

const dayOutside = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--opacity": 0.5,
});

const dayToday = css.compose({
  "--background-color": "var(--color_accent)",
  "--color": "var(--color_accent-foreground)",
});

const daySelected = css.compose({
  "--background-color": "var(--color_primary)",
  "--color": "var(--color_primary-foreground)",
  "--hover_background-color": "var(--color_primary)",
  "--hover_color": "var(--color_primary-foreground)",
});

const dayDisabled = css.compose({
  "--cursor": "not-allowed",
  "--opacity": 0.4,
});

const join = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) => {
  const [rootCn] = root();
  return (
    <DayPicker
      className={rootCn(className)}
      classNames={{
        caption_label: captionLabel()[0](),
        day: day()[0](),
        month: month()[0](),
        month_caption: monthCaption()[0](),
        month_grid: grid()[0](),
        months: months()[0](),
        nav: nav()[0](),
        weekday: weekday()[0](),
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
        }) => {
          const [dbCn] = dayButton();
          const [ocn] = dayOutside();
          const [tcn] = dayToday();
          const [scn] = daySelected();
          const [dcn] = dayDisabled();
          return (
            <button
              className={dbCn(
                join(
                  modifiers.outside && ocn(),
                  modifiers.today && !modifiers.selected && tcn(),
                  modifiers.selected && scn(),
                  modifiers.disabled && dcn(),
                  dbClassName
                )
              )}
              type="button"
              {...btnProps}
            />
          );
        },
        NextMonthButton: ({ className: bClassName, ...bProps }) => {
          const [navCn] = navButton();
          return (
            <button className={navCn(bClassName)} type="button" {...bProps} />
          );
        },
        PreviousMonthButton: ({ className: bClassName, ...bProps }) => {
          const [navCn] = navButton();
          return (
            <button className={navCn(bClassName)} type="button" {...bProps} />
          );
        },
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};

export { Calendar };
