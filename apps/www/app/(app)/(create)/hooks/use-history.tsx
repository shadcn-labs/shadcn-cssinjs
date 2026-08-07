"use client";

import * as React from "react";

import {
  parseCreateSnapshot,
  useCreateSearchParams,
} from "@/app/(app)/(create)/lib/search-params";

interface HistoryValue {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
}

const HistoryContext = React.createContext<HistoryValue | null>(null);

export function CreateHistoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [params, setParams] = useCreateSearchParams();
  const snapshot = JSON.stringify({ ...params, preset: "" });
  const entriesRef = React.useRef<string[]>([]);
  const indexRef = React.useRef(0);
  const navigatingRef = React.useRef(false);
  const [index, setIndex] = React.useState(0);
  const [maxIndex, setMaxIndex] = React.useState(0);

  React.useEffect(() => {
    if (entriesRef.current.length === 0) {
      entriesRef.current = [snapshot];
      return;
    }
    if (navigatingRef.current) {
      navigatingRef.current = false;
      return;
    }
    if (entriesRef.current[indexRef.current] === snapshot) {
      return;
    }

    const entries = entriesRef.current.slice(0, indexRef.current + 1);
    entries.push(snapshot);
    entriesRef.current = entries;
    indexRef.current = entries.length - 1;
    setIndex(indexRef.current);
    setMaxIndex(indexRef.current);
  }, [snapshot]);

  const restore = React.useCallback(
    (nextIndex: number) => {
      const entry = entriesRef.current[nextIndex];
      if (!entry) {
        return;
      }
      navigatingRef.current = true;
      indexRef.current = nextIndex;
      setIndex(nextIndex);
      void setParams(parseCreateSnapshot(entry), { history: "replace" });
    },
    [setParams]
  );

  const goBack = React.useCallback(() => {
    if (indexRef.current > 0) {
      restore(indexRef.current - 1);
    }
  }, [restore]);
  const goForward = React.useCallback(() => {
    if (indexRef.current < entriesRef.current.length - 1) {
      restore(indexRef.current + 1);
    }
  }, [restore]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey) {
        return;
      }
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          goForward();
        } else {
          goBack();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goBack, goForward]);

  const value = React.useMemo(
    () => ({
      canGoBack: index > 0,
      canGoForward: index < maxIndex,
      goBack,
      goForward,
    }),
    [goBack, goForward, index, maxIndex]
  );

  return <HistoryContext value={value}>{children}</HistoryContext>;
}

export function useCreateHistory() {
  const context = React.useContext(HistoryContext);
  if (!context) {
    throw new Error(
      "useCreateHistory must be used within CreateHistoryProvider"
    );
  }
  return context;
}
