import { NextResponse } from "next/server"
import { isOpenRouterConfigured } from "@/lib/openrouter-config"

export async function GET() {
  return NextResponse.json({
    isAIConfigured: isOpenRouterConfigured(),
  })
}

