import {
  CopyIcon,
  CornerDownLeftIcon,
  FileCodeIcon,
  RefreshCwIcon,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/stylex/ui/input-group";

export default function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          className="min-h-[200px]"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton className="ml-auto" size="sm">
            Run <CornerDownLeftIcon className="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <FileCodeIcon className="size-4" />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <RefreshCwIcon className="size-3.5" />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" variant="ghost">
            <CopyIcon className="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
