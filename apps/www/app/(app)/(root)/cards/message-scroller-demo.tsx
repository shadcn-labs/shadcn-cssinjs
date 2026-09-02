"use client";

import * as stylex from "@stylexjs/stylex";
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  MessageCircleDashedIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/registry/bases/stylex/ui/input-group";

const turns = [
  {
    assistant:
      "That's the classic streaming scroll problem. Wrap your message list in MessageScroller and turn on autoScroll. The viewport pins to the bottom as tokens arrive, while preserving the reader's position when they scroll up.",
    user: "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around.",
  },
  {
    assistant:
      "Turn anchoring fixes that. The latest exchange settles into view without snapping the entire conversation back to the document top.",
    user: "Okay, but when someone sends a new message the view still feels jarring — like the whole conversation reloads from the top.",
  },
  {
    assistant:
      "Auto-scroll only runs while the viewport is already pinned to the bottom. Scrolling up deliberately opts out until the reader returns to the newest message.",
    user: "And if they've scrolled up to re-read an older answer? I don't want to yank them back down.",
  },
  {
    assistant:
      "Yes. New messages are exposed through a live log, and every scroll or send control remains a real keyboard-accessible button.",
    user: "Last one — does this work with assistive tech?",
  },
] as const;

interface Message {
  content: string;
  role: "assistant" | "user";
}

const styles = stylex.create({
  card: {
    gap: 0,
    height: "35rem",
    marginInline: "auto",
    maxWidth: "24rem",
    width: "100%",
  },
  cardContent: {
    flex: "1 1 0%",
    overflow: "hidden",
    padding: 0,
  },
  cardFooter: {
    flexDirection: "column",
    gap: "0.5rem",
  },
  cardHeader: {
    borderBottomColor: "var(--border)",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    gap: "0.25rem",
  },
  dropdownContent: {
    width: "11rem",
  },
  empty: {
    height: "100%",
  },
  inputAddon: {
    paddingTop: "0.25rem",
  },
  sendButton: {
    marginLeft: "auto",
  },
});

export const MessageScrollerDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextTurn = turns[Math.floor(messages.length / 2)];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTo({ behavior: "smooth", top: viewport.scrollHeight });
    }
  }, [messages]);

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current ?? undefined);
    },
    []
  );

  const reset = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsBusy(false);
    setMessages([]);
  };

  const sendNext = () => {
    if (!nextTurn || isBusy) {
      return;
    }

    setIsBusy(true);
    setMessages((current) => [
      ...current,
      { content: nextTurn.user, role: "user" },
    ]);
    timeoutRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { content: nextTurn.assistant, role: "assistant" },
      ]);
      setIsBusy(false);
      timeoutRef.current = null;
    }, 600);
  };

  return (
    <div className="relative flex flex-col gap-4">
      <Card style={styles.card}>
        <CardHeader style={styles.cardHeader}>
          <CardTitle>New Chat</CardTitle>
          <CardDescription>How can I help you today?</CardDescription>
          <CardAction>
            <Button
              aria-label="Reset conversation"
              disabled={isBusy}
              onClick={reset}
              size="icon"
              variant="outline"
            >
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent style={styles.cardContent}>
          {messages.length === 0 ? (
            <Empty style={styles.empty}>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <MessageCircleDashedIcon />
                </EmptyMedia>
                <EmptyTitle>Morning, shadcn!</EmptyTitle>
                <EmptyDescription>
                  What are we working on today? Press send to start a new
                  conversation
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <div
              aria-busy={isBusy}
              aria-live="polite"
              className="flex h-full flex-col gap-4 overflow-y-auto p-(--card-spacing)"
              ref={viewportRef}
              role="log"
            >
              {messages.map((message, index) => (
                <div
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[85%] rounded-xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "max-w-[90%] rounded-xl bg-muted px-3 py-2 text-sm"
                  }
                  key={`${message.role}-${index}`}
                >
                  {message.content}
                </div>
              ))}
              {isBusy ? (
                <div className="max-w-[90%] rounded-xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                  Thinking…
                </div>
              ) : null}
            </div>
          )}
        </CardContent>
        <CardFooter style={styles.cardFooter}>
          <form
            className="w-full"
            onSubmit={(event) => {
              event.preventDefault();
              sendNext();
            }}
          >
            <InputGroup>
              <div className="h-14 w-full px-3 py-2.5">
                <span
                  className="line-clamp-2 opacity-60 data-[ready=true]:opacity-100"
                  data-ready={!isBusy}
                >
                  {nextTurn?.user ??
                    "No messages queued. Reset the conversation."}
                </span>
              </div>
              <InputGroupAddon align="block-end" style={styles.inputAddon}>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <InputGroupButton
                        aria-label="Add files"
                        size="icon-sm"
                        type="button"
                        variant="outline"
                      >
                        <PlusIcon />
                      </InputGroupButton>
                    }
                  />
                  <DropdownMenuContent
                    align="start"
                    side="top"
                    style={styles.dropdownContent}
                  >
                    <DropdownMenuItem>
                      <PaperclipIcon />
                      Add Photos &amp; Files
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <ImageIcon />
                      Create Image
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <TelescopeIcon />
                      Deep Research
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <GlobeIcon />
                      Web Search
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <InputGroupButton
                  aria-label="Send"
                  disabled={!nextTurn || isBusy}
                  size="icon-sm"
                  style={styles.sendButton}
                  type="submit"
                  variant="default"
                >
                  <ArrowUpIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </CardFooter>
      </Card>
      <div className="px-0.5 text-center text-xs text-muted-foreground">
        Demo is read only. Press send to send messages.
      </div>
    </div>
  );
};
