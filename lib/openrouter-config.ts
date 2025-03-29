// OpenRouter API configuration
export const openRouterConfig = {
  baseUrl: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "",
  model: "deepseek/deepseek-r1-zero:free",
  siteUrl: "https://rural-healthcare-assistant.vercel.app",
  siteName: "Rural Healthcare Assistant",
}

// Function to check if OpenRouter API is configured
export function isOpenRouterConfigured(): boolean {
  return Boolean(process.env.OPENROUTER_API_KEY)
}

// Function to generate text using OpenRouter API
// This should only be called from server-side code
export async function generateOpenRouterResponse(prompt: string): Promise<string> {
  if (!isOpenRouterConfigured()) {
    throw new Error("OpenRouter API is not configured")
  }

  try {
    const response = await fetch(`${openRouterConfig.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openRouterConfig.apiKey}`,
        "HTTP-Referer": openRouterConfig.siteUrl,
        "X-Title": openRouterConfig.siteName,
      },
      body: JSON.stringify({
        model: openRouterConfig.model,
        messages: [
          {
            role: "system",
            content:
              "You are a healthcare assistant designed to help people in rural areas. Provide clear, simple first-aid guidance and symptom analysis. If the situation sounds urgent, emphasize the importance of seeking professional medical help. Always be compassionate and clear. Keep responses concise.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`OpenRouter API error: ${response.status} ${JSON.stringify(errorData)}`)
    }

    const data = await response.json()
    return data.choices[0].message.content || "I apologize, but I couldn't generate a response."
  } catch (error) {
    console.error("Error generating response from OpenRouter:", error)
    throw error
  }
}

