import { Button } from "@/registry/bases/stylex/ui/button";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

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
