"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { firstAidGuides } from "@/data/medical-dataset"
import { Search, AlertTriangle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FirstAidGuide() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGuides = firstAidGuides.filter((guide) => guide.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <CardContent className="animate-fadeIn">
      <div className="space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search first aid guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-medical-200 focus-visible:ring-medical-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card className="border-emergency-200 bg-emergency-50 text-emergency-800 shadow-sm card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Emergency Reminder
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              For life-threatening emergencies, always call emergency services immediately before administering first
              aid.
            </CardContent>
          </Card>

          <Card className="border-medical-200 bg-medical-50 text-medical-800 shadow-sm card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                First Aid Basics
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Remember the ABCs: Airway, Breathing, Circulation. Ensure these are stable before proceeding with other
              care.
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {filteredGuides.map((guide) => (
            <AccordionItem key={guide.id} value={guide.id} className="border-medical-200">
              <AccordionTrigger className="hover:text-medical-600 py-4">
                <div className="flex items-center gap-2">
                  {guide.id === "heart_attack" || guide.id === "choking" || guide.id === "stroke" ? (
                    <Badge variant="destructive" className="bg-emergency-500">
                      Emergency
                    </Badge>
                  ) : null}
                  {guide.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-medical-50/50 p-4 rounded-lg">
                <div className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="text-sm">
                        {step}
                      </li>
                    ))}
                  </ol>

                  {guide.notes && (
                    <div className="mt-4 p-3 bg-white rounded-lg border border-medical-200 text-sm">
                      <p className="font-medium text-medical-700">Important Note:</p>
                      <p className="text-muted-foreground">{guide.notes}</p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredGuides.length === 0 && (
          <div className="text-center py-8 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground">No guides found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </CardContent>
  )
}

