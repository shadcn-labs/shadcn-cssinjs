import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  buildStyleXInstructions,
  parseServerCreateConfig,
} from "@/app/(app)/(create)/lib/server-config";

export function GET(request: NextRequest) {
  const config = parseServerCreateConfig(request.nextUrl.searchParams);
  return NextResponse.json({
    chatPrivacy: "private",
    message: `${buildStyleXInstructions(config, request.nextUrl.origin)}\n\nBuild a polished application using this StyleX design system.`,
    projectName: `stylex-${config.style}-${config.theme}`,
  });
}
