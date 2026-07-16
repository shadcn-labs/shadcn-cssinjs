import { Suspense } from "react";

import { CreateHistoryProvider } from "@/app/(app)/(create)/hooks/use-history";
import { CreateLocksProvider } from "@/app/(app)/(create)/hooks/use-locks";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <CreateLocksProvider>
        <CreateHistoryProvider>{children}</CreateHistoryProvider>
      </CreateLocksProvider>
    </Suspense>
  );
}
