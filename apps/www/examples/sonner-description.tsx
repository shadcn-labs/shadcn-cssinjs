"use client";

import { toast } from "sonner";

import { Button } from "@/registry/bases/stylex/ui/button";

export default function SonnerDescription() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
  );
}
