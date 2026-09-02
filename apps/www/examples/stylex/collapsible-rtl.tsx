"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/ui/collapsible";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      address: "100 Market St, San Francisco",
      items: "العناصر",
      itemsDescription: "2x سماعات الاستوديو",
      orderNumber: "الطلب #4189",
      shipped: "تم الشحن",
      shippingAddress: "عنوان الشحن",
      status: "الحالة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      address: "100 Market St, San Francisco",
      items: "Items",
      itemsDescription: "2x Studio Headphones",
      orderNumber: "Order #4189",
      shipped: "Shipped",
      shippingAddress: "Shipping address",
      status: "Status",
    },
  },
  he: {
    dir: "rtl",
    values: {
      address: "100 Market St, San Francisco",
      items: "פריטים",
      itemsDescription: "2x אוזניות סטודיו",
      orderNumber: "הזמנה #4189",
      shipped: "נשלח",
      shippingAddress: "כתובת משלוח",
      status: "סטטוס",
    },
  },
};

export default function CollapsibleRtl() {
  const { dir, t } = useTranslation(translations, "ar");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
      dir={dir}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">{t.orderNumber}</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon" className="size-8" />}
        >
          <ChevronsUpDown />
          <span className="sr-only">Toggle details</span>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">{t.status}</span>
        <span className="font-medium">{t.shipped}</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">{t.shippingAddress}</p>
          <p className="text-muted-foreground">{t.address}</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">{t.items}</p>
          <p className="text-muted-foreground">{t.itemsDescription}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
