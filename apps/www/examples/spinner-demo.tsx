import { Button } from "@/registry/bases/stylex/button/button";
import { Spinner } from "@/registry/bases/stylex/spinner/spinner";

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
