"use client";

import { ExternalLinkIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export const GET_CODE_EVENT = "shadcn-cssinjs:get-code";

export const DesignerActions = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (pathname !== "/create") {
    return null;
  }

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const initUrl = `${origin}/create/init/v0?${searchParams.toString()}`;
  const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(initUrl)}`;

  return (
    <div className="flex items-center gap-2">
      <div data-slot="separator" className="bg-border w-px" />
      <Button
        asChild
        className="h-[31px] rounded-lg"
        size="sm"
        variant="outline"
      >
        <a href={v0Url} rel="noreferrer" target="_blank">
          Open in v0 <ExternalLinkIcon />
        </a>
      </Button>
      <Button
        className="h-[31px] rounded-lg"
        size="sm"
        onClick={() => window.dispatchEvent(new Event(GET_CODE_EVENT))}
      >
        Get Code
      </Button>
    </div>
  );
};
