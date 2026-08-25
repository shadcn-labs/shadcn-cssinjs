import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { BASE_NAMES, BASES, getBase } from "@/lib/bases";
import type { BaseName } from "@/lib/bases";
import { cn } from "@/lib/utils";

type DocsBaseSwitcherSection = "components";

const DOCS_BASE_SWITCHER_SECTIONS = new Set<DocsBaseSwitcherSection>([
  "components",
]);

const isDocsBaseSwitcherSection = (
  section: string
): section is DocsBaseSwitcherSection =>
  DOCS_BASE_SWITCHER_SECTIONS.has(section as DocsBaseSwitcherSection);

export const getDocsBaseSwitcherProps = (
  slug?: string[]
): {
  section: DocsBaseSwitcherSection;
  base: string;
  slug?: string;
} | null => {
  if (!slug || slug.length < 2) {
    return null;
  }

  const [section, base, ...rest] = slug;

  if (
    !BASE_NAMES.includes(base as BaseName) ||
    !isDocsBaseSwitcherSection(section)
  ) {
    return null;
  }

  return { base, section, slug: rest.length > 0 ? rest.join("/") : undefined };
};

export const DocsBaseSwitcher = ({
  base,
  slug,
  section,
  className,
}: {
  base: string;
  slug?: string;
  section: DocsBaseSwitcherSection;
  className?: string;
}) => {
  const activeBase = getBase(base as (typeof BASES)[number]["name"]);

  return (
    <div className={cn("inline-flex w-full items-center gap-6", className)}>
      {BASES.map((baseItem) => (
        <Link
          key={baseItem.name}
          href={`${ROUTES.DOCS}/${section}/${baseItem.name}${slug ? `/${slug}` : ""}`}
          data-active={base === baseItem.name}
          className="relative inline-flex items-center justify-center gap-1 pt-1 pb-0.5 text-base font-medium text-muted-foreground transition-colors after:absolute after:inset-x-0 after:bottom-[-4px] after:h-0.5 after:bg-foreground after:opacity-0 after:transition-opacity hover:text-foreground data-[active=true]:text-foreground data-[active=true]:after:opacity-100"
        >
          {baseItem.title}
        </Link>
      ))}
      {activeBase?.description ? (
        <p className="ml-auto hidden shrink-0 text-sm text-muted-foreground sm:block">
          {activeBase.description}
        </p>
      ) : null}
    </div>
  );
};
