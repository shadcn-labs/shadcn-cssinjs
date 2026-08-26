"use client";

import { ButtonGroup } from "@/registry/bases/tokenami/button-group/button-group";
import { Button } from "@/registry/bases/tokenami/button/button";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button style={{ "--border-radius": "var(---, 0)" }} variant="outline">
        Years
      </Button>
      <Button style={{ "--border-radius": "var(---, 0)" }} variant="outline">
        Months
      </Button>
      <Button style={{ "--border-radius": "var(---, 0)" }} variant="outline">
        Days
      </Button>
    </ButtonGroup>
  );
}
