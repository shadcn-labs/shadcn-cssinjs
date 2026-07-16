import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/stylex/ui/tabs";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="account" style={{ maxWidth: 400, width: "100%" }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger disabled value="team">
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>
          The Team tab is disabled and can&apos;t be selected.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
  );
}
