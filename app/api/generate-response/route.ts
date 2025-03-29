import { type NextRequest, NextResponse } from "next/server"
import { generateOpenRouterResponse, isOpenRouterConfigured } from "@/lib/openrouter-config"
import { findMatchingConditions, findFirstAidGuide } from "@/utils/medical-matcher"
import { medicalFAQs } from "@/data/medical-dataset"

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json()

    if (!input || typeof input !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    // Try to use OpenRouter API if configured
    if (isOpenRouterConfigured()) {
      try {
        const response = await generateOpenRouterResponse(input)
        return NextResponse.json({ response })
      } catch (error) {
        console.error("Error using OpenRouter API, falling back to local dataset:", error)
        // Fall back to local dataset if API fails
      }
    }

    // Local dataset fallback logic
    const inputLower = input.toLowerCase()

    // Check if it's a question about when to seek emergency help
    if (
      inputLower.includes("emergency") ||
      inputLower.includes("call ambulance") ||
      inputLower.includes("call 911") ||
      inputLower.includes("when should i go to hospital")
    ) {
      return NextResponse.json({
        response:
          "You should seek emergency medical attention for: severe bleeding that doesn't stop, difficulty breathing, chest pain, severe burns, suspected poisoning, seizures, severe allergic reactions, suspected stroke or heart attack, or any life-threatening situation. When in doubt, it's better to be safe and call emergency services.",
      })
    }

    // Check for FAQ matches
    for (const faq of medicalFAQs) {
      // Extract key terms from the question
      const questionTerms = faq.question.toLowerCase().split(" ")
      let matchCount = 0

      // Count how many terms from the FAQ question appear in the input
      for (const term of questionTerms) {
        if (term.length > 3 && inputLower.includes(term)) {
          // Only consider terms longer than 3 characters
          matchCount++
        }
      }

      // If enough terms match, return the FAQ answer
      if (matchCount >= 2) {
        return NextResponse.json({ response: faq.answer })
      }
    }

    // Check for condition matches
    const matchingConditions = findMatchingConditions(input)

    if (matchingConditions.length > 0) {
      // Sort by urgency level to prioritize more urgent conditions
      matchingConditions.sort((a, b) => {
        const urgencyOrder = { emergency: 0, high: 1, medium: 2, low: 3 }
        return urgencyOrder[a.urgency] - urgencyOrder[b.urgency]
      })

      const condition = matchingConditions[0] // Take the most urgent matching condition

      let response = `Based on your description, you may be experiencing ${condition.name}. ${condition.description}\n\n`
      response += "First aid steps:\n"
      condition.firstAid.forEach((step, index) => {
        response += `${index + 1}. ${step}\n`
      })
      response += `\n${condition.followUp}`

      if (condition.urgency === "emergency" || condition.urgency === "high") {
        response += "\n\nThis appears to be a serious condition. Please seek medical attention immediately."
      }

      return NextResponse.json({ response })
    }

    // Check for first aid guide matches
    const guide = findFirstAidGuide(input)
    if (guide) {
      let response = `Here's a guide for ${guide.title}:\n\n`
      guide.steps.forEach((step, index) => {
        response += `${index + 1}. ${step}\n`
      })

      if (guide.notes) {
        response += `\nImportant note: ${guide.notes}`
      }

      return NextResponse.json({ response })
    }

    // If no specific condition matches, provide a general response
    return NextResponse.json({
      response:
        "I understand you may be experiencing health concerns. Could you provide more details about your symptoms? This will help me give you better guidance. Remember, I'm not a replacement for professional medical care, especially in emergencies.",
    })
  } catch (error) {
    console.error("Error generating response:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

