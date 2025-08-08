"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calculator, Home, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CenovaPonukaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Stavebné práce - cenová ponuka"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Cenník</p>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Cenová ponuka</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Transparentné ceny pre výstavbu rodinných domov na mieru
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro Text */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Calculator className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Individuálna ponuka na mieru</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
                Radi vám pripravíme cenovú ponuku na mieru podľa vašich podkladov. Neváhajte nás kontaktovať.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Bungalov Card */}
              <div className="bg-gray-50 rounded-lg p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
                    <Home className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Bungalov</h3>
                    <p className="text-gray-500">Jednopodlažný dom</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-orange-600">850€</span>
                    <span className="text-gray-500 ml-2">bez DPH / m²</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Výstavba "na kľúč" do štádia holodom</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Kompletná výstavba
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Vrátane základov
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Štádium holodom
                  </div>
                </div>
              </div>

              {/* Dvojpodlažný dom Card */}
              <div className="bg-gray-50 rounded-lg p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
                    <Home className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Dvojpodlažný dom</h3>
                    <p className="text-gray-500">Viacpodlažná stavba</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-orange-600">950€</span>
                    <span className="text-gray-500 ml-2">bez DPH / m²</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Výstavba "na kľúč" do štádia holodom</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Kompletná výstavba
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Vrátane základov
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                    Štádium holodom
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Calculator className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-orange-800">
                    <strong>Dôležité:</strong> Uvedené ceny sú orientačné a môžu sa líšiť v závislosti od konkrétnych požiadaviek, 
                    lokality a zložitosti projektu. Pre presnú kalkuláciu nás kontaktujte s vašimi podkladmi.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-light mb-8 text-gray-900">Tešíme sa na váš dopyt</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kontaktujte nás pre detailnú konzultáciu a prípravu cenovej ponuky šitej na mieru vášmu projektu.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                    <Mail className="h-4 w-4 mr-2" />
                    Kontaktovať nás
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
