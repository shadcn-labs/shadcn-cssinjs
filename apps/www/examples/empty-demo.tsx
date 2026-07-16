import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        className="text-muted-foreground"
        render={<a href="#learn-more" />}
        size="sm"
        variant="link"
      >
        Learn More <ArrowUpRightIcon className="size-4" />
      </Button>
    </Empty>
  );
}
