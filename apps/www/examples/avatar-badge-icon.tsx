import { PlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/ui/avatar";

export default function AvatarBadgeIcon() {
  return (
    <Avatar className="grayscale">
      <AvatarImage alt="@pranathip" src="https://github.com/pranathip.png" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon className="size-2" />
      </AvatarBadge>
    </Avatar>
  );
}
