"use client";

import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
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
} from "@/registry/bases/stylex/ui/sidebar";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      application: "التطبيق",
      calendar: "التقويم",
      home: "الرئيسية",
      inbox: "البريد الوارد",
      platform: "المنصة",
      search: "بحث",
      settings: "الإعدادات",
      toggle: "بدّل الشريط الجانبي",
    },
  },
  en: {
    dir: "ltr",
    values: {
      application: "Application",
      calendar: "Calendar",
      home: "Home",
      inbox: "Inbox",
      platform: "Platform",
      search: "Search",
      settings: "Settings",
      toggle: "Toggle the sidebar",
    },
  },
  he: {
    dir: "rtl",
    values: {
      application: "יישום",
      calendar: "יומן",
      home: "בית",
      inbox: "תיבת דואר",
      platform: "פלטפורמה",
      search: "חיפוש",
      settings: "הגדרות",
      toggle: "החלף את סרגל הצד",
    },
  },
};

export default function SidebarRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  const items = [
    { icon: HomeIcon, isActive: true, title: t.home },
    { icon: InboxIcon, title: t.inbox },
    { icon: CalendarIcon, title: t.calendar },
    { icon: SearchIcon, title: t.search },
    { icon: SettingsIcon, title: t.settings },
  ];

  return (
    <div dir={dir} style={{ maxWidth: 520, width: "100%" }}>
      <SidebarProvider
        style={{
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          minHeight: 380,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <span style={{ fontWeight: 600, padding: "0 8px" }}>
              {t.application}
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>{t.platform}</SidebarGroupLabel>
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
              {t.toggle}
            </span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
