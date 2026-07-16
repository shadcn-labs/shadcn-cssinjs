import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const ROWS = ["a", "b", "c", "d", "e"];

export default function SkeletonTable() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {ROWS.map((row) => (
        <div className="flex gap-4" key={row}>
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}
