"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/stylex/ui/tabs";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      analytics: "التحليلات",
      analyticsContent: "زادت مشاهدات الصفحة بنسبة ٢٥٪ مقارنة بالشهر الماضي.",
      analyticsDesc:
        "تتبع مقاييس الأداء ومشاركة المستخدمين. راقب الاتجاهات وحدد فرص النمو.",
      analyticsTitle: "التحليلات",
      overview: "نظرة عامة",
      overviewContent: "لديك ١٢ مشروعًا نشطًا و٣ مهام معلقة.",
      overviewDesc:
        "عرض مقاييسك الرئيسية وأنشطة المشروع الأخيرة. تتبع التقدم عبر جميع مشاريعك النشطة.",
      overviewTitle: "نظرة عامة",
      reports: "التقارير",
      reportsContent: "لديك ٥ تقارير جاهزة ومتاحة للتصدير.",
      reportsDesc:
        "إنشاء وتنزيل تقاريرك التفصيلية. تصدير البيانات بتنسيقات متعددة للتحليل.",
      reportsTitle: "التقارير",
      settings: "الإعدادات",
      settingsContent: "تكوين الإشعارات والأمان والسمات.",
      settingsDesc:
        "إدارة تفضيلات حسابك وخياراته. تخصيص تجربتك لتناسب احتياجاتك.",
      settingsTitle: "الإعدادات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      analytics: "Analytics",
      analyticsContent: "Page views are up 25% compared to last month.",
      analyticsDesc:
        "Track performance and user engagement metrics. Monitor trends and identify growth opportunities.",
      analyticsTitle: "Analytics",
      overview: "Overview",
      overviewContent: "You have 12 active projects and 3 pending tasks.",
      overviewDesc:
        "View your key metrics and recent project activity. Track progress across all your active projects.",
      overviewTitle: "Overview",
      reports: "Reports",
      reportsContent: "You have 5 reports ready and available to export.",
      reportsDesc:
        "Generate and download your detailed reports. Export data in multiple formats for analysis.",
      reportsTitle: "Reports",
      settings: "Settings",
      settingsContent: "Configure notifications, security, and themes.",
      settingsDesc:
        "Manage your account preferences and options. Customize your experience to fit your needs.",
      settingsTitle: "Settings",
    },
  },
  he: {
    dir: "rtl",
    values: {
      analytics: "אנליטיקה",
      analyticsContent: "צפיות בדף עלו ב-25% בהשוואה לחודש שעבר.",
      analyticsDesc:
        "עקוב אחר ביצועים ומדדי מעורבות משתמשים. עקוב אחר מגמות וזהה הזדמנויות צמיחה.",
      analyticsTitle: "אנליטיקה",
      overview: "סקירה כללית",
      overviewContent: "יש לך 12 פרויקטים פעילים ו-3 משימות ממתינות.",
      overviewDesc:
        "הצג את המדדים העיקריים שלך ופעילות הפרויקט האחרונה. עקוב אחר התקדמות בכל הפרויקטים הפעילים שלך.",
      overviewTitle: "סקירה כללית",
      reports: "דוחות",
      reportsContent: "יש לך 5 דוחות מוכנים וזמינים לייצוא.",
      reportsDesc:
        "צור והורד את הדוחות המפורטים שלך. ייצא נתונים בפורמטים מרובים לניתוח.",
      reportsTitle: "דוחות",
      settings: "הגדרות",
      settingsContent: "הגדר התראות, אבטחה וערכות נושא.",
      settingsDesc:
        "נהל את העדפות החשבון והאפשרויות שלך. התאם אישית את החוויה שלך כך שתתאים לצרכים שלך.",
      settingsTitle: "הגדרות",
    },
  },
};

export default function TabsRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm" dir={dir}>
      <TabsList dir={dir}>
        <TabsTrigger value="overview">{t.overview}</TabsTrigger>
        <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
        <TabsTrigger value="reports">{t.reports}</TabsTrigger>
        <TabsTrigger value="settings">{t.settings}</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card dir={dir}>
          <CardHeader>
            <CardTitle>{t.overviewTitle}</CardTitle>
            <CardDescription>{t.overviewDesc}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {t.overviewContent}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card dir={dir}>
          <CardHeader>
            <CardTitle>{t.analyticsTitle}</CardTitle>
            <CardDescription>{t.analyticsDesc}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {t.analyticsContent}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card dir={dir}>
          <CardHeader>
            <CardTitle>{t.reportsTitle}</CardTitle>
            <CardDescription>{t.reportsDesc}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {t.reportsContent}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card dir={dir}>
          <CardHeader>
            <CardTitle>{t.settingsTitle}</CardTitle>
            <CardDescription>{t.settingsDesc}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {t.settingsContent}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
