import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export const Announcement = () => (
  <Badge asChild className="bg-muted" variant="secondary">
    <Link href="/docs/typeset">
      Introducing shadcn/typeset <ArrowRightIcon />
    </Link>
  </Badge>
);
