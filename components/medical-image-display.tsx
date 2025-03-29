"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Image, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Local medical images mapping
const medicalImages = {
  "heart attack": "/placeholder.svg?height=300&width=400",
  cpr: "/placeholder.svg?height=300&width=400",
  "heimlich maneuver": "/placeholder.svg?height=300&width=400",
  "burn treatment": "/placeholder.svg?height=300&width=400",
  "wound care": "/placeholder.svg?height=300&width=400",
  stroke: "/placeholder.svg?height=300&width=400",
  fracture: "/placeholder.svg?height=300&width=400",
  sprain: "/placeholder.svg?height=300&width=400",
  choking: "/placeholder.svg?height=300&width=400",
  "bleeding control": "/placeholder.svg?height=300&width=400",
}

export function MedicalImageDisplay() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState("")
  const [notFound, setNotFound] = useState(false)

  const handleSearch = () => {
    if (!searchTerm.trim()) return

    setNotFound(false)

    // Find a matching image
    const term = searchTerm.toLowerCase()
    let found = false

    for (const [key, url] of Object.entries(medicalImages)) {
      if (term.includes(key) || key.includes(term)) {
        setSelectedImage(url)
        found = true
        break
      }
    }

    if (!found) {
      setNotFound(true)
    }
  }

  return (
    <Card className="shadow-soft border-medical-100">
      <CardHeader className="bg-gradient-to-r from-medical-600 to-medical-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5" />
          Medical Illustrations
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for medical illustrations (e.g., CPR, burn treatment)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch()
            }}
            className="pl-10 border-medical-200 focus-visible:ring-medical-500"
          />
        </div>

        <Alert
          variant="destructive"
          className={notFound ? "bg-emergency-50 text-emergency-800 border-emergency-200" : "hidden"}
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>No illustrations found for "{searchTerm}"</AlertDescription>
        </Alert>

        {selectedImage && (
          <div className="mt-4 animate-fadeIn">
            <div className="relative rounded-lg overflow-hidden border border-medical-100 shadow-sm">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt={`Medical illustration of ${searchTerm}`}
                className="w-full h-auto max-h-[300px] object-contain bg-white"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">Illustration of {searchTerm}</p>
              </div>
            </div>
          </div>
        )}

        {!selectedImage && !notFound && (
          <div className="h-[200px] flex flex-col items-center justify-center gap-2 border rounded-lg bg-medical-50/30 border-dashed border-medical-200">
            <Image className="h-10 w-10 text-medical-300" />
            <p className="text-muted-foreground text-sm">Search for medical illustrations</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t bg-medical-50/50 rounded-b-lg">
        <p className="text-xs text-muted-foreground">Images are for educational purposes only</p>
        <Button onClick={handleSearch} disabled={!searchTerm.trim()} className="bg-medical-600 hover:bg-medical-700">
          Search
        </Button>
      </CardFooter>
    </Card>
  )
}

