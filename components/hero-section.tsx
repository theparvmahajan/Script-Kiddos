"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, MessageSquare, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-medical-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-medical-100 px-3 py-1 text-sm font-medium text-medical-800 dark:bg-medical-900 dark:text-medical-300">
              AI-Powered Healthcare Assistance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Healthcare Guidance for <span className="text-medical-600">Rural Communities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Get immediate first-aid guidance, symptom analysis, and connect with healthcare professionals in your
              area. Available in multiple languages with voice support.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-medical-600 hover:bg-medical-700"
                onClick={() => {
                  // Scroll to the healthcare assistant section
                  document.getElementById("healthcare-assistant")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => router.push("/first-aid")}>
                Learn More
              </Button>
            </div>

            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="feature-icon">
                  <Heart className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">First-Aid Guidance</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="feature-icon">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Symptom Analysis</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="feature-icon">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Voice Assistance</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="feature-icon">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Doctor Connect</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-medical-500 to-medical-700 opacity-30 blur-xl"></div>
            <div className="relative rounded-xl bg-white dark:bg-gray-800 shadow-soft p-6 md:p-8 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Healthcare Assistant</h3>
                <div className="flex items-center gap-2">
                  <span className="pulse-dot"></span>
                  <span className="text-xs font-medium text-emergency-600">Live Assistance</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-medical-50 dark:bg-gray-700 p-4 rounded-lg max-w-[80%] self-start rounded-tl-none">
                  <p className="text-sm">Hello! I'm your healthcare assistant. How can I help you today?</p>
                </div>

                <div className="bg-medical-600 text-white p-4 rounded-lg max-w-[80%] self-end ml-auto rounded-tr-none">
                  <p className="text-sm">My child has a fever and is not eating.</p>
                </div>

                <div className="bg-medical-50 dark:bg-gray-700 p-4 rounded-lg max-w-[80%] self-start rounded-tl-none">
                  <p className="text-sm">
                    I understand your concern. For a child with fever, monitor their temperature regularly. Ensure they
                    stay hydrated. If the fever is above 102°F or persists for more than 2 days, please consult a doctor
                    immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full" onClick={() => router.push("/first-aid")}>
                  Learn More
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-medical-600 hover:bg-medical-700"
                  onClick={() => {
                    // Scroll to the healthcare assistant section
                    document.getElementById("healthcare-assistant")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

