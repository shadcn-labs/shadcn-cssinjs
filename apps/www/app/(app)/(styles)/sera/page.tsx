import type { Metadata } from "next";

import { StyleGallery } from "@/components/v4-gallery/v4-gallery";

export const metadata: Metadata = {
  description: "Explore the Sera StyleX design-system style.",
  title: "Sera",
};

export default function SeraPage() {
  return <StyleGallery />;
}
