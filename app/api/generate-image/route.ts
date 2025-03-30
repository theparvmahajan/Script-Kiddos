import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Get the prompt from the request body
    const { prompt } = await req.json()

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "A valid prompt is required" }, { status: 400 })
    }

    // Since we don't have a real image generation API configured,
    // we'll return a placeholder image URL
    const placeholderUrl = `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(prompt.substring(0, 30))}`

    // Return the placeholder image URL
    return NextResponse.json({ imageUrl: placeholderUrl })
  } catch (error) {
    console.error("Error in generate-image API route:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}

