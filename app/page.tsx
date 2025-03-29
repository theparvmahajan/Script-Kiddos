import { HealthcareAssistant } from "@/components/healthcare-assistant"
import { MedicalImageGenerator } from "@/components/medical-image-generator"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">AI-Powered Healthcare Assistant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get immediate medical guidance and connect with healthcare providers in your area
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <HealthcareAssistant />

            <MedicalImageGenerator />
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-50 dark:bg-gray-800">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered healthcare assistant provides guidance through a simple, accessible interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-medical-100 shadow-soft card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle>Describe Your Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply describe your symptoms or medical concerns through text or voice input.
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-100 shadow-soft card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Get Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive immediate first-aid advice and medical guidance based on your symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-100 shadow-soft card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Connect with Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If needed, find and connect with healthcare providers in your area for professional care.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-medical-600 hover:bg-medical-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Available Everywhere</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access healthcare guidance through multiple platforms to reach rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-medical-100 shadow-soft card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Mobile App</h3>
                <p className="text-muted-foreground text-sm">
                  Access healthcare guidance on your smartphone, even with limited connectivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-100 shadow-soft card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">
                  Chat with our healthcare assistant directly through WhatsApp messaging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-100 shadow-soft card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">SMS</h3>
                <p className="text-muted-foreground text-sm">
                  Send and receive healthcare guidance through simple text messages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-100 shadow-soft card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Web App</h3>
                <p className="text-muted-foreground text-sm">
                  Access the full healthcare assistant through any web browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

