import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FirstAidGuidePage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">First Aid Guide</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FirstAidGuideCard
          title="Heart Attack"
          symptoms={[
            "Chest pain or pressure",
            "Pain in arms, neck, jaw, or back",
            "Shortness of breath",
            "Cold sweat",
            "Nausea",
          ]}
          actions={[
            "Call emergency services immediately",
            "Have the person sit down and rest",
            "Loosen tight clothing",
            "If prescribed, help them take aspirin",
            "Monitor their condition until help arrives",
          ]}
          emergency={true}
        />

        <FirstAidGuideCard
          title="Cardiac Arrest"
          symptoms={["Sudden collapse", "No pulse", "No breathing", "Loss of consciousness"]}
          actions={[
            "Call emergency services immediately",
            "Begin CPR if trained",
            "Use an AED if available",
            "Continue CPR until professional help arrives",
          ]}
          emergency={true}
        />

        <FirstAidGuideCard
          title="Choking"
          symptoms={["Inability to talk", "Difficulty breathing", "Clutching the throat", "Bluish skin color"]}
          actions={[
            "Perform the Heimlich maneuver",
            "Stand behind the person and wrap your arms around their waist",
            "Make a fist with one hand and place it above the person's navel",
            "Grasp your fist with your other hand and press into their abdomen with quick upward thrusts",
            "Repeat until the object is expelled",
          ]}
          emergency={true}
        />

        <FirstAidGuideCard
          title="Burns"
          symptoms={["Redness", "Pain", "Swelling", "Blisters", "Charred or white skin (severe)"]}
          actions={[
            "Cool the burn with cool (not cold) running water for 10-15 minutes",
            "Cover with a clean, non-stick bandage",
            "Do not apply ice, butter, or ointments",
            "Seek medical attention for severe burns",
          ]}
          emergency={false}
        />

        <FirstAidGuideCard
          title="Cuts and Bleeding"
          symptoms={["Open wound", "Bleeding", "Pain", "Swelling"]}
          actions={[
            "Apply direct pressure with a clean cloth",
            "Elevate the injured area above the heart if possible",
            "Apply a clean bandage",
            "Seek medical attention for deep cuts or if bleeding doesn't stop",
          ]}
          emergency={false}
        />

        <FirstAidGuideCard
          title="Fractures"
          symptoms={["Pain", "Swelling", "Bruising", "Deformity", "Inability to use the limb"]}
          actions={[
            "Immobilize the injured area",
            "Apply ice wrapped in a cloth",
            "Elevate the injured area if possible",
            "Seek medical attention immediately",
          ]}
          emergency={true}
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

function FirstAidGuideCard({
  title,
  symptoms,
  actions,
  emergency,
}: {
  title: string
  symptoms: string[]
  actions: string[]
  emergency: boolean
}) {
  return (
    <Card className={emergency ? "border-red-500" : ""}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {emergency && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Emergency</span>}
        </div>
        <CardDescription>Recognize the symptoms and know what to do</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Symptoms:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {symptoms.map((symptom, index) => (
                <li key={index} className="text-sm">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">What to do:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              {actions.map((action, index) => (
                <li key={index} className="text-sm">
                  {action}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

