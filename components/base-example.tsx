"use client";

import { lazy, Suspense, useMemo } from "react";

import type { ComponentBase } from "@/components/base-provider";

type LazyDemo = Promise<{ default: React.ComponentType }>;

const importDemo = (base: ComponentBase, name: string): LazyDemo => {
  // Per-base relative template literals so the bundler creates a request
  // context over each examples directory.
  if (base === "panda") {
    return import(`../examples-panda/${name}`) as LazyDemo;
  }
  return import(`../examples/${name}`) as LazyDemo;
};

/**
 * Lazily renders a demo from `examples-<base>/<name>.tsx` by name and base.
 */
export const BaseExample = ({
  base,
  name,
}: {
  base: ComponentBase;
  name: string;
}) => {
  const Demo = useMemo(() => lazy(() => importDemo(base, name)), [base, name]);

  return (
    <Suspense fallback={null}>
      <Demo />
    </Suspense>
  );
};
