"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white/95 backdrop-blur-sm py-1" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link href="/" className="flex items-center focus:outline-none">
            <svg className="w-[100px] h-[100px]" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 170.84 111.04">
              <path className={isScrolled ? "fill-gray-900" : "fill-white"} d="M20.2,22.32c3.71-2.95,7.31-6.02,10.92-9.08.29-.25,1.55-1.02,1.6-1.11.13-.24-.08-.71.2-.95.26-.18,2.62-.12,3,.04.29.12.3.5.58.68s1.31.44,1.74.58c10.92,3.56,22.2,6.21,33.12,9.8l18.2.14,6.73,5.64c.22.38-.21,1.23-.62,1.35l-22.85.12,16.84,10.58-.07,18.32c.31.13.64.22.92.42,4.63,3.17,9.45,6.06,14.21,9.12.66.43,1.39.87,2.12,1.17v24.92l7.84.18v4.09H27.6v-4.09h1.6v-3.38h.89s.18-3.82.18-3.82V29.62h-8.91v4.01c-.16.25-.36.25-.61.28-1.38.16-5.23.16-6.61,0-.26-.03-.46-.02-.61-.28v-4.01l-2.38-.02-.25-.25c0-.07.14-.13.14-.18v-6.59c0-.06-.29-.14-.09-.27l.18-.18c.07,0,.12.18.18.18h8.91ZM38.19,22.32h27.16l-28.94-8.73,1.78,8.73ZM22.79,22.32h2.58l.27.27v4.18h4.19l2.94-12.46-9.97,8.01ZM35.43,22.14l-.89-4.63-.89,4.63h1.78ZM32.76,26.77h3.56l-.53-2.73-2.51-.04-.52,2.77ZM46.12,26.77c-.39-.47-1.31-2.01-1.79-2.22-.91-.4-2.58-.29-3.56-.18l1.87,2.4h3.47ZM49.24,26.95h3.47l-1.64-2.45c-1.35-.04-2.76-.05-4.06-.13l2.23,2.58ZM64.46,24.46h-3.65s-.31-.38-.44-.09l2.23,2.58h3.65l-1.78-2.49ZM69.01,26.77h4.01l-1.55-2.31c-1.5.02-3.06-.02-4.5-.1l2.05,2.4ZM79.78,26.95l-1.6-2.4-4.1-.27,1.91,2.51,3.79.16ZM86.37,26.77l-1.42-2.05c-1.02-.89-2.83-.11-4.1-.26l1.87,2.31h3.65ZM91.54,26.95c.13-.1-1.89-2.29-2.14-2.4-.58-.26-1.36.1-1.95-.27l1.78,2.59,2.32.07ZM59.66,26.95c-.52-.94-1.28-1.75-2.05-2.49h-3.83l2.05,2.49h3.83ZM39.88,26.77c.2-.18-1.42-1.72-1.6-1.96l.37,1.94,1.23.02ZM67.85,40.75v-11.04l-23.4-.24c-.23.06-.25.22-.29.42-.34,1.84.36,4.51-.2,6.39-1.25,1.41-2.86,1.48-4.61,1.53v37.21l13.99-7.29.17-17.81,14.34-9.17ZM39.35,29.62v3.74h2.14v-3.29s-.18-.42-.3-.45h-1.84ZM71.94,94.07h3.92l-.18-8.1.36-.18,4.82,2.68c.24.15-.01.3-.01.35v5.25h4.81v-6.68l-9.71-6.32c-.1-1.57-.23-3.3,0-4.8l9.71,6.23v-4.09l-9.81-6.15c-.24-.15.01-.29.01-.35v-4.09c0-.07-.35-.16.09-.44l9.71,6.23v-4.09l-9.8-6.05v-4.81l9.8,6.05v-4.01c-3.16-1.85-6.19-3.92-9.28-5.86-.19-.12-.51-.08-.51-.1v-4.81l9.8,6.23v-4.01l-9.8-6.14v-4.45l9.8,6.05v-4.98l-13.71-8.55v60ZM36.32,37.81l-3.93-.1c-.44.3.03,3.29-.16,4.02l4.09-3.91ZM37.39,47.78v-8.01l-4.1,4.18,4.1,3.83ZM32.23,46.18v8.55l4.27-4.19-4.27-4.36ZM64.63,68c-.17.74,3.09,1.82,3.22,1.68v-23.32c-.65.47-3.07,1.53-3.2,2.23M60.55,51.16c-.6.16-2.85,1.26-2.99,1.73v12.67s2.99,1.1,2.99,1.1v-15.49ZM37.39,60.95l.18-8.37c-1.57,1.22-2.85,2.79-4.26,4.21l.59.89,3.5,3.27ZM32.23,59v8.9l4.45-4.36-4.45-4.54ZM37.21,74.13l.18-8.19c-.18-.25-3.87,4.11-4.27,4.36l4.09,3.83ZM102.94,72.35l-9-5.34c-.06-.02-.26.42-.26.44v26.62h9.17c.26-.31.26-1.05.28-1.51.06-1.81-.35-3.62-.19-5.44h-5.79c-.41-.25-.09-.38-.09-.45v-3.2s-.21-.14-.1-.27l.37-.18,5.61.18v-3.38c-1.74-.21-3.5-.2-5.26-.18-.23,0-.49.18-.53.18-.43-.03-.09-.42-.09-.44v-3.2c0-.06-.17-.11-.18-.18l.18-.18c.12-.2.2.09.27.09h5.61v-3.56ZM67.85,94.07v-19.14l-10.33-4.36v23.5h10.33ZM34.3,74.2l-1.89-1.67-.18,8.19,4.25-4.21-2.18-2.31ZM53.42,73.95l-9.71,4.44-.26,15.85h9.97l.18-3.92-6.4,1.35-.33-.22.13-3.54,6.42-1.6v-3.83l-6.32,2.13c-.18-.12-.19-.21-.23-.39-.19-.95.55-2.8-.04-3.87l6.59-2.41v-4.01ZM37.39,86.95v-8.01c-.15.06-.36.14-.48.24-1,.89-2.13,2.4-3.08,3.43-.27.29-.92.21-.36.87l3.91,3.48ZM32.05,84.81v5.88c.86.03,1.73-.04,2.59,0,.47.02,2.63.55,2.59-.26l-.19-.54-4.99-5.07Z"/>
              <path className={isScrolled ? "fill-gray-900" : "fill-white"} d="M101.69,34.78c-.22-5.11,2.24-10.2,6.71-12.78,7.67-4.43,19.34-1.46,21.91,7.58,2.82,9.92-4.96,14.67-10.99,20.69h11.93v8.37h-30.28c5.33-6.21,12.08-11.68,16.71-18.46,1.84-2.69,4.14-6.57,2.18-9.76-1.54-2.49-5.68-2.28-7.02.29-.08.15-.46,1.08-.46,1.14v2.94h-10.69Z"/>
              <polygon className={isScrolled ? "fill-gray-900" : "fill-white"} points="153.52 20.9 153.52 58.64 143.72 58.64 143.72 29.44 138.2 29.44 138.2 21.16 153.52 20.9"/>
              <path className={isScrolled ? "fill-gray-900" : "fill-white"} d="M135.8,63.8c3.36.38,5.73,3.2,5.97,6.49.2,2.75.11,5.94-2.68,7.31l1.68,1.53c1.59,2.21,1.28,8.45-.04,10.79-.76,1.35-3.23,3.08-4.76,3.08h-7.75v-29.2c2.41.2,5.21-.26,7.57,0ZM132.5,75.73h2.76c.13,0,.98-.34,1.15-.45,1.43-.9,1.48-3.79,1.17-5.26-.19-.92-1.38-2.13-2.33-2.13h-2.76v7.83ZM132.5,88.73h2.76c1.02,0,2.13-1.34,2.33-2.3s.19-4.28-.15-5.22c-.7-1.92-3.29-1.64-4.94-1.74v9.26Z"/>
              <path className={isScrolled ? "fill-gray-900" : "fill-white"} d="M159.04,87.21c-.92,7.8-13.02,8.64-13.71-.54-.34-4.5-.32-11.69,0-16.21.71-10.47,15.32-8.42,13.64,1.71-1.36.46-2.76-.25-4.2.17.25-2.47-.54-5.1-3.57-4.37-1.37.33-1.51,2.57-1.59,3.75-.26,3.91-.3,10,0,13.89.13,1.74.45,3.44,2.56,3.4,2.51-.05,2.72-2.39,2.61-4.38h4.27c-.07.83.1,1.78,0,2.58Z"/>
              <path className={isScrolled ? "fill-gray-900" : "fill-white"} d="M124.84,87.21c-.92,7.8-13.02,8.64-13.71-.54-.34-4.5-.3-11.5,0-16.03.19-3.05,1.47-5.87,4.64-6.76,5.73-1.61,9.76,2.67,9.01,8.29-1.36.46-2.76-.25-4.2.17.13-1.72-.07-4.21-2.22-4.45-2.63-.3-2.8,1.75-2.94,3.83-.26,3.91-.3,10,0,13.89.13,1.74.45,3.44,2.56,3.4,2.51-.05,2.72-2.39,2.61-4.38h4.27c-.07.83.1,1.78,0,2.58Z"/>
            </svg>
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
              href="/cenova-ponuka"
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-orange-600 focus:outline-none",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
              Cenová ponuka
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
                href="/cenova-ponuka"
                className="text-sm font-medium tracking-wider uppercase text-gray-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cenová ponuka
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
