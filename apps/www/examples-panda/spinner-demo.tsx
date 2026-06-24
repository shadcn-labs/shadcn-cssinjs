"use client";

import { Button } from "@/registry/bases/panda/button/button";
import { Spinner } from "@/registry/bases/panda/spinner/spinner";

export default function SpinnerDemo() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Spinner />
      <Button disabled>
        <Spinner />
        Please wait
      </Button>
    </div>
  );
}
