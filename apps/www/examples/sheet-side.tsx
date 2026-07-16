import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/stylex/ui/sheet";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function SheetSide() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={
              <Button style={{ textTransform: "capitalize" }} variant="outline">
                {side}
              </Button>
            }
          />
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle style={{ textTransform: "capitalize" }}>
                {side} sheet
              </SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
