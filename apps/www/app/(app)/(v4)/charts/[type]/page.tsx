import type { Metadata } from "next";

import { ChartsGallery } from "@/components/v4-gallery/v4-gallery";

export const metadata: Metadata = {
  description: "Customizable chart compositions powered by StyleX tokens.",
  title: "Charts",
};

export default async function ChartsPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  return <ChartsGallery type={type} />;
}
