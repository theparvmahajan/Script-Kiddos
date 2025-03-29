import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function DoctorsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Find Healthcare Providers</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Search Healthcare Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Input placeholder="Search by name or specialty" className="flex-1" />
              <Input placeholder="Location" className="flex-1" />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Specialty</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="general" className="mr-2" />
                  <label htmlFor="general" className="text-sm">
                    General Physician
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="pediatric" className="mr-2" />
                  <label htmlFor="pediatric" className="text-sm">
                    Pediatrician
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="gynecologist" className="mr-2" />
                  <label htmlFor="gynecologist" className="text-sm">
                    Gynecologist
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Distance</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" name="distance" id="5km" className="mr-2" />
                  <label htmlFor="5km" className="text-sm">
                    Within 5 km
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="distance" id="10km" className="mr-2" />
                  <label htmlFor="10km" className="text-sm">
                    Within 10 km
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="distance" id="20km" className="mr-2" />
                  <label htmlFor="20km" className="text-sm">
                    Within 20 km
                  </label>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Apply Filters
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Healthcare Providers Near You</h2>

        <DoctorCard
          name="Dr. Priya Sharma"
          specialty="General Physician"
          experience="15 years"
          distance="3.2 km"
          languages={["English", "Hindi"]}
          available={true}
        />

        <DoctorCard
          name="Dr. Rajesh Kumar"
          specialty="Pediatrician"
          experience="10 years"
          distance="5.7 km"
          languages={["English", "Hindi", "Punjabi"]}
          available={true}
        />

        <DoctorCard
          name="Dr. Anita Desai"
          specialty="Gynecologist"
          experience="12 years"
          distance="8.1 km"
          languages={["English", "Hindi", "Gujarati"]}
          available={false}
        />

        <DoctorCard
          name="Dr. Suresh Patel"
          specialty="General Physician"
          experience="8 years"
          distance="10.3 km"
          languages={["English", "Hindi", "Gujarati"]}
          available={true}
        />

        <DoctorCard
          name="Dr. Meena Reddy"
          specialty="Cardiologist"
          experience="20 years"
          distance="15.6 km"
          languages={["English", "Hindi", "Telugu"]}
          available={true}
        />
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-primary hover:underline">
          Return to Healthcare Assistant
        </Link>
      </div>
    </main>
  )
}

function DoctorCard({
  name,
  specialty,
  experience,
  distance,
  languages,
  available,
}: {
  name: string
  specialty: string
  experience: string
  distance: string
  languages: string[]
  available: boolean
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <h3 className="font-medium text-lg">{name}</h3>
              <p className="text-muted-foreground">{specialty}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  {experience} experience
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{distance}</span>
              </div>
            </div>
          </div>

          <div className="md:ml-auto space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Languages:</p>
              <div className="flex flex-wrap gap-1">
                {languages.map((language, index) => (
                  <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </Button>
              <Button size="sm" disabled={!available}>
                {available ? "Book Appointment" : "Unavailable"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

