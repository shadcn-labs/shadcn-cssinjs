import { Button } from "@/registry/bases/stylex/button/button";
import { Spinner } from "@/registry/bases/stylex/spinner/spinner";

export default function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button disabled variant="outline">
        <Spinner className="size-4" />
        Generating
      </Button>
      <Button disabled variant="secondary">
        Downloading
        <Spinner className="size-4" />
      </Button>
    </div>
  );
}
