"use client";

import { ArrowUpRightIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SITE_LATEST, SITE_NAV_SECTIONS } from "@/constants/nav";
import type { SiteNavLink as SiteNavLinkItem } from "@/constants/nav";
import { UTM_PARAMS } from "@/constants/site";
import { addQueryParams } from "@/lib/url";
import { cn } from "@/lib/utils";

type SectionId = (typeof SITE_NAV_SECTIONS)[number]["id"];

const SECTION_WIDTH: Partial<Record<SectionId, string>> = {
  registries: "w-72",
  skills: "w-72",
};

const latestCardClassName = cn(
  "flex flex-col gap-4 rounded-lg border border-border bg-background p-4",
  "text-base font-normal no-underline transition-colors",
  "hover:border-foreground/25 hover:bg-background focus:bg-background"
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm font-medium text-muted-foreground">{children}</div>
);

const ExternalLinkLabel = ({
  name,
  size = 16,
  iconClassName,
}: {
  name: string;
  size?: number;
  iconClassName?: string;
}) => (
  <>
    {name}
    <ArrowUpRightIcon
      size={size}
      className={cn("inline-flex shrink-0", iconClassName)}
    />
  </>
);

const SiteNavLink = ({
  item,
  iconSize = 16,
  children,
}: {
  item: SiteNavLinkItem;
  iconSize?: number;
  children: (props: { label: React.ReactNode }) => React.ReactNode;
}) =>
  children({
    label: <ExternalLinkLabel name={item.name} size={iconSize} />,
  });

const LatestCard = ({
  item,
  nameClassName,
  textClassName,
  children,
}: {
  item: SiteNavLinkItem;
  nameClassName?: string;
  textClassName?: string;
  children: (props: { content: React.ReactNode }) => React.ReactNode;
}) => {
  const content = (
    <>
      <span
        className={cn(
          "flex items-center justify-center rounded-md bg-muted text-base font-medium",
          nameClassName ?? "min-h-24 w-full"
        )}
      >
        {item.name}
      </span>
      {item.description ? (
        <span
          className={cn(
            "inline-flex items-center gap-1 text-sm text-foreground",
            textClassName
          )}
        >
          {item.description}
          <ArrowUpRightIcon size={16} className="inline-flex shrink-0" />
        </span>
      ) : (
        <ExternalLinkLabel name={item.name} />
      )}
    </>
  );

  return children({ content });
};

const DesktopSection = ({
  title,
  items,
  className,
  grid,
}: {
  title: string;
  items: readonly SiteNavLinkItem[];
  className?: string;
  grid?: boolean;
}) => (
  <div className={cn("flex flex-col gap-3", className)}>
    <SectionTitle>{title}</SectionTitle>
    {grid ? (
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <SiteNavLink item={item}>
              {({ label }) => (
                <NavigationMenuLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex w-full flex-row items-center gap-1 whitespace-nowrap rounded-none",
                    "bg-transparent p-0 text-base font-normal leading-normal",
                    "underline-offset-4 decoration-muted-foreground/50 decoration-1",
                    "hover:bg-transparent hover:underline focus:bg-transparent focus:underline",
                    "data-[active=true]:bg-transparent"
                  )}
                >
                  {label}
                </NavigationMenuLink>
              )}
            </SiteNavLink>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.href} className="w-full">
            <SiteNavLink item={item}>
              {({ label }) => (
                <NavigationMenuLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex w-full flex-row items-center gap-1 whitespace-nowrap rounded-none",
                    "bg-transparent p-0 text-base font-normal leading-normal",
                    "underline-offset-4 decoration-muted-foreground/50 decoration-1",
                    "hover:bg-transparent hover:underline focus:bg-transparent focus:underline",
                    "data-[active=true]:bg-transparent"
                  )}
                >
                  {label}
                </NavigationMenuLink>
              )}
            </SiteNavLink>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const LabsNavMobile = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="hover:bg-transparent focus-visible:bg-transparent data-[state=open]:bg-transparent dark:hover:bg-transparent"
        >
          <ChevronDownIcon
            className={cn(
              "size-3 transition-transform duration-200",
              open && "rotate-180"
            )}
            strokeWidth={2.5}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-background/90 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <SectionTitle>Latest</SectionTitle>
            <LatestCard
              item={SITE_LATEST}
              nameClassName="min-h-16 text-2xl"
              textClassName="text-base"
            >
              {({ content }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={addQueryParams(SITE_LATEST.href, UTM_PARAMS)}
                  className={cn(latestCardClassName, "w-full")}
                  onClick={close}
                >
                  {content}
                </a>
              )}
            </LatestCard>
          </div>
          {SITE_NAV_SECTIONS.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <SectionTitle>{section.title}</SectionTitle>
              <div className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <SiteNavLink key={item.href} item={item} iconSize={24}>
                    {({ label }) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={addQueryParams(item.href, UTM_PARAMS)}
                        className="inline-flex items-center gap-1 text-2xl font-medium"
                        onClick={close}
                      >
                        {label}
                      </a>
                    )}
                  </SiteNavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const LabsNavDesktop = () => {
  const [value, setValue] = useState("");

  return (
    <>
      {value ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-x-0 top-(--header-height) bottom-0 z-20 cursor-default bg-background/60"
          onClick={() => setValue("")}
        />
      ) : null}
      <NavigationMenu
        value={value}
        onValueChange={setValue}
        viewport={false}
        delayDuration={0}
        className="z-50 max-w-none justify-start"
      >
        <NavigationMenuList className="justify-start">
          <NavigationMenuItem value="site">
            <NavigationMenuTrigger
              className={cn(
                "h-auto bg-transparent p-1.5",
                "hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground",
                "data-[state=open]:bg-transparent data-[state=open]:text-foreground",
                "data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent"
              )}
            />
            <NavigationMenuContent
              className={cn(
                "fixed inset-x-0 top-(--header-height) z-30 w-screen bg-background p-0",
                "shadow-[0_1px_0_0_var(--border)]",
                "before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']",
                "data-[motion^=from-]:animate-none data-[motion^=to-]:animate-none",
                "data-[state=closed]:hidden md:fixed md:w-screen dark:bg-black"
              )}
            >
              <div className="container-wrapper px-6">
                <div className="flex gap-8 py-4 pl-3">
                  <div className="flex w-64 flex-col gap-3">
                    <SectionTitle>Latest</SectionTitle>
                    <LatestCard item={SITE_LATEST} nameClassName="min-h-8">
                      {({ content }) => (
                        <NavigationMenuLink
                          href={addQueryParams(SITE_LATEST.href, UTM_PARAMS)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(latestCardClassName, "w-60 gap-2 p-3")}
                        >
                          {content}
                        </NavigationMenuLink>
                      )}
                    </LatestCard>
                  </div>
                  {SITE_NAV_SECTIONS.map((section) => (
                    <DesktopSection
                      key={section.id}
                      title={section.title}
                      items={section.items}
                      className={SECTION_WIDTH[section.id] ?? "w-44"}
                      grid={section.id === "registries"}
                    />
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export const LabsNav = () => (
  <>
    <div className="lg:hidden">
      <LabsNavMobile />
    </div>
    <div className="hidden lg:block">
      <LabsNavDesktop />
    </div>
  </>
);
