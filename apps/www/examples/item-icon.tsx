import { ShieldAlertIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";

export default function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
