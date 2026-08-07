"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/bases/stylex/scroll-area/scroll-area";

const links = [
  { href: "/charts/area#charts", name: "Area Charts" },
  { href: "/charts/bar#charts", name: "Bar Charts" },
  { href: "/charts/line#charts", name: "Line Charts" },
  { href: "/charts/pie#charts", name: "Pie Charts" },
  { href: "/charts/radar#charts", name: "Radar Charts" },
  { href: "/charts/radial#charts", name: "Radial Charts" },
  { href: "/charts/tooltip#charts", name: "Tooltips" },
];

export const ChartsNav = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {links.map((link) => (
            <Link
              className="flex h-7 shrink-0 items-center justify-center px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
              data-active={link.href.startsWith(pathname)}
              href={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
