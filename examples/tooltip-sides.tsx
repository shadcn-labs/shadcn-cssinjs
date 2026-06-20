import { Button } from "@/registry/bases/stylex/button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/stylex/tooltip/tooltip";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function TooltipSides() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {SIDES.map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger
            render={
              <Button style={{ textTransform: "capitalize" }} variant="outline">
                {side}
              </Button>
            }
          />
          <TooltipContent side={side}>
            <p>On {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
