import { PlatformIntegration } from "@/components/platform-integration"
import Link from "next/link"

export default function IntegrationsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Platform Integrations</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground mb-8">
          Connect the Healthcare Assistant to your preferred messaging platforms to provide healthcare guidance to rural
          communities through the channels they already use.
        </p>

        <PlatformIntegration />

        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Healthcare Assistant
          </Link>
        </div>
      </div>
    </main>
  )
}

