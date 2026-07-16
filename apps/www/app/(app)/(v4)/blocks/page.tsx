import type { Metadata } from "next";

import { BlocksGallery } from "@/components/v4-gallery/v4-gallery";

export const metadata: Metadata = {
  description: "Production-ready application blocks built with StyleX.",
  title: "Blocks",
};

export default function BlocksPage() {
  return <BlocksGallery />;
}
