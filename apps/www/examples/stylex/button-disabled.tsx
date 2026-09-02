import { Loader2Icon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonDisabled() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Loader2Icon
          size={16}
          style={{ animation: "spin 1s linear infinite" }}
        />
        Please wait
      </Button>
    </div>
  );
}
