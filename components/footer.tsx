import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-medical-600" />
              <span className="text-lg font-bold text-medical-700">MediAssist Rural</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing accessible healthcare guidance to rural communities through AI-powered assistance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/first-aid" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  First Aid Guides
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Find Healthcare Providers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Medical Encyclopedia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Symptom Checker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/integrations" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Platform Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Community Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Healthcare Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-medical-600 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MediAssist Rural. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Important:</strong> This application provides general information and is not a substitute for
            professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

