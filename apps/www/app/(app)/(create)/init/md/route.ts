import type { NextRequest } from "next/server";

import {
  buildStyleXInstructions,
  parseServerCreateConfig,
} from "@/app/(app)/(create)/lib/server-config";

export function GET(request: NextRequest) {
  const config = parseServerCreateConfig(request.nextUrl.searchParams);
  return new Response(buildStyleXInstructions(config, request.nextUrl.origin), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
