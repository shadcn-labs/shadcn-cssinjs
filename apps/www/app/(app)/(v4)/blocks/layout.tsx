import type { Metadata } from "next";
import Link from "next/link";

import { Announcement } from "@/components/announcement";
import { BlocksNav } from "@/components/blocks-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/components/ui/button";

const title = "Building Blocks for the Web";
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.";

export const metadata: Metadata = { description, title };

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#blocks">Browse Blocks</a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav id="blocks">
        <BlocksNav />
        <Button
          asChild
          className="mr-7 hidden shadow-none lg:flex"
          size="sm"
          variant="secondary"
        >
          <Link href="/blocks/sidebar">Browse all blocks</Link>
        </Button>
      </PageNav>
      <div className="container-wrapper flex-1 section-soft md:py-12">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
