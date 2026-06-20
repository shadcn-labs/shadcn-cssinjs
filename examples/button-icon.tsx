import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";

export default function ButtonIcon() {
  return (
    <Button aria-label="Next" size="icon" variant="outline">
      <ChevronRightIcon size={16} />
    </Button>
  );
}
