import { cx, x } from "@/lib/utils";

import { styles } from "./message.stylex";

const MessageGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.group);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="message-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const Message = ({
  className,
  style,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) => {
  const p = x(styles.message, align === "end" && styles.messageEnd);
  return (
    <div
      className={cx(p.className, className)}
      data-align={align}
      data-slot="message"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageAvatar = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.avatar);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="message-avatar"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.content);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="message-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.header);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="message-header"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MessageFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.footer);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="message-footer"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
};
