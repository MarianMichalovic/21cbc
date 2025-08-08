"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])
  return (
    <footer className="bg-white/90 border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-gray-900 text-2xl font-light mb-8">21CBC s.r.o.</div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Profesionálne služby v oblasti výstavby. Garantujeme kvalitné remeselné spracovanie a
              spokojnosť zákazníkov.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-900">Služby</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Výstavba
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Demolácia
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Výkopové práce
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Murárske práce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-900">Odkazy</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-500 hover:text-orange-600 transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Projekty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-orange-600 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-900">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                <div className="text-gray-500">
                  <div>Kancelária BC Luxe</div>
                  <div>Bárdošova 2/A, 831 01 Bratislava</div>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                <div className="text-gray-500">
                  <div>0918 093 338 (Ondrej Vadel)</div>
                  <div>0911 766 296 (Richard Chovanec)</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                <div className="text-gray-500">
                  <div>vadel21cbc@gmail.com</div>
                  <div>chovanec21cbc@gmail.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} 21CBC s.r.o. Všetky práva vyhradené.
            </p>
            <div className="mt-4 md:mt-0">
              {/* <ul className="flex space-x-8">
                <li>
                  <Link href="#" className="text-gray-400 text-sm hover:text-orange-600 transition-colors">
                    Ochrana údajov
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 text-sm hover:text-orange-600 transition-colors">
                    Podmienky
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
