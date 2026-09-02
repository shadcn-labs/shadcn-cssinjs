"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import type { DayButton, Locale } from "react-day-picker";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { buttonStyles } from "@/registry/bases/stylex/ui/button";
import type { ButtonVariant } from "@/registry/bases/stylex/ui/button";

const cellSize = "1.75rem";

const styles = stylex.create({
  buttonNav: {
    height: cellSize,
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    padding: 0,
    userSelect: "none",
    width: cellSize,
  },
  captionLabel: {
    fontSize: "0.875rem",
    fontWeight: 500,
    userSelect: "none",
  },
  captionLabelDropdown: {
    alignItems: "center",
    borderRadius: radius.md,
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
    pointerEvents: "none",
    userSelect: "none",
  },
  chevron: {
    ":dir(rtl)": {
      transform: "scaleX(-1)",
    },
    height: "1rem",
    width: "1rem",
  },
  day: {
    aspectRatio: "1 / 1",
    borderRadius: radius.md,
    height: "100%",
    padding: 0,
    position: "relative",
    textAlign: "center",
    userSelect: "none",
    width: "100%",
  },
  dayBtnBase: {
    alignItems: "center",
    aspectRatio: "1 / 1",
    backgroundColor: {
      ":hover": colors.muted,
      default: "transparent",
    },
    borderColor: "transparent",
    borderRadius: radius.md,
    borderStyle: "none",
    borderWidth: 0,
    color: {
      ":hover": colors.foreground,
      default: colors.foreground,
    },
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    fontWeight: 400,
    gap: "0.25rem",
    height: "100%",
    isolation: "isolate",
    justifyContent: "center",
    lineHeight: 1,
    minWidth: cellSize,
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  dayBtnFocused: {
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    position: "relative",
    zIndex: 10,
  },
  dayBtnRangeEnd: {
    backgroundColor: {
      ":hover": colors.primary,
      default: colors.primary,
    },
    borderBottomRightRadius: radius.md,
    borderTopRightRadius: radius.md,
    color: {
      ":hover": colors.primaryForeground,
      default: colors.primaryForeground,
    },
  },
  dayBtnRangeMiddle: {
    backgroundColor: {
      ":hover": colors.muted,
      default: colors.muted,
    },
    borderRadius: 0,
    color: {
      ":hover": colors.foreground,
      default: colors.foreground,
    },
  },
  dayBtnRangeStart: {
    backgroundColor: {
      ":hover": colors.primary,
      default: colors.primary,
    },
    borderBottomLeftRadius: radius.md,
    borderTopLeftRadius: radius.md,
    color: {
      ":hover": colors.primaryForeground,
      default: colors.primaryForeground,
    },
  },
  dayBtnSelected: {
    backgroundColor: {
      ":hover": colors.primary,
      default: colors.primary,
    },
    borderRadius: radius.md,
    color: {
      ":hover": colors.primaryForeground,
      default: colors.primaryForeground,
    },
  },
  disabled: {
    color: colors.mutedForeground,
    opacity: 0.5,
  },
  dropdown: {
    cursor: "pointer",
    height: "100%",
    inset: 0,
    opacity: 0,
    position: "absolute",
    width: "100%",
    zIndex: 10,
  },
  dropdownRoot: {
    alignItems: "center",
    borderRadius: radius.md,
    display: "inline-flex",
    position: "relative",
  },
  dropdowns: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.375rem",
    height: cellSize,
    justifyContent: "center",
    width: "100%",
  },
  hidden: {
    visibility: "hidden",
  },
  month: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  monthCaption: {
    alignItems: "center",
    display: "flex",
    height: cellSize,
    justifyContent: "center",
    paddingInline: 0,
    width: "100%",
  },
  monthGrid: {
    borderCollapse: "collapse",
    width: "100%",
  },
  months: {
    display: "flex",
    flexDirection: {
      "@media (min-width: 768px)": "row",
      default: "column",
    },
    gap: "1rem",
    position: "relative",
  },
  nav: {
    alignItems: "center",
    display: "flex",
    gap: "0.25rem",
    insetInline: 0,
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
  },
  outside: {
    color: colors.mutedForeground,
  },
  rangeEnd: {
    "::after": {
      backgroundColor: colors.muted,
      bottom: 0,
      content: '""',
      left: 0,
      position: "absolute",
      top: 0,
      width: "1rem",
    },
    backgroundColor: colors.muted,
    borderBottomRightRadius: radius.md,
    borderTopRightRadius: radius.md,
    isolation: "isolate",
    position: "relative",
    zIndex: 0,
  },
  rangeMiddle: {
    borderRadius: 0,
  },
  rangeStart: {
    "::after": {
      backgroundColor: colors.muted,
      bottom: 0,
      content: '""',
      position: "absolute",
      right: 0,
      top: 0,
      width: "1rem",
    },
    backgroundColor: colors.muted,
    borderBottomLeftRadius: radius.md,
    borderTopLeftRadius: radius.md,
    isolation: "isolate",
    position: "relative",
    zIndex: 0,
  },
  root: {
    backgroundColor: colors.background,
    padding: "0.5rem",
    position: "relative",
  },
  today: {
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    color: colors.foreground,
  },
  week: {
    display: "flex",
    marginTop: "0.5rem",
    width: "100%",
  },
  weekNumber: {
    color: colors.mutedForeground,
    fontSize: "0.8rem",
    userSelect: "none",
  },
  weekNumberCell: {
    alignItems: "center",
    display: "flex",
    height: cellSize,
    justifyContent: "center",
    textAlign: "center",
    width: cellSize,
  },
  weekNumberHeader: {
    userSelect: "none",
    width: cellSize,
  },
  weekday: {
    borderRadius: radius.md,
    color: colors.mutedForeground,
    flex: 1,
    fontSize: "0.8rem",
    fontWeight: 400,
    textAlign: "center",
    userSelect: "none",
  },
  weekdays: {
    display: "flex",
  },
});

type CalendarDayButtonProps = Omit<
  React.ComponentProps<typeof DayButton>,
  "style"
> & {
  locale?: Partial<Locale>;
  className?: string;
  style?: StyleXStyles;
};

const CalendarDayButton = ({
  className,
  style,
  day,
  modifiers,
  locale,
  ...props
}: CalendarDayButtonProps) => {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);

  const isSelectedSingle =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  const dayBtnStyleProps = stylex.props(
    styles.dayBtnBase,
    modifiers.focused && styles.dayBtnFocused,
    isSelectedSingle && styles.dayBtnSelected,
    modifiers.range_start && styles.dayBtnRangeStart,
    modifiers.range_end && styles.dayBtnRangeEnd,
    modifiers.range_middle && styles.dayBtnRangeMiddle,
    customClassName(className),
    style
  );

  return (
    <button
      ref={ref}
      type="button"
      data-slot="button"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={isSelectedSingle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={[dayBtnStyleProps.className, defaultClassNames.day]
        .filter(Boolean)
        .join(" ")}
      style={{ border: "none", ...dayBtnStyleProps.style }}
      {...props}
    />
  );
};

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: ButtonVariant;
  className?: string;
  style?: StyleXStyles;
};

const Calendar = ({
  className,
  style,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  startMonth = new Date(1900, 0),
  endMonth = new Date(2100, 11),
  ...props
}: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();

  const rootStyleProps = stylex.props(
    styles.root,
    customClassName(className),
    style as StyleXStyles
  );

  const prevBtnProps = stylex.props(
    buttonStyles.base,
    buttonStyles[buttonVariant],
    styles.buttonNav
  );
  const nextBtnProps = stylex.props(
    buttonStyles.base,
    buttonStyles[buttonVariant],
    styles.buttonNav
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={rootStyleProps.className}
      style={rootStyleProps.style}
      captionLayout={captionLayout}
      locale={locale}
      startMonth={startMonth}
      endMonth={endMonth}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        button_next: [nextBtnProps.className, defaultClassNames.button_next]
          .filter(Boolean)
          .join(" "),
        button_previous: [
          prevBtnProps.className,
          defaultClassNames.button_previous,
        ]
          .filter(Boolean)
          .join(" "),
        caption_label: [
          stylex.props(
            captionLayout === "label"
              ? styles.captionLabel
              : styles.captionLabelDropdown
          ).className,
          defaultClassNames.caption_label,
        ]
          .filter(Boolean)
          .join(" "),
        day: [stylex.props(styles.day).className, defaultClassNames.day]
          .filter(Boolean)
          .join(" "),
        disabled: [
          stylex.props(styles.disabled).className,
          defaultClassNames.disabled,
        ]
          .filter(Boolean)
          .join(" "),
        dropdown: [
          stylex.props(styles.dropdown).className,
          defaultClassNames.dropdown,
        ]
          .filter(Boolean)
          .join(" "),
        dropdown_root: [
          stylex.props(styles.dropdownRoot).className,
          defaultClassNames.dropdown_root,
        ]
          .filter(Boolean)
          .join(" "),
        dropdowns: [
          stylex.props(styles.dropdowns).className,
          defaultClassNames.dropdowns,
        ]
          .filter(Boolean)
          .join(" "),
        hidden: [
          stylex.props(styles.hidden).className,
          defaultClassNames.hidden,
        ]
          .filter(Boolean)
          .join(" "),
        month: [stylex.props(styles.month).className, defaultClassNames.month]
          .filter(Boolean)
          .join(" "),
        month_caption: [
          stylex.props(styles.monthCaption).className,
          defaultClassNames.month_caption,
        ]
          .filter(Boolean)
          .join(" "),
        month_grid: [
          stylex.props(styles.monthGrid).className,
          defaultClassNames.month_grid,
        ]
          .filter(Boolean)
          .join(" "),
        months: [
          stylex.props(styles.months).className,
          defaultClassNames.months,
        ]
          .filter(Boolean)
          .join(" "),
        nav: [stylex.props(styles.nav).className, defaultClassNames.nav]
          .filter(Boolean)
          .join(" "),
        outside: [
          stylex.props(styles.outside).className,
          defaultClassNames.outside,
        ]
          .filter(Boolean)
          .join(" "),
        range_end: [
          stylex.props(styles.rangeEnd).className,
          defaultClassNames.range_end,
        ]
          .filter(Boolean)
          .join(" "),
        range_middle: [
          stylex.props(styles.rangeMiddle).className,
          defaultClassNames.range_middle,
        ]
          .filter(Boolean)
          .join(" "),
        range_start: [
          stylex.props(styles.rangeStart).className,
          defaultClassNames.range_start,
        ]
          .filter(Boolean)
          .join(" "),
        root: [stylex.props(styles.root).className, defaultClassNames.root]
          .filter(Boolean)
          .join(" "),
        today: [stylex.props(styles.today).className, defaultClassNames.today]
          .filter(Boolean)
          .join(" "),
        week: [stylex.props(styles.week).className, defaultClassNames.week]
          .filter(Boolean)
          .join(" "),
        week_number: [
          stylex.props(styles.weekNumber).className,
          defaultClassNames.week_number,
        ]
          .filter(Boolean)
          .join(" "),
        week_number_header: [
          stylex.props(styles.weekNumberHeader).className,
          defaultClassNames.week_number_header,
        ]
          .filter(Boolean)
          .join(" "),
        weekday: [
          stylex.props(styles.weekday).className,
          defaultClassNames.weekday,
        ]
          .filter(Boolean)
          .join(" "),
        weekdays: [
          stylex.props(styles.weekdays).className,
          defaultClassNames.weekdays,
        ]
          .filter(Boolean)
          .join(" "),
        ...classNames,
      }}
      components={{
        Chevron: ({ className: iconCn, orientation, ...chevronProps }) => {
          const chevronStyleProps = stylex.props(
            styles.chevron,
            customClassName(iconCn)
          );
          if (orientation === "left") {
            return <ChevronLeftIcon {...chevronStyleProps} {...chevronProps} />;
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon {...chevronStyleProps} {...chevronProps} />
            );
          }

          return <ChevronDownIcon {...chevronStyleProps} {...chevronProps} />;
        },
        DayButton: ({ style: _dayBtnStyle, ...dayButtonProps }) => (
          <CalendarDayButton locale={locale} {...dayButtonProps} />
        ),
        Root: ({ className: rootCn, rootRef, ...rootProps }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={rootCn}
            {...rootProps}
          />
        ),
        WeekNumber: ({ children, ...weekNumProps }) => (
          <td {...weekNumProps}>
            <div {...stylex.props(styles.weekNumberCell)}>{children}</div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  );
};

export { Calendar, CalendarDayButton, styles as calendarStyles };
