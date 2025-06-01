"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Contact Hero */}
      <section className="relative overflow-hidden pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rquiros-2219024.jpg-q49Va0rZa5Lcma7PtFFxUpiXZ6QkGb.jpeg"
            alt="Stavebné práce - betónovanie základov"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Spojte sa s nami</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Máte v pláne projekt? Spojte sa s našim tímom odborníkov ešte dnes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-light mb-12 text-gray-900">Pošlite nám správu</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-light mb-12 text-gray-900">Kontaktné informácie</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-6" />
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-900">Hlavná kancelária</h3>
                    <p className="text-gray-500">123 Stavebná ulica, Viedeň, Rakúsko</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-600 mt-1 mr-6" />
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-900">Telefón</h3>
                    <p className="text-gray-500">+43 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-600 mt-1 mr-6" />
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-500">info@eurokonstrukt.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-600 mt-1 mr-6" />
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-900">Pracovná doba</h3>
                    <p className="text-gray-500">Pondelok - Piatok: 8:00 - 18:00</p>
                    <p className="text-gray-500">Sobota: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
