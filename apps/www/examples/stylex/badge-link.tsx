import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/registry/bases/stylex/ui/badge";

export default function BadgeAsLink() {
  return (
    <a href="#link" className="inline-flex">
      <Badge>
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
    </a>
  );
}
