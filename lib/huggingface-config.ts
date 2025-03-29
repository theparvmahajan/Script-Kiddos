// Hugging Face API configuration
export const huggingFaceConfig = {
  apiUrl: process.env.HUGGINGFACE_API_URL || "",
  headers: {
    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY || ""}`,
    "Content-Type": "application/json",
  },
}

// Function to check if Hugging Face API is configured
export function isHuggingFaceConfigured(): boolean {
  return Boolean(process.env.HUGGINGFACE_API_URL && process.env.HUGGINGFACE_API_KEY)
}

// Function to generate text using Hugging Face API
export async function generateHuggingFaceResponse(prompt: string): Promise<string> {
  if (!isHuggingFaceConfigured()) {
    throw new Error("Hugging Face API is not configured")
  }

  try {
    const response = await fetch(huggingFaceConfig.apiUrl, {
      method: "POST",
      headers: huggingFaceConfig.headers,
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    // The response format may vary depending on the model
    // Adjust this based on the actual response structure
    if (Array.isArray(data) && data.length > 0) {
      return data[0].generated_text || ""
    } else if (data.generated_text) {
      return data.generated_text
    } else {
      console.error("Unexpected response format:", data)
      return "I apologize, but I encountered an issue processing your request."
    }
  } catch (error) {
    console.error("Error generating response from Hugging Face:", error)
    throw error
  }
}

