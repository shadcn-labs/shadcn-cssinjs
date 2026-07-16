import { Button } from "@/registry/bases/stylex/ui/button";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

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
