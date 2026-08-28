import { GitBranchIcon, GitForkIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitForkIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
