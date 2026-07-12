"use client";

import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller";
import { ArrowDownIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { Button } from "../button/button";
import { styles } from "./message-scroller.stylex";

const MessageScrollerProvider = (
  props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>
) => <MessageScrollerPrimitive.Provider {...props} />;

const MessageScroller = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) => {
  const p = x(styles.root);
  return (
    <MessageScrollerPrimitive.Root
      className={cx(p.className, className)}
      data-slot="message-scroller"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageScrollerViewport = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) => {
  const p = x(styles.viewport);
  return (
    <MessageScrollerPrimitive.Viewport
      className={cx(p.className, className)}
      data-slot="message-scroller-viewport"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageScrollerContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) => {
  const p = x(styles.content);
  return (
    <MessageScrollerPrimitive.Content
      className={cx(p.className, className)}
      data-slot="message-scroller-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageScrollerItem = ({
  className,
  style,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) => {
  const p = x(styles.item);
  return (
    <MessageScrollerPrimitive.Item
      className={cx(p.className, className)}
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageScrollerButton = ({
  direction = "end",
  className,
  style,
  children,
  render,
  variant = "secondary",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) => {
  const p = x(
    styles.button,
    direction === "end" ? styles.buttonEnd : styles.buttonStart
  );
  return (
    <MessageScrollerPrimitive.Button
      className={cx(p.className, className)}
      data-direction={direction}
      data-size={size}
      data-slot="message-scroller-button"
      data-variant={variant}
      direction={direction}
      render={render ?? <Button size={size} variant={variant} />}
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon aria-hidden="true" />
          <span
            style={{
              clip: "rect(0, 0, 0, 0)",
              clipPath: "inset(50%)",
              height: 1,
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: 1,
            }}
          >
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  );
};

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
};
