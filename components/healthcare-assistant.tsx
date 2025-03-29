"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, Send, Loader2, AlertCircle } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { FirstAidGuide } from "./first-aid-guide"
import { PlatformIntegration } from "./platform-integration"
import { generateResponse } from "@/utils/medical-matcher"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { VoiceRecognizer, isSpeechRecognitionSupported, type VoiceRecognitionStatus } from "@/lib/voice-recognition"
import { VoiceLanguageSelector } from "./voice-language-selector"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function HealthcareAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your healthcare assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [voiceStatus, setVoiceStatus] = useState<VoiceRecognitionStatus>("inactive")
  const [isLoading, setIsLoading] = useState(false)
  const [isUsingAI, setIsUsingAI] = useState(false)
  const [voiceSupported, setVoiceSupported] = useState(false)
  const [voiceError, setVoiceError] = useState<string | null>(null)
  const [voiceLanguage, setVoiceLanguage] = useState("en-US")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognizerRef = useRef<VoiceRecognizer | null>(null)

  // Check if OpenRouter is configured using the server-side API
  useEffect(() => {
    async function checkAIStatus() {
      try {
        const response = await fetch("/api/check-ai-status")
        if (response.ok) {
          const data = await response.json()
          setIsUsingAI(data.isAIConfigured)
        }
      } catch (error) {
        console.error("Error checking AI status:", error)
        setIsUsingAI(false)
      }
    }

    checkAIStatus()
  }, [])

  // Check if voice recognition is supported
  useEffect(() => {
    setVoiceSupported(isSpeechRecognitionSupported())
  }, [])

  // Initialize or update voice recognizer when language changes
  useEffect(() => {
    if (voiceSupported) {
      // If there's an existing recognizer, stop it
      if (recognizerRef.current) {
        recognizerRef.current.stop()
      }

      // Create a new recognizer with the current language
      recognizerRef.current = new VoiceRecognizer({
        language: voiceLanguage,
        continuous: false,
        interimResults: true,
        onResult: (transcript, isFinal) => {
          setInput(transcript)
          if (isFinal) {
            setVoiceStatus("processing")
          }
        },
        onError: (error) => {
          setVoiceError(error)
          setVoiceStatus("error")
        },
        onStatusChange: (status) => {
          setVoiceStatus(status)
          if (status === "processing") {
            // Auto-send message after voice processing is complete
            setTimeout(() => {
              if (input.trim()) {
                handleSendMessage()
              }
            }, 500)
          }
        },
      })
    }
  }, [voiceSupported, voiceLanguage])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsLoading(true)

    try {
      // Generate response using our server-side API
      const response = await generateResponse(currentInput)

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Error processing message:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleVoiceRecognition = () => {
    if (!recognizerRef.current) return

    if (voiceStatus === "inactive" || voiceStatus === "error") {
      // Start voice recognition
      setVoiceError(null)
      recognizerRef.current.start()
    } else {
      // Stop voice recognition
      recognizerRef.current.stop()
    }
  }

  const handleLanguageChange = (languageCode: string) => {
    setVoiceLanguage(languageCode)
  }

  return (
    <div className="space-y-6">
      <Card className="w-full shadow-soft border-medical-100">
        <CardHeader className="bg-gradient-to-r from-medical-600 to-medical-500 text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <span className="pulse-dot"></span>
              Healthcare Assistant
              {isUsingAI && (
                <Badge variant="outline" className="ml-2 text-xs bg-white/20 text-white">
                  Powered by DeepSeek AI
                </Badge>
              )}
            </CardTitle>

            {voiceSupported && (
              <VoiceLanguageSelector onLanguageChange={handleLanguageChange} currentLanguage={voiceLanguage} />
            )}
          </div>
        </CardHeader>

        <Alert className="m-4 bg-medical-50 text-medical-800 border-medical-200">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This assistant provides general guidance only. For emergencies, please call emergency services immediately.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-medical-50 p-1 m-4 rounded-lg">
            <TabsTrigger
              value="chat"
              className="data-[state=active]:bg-white data-[state=active]:text-medical-700 data-[state=active]:shadow-sm"
            >
              Chat
            </TabsTrigger>
            <TabsTrigger
              value="first-aid"
              className="data-[state=active]:bg-white data-[state=active]:text-medical-700 data-[state=active]:shadow-sm"
            >
              First Aid Guides
            </TabsTrigger>
            <TabsTrigger
              value="platforms"
              className="data-[state=active]:bg-white data-[state=active]:text-medical-700 data-[state=active]:shadow-sm"
            >
              Platform Integration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-4 animate-fadeIn">
            <CardContent className="space-y-4">
              <div className="h-[400px] overflow-y-auto space-y-4 p-4 rounded-lg border bg-medical-50/30">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                {isLoading && (
                  <div className="flex justify-center">
                    <Loader2 className="h-6 w-6 animate-spin text-medical-600" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {voiceError && (
                <Alert variant="destructive" className="bg-emergency-50 text-emergency-800 border-emergency-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{voiceError}</AlertDescription>
                </Alert>
              )}

              {voiceStatus === "listening" && (
                <Alert className="bg-medical-50 text-medical-800 border-medical-200 animate-pulse">
                  <Mic className="h-4 w-4 text-medical-600" />
                  <AlertDescription>Listening... Speak your symptoms or question</AlertDescription>
                </Alert>
              )}
            </CardContent>

            <CardFooter className="flex items-center gap-2">
              {voiceSupported ? (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleVoiceRecognition}
                  className={
                    voiceStatus === "listening"
                      ? "bg-emergency-100 text-emergency-600 border-emergency-200 animate-pulse"
                      : voiceStatus === "processing"
                        ? "bg-medical-100 text-medical-600 border-medical-200"
                        : ""
                  }
                >
                  {voiceStatus === "listening" || voiceStatus === "processing" ? (
                    <MicOff className="h-4 w-4" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </Button>
              ) : (
                <Button variant="outline" size="icon" disabled title="Voice recognition not supported in this browser">
                  <Mic className="h-4 w-4 opacity-50" />
                </Button>
              )}

              <Input
                placeholder={
                  voiceSupported
                    ? "Type or click the microphone to speak..."
                    : "Describe your symptoms or ask for medical advice..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage()
                }}
                className="border-medical-200 focus-visible:ring-medical-500"
                disabled={isLoading || voiceStatus === "listening"}
              />

              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-medical-600 hover:bg-medical-700"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </TabsContent>

          <TabsContent value="first-aid" className="animate-fadeIn">
            <FirstAidGuide />
          </TabsContent>

          <TabsContent value="platforms" className="animate-fadeIn">
            <PlatformIntegration />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

