import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  buildStyleXPreset,
  parseServerCreateConfig,
} from "@/app/(app)/(create)/lib/server-config";

export function GET(request: NextRequest) {
  const config = parseServerCreateConfig(request.nextUrl.searchParams);
  return NextResponse.json(buildStyleXPreset(config, request.nextUrl.origin));
}
