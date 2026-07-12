"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/tokenami/tabs/tabs";

export default function TabsDemo() {
  return (
    <Tabs
      defaultValue="account"
      style={{ "--max-width": 100, "--width": "var(---, 100%)" }}
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  );
}
