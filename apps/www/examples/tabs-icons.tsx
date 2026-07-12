import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/stylex/tabs/tabs";

export default function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon className="size-4" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon className="size-4" />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
