import { Button } from "@/registry/bases/stylex/button/button";
import { Kbd } from "@/registry/bases/stylex/kbd/kbd";

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept <Kbd>⏎</Kbd>
    </Button>
  );
}
