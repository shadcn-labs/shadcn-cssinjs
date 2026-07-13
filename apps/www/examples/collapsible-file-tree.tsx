import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/bases/stylex/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/stylex/ui/tabs";

interface FileTreeItem {
  name: string;
  items?: FileTreeItem[];
}

const fileTree: FileTreeItem[] = [
  {
    items: [
      {
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
          { name: "input.tsx" },
        ],
        name: "ui",
      },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
    name: "components",
  },
  {
    items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    name: "lib",
  },
  {
    items: [{ name: "use-media-query.ts" }, { name: "use-debounce.ts" }],
    name: "hooks",
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "package.json" },
  { name: "README.md" },
];

const renderItem = (fileItem: FileTreeItem) => {
  if (fileItem.items) {
    return (
      <Collapsible key={fileItem.name}>
        <CollapsibleTrigger
          render={
            <Button
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            />
          }
        >
          <ChevronRightIcon className="size-4" />
          <FolderIcon className="size-4" />
          {fileItem.name}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-1 ml-5">
          <div className="flex flex-col gap-1">
            {fileItem.items.map((child) => renderItem(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <Button
      className="w-full justify-start gap-2 text-foreground"
      key={fileItem.name}
      size="sm"
      variant="link"
    >
      <FileIcon className="size-4" />
      <span>{fileItem.name}</span>
    </Button>
  );
};

export default function CollapsibleFileTree() {
  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="settings">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  );
}
