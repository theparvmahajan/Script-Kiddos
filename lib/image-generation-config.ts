// Image generation configuration using Replicate API (which hosts open source models)
export const imageGenerationConfig = {
  apiUrl: "https://api.replicate.com/v1/predictions",
  apiKey: process.env.REPLICATE_API_KEY || "",
  // Stable Diffusion 2.1 model
  model: "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
  // Medical-specific prompt prefix to guide the model
  medicalPromptPrefix: "Medical illustration of",
  // Default parameters for medical illustrations
  defaultParams: {
    width: 768,
    height: 512,
    num_outputs: 1,
    guidance_scale: 7.5,
    num_inference_steps: 50,
  },
}

// Function to check if image generation is configured
export function isImageGenerationConfigured(): boolean {
  return Boolean(process.env.REPLICATE_API_KEY)
}

// Function to generate an image using Replicate API
export async function generateMedicalImage(prompt: string): Promise<string> {
  if (!isImageGenerationConfigured()) {
    throw new Error("Image generation is not configured")
  }

  try {
    // Create a medical-specific prompt
    const medicalPrompt = `${imageGenerationConfig.medicalPromptPrefix} ${prompt}, detailed medical illustration, educational, professional, clear, accurate, high quality`

    // Start the prediction
    const response = await fetch(imageGenerationConfig.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: imageGenerationConfig.model,
        input: {
          prompt: medicalPrompt,
          negative_prompt: "blurry, distorted, low quality, unrealistic, text, watermark",
          ...imageGenerationConfig.defaultParams,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Image generation API error: ${response.status} ${response.statusText}`)
    }

    const prediction = await response.json()

    // Get the prediction ID
    const id = prediction.id

    // Poll for the result
    const result = await checkPredictionStatus(id)

    // Return the first output image URL
    if (result.output && Array.isArray(result.output) && result.output.length > 0) {
      return result.output[0]
    } else {
      throw new Error("No image was generated")
    }
  } catch (error) {
    console.error("Error generating medical image:", error)
    throw error
  }
}

// Function to check the status of a prediction
async function checkPredictionStatus(id: string, retries = 30, delay = 2000): Promise<any> {
  if (retries <= 0) {
    throw new Error("Maximum retries reached waiting for image generation")
  }

  const response = await fetch(`${imageGenerationConfig.apiUrl}/${id}`, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Error checking prediction status: ${response.status} ${response.statusText}`)
  }

  const prediction = await response.json()

  if (prediction.status === "succeeded") {
    return prediction
  } else if (prediction.status === "failed") {
    throw new Error(`Image generation failed: ${prediction.error || "Unknown error"}`)
  } else {
    // Wait and retry
    await new Promise((resolve) => setTimeout(resolve, delay))
    return checkPredictionStatus(id, retries - 1, delay)
  }
}

