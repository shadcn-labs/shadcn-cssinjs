"use client";

import { Progress } from "@/registry/bases/panda/progress/progress";

export default function ProgressDemo() {
  return <Progress style={{ maxWidth: "20rem" }} value={60} />;
}
