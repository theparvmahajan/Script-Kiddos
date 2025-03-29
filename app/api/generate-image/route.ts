import { type NextRequest, NextResponse } from "next/server"
import { generateMedicalImage, isImageGenerationConfigured } from "@/lib/image-generation-config"

export async function POST(req: NextRequest) {
  try {
    // Check if image generation is configured
    if (!isImageGenerationConfigured()) {
      return NextResponse.json({ error: "Image generation is not configured" }, { status: 503 })
    }

    // Get the prompt from the request body
    const { prompt } = await req.json()

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "A valid prompt is required" }, { status: 400 })
    }

    // Generate the image
    const imageUrl = await generateMedicalImage(prompt)

    // Return the image URL
    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error("Error in generate-image API route:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}

