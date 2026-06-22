import { Button } from "@/registry/bases/stylex/button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/stylex/tooltip/tooltip";

export default function TooltipDisabled() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span className="inline-block w-fit" />}>
        <Button disabled variant="outline">
          Disabled
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  );
}
