"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/bases/stylex/scroll-area/scroll-area";

const examples = [
  { hidden: false, href: "/examples/dashboard", name: "Dashboard" },
  { hidden: false, href: "/examples/tasks", name: "Tasks" },
  { hidden: false, href: "/examples/playground", name: "Playground" },
  { hidden: false, href: "/examples/authentication", name: "Authentication" },
  { hidden: false, href: "/examples/rtl", name: "RTL" },
];

const ExampleLink = ({
  example,
  isActive,
}: {
  example: (typeof examples)[number];
  isActive: boolean;
}) => {
  if (example.hidden) {
    return null;
  }

  return (
    <Link
      className="flex h-7 items-center justify-center gap-2 px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
      data-active={isActive}
      href={example.href}
    >
      {example.name}
      {example.name === "RTL" && (
        <span className="flex size-2 rounded-full bg-blue-500" title="New" />
      )}
    </Link>
  );
};

export const ExamplesNav = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-[96%] md:max-w-[600px] lg:max-w-none">
        <div className="flex items-center">
          <ExampleLink
            example={{ hidden: false, href: "/", name: "Examples" }}
            isActive={pathname === "/"}
          />
          {examples.map((example) => (
            <ExampleLink
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
              key={example.href}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
