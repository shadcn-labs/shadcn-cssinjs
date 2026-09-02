import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/bases/stylex/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/stylex/ui/tabs";

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

const renderItem = (fileItem: FileTreeItem) => {
  if ("items" in fileItem) {
    return (
      <Collapsible key={fileItem.name}>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
            />
          }
        >
          <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
          <FolderIcon />
          {fileItem.name}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
          <div className="flex flex-col gap-1">
            {fileItem.items.map((child) => renderItem(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <Button
      key={fileItem.name}
      variant="link"
      size="sm"
      className="w-full justify-start gap-2 text-foreground"
    >
      <FileIcon />
      <span>{fileItem.name}</span>
    </Button>
  );
};

export default function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      items: [
        {
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
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
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
      name: "hooks",
    },
    {
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
      name: "types",
    },
    {
      items: [
        { name: "favicon.ico" },
        { name: "logo.svg" },
        { name: "images" },
      ],
      name: "public",
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ];

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
