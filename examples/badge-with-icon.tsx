import { BadgeCheckIcon } from "lucide-react";

import { Badge } from "@/registry/bases/stylex/badge/badge";

export default function BadgeWithIcon() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge>
        <BadgeCheckIcon size={12} />
        Verified
      </Badge>
      <Badge variant="secondary">
        <BadgeCheckIcon size={12} />
        Secondary
      </Badge>
    </div>
  );
}
