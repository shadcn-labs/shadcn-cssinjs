import { Badge } from "@/registry/bases/stylex/ui/badge";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

export default function BadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner className="size-3" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner className="size-3" />
      </Badge>
    </div>
  );
}
