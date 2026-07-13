import { ExampleGallery } from "@/components/v4-gallery/v4-gallery";

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <ExampleGallery name={name} />;
}
