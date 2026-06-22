"use client";

import { toast } from "sonner";

import { Button } from "@/registry/bases/stylex/button/button";

const POSITIONS = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const;

export default function SonnerPosition() {
  return (
    <div className="flex flex-wrap gap-2">
      {POSITIONS.map((position) => (
        <Button
          key={position}
          onClick={() => toast("Event has been created", { position })}
          variant="outline"
        >
          {position}
        </Button>
      ))}
    </div>
  );
}
