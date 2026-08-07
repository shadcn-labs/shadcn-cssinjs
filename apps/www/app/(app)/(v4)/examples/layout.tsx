import type { Metadata } from "next";
import Link from "next/link";

import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/examples-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageNav } from "@/components/page-nav";
import { ThemeSelector } from "@/components/theme-selector";
import { Button } from "@/components/ui/button";

const title = "The Foundation for your Design System";
const description =
  "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.";

export const metadata: Metadata = { description, title };

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav className="hidden md:flex" id="examples">
        <ExamplesNav className="flex-1 overflow-hidden [&>a:first-child]:text-primary" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper flex flex-1 flex-col section-soft pb-6">
        <div className="container flex flex-1 scroll-mt-20 flex-col theme-container">
          <div className="flex flex-col overflow-hidden rounded-lg border bg-background bg-clip-padding md:flex-1 xl:rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
