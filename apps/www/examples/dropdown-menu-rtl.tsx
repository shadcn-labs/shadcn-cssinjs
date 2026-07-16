"use client";

import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      account: "الحساب",
      activityBar: "شريط النشاط",
      advanced: "متقدم...",
      billing: "الفوترة",
      bottom: "أسفل",
      calendar: "تقويم",
      chat: "دردشة",
      email: "البريد الإلكتروني",
      inviteUsers: "دعوة المستخدمين",
      left: "يسار",
      logout: "تسجيل الخروج",
      message: "رسالة",
      more: "المزيد",
      newTeam: "فريق جديد",
      open: "افتح القائمة",
      panel: "اللوحة",
      position: "الموضع",
      profile: "الملف الشخصي",
      right: "يمين",
      settings: "الإعدادات",
      statusBar: "شريط الحالة",
      team: "الفريق",
      top: "أعلى",
      view: "عرض",
      webhook: "خطاف ويب",
    },
  },
  en: {
    dir: "ltr",
    values: {
      account: "Account",
      activityBar: "Activity Bar",
      advanced: "Advanced...",
      billing: "Billing",
      bottom: "Bottom",
      calendar: "Calendar",
      chat: "Chat",
      email: "Email",
      inviteUsers: "Invite users",
      left: "Left",
      logout: "Log out",
      message: "Message",
      more: "More",
      newTeam: "New Team",
      open: "Open",
      panel: "Panel",
      position: "Position",
      profile: "Profile",
      right: "Right",
      settings: "Settings",
      statusBar: "Status Bar",
      team: "Team",
      top: "Top",
      view: "View",
      webhook: "Webhook",
    },
  },
  he: {
    dir: "rtl",
    values: {
      account: "חשבון",
      activityBar: "שורת פעילות",
      advanced: "מתקדם...",
      billing: "חיוב",
      bottom: "למטה",
      calendar: "יומן",
      chat: "צ'אט",
      email: "אימייל",
      inviteUsers: "הזמן משתמשים",
      left: "שמאל",
      logout: "התנתק",
      message: "הודעה",
      more: "עוד",
      newTeam: "צוות חדש",
      open: "פתח תפריט",
      panel: "לוח",
      position: "מיקום",
      profile: "פרופיל",
      right: "ימין",
      settings: "הגדרות",
      statusBar: "שורת סטטוס",
      team: "הצוות",
      top: "למעלה",
      view: "תצוגה",
      webhook: "Webhook",
    },
  },
};

export default function DropdownMenuRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {t.open}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={dir === "rtl" ? "end" : "start"}
        dir={dir}
        className="w-36"
        data-lang={dir === "rtl" ? language : undefined}
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t.account}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserIcon />
                    {t.profile}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    {t.billing}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon />
                    {t.settings}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.team}</DropdownMenuLabel>
          <DropdownMenuItem>{t.team}</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t.inviteUsers}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <DropdownMenuItem>{t.email}</DropdownMenuItem>
                <DropdownMenuItem>{t.message}</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{t.more}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                      dir={dir}
                      data-lang={dir === "rtl" ? language : undefined}
                    >
                      <DropdownMenuItem>{t.calendar}</DropdownMenuItem>
                      <DropdownMenuItem>{t.chat}</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>{t.webhook}</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t.advanced}</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            {t.newTeam}
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.view}</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            {t.statusBar}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            {t.activityBar}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            {t.panel}
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.position}</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">{t.top}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              {t.bottom}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              {t.right}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">{t.left}</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">{t.logout}</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
