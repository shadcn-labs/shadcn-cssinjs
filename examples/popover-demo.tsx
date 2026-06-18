import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/popover/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline">Open popover</Button>}
      />
      <PopoverContent style={{ width: 280 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
              Dimensions
            </h4>
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: 14,
                margin: 0,
              }}
            >
              Set the dimensions for the layer.
            </p>
          </div>
          <Input defaultValue="100%" placeholder="Width" />
          <Input defaultValue="25px" placeholder="Height" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
