"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PlatformIntegration() {
  const [discordBotToken, setDiscordBotToken] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [telegramToken, setTelegramToken] = useState("")

  const [discordStatus, setDiscordStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [whatsappStatus, setWhatsappStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [telegramStatus, setTelegramStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleDiscordConnect = async () => {
    if (!discordBotToken.trim()) return

    setDiscordStatus("loading")
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, we'll simulate a successful connection
      setDiscordStatus("success")
    } catch (error) {
      console.error("Error connecting to Discord:", error)
      setDiscordStatus("error")
    }
  }

  const handleWhatsappConnect = async () => {
    if (!whatsappNumber.trim()) return

    setWhatsappStatus("loading")
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, we'll simulate a successful connection
      setWhatsappStatus("success")
    } catch (error) {
      console.error("Error connecting to WhatsApp:", error)
      setWhatsappStatus("error")
    }
  }

  const handleTelegramConnect = async () => {
    if (!telegramToken.trim()) return

    setTelegramStatus("loading")
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, we'll simulate a successful connection
      setTelegramStatus("success")
    } catch (error) {
      console.error("Error connecting to Telegram:", error)
      setTelegramStatus("error")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Integration</CardTitle>
        <CardDescription>
          Connect your healthcare assistant to messaging platforms for wider accessibility
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="discord">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discord">Discord</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="telegram">Telegram</TabsTrigger>
        </TabsList>

        <TabsContent value="discord">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="discord-token">Discord Bot Token</Label>
              <Input
                id="discord-token"
                placeholder="Enter your Discord bot token"
                value={discordBotToken}
                onChange={(e) => setDiscordBotToken(e.target.value)}
              />
            </div>
            {discordStatus === "success" && (
              <div className="flex items-center text-green-500 text-sm">
                <Check className="h-4 w-4 mr-2" />
                Successfully connected to Discord
              </div>
            )}
            {discordStatus === "error" && (
              <Alert variant="destructive" className="bg-emergency-50 text-emergency-800 border-emergency-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to connect to Discord. Please check your token and try again.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleDiscordConnect} disabled={!discordBotToken || discordStatus === "loading"}>
              {discordStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect to Discord"
              )}
            </Button>
          </CardFooter>
        </TabsContent>

        <TabsContent value="whatsapp">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="whatsapp-number">WhatsApp Business Number</Label>
              <Input
                id="whatsapp-number"
                placeholder="Enter your WhatsApp business number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </div>
            {whatsappStatus === "success" && (
              <div className="flex items-center text-green-500 text-sm">
                <Check className="h-4 w-4 mr-2" />
                Successfully connected to WhatsApp
              </div>
            )}
            {whatsappStatus === "error" && (
              <Alert variant="destructive" className="bg-emergency-50 text-emergency-800 border-emergency-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to connect to WhatsApp. Please check your number and try again.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleWhatsappConnect} disabled={!whatsappNumber || whatsappStatus === "loading"}>
              {whatsappStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect to WhatsApp"
              )}
            </Button>
          </CardFooter>
        </TabsContent>

        <TabsContent value="telegram">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="telegram-token">Telegram Bot Token</Label>
              <Input
                id="telegram-token"
                placeholder="Enter your Telegram bot token"
                value={telegramToken}
                onChange={(e) => setTelegramToken(e.target.value)}
              />
            </div>
            {telegramStatus === "success" && (
              <div className="flex items-center text-green-500 text-sm">
                <Check className="h-4 w-4 mr-2" />
                Successfully connected to Telegram
              </div>
            )}
            {telegramStatus === "error" && (
              <Alert variant="destructive" className="bg-emergency-50 text-emergency-800 border-emergency-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to connect to Telegram. Please check your token and try again.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleTelegramConnect} disabled={!telegramToken || telegramStatus === "loading"}>
              {telegramStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect to Telegram"
              )}
            </Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

