"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/stylex/ui/resizable";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      one: "واحد",
      three: "ثلاثة",
      two: "اثنان",
    },
  },
  en: {
    dir: "ltr",
    values: {
      one: "One",
      three: "Three",
      two: "Two",
    },
  },
  he: {
    dir: "rtl",
    values: {
      one: "אחד",
      three: "שלושה",
      two: "שניים",
    },
  },
};

export default function ResizableRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-sm rounded-lg border"
      dir={dir}
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">{t.one}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical" dir={dir}>
          <ResizablePanel defaultSize="25%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{t.two}</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{t.three}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
