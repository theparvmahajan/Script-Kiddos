"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

// Common languages for voice recognition
const languages = [
  { code: "en-US", name: "English (US)" },
  { code: "en-GB", name: "English (UK)" },
  { code: "es-ES", name: "Spanish" },
  { code: "fr-FR", name: "French" },
  { code: "de-DE", name: "German" },
  { code: "hi-IN", name: "Hindi" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "ar-SA", name: "Arabic" },
  { code: "ru-RU", name: "Russian" },
  { code: "pt-BR", name: "Portuguese (Brazil)" },
]

interface VoiceLanguageSelectorProps {
  onLanguageChange: (languageCode: string) => void
  currentLanguage?: string
}

export function VoiceLanguageSelector({ onLanguageChange, currentLanguage = "en-US" }: VoiceLanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === currentLanguage) || languages[0],
  )

  const handleSelectLanguage = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    onLanguageChange(language.code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{selectedLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleSelectLanguage(language)}
            className={selectedLanguage.code === language.code ? "bg-medical-50 text-medical-700" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

