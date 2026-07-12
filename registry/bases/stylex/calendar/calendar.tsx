"use client";

import * as stylex from "@stylexjs/stylex";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { styles } from "./calendar.stylex";

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) => (
  <DayPicker
    className={
      [stylex.props(styles.root).className, className]
        .filter(Boolean)
        .join(" ") || undefined
    }
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
          className={
            [
              stylex.props(
                styles.dayButton,
                modifiers.selected && styles.daySelected,
                modifiers.today && !modifiers.selected && styles.dayToday,
                modifiers.outside && styles.dayOutside,
                modifiers.disabled && styles.dayDisabled
              ).className,
              dbClassName,
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
          type="button"
          {...btnProps}
        />
      ),
      NextMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={
            [stylex.props(styles.navButton).className, bClassName]
              .filter(Boolean)
              .join(" ") || undefined
          }
          type="button"
          {...bProps}
        />
      ),
      PreviousMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={
            [stylex.props(styles.navButton).className, bClassName]
              .filter(Boolean)
              .join(" ") || undefined
          }
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
