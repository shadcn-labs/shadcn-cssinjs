"use client";

"use client";

import { toast } from "sonner";

import { Button } from "@/registry/bases/panda/button/button";
import { Toaster } from "@/registry/bases/panda/sonner/sonner";

export default function SonnerDemo() {
  return (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
        variant="outline"
      >
        Show toast
      </Button>
      <Toaster />
    </>
  );
}
