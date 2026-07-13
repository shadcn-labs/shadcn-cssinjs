import { DesignPreview } from "@/app/(view)/preview/stylex/[name]/design-preview";

export default async function StyleXPreviewPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <DesignPreview name={name} />;
}
