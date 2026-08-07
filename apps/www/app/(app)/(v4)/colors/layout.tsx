import type { Metadata } from "next";
import Link from "next/link";

import { Announcement } from "@/components/announcement";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";

const title = "Tailwind Colors in Every Format";
const description =
  "The complete Tailwind color palette in HEX, RGB, HSL, CSS variables, and classes. Ready to copy and paste into your project.";

export const metadata: Metadata = { description, title };

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#colors">Browse Colors</a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/theming">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="scroll-mt-20" id="colors">
            {children}
          </section>
        </div>
      </div>
    </div>
  );
}
