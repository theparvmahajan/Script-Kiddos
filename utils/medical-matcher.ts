import { medicalConditions, firstAidGuides, type MedicalCondition } from "@/data/medical-dataset"

// Function to find matching conditions based on user input
export function findMatchingConditions(input: string): MedicalCondition[] {
  const inputLower = input.toLowerCase()
  const matches: MedicalCondition[] = []

  // Check for direct condition matches
  for (const condition of medicalConditions) {
    if (inputLower.includes(condition.name.toLowerCase())) {
      matches.push(condition)
      continue
    }

    // Check for symptom matches
    for (const symptom of condition.symptoms) {
      if (inputLower.includes(symptom.toLowerCase())) {
        matches.push(condition)
        break
      }
    }
  }

  return matches
}

// Function to generate a response based on user input
export async function generateResponse(input: string): Promise<string> {
  try {
    // Call our server-side API route
    const response = await fetch("/api/generate-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("API error:", errorData)
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Ensure consistent formatting for responses
    if (data.response) {
      // Make sure numbered lists have a space after the period
      data.response = data.response.replace(/(\d+\.)([\w])/g, "$1 $2")

      // Make sure bullet points have a space after them
      data.response = data.response.replace(/(-)([\w])/g, "$1 $2")

      // Ensure important sections are properly formatted
      const sections = ["First aid steps:", "Symptoms:", "What to do:"]
      sections.forEach((section) => {
        if (data.response.includes(section) && !data.response.includes(`\n${section}`)) {
          data.response = data.response.replace(section, `\n${section}`)
        }
      })
    }

    if (!data.response) {
      throw new Error("Invalid response format from API")
    }

    return data.response
  } catch (error) {
    console.error("Error generating response:", error)
    return "I'm sorry, I encountered an error while processing your request. Please try again."
  }
}

// Function to find matching first aid guides
export function findFirstAidGuide(input: string): any | null {
  const inputLower = input.toLowerCase()

  for (const guide of firstAidGuides) {
    if (inputLower.includes(guide.title.toLowerCase()) || inputLower.includes(guide.id.toLowerCase())) {
      return guide
    }
  }

  return null
}

