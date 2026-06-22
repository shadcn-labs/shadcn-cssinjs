import { ArrowUpIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";

export default function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button className="rounded-full" size="icon" variant="outline">
        <ArrowUpIcon className="size-4" />
      </Button>
    </div>
  );
}
