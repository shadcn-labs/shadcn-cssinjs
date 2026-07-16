import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Skeleton style={{ borderRadius: "9999px", height: 48, width: 48 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton style={{ height: 16, width: 200 }} />
        <Skeleton style={{ height: 16, width: 160 }} />
      </div>
    </div>
  );
}
