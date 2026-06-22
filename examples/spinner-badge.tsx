import { Badge } from "@/registry/bases/stylex/badge/badge";
import { Spinner } from "@/registry/bases/stylex/spinner/spinner";

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4">
      <Badge>
        <Spinner className="size-3" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner className="size-3" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner className="size-3" />
        Processing
      </Badge>
    </div>
  );
}
