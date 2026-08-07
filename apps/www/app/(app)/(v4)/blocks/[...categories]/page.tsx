import { BlocksGallery } from "@/components/v4-gallery/v4-gallery";

export default async function BlocksCategoryPage({
  params,
}: {
  params: Promise<{ categories: string[] }>;
}) {
  const { categories } = await params;
  return <BlocksGallery category={categories[0]} />;
}
