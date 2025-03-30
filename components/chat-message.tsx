"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Volume2, VolumeX, Loader2, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatMessage({ message }: { message: Message }) {
  const isAssistant = message.role === "assistant"
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleTextToSpeech = () => {
    if (!isAssistant) return

    if (isPlaying) {
      // Stop speaking
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    setIsLoading(true)

    // Use browser's built-in speech synthesis
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(message.content)

      // Try to find a voice that matches the user's language
      const voices = window.speechSynthesis.getVoices()
      const userLanguage = navigator.language || "en-US"

      // Try to find a voice that matches the user's language
      const voice =
        voices.find((voice) => voice.lang === userLanguage) ||
        voices.find((voice) => voice.lang.startsWith(userLanguage.split("-")[0])) ||
        voices[0]

      if (voice) {
        utterance.voice = voice
      }

      utterance.onend = () => {
        setIsPlaying(false)
      }

      utterance.onerror = () => {
        setIsPlaying(false)
        setIsLoading(false)
      }

      // Start speaking
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
      setIsLoading(false)
    } else {
      alert("Sorry, your browser doesn't support text-to-speech!")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-start gap-3 animate-slideUp">
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full",
          isAssistant ? "bg-medical-100 text-medical-600" : "bg-medical-600 text-white",
        )}
      >
        {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>

      <div className="flex-1">
        <div
          className={cn(
            "flex flex-col space-y-2 p-4 rounded-lg",
            isAssistant
              ? "bg-white border border-medical-100 shadow-sm text-gray-800 self-start rounded-tl-none max-w-[90%]"
              : "bg-medical-600 text-white self-end rounded-tr-none ml-auto max-w-[90%]",
          )}
        >
          <div className="text-sm">
            {message.content.split("\n").map((line, i) => {
              // Check if line is a numbered list item (e.g., "1. Item")
              const numberedListMatch = line.match(/^(\d+)\.\s(.+)$/)
              // Check if line is a bullet point (e.g., "- Item" or "• Item")
              const bulletListMatch = line.match(/^[-•]\s(.+)$/)

              if (numberedListMatch) {
                return (
                  <div key={i} className="flex gap-2 mb-1">
                    <span className="font-medium min-w-[20px]">{numberedListMatch[1]}.</span>
                    <span>{numberedListMatch[2]}</span>
                  </div>
                )
              } else if (bulletListMatch) {
                return (
                  <div key={i} className="flex gap-2 mb-1">
                    <span className="text-medical-500 min-w-[20px]">•</span>
                    <span>{bulletListMatch[1]}</span>
                  </div>
                )
              } else if (line.trim() === "") {
                // Empty line becomes a margin
                return <div key={i} className="h-2"></div>
              } else if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
                // Bold text (e.g., **Important**)
                const boldText = line.trim().slice(2, -2)
                return (
                  <p key={i} className="font-bold mb-1">
                    {boldText}
                  </p>
                )
              } else if (
                line.trim().startsWith("First aid steps:") ||
                line.trim().startsWith("Symptoms:") ||
                line.trim().startsWith("What to do:")
              ) {
                // Section headers
                return (
                  <p key={i} className="font-medium text-medical-700 mb-1">
                    {line}
                  </p>
                )
              } else {
                // Regular text
                return (
                  <p key={i} className="mb-1">
                    {line}
                  </p>
                )
              }
            })}
          </div>

          {isAssistant && (
            <Button
              variant="ghost"
              size="sm"
              className="self-end text-xs text-medical-600 hover:text-medical-700 hover:bg-medical-50 p-1 h-auto"
              onClick={handleTextToSpeech}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              ) : isPlaying ? (
                <VolumeX className="h-3 w-3 mr-1" />
              ) : (
                <Volume2 className="h-3 w-3 mr-1" />
              )}
              {isPlaying ? "Stop" : "Listen"}
            </Button>
          )}
        </div>

        <div className="mt-1 text-xs text-muted-foreground">{isAssistant ? "Healthcare Assistant" : "You"}</div>
      </div>
    </div>
  )
}

