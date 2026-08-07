import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WebMcpTools } from "@/components/web-mcp-tools";
import { AGENT_DOCS_DIRECTIVE_TEXT } from "@/lib/agent-discovery/directive";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-slot="layout"
      className="group/layout bg-background relative z-10 flex min-h-svh flex-col has-data-[slot=designer]:h-svh has-data-[slot=designer]:overflow-hidden"
    >
      <blockquote className="sr-only">{AGENT_DOCS_DIRECTIVE_TEXT}</blockquote>
      <WebMcpTools />
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
