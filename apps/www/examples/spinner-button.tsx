import { Button } from "@/registry/bases/stylex/ui/button";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

export default function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner className="size-4" />
        Loading...
      </Button>
      <Button disabled size="sm" variant="outline">
        <Spinner className="size-4" />
        Please wait
      </Button>
      <Button disabled size="sm" variant="secondary">
        <Spinner className="size-4" />
        Processing
      </Button>
    </div>
  );
}
