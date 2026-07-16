import { SearchIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/stylex/ui/input-group";
import { Kbd } from "@/registry/bases/stylex/ui/kbd";

export default function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#contact">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
