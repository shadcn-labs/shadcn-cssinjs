import { SaveIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";
import { Kbd } from "@/registry/bases/stylex/kbd/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/stylex/tooltip/tooltip";

export default function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button size="icon-sm" variant="outline" />}>
        <SaveIcon className="size-4" />
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}
