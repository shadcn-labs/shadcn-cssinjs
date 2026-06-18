import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/stylex/tabs/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" style={{ width: "100%", maxWidth: 400 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ fontSize: 14, color: "var(--muted-foreground)" }}>
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ fontSize: 14, color: "var(--muted-foreground)" }}>
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  );
}
