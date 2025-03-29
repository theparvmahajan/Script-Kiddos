import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // This is a simplified example. In a real implementation,
    // you would need to verify the WhatsApp webhook and handle different message types

    if (data.message) {
      const userMessage = data.message
      const phoneNumber = data.from

      const systemPrompt = `You are an AI healthcare assistant designed to help people in rural areas. 
      Provide clear, simple first-aid guidance and symptom analysis. 
      If the situation sounds urgent, emphasize the importance of seeking professional medical help.
      Always be compassionate and clear. Keep responses concise for messaging platforms.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: systemPrompt,
        prompt: userMessage,
      })

      // In a real implementation, you would send this response back to WhatsApp
      // using their API

      return NextResponse.json({
        to: phoneNumber,
        message: text,
      })
    }

    return NextResponse.json({ status: "No message to process" })
  } catch (error) {
    console.error("Error in WhatsApp webhook:", error)
    return NextResponse.json({ error: "Failed to process WhatsApp webhook" }, { status: 500 })
  }
}

