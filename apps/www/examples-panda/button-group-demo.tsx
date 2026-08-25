"use client";

import { ButtonGroup } from "@/registry/bases/panda/button-group/button-group";
import { Button } from "@/registry/bases/panda/button/button";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Years
      </Button>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Months
      </Button>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Days
      </Button>
    </ButtonGroup>
  );
}
