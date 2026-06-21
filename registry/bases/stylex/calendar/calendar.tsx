"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cx, x } from "@/lib/utils";

import { styles } from "./calendar.stylex";

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) => (
  <DayPicker
    className={cx(x(styles.root).className, className)}
    classNames={{
      caption_label: x(styles.captionLabel).className,
      day: x(styles.day).className,
      month: x(styles.month).className,
      month_caption: x(styles.monthCaption).className,
      month_grid: x(styles.grid).className,
      months: x(styles.months).className,
      nav: x(styles.nav).className,
      weekday: x(styles.weekday).className,
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
            x(
              styles.dayButton,
              modifiers.selected && styles.daySelected,
              modifiers.today && !modifiers.selected && styles.dayToday,
              modifiers.outside && styles.dayOutside,
              modifiers.disabled && styles.dayDisabled
            ).className,
            dbClassName
          )}
          type="button"
          {...btnProps}
        />
      ),
      NextMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={cx(x(styles.navButton).className, bClassName)}
          type="button"
          {...bProps}
        />
      ),
      PreviousMonthButton: ({ className: bClassName, ...bProps }) => (
        <button
          className={cx(x(styles.navButton).className, bClassName)}
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
