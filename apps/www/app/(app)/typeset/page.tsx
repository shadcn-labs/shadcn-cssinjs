import type { Metadata } from "next";

import { TypesetDesigner } from "@/components/typeset/typeset-designer";

export const metadata: Metadata = {
  description: "Design readable typography with StyleX.",
  title: "Typeset",
};

export default function TypesetPage() {
  return <TypesetDesigner />;
}
