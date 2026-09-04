import { ROUTES } from "@/constants/routes";
import { getAllPagesFromFolder, getPagesFromFolder } from "@/lib/page-tree";
import type { PageTreeFolder } from "@/lib/page-tree";
import { formatLabelFromSlug } from "@/lib/utils";

export const DOCS_DIR = `content${ROUTES.DOCS}`;

export const EXCLUDED_SECTIONS = new Set(["(root)"]);

export const isComponentsFolder = (folder: PageTreeFolder) =>
  folder.$id === "components" || folder.name === "Components";

export const isInstallationFolder = (folder: PageTreeFolder) =>
  folder.$id === "installation" || folder.name === "Installation";

export const getPagesForSidebarFolder = (folder: PageTreeFolder) => {
  if (isComponentsFolder(folder)) {
    return getAllPagesFromFolder(folder).filter(
      (page) => page.url !== ROUTES.DOCS_COMPONENTS
    );
  }
  if (isInstallationFolder(folder)) {
    return getPagesFromFolder(folder).filter(
      (page) => page.url !== ROUTES.DOCS_INSTALLATION
    );
  }
  return getPagesFromFolder(folder);
};

const TITLE_OVERRIDES: Record<string, string> = {
  json: "JSON",
  "qr-code": "QR Code",
};

export const formatTitleFromSlug = (slug: string): string =>
  TITLE_OVERRIDES[slug] ?? formatLabelFromSlug(slug);

export const homeContentRoute = `${ROUTES.LLMS_MD}/content.md`;
export const docsContentRoute = `${ROUTES.LLMS_MD}${ROUTES.DOCS}`;
export const docsImageRoute = `${ROUTES.OG}${ROUTES.DOCS}`;
