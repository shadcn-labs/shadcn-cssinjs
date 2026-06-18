import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";
import { cn } from "@/lib/utils";

export const ComponentPreview = ({
  name,
  src,
  title,
  children,
  className,
  align = "center",
}: {
  name?: string;
  src?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  align?: "center" | "start" | "end";
}) => (
  <div className="group relative my-4 flex flex-col gap-2">
    <div className="relative rounded-lg border bg-background">
      <div
        className={cn(
          "preview flex min-h-[350px] w-full justify-center p-10",
          align === "center" && "items-center",
          align === "start" && "items-start",
          align === "end" && "items-end",
          className
        )}
      >
        {children}
      </div>
    </div>
    {(name || src) && <ComponentSource name={name} src={src} title={title} />}
  </div>
);
