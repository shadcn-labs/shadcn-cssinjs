"use client";

import { DirectionProvider } from "@base-ui/react/direction-provider";
import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import { BASE_LABELS, useComponentBase } from "@/components/base-provider";
import type { ComponentBase } from "@/components/base-provider";
import {
  LanguageProvider,
  LanguageSelector,
  useLanguageContext,
  useTranslation,
} from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { TokenamiExample } from "@/components/tokenami-example";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const directionTranslations: Translations<Record<string, never>> = {
  ar: { dir: "rtl", values: {} },
  en: { dir: "ltr", values: {} },
  he: { dir: "rtl", values: {} },
};

const BASES: ComponentBase[] = ["stylex", "tokenami"];

const BaseToggle = ({
  base,
  onBaseChange,
}: {
  base: ComponentBase;
  onBaseChange: (base: ComponentBase) => void;
}) => (
  <div className="bg-muted text-muted-foreground inline-flex h-7 items-center rounded-md p-0.5">
    {BASES.map((value) => (
      <button
        className={cn(
          "inline-flex h-6 items-center rounded-sm px-2 text-xs font-medium transition-colors",
          base === value
            ? "bg-background text-foreground shadow-sm"
            : "hover:text-foreground"
        )}
        key={value}
        onClick={() => onBaseChange(value)}
        type="button"
      >
        {BASE_LABELS[value]}
      </button>
    ))}
  </div>
);

const RtlLanguageSelector = () => {
  const context = useLanguageContext();
  if (!context) {
    return null;
  }
  return (
    <LanguageSelector
      onValueChange={context.setLanguage}
      value={context.language}
    />
  );
};

const PreviewWrapper = ({
  align,
  previewClassName,
  children,
}: {
  align: "center" | "start" | "end";
  previewClassName?: string;
  children: ReactNode;
}) => {
  const { dir, language } = useTranslation(directionTranslations, "ar");

  return (
    <div data-lang={dir === "rtl" ? language : undefined} dir={dir}>
      <div
        className={cn(
          "preview relative flex min-h-[350px] w-full justify-center p-10",
          align === "center" && "items-center",
          align === "start" && "items-start",
          align === "end" && "items-end",
          previewClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

const DirectionWrapper = ({ children }: { children: ReactNode }) => {
  const { dir } = useTranslation(directionTranslations, "ar");
  return <DirectionProvider direction={dir}>{children}</DirectionProvider>;
};

export const ComponentPreviewTabs = ({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  source,
  sourcePreview,
  tokenamiSource,
  tokenamiSourcePreview,
  direction = "ltr",
  name,
  hasTokenami = false,
}: {
  className?: string;
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: ReactNode;
  source: ReactNode;
  sourcePreview?: ReactNode;
  tokenamiSource?: ReactNode;
  tokenamiSourcePreview?: ReactNode;
  direction?: "ltr" | "rtl";
  name?: string;
  hasTokenami?: boolean;
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { base, setBase } = useComponentBase();

  const effectiveBase: ComponentBase = hasTokenami ? base : "stylex";
  const previewContent =
    effectiveBase === "tokenami" && name ? (
      <TokenamiExample name={name} />
    ) : (
      component
    );
  const codeSource = effectiveBase === "tokenami" ? tokenamiSource : source;
  const codeSourcePreview =
    effectiveBase === "tokenami" ? tokenamiSourcePreview : sourcePreview;

  return (
    <div
      className={cn(
        "group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-xl border",
        className
      )}
      data-slot="component-preview"
    >
      {direction === "rtl" ? (
        <LanguageProvider defaultLanguage="ar">
          <div className="flex h-14 items-center gap-2 border-b px-4">
            <RtlLanguageSelector />
            {hasTokenami && <BaseToggle base={base} onBaseChange={setBase} />}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="ml-auto size-7"
                  size="icon-sm"
                  variant="ghost"
                >
                  <CircleAlertIcon />
                  <span className="sr-only">About this translation</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-60 text-xs"
                side="bottom"
              >
                <div>
                  The text was translated with AI for demonstration purposes.
                  It&apos;s not perfect and may contain errors.
                </div>
                <Separator className="-mx-2.5 my-2 w-auto!" />
                <div dir="rtl" lang="ar">
                  لقد استخدمت الذكاء الاصطناعي لترجمة النص للأغراض التجريبية فقط.
                </div>
                <Separator className="-mx-2.5 my-2 w-auto!" />
                <div dir="rtl" lang="he">
                  השתמשתי בבינה מלאכותית כדי לתרגם את הטקסט למטרות הדגמה.
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <PreviewWrapper align={align} previewClassName={previewClassName}>
            <DirectionWrapper>{previewContent}</DirectionWrapper>
          </PreviewWrapper>
        </LanguageProvider>
      ) : (
        <div dir="ltr">
          {hasTokenami && (
            <div className="flex h-14 items-center border-b px-4">
              <BaseToggle base={base} onBaseChange={setBase} />
            </div>
          )}
          <div
            className={cn(
              "preview relative flex min-h-[350px] w-full justify-center p-10",
              align === "center" && "items-center",
              align === "start" && "items-start",
              align === "end" && "items-end",
              previewClassName
            )}
          >
            {previewContent}
          </div>
        </div>
      )}

      {!hideCode && (
        <div
          className="relative overflow-hidden border-t [&_[data-rehype-pretty-code-figure]]:m-0! [&_[data-rehype-pretty-code-figure]]:rounded-none [&_[data-rehype-pretty-code-figure]]:border-0 [&_pre]:max-h-96"
          data-slot="code"
        >
          {isCodeVisible ? (
            <>
              {direction === "rtl" && (
                <div className="bg-code text-muted-foreground no-scrollbar relative z-10 overflow-x-auto p-6 font-mono text-sm">
                  <pre>{`// This example uses dir and the language selector because this
// site is not RTL by default. In your app you won't need these.`}</pre>
                  <span>
                    {"// See the "}
                    <Link
                      className="underline underline-offset-4"
                      href="/docs/rtl"
                    >
                      RTL guide
                    </Link>
                    {" for more information."}
                  </span>
                </div>
              )}
              {codeSource}
            </>
          ) : (
            <div className="relative">
              {codeSourcePreview}
              <div className="absolute inset-0 flex items-center justify-center pb-4">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
                  }}
                />
                <Button
                  className="bg-background text-foreground hover:bg-muted relative z-10 rounded-lg shadow-none"
                  onClick={() => setIsCodeVisible(true)}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  View Code
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
