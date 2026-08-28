"use client";

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      addToCalendar: "إضافة إلى التقويم",
      addToList: "إضافة إلى القائمة",
      archive: "أرشفة",
      labelAs: "تصنيف كـ...",
      markAsRead: "وضع علامة كمقروء",
      other: "آخر",
      personal: "شخصي",
      report: "تقرير",
      snooze: "تأجيل",
      trash: "سلة المهملات",
      work: "عمل",
    },
  },
  en: {
    dir: "ltr",
    values: {
      addToCalendar: "Add to Calendar",
      addToList: "Add to List",
      archive: "Archive",
      labelAs: "Label As...",
      markAsRead: "Mark as Read",
      other: "Other",
      personal: "Personal",
      report: "Report",
      snooze: "Snooze",
      trash: "Trash",
      work: "Work",
    },
  },
  he: {
    dir: "rtl",
    values: {
      addToCalendar: "הוסף ליומן",
      addToList: "הוסף לרשימה",
      archive: "ארכיון",
      labelAs: "תייג כ...",
      markAsRead: "סמן כנקרא",
      other: "אחר",
      personal: "אישי",
      report: "דוח",
      snooze: "דחה",
      trash: "פח",
      work: "עבודה",
    },
  },
};

export default function ButtonGroupRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [label, setLabel] = React.useState("personal");

  return (
    <div dir={dir}>
      <ButtonGroup>
        <ButtonGroup className="hidden sm:flex">
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon className="rtl:rotate-180" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">{t.archive}</Button>
          <Button variant="outline">{t.report}</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">{t.snooze}</Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="More Options"
                />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={dir === "rtl" ? "start" : "end"}
              data-lang={dir === "rtl" ? language : undefined}
              dir={dir}
              className="w-40"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MailCheckIcon />
                  {t.markAsRead}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArchiveIcon />
                  {t.archive}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ClockIcon />
                  {t.snooze}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarPlusIcon />
                  {t.addToCalendar}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListFilterIcon />
                  {t.addToList}
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <TagIcon />
                    {t.labelAs}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    dir={dir}
                    data-lang={dir === "rtl" ? language : undefined}
                  >
                    <DropdownMenuRadioGroup
                      value={label}
                      onValueChange={setLabel}
                    >
                      <DropdownMenuRadioItem value="personal">
                        {t.personal}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="work">
                        {t.work}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="other">
                        {t.other}
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  {t.trash}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
}
