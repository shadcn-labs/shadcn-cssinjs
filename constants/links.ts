export const GITHUB = {
  branch: "main",
  org: "shadcn-labs",
  repo: "shadcn-cssinjs",
  user: "Aniket-508",
} as const;

const githubUrl = `https://github.com/${GITHUB.org}/${GITHUB.repo}`;

export const LINK = {
  DISCORD: "https://discord.gg/N6G36KhYK4",
  GITHUB: githubUrl,
  LICENSE: `${githubUrl}/blob/${GITHUB.branch}/LICENSE`,
  PORTFOLIO: "https://aniketpawar.com",
  SHADCN_MCP_DOCS: "https://ui.shadcn.com/docs/mcp",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  X: "https://x.com/alaymanguy",
  X_SHADCN_LABS: "https://x.com/shadcnlabs",
} as const;

const STORAGE_URL =
  "https://yffrvzi8zwbljfuj.public.blob.vercel-storage.com/shadcn-cssinjs";

export const ASSETS = {
  CHAD: `${STORAGE_URL}/chad.png`,
  ZOOMER: `${STORAGE_URL}/zoomer.png`,
} as const;
