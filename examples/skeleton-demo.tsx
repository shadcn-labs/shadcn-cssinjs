import { Skeleton } from "@/registry/bases/stylex/skeleton/skeleton";

export default function SkeletonDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Skeleton
        style={{ width: 48, height: 48, borderRadius: "9999px" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton style={{ width: 200, height: 16 }} />
        <Skeleton style={{ width: 160, height: 16 }} />
      </div>
    </div>
  );
}
