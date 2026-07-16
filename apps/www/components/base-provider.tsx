"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export type ComponentBase = "stylex" | "tokenami";

export const BASE_LABELS: Record<ComponentBase, string> = {
  stylex: "StyleX",
  tokenami: "Tokenami",
};

const STORAGE_KEY = "component-base";

interface BaseContextValue {
  base: ComponentBase;
  setBase: (base: ComponentBase) => void;
}

const BaseContext = createContext<BaseContextValue | null>(null);

export const BaseProvider = ({ children }: { children: ReactNode }) => {
  const [base, setBaseState] = useState<ComponentBase>("stylex");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "stylex" || stored === "tokenami") {
      setBaseState(stored);
    }
  }, []);

  const setBase = useCallback((next: ComponentBase) => {
    setBaseState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ base, setBase }), [base, setBase]);

  return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>;
};

export const useComponentBase = (): BaseContextValue => {
  const context = useContext(BaseContext);
  if (!context) {
    return {
      base: "stylex",
      setBase: () => {
        // no-op outside a BaseProvider
      },
    };
  }
  return context;
};
