"use client";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/bases/stylex/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    href: "/docs/primitives/alert-dialog",
    title: "Alert Dialog",
  },
  {
    description:
      "For sighted users to preview content available behind a link.",
    href: "/docs/primitives/hover-card",
    title: "Hover Card",
  },
  {
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    href: "/docs/primitives/progress",
    title: "Progress",
  },
  {
    description: "Visually or semantically separates content.",
    href: "/docs/primitives/scroll-area",
    title: "Scroll-area",
  },
  {
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    href: "/docs/primitives/tabs",
    title: "Tabs",
  },
  {
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    href: "/docs/primitives/tooltip",
    title: "Tooltip",
  },
];

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => (
  <li {...props}>
    <NavigationMenuLink render={<Link href={href} />}>
      <div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div>
    </NavigationMenuLink>
  </li>
);

const NavigationMenuDemo = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-96">
            <ListItem href="/docs" title="Introduction">
              Re-usable components built with Tailwind CSS.
            </ListItem>
            <ListItem href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem className="hidden md:flex">
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px]">
            <li>
              <NavigationMenuLink
                render={
                  <Link href="#" className="flex-row items-center gap-2" />
                }
              >
                <CircleAlertIcon />
                Backlog
              </NavigationMenuLink>
              <NavigationMenuLink
                render={
                  <Link href="#" className="flex-row items-center gap-2" />
                }
              >
                <CircleDashedIcon />
                To Do
              </NavigationMenuLink>
              <NavigationMenuLink
                render={
                  <Link href="#" className="flex-row items-center gap-2" />
                }
              >
                <CircleCheckIcon />
                Done
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          render={<Link href="/docs" />}
          className="flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Docs
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default NavigationMenuDemo;
