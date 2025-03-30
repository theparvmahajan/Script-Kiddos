"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Image, AlertCircle, Download, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export function MedicalImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setError(null)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a placeholder image with the prompt text
      const placeholderUrl = `/api/placeholder-svg?height=300&width=400&text=${encodeURIComponent(prompt.substring(0, 30))}`
      setGeneratedImage(placeholderUrl)

      // Note: In a real implementation, you would call the API endpoint
      // const response = await fetch("/api/generate-image", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ prompt }),
      // });
      //
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.error || "Failed to generate image");
      // }
      //
      // const data = await response.json();
      // setGeneratedImage(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!generatedImage) return

    // Create a temporary link element
    const link = document.createElement("a")
    link.href = generatedImage
    link.download = `medical-illustration-${Date.now()}.png`

    // Append to the document, click it, and remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="shadow-soft border-medical-100">
      <CardHeader className="bg-gradient-to-r from-medical-600 to-medical-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5" />
          Medical Image Generator
          <Badge variant="outline" className="ml-2 text-xs bg-white/20 text-white">
            AI-Powered
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Describe the medical image you need (e.g., heart attack symptoms, proper CPR technique)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isGenerating) handleGenerateImage()
            }}
            className="pl-10 border-medical-200 focus-visible:ring-medical-500"
            disabled={isGenerating}
          />
        </div>

        {error && (
          <Alert variant="destructive" className="bg-emergency-50 text-emergency-800 border-emergency-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="mt-4">
          {isGenerating ? (
            <div className="h-[300px] flex flex-col items-center justify-center gap-4 border rounded-lg bg-medical-50/30 border-dashed border-medical-200 animate-pulse">
              <RefreshCw className="h-10 w-10 text-medical-400 animate-spin" />
              <p className="text-medical-600 text-sm font-medium">Generating medical illustration...</p>
              <p className="text-xs text-muted-foreground">This may take up to 30 seconds</p>
            </div>
          ) : generatedImage ? (
            <div className="animate-fadeIn">
              <div className="relative rounded-lg overflow-hidden border border-medical-100 shadow-sm">
                <img
                  src={generatedImage || "/placeholder.svg"}
                  alt={`Medical illustration of ${prompt}`}
                  className="w-full h-auto max-h-[300px] object-contain bg-white"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{prompt}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[300px] flex flex-col items-center justify-center gap-2 border rounded-lg bg-medical-50/30 border-dashed border-medical-200">
              <Image className="h-10 w-10 text-medical-300" />
              <p className="text-muted-foreground text-sm">Enter a description to generate a medical illustration</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t bg-medical-50/50 rounded-b-lg">
        <p className="text-xs text-muted-foreground">Images are for educational purposes only</p>
        <div className="flex gap-2">
          {generatedImage && (
            <Button variant="outline" size="sm" onClick={handleDownload} className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Download
            </Button>
          )}
          <Button
            onClick={handleGenerateImage}
            disabled={!prompt.trim() || isGenerating}
            className="bg-medical-600 hover:bg-medical-700"
            size="sm"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

