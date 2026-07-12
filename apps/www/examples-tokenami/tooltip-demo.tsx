"use client";

import { Button } from "@/registry/bases/tokenami/button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/tokenami/tooltip/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
