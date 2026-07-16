"use client";

import * as React from "react";

import type { CreateSearchParams } from "@/app/(app)/(create)/lib/search-params";

export type LockableCreateParam = Exclude<
  keyof CreateSearchParams,
  "item" | "pointer" | "preset" | "rtl" | "size" | "template"
>;

interface LocksContextValue {
  locks: Set<LockableCreateParam>;
  isLocked: (param: LockableCreateParam) => boolean;
  toggleLock: (param: LockableCreateParam) => void;
}

const LocksContext = React.createContext<LocksContextValue | null>(null);

export function CreateLocksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locks, setLocks] = React.useState<Set<LockableCreateParam>>(new Set());
  const isLocked = React.useCallback(
    (param: LockableCreateParam) => locks.has(param),
    [locks]
  );
  const toggleLock = React.useCallback((param: LockableCreateParam) => {
    setLocks((current) => {
      const next = new Set(current);
      if (next.has(param)) {
        next.delete(param);
      } else {
        next.add(param);
      }
      return next;
    });
  }, []);
  const value = React.useMemo(
    () => ({ isLocked, locks, toggleLock }),
    [isLocked, locks, toggleLock]
  );

  return <LocksContext value={value}>{children}</LocksContext>;
}

export function useCreateLocks() {
  const context = React.useContext(LocksContext);
  if (!context) {
    throw new Error("useCreateLocks must be used within CreateLocksProvider");
  }
  return context;
}
