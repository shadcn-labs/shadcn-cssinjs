"use client";

import { toast } from "sonner";

import { Button } from "@/registry/bases/stylex/ui/button";

export default function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("Event has been created")} variant="outline">
        Default
      </Button>
      <Button
        onClick={() => toast.success("Event has been created")}
        variant="outline"
      >
        Success
      </Button>
      <Button
        onClick={() => toast.info("Be at the area 10 minutes before the event")}
        variant="outline"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
        variant="outline"
      >
        Warning
      </Button>
      <Button
        onClick={() => toast.error("Event has not been created")}
        variant="outline"
      >
        Error
      </Button>
    </div>
  );
}
