"use client";

import { Progress } from "@/registry/bases/tokenami/progress/progress";

export default function ProgressDemo() {
  return <Progress style={{ "--max-width": 80 }} value={60} />;
}
