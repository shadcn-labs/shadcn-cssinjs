import type { Metadata } from "next";

import { ColorsGallery } from "@/components/v4-gallery/v4-gallery";

export const metadata: Metadata = {
  description: "Design-system color palettes with copyable token values.",
  title: "Colors",
};

export default function ColorsPage() {
  return <ColorsGallery />;
}
