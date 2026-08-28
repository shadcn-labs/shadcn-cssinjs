import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/stylex/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  );
}
