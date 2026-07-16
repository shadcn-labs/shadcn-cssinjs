import { Suspense } from "react";

import { DesignPreview } from "@/app/(view)/preview/stylex/[name]/design-preview";

export default async function StyleXPreviewPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return (
    // DesignPreview reads the generated preset from Nuqs. This mirrors the
    // boundary used by the upstream shadcn create and typeset experiences.
    <Suspense>
      <DesignPreview name={name} />
    </Suspense>
  );
}
