"use client";

import { lazy, Suspense, useMemo } from "react";

/**
 * Lazily renders a Tokenami demo from `examples-tokenami/<name>.tsx` by name.
 *
 * The dynamic import uses a relative template literal so the bundler creates a
 * request context over the `examples-tokenami` directory.
 */
export const TokenamiExample = ({ name }: { name: string }) => {
  const Demo = useMemo(
    () =>
      lazy(
        () =>
          import(`../examples-tokenami/${name}`) as Promise<{
            default: React.ComponentType;
          }>
      ),
    [name]
  );

  return (
    <Suspense fallback={null}>
      <Demo />
    </Suspense>
  );
};
