"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <Link href="/" className="text-sm font-medium hover:text-medical-600 transition-colors">
            Home
          </Link>
          <Link href="/first-aid" className="text-sm font-medium hover:text-medical-600 transition-colors">
            First Aid
          </Link>
          <Link href="/doctors" className="text-sm font-medium hover:text-medical-600 transition-colors">
            Find Doctors
          </Link>
          <Link href="/integrations" className="text-sm font-medium hover:text-medical-600 transition-colors">
            Integrations
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Emergency Contacts
          </Button>
          <Button size="sm" className="bg-medical-600 hover:bg-medical-700">
            Get Help Now
          </Button>
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
              className="text-sm font-medium hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/first-aid"
              className="text-sm font-medium hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              First Aid
            </Link>
            <Link
              href="/doctors"
              className="text-sm font-medium hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/integrations"
              className="text-sm font-medium hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
          </nav>

          <div className="flex flex-col space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              Emergency Contacts
            </Button>
            <Button size="sm" className="w-full bg-medical-600 hover:bg-medical-700">
              Get Help Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

