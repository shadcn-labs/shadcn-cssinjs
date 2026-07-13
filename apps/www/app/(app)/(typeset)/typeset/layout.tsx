import { Suspense } from "react";

import { TypesetSkeleton } from "@/app/(app)/(typeset)/components/typeset-skeleton";
import { TypesetHistoryProvider } from "@/app/(app)/(typeset)/hooks/use-history";
import { LocksProvider } from "@/app/(app)/(typeset)/hooks/use-locks";

export default function TypesetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<TypesetSkeleton />}>
      <LocksProvider>
        <TypesetHistoryProvider>{children}</TypesetHistoryProvider>
      </LocksProvider>
    </Suspense>
  );
}
