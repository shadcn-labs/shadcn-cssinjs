"use client";

import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/bases/tokenami/sidebar/sidebar";

const items = [
  { icon: HomeIcon, isActive: true, title: "Home" },
  { icon: InboxIcon, title: "Inbox" },
  { icon: CalendarIcon, title: "Calendar" },
  { icon: SearchIcon, title: "Search" },
  { icon: SettingsIcon, title: "Settings" },
];

export default function SidebarDemo() {
  return (
    <SidebarProvider
      style={{
        "--border-color": "var(--color_border)",
        "--border-radius": "var(---, 0.5rem)",
        "--border-style": "solid",
        "--border-width": "var(---, 1px)",
        "--max-width": "var(---, 520px)",
        "--min-height": "var(---, 380px)",
        "--overflow": "hidden",
        "--width": "var(---, 100%)",
      }}
    >
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <span style={{ fontWeight: 600, padding: "0 8px" }}>Application</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      tooltip={item.title}
                    >
                      <item.icon size={16} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: 8,
            padding: 12,
          }}
        >
          <SidebarTrigger />
          <span style={{ color: "var(--muted-foreground)", fontSize: 14 }}>
            Toggle the sidebar
          </span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
