import { BellIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";

export default function EmptyBackground() {
  return (
    <Empty className="bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BellIcon className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon className="size-4" />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  );
}
