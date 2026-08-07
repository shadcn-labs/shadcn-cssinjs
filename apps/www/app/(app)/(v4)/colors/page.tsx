import type { Metadata } from "next";

import { ColorsGallery } from "@/components/v4-gallery/v4-gallery";
import { getColors } from "@/lib/colors";

export const metadata: Metadata = {
  description: "Design-system color palettes with copyable token values.",
  title: "Colors",
};

export default function ColorsPage() {
  const order = [
    "neutral",
    "stone",
    "zinc",
    "gray",
    "slate",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const palettes = getColors().toSorted(
    (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
  );

  return <ColorsGallery palettes={palettes} />;
}
