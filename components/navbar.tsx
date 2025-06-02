"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white/95 backdrop-blur-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center focus:outline-none">
            <div className={cn("sm:text-3xl text-2xl transition-colors", isScrolled ? "text-orange-500" : "text-white")}>
              21<span className="text-black font-bold sm:text-3xl text-2xl">CBC</span> <span>s.r.o.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              Domov
            </Link>
            <Link
              href="/#about"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              O nás
            </Link>
            <Link
              href="/#services"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              Služby
            </Link>
            <Link
              href="/#projects"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              Projekty
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              Kontakt
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase">
                Kontakt
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Prepnúť menu">
            {isOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Domov
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                O nás
              </Link>
              <Link
                href="/#services"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Služby
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projekty
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </nav>

            <div className="mt-8">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase">
                  Kontakt
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
