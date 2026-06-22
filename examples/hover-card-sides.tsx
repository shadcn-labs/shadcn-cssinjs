import { Button } from "@/registry/bases/stylex/button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/bases/stylex/hover-card/hover-card";

const SIDES = ["left", "top", "bottom", "right"] as const;

export default function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SIDES.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            render={<Button className="capitalize" variant="outline" />}
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
