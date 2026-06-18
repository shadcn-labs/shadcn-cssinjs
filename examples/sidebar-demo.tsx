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
} from "@/registry/bases/stylex/sidebar/sidebar";

const items = [
  { title: "Home", icon: HomeIcon, isActive: true },
  { title: "Inbox", icon: InboxIcon },
  { title: "Calendar", icon: CalendarIcon },
  { title: "Search", icon: SearchIcon },
  { title: "Settings", icon: SettingsIcon },
];

export default function SidebarDemo() {
  return (
    <SidebarProvider
      style={{
        minHeight: 380,
        width: "100%",
        maxWidth: 520,
        borderRadius: "0.5rem",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <span style={{ padding: "0 8px", fontWeight: 600 }}>Application</span>
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
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 12,
          }}
        >
          <SidebarTrigger />
          <span style={{ fontSize: 14, color: "var(--muted-foreground)" }}>
            Toggle the sidebar
          </span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
