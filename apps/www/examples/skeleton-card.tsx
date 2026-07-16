import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Skeleton style={{ borderRadius: 12, height: 160, width: 280 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton style={{ height: 16, width: 280 }} />
        <Skeleton style={{ height: 16, width: 220 }} />
      </div>
    </div>
  );
}
