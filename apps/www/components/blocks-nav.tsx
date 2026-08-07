"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { registryCategories } from "@/lib/categories";
import { ScrollArea } from "@/registry/bases/stylex/scroll-area/scroll-area";

const BlocksNavLink = ({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number];
  isActive: boolean;
}) => {
  if (category.hidden) {
    return null;
  }

  return (
    <Link
      className="flex h-7 items-center justify-center px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
      data-active={isActive}
      href={`/blocks/${category.slug}`}
    >
      {category.name}
    </Link>
  );
};

export const BlocksNav = () => {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          <BlocksNavLink
            category={{ hidden: false, name: "Featured", slug: "" }}
            isActive={pathname === "/blocks"}
          />
          {registryCategories.map((category) => (
            <BlocksNavLink
              category={category}
              isActive={pathname === `/blocks/${category.slug}`}
              key={category.slug}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
