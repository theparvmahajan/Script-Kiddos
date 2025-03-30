"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-medical-600" />
          <Link href="/" className="text-xl font-bold text-medical-700">
            MediAssist Rural
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-medical-600" : "hover:text-medical-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/first-aid"
            className={`text-sm font-medium transition-colors ${
              isActive("/first-aid") ? "text-medical-600" : "hover:text-medical-600"
            }`}
          >
            First Aid
          </Link>
          <Link
            href="/doctors"
            className={`text-sm font-medium transition-colors ${
              isActive("/doctors") ? "text-medical-600" : "hover:text-medical-600"
            }`}
          >
            Find Doctors
          </Link>
          <Link
            href="/integrations"
            className={`text-sm font-medium transition-colors ${
              isActive("/integrations") ? "text-medical-600" : "hover:text-medical-600"
            }`}
          >
            Integrations
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Open emergency contacts modal or navigate to emergency contacts page
              alert("Emergency contacts: Call 911 for immediate assistance")
            }}
          >
            <Phone className="h-4 w-4 mr-2 text-emergency-500" />
            Emergency Contacts
          </Button>
          <Link href="/#healthcare-assistant">
            <Button size="sm" className="bg-medical-600 hover:bg-medical-700">
              Get Help Now
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-medical-600" : "hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/first-aid"
              className={`text-sm font-medium transition-colors ${
                isActive("/first-aid") ? "text-medical-600" : "hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              First Aid
            </Link>
            <Link
              href="/doctors"
              className={`text-sm font-medium transition-colors ${
                isActive("/doctors") ? "text-medical-600" : "hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/integrations"
              className={`text-sm font-medium transition-colors ${
                isActive("/integrations") ? "text-medical-600" : "hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
          </nav>

          <div className="flex flex-col space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false)
                alert("Emergency contacts: Call 911 for immediate assistance")
              }}
            >
              <Phone className="h-4 w-4 mr-2 text-emergency-500" />
              Emergency Contacts
            </Button>
            <Link href="/#healthcare-assistant" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full bg-medical-600 hover:bg-medical-700">
                Get Help Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

