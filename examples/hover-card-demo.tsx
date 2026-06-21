import { CalendarIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/bases/stylex/hover-card/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@shadcn</Button>} />
      <HoverCardContent>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>@shadcn</h4>
          <p style={{ margin: 0 }}>
            The React framework — created and maintained by @vercel.
          </p>
          <div
            style={{
              alignItems: "center",
              color: "var(--muted-foreground)",
              display: "flex",
              fontSize: 12,
              gap: 6,
            }}
          >
            <CalendarIcon size={12} />
            Joined December 2021
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
