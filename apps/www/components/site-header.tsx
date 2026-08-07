import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { CommandMenu } from "@/components/command-menu";
import { DesignerActions } from "@/components/designer-actions";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { NavItemGithub } from "@/components/nav-item-github";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { source } from "@/lib/source";

const navItems = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.DOCS, label: "Docs" },
  { href: ROUTES.DOCS_COMPONENTS, label: "Components" },
  { href: ROUTES.BLOCKS, label: "Blocks" },
  { href: ROUTES.CHARTS, label: "Charts" },
  { href: "/docs/directory", label: "Directory" },
  { href: ROUTES.TYPESET, label: "Typeset" },
  { href: ROUTES.CREATE, label: "Create" },
];

export const SiteHeader = () => (
  <header
    className="bg-background sticky top-0 z-50 w-full"
    style={{ viewTransitionName: "site-header" }}
  >
    <div className="container-wrapper group-has-data-[slot=designer]/layout:max-w-none px-6 3xl:fixed:px-0">
      <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! group-has-data-[slot=designer]/layout:fixed:max-w-none 3xl:fixed:container">
        <MobileNav
          items={navItems}
          tree={source.pageTree}
          className="flex lg:hidden"
        />
        <MainNav items={navItems} className="hidden lg:flex" />
        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <CommandMenu navItems={navItems} tree={source.pageTree} />
          </div>
          <div
            data-slot="separator"
            className="bg-border ml-2 hidden w-px lg:block"
          />
          <NavItemGithub />
          <div data-slot="separator" className="bg-border w-px" />
          <ModeSwitcher />
          <Suspense fallback={null}>
            <DesignerActions />
          </Suspense>
          <div className="flex items-center gap-2 group-has-data-[slot=designer]/layout:hidden">
            <div data-slot="separator" className="bg-border w-px" />
            <Button asChild size="sm" className="h-[31px] rounded-lg">
              <Link href={ROUTES.CREATE}>
                <PlusIcon /> New
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
);
