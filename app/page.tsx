import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-background.jpg"
            alt="Stavebné práce - brúsenie s iskrami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-6">Európska excelentnosť</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Kvalitná výstavba
              <br />
              <span className="text-white/70">& Poctivé služby</span>
            </h1>

            <p className="text-white/80 text-xl mb-12 max-w-2xl leading-relaxed">
              Vytvárame mimoriadne priestory s viac ako 7-ročnými skúsenosťami po celej Európe.
            </p>

            <Link href="/#about">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-sm font-medium tracking-wider uppercase group transition-all duration-300">
                Zistiť viac
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* European Presence Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Európa</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Naša prítomnosť</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Pôsobíme v mnohých krajinách po celej Európe, kde sme úspešne dokončili stovky projektov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Nemecko</h3>
              <p className="text-gray-500 mb-4">38 projektov</p>
              <p className="text-sm text-gray-400">Berlín, Mníchov, Hamburg</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Rakúsko</h3>
              <p className="text-gray-500 mb-4">42 projektov</p>
              <p className="text-sm text-gray-400">Viedeň, Salzburg, Graz</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Francúzsko</h3>
              <p className="text-gray-500 mb-4">27 projektov</p>
              <p className="text-sm text-gray-400">Paríž, Lyon, Marseille</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Taliansko</h3>
              <p className="text-gray-500 mb-4">31 projektov</p>
              <p className="text-sm text-gray-400">Rím, Miláno, Benátky</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Španielsko</h3>
              <p className="text-gray-500 mb-4">19 projektov</p>
              <p className="text-sm text-gray-400">Madrid, Barcelona</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Česká republika</h3>
              <p className="text-gray-500 mb-4">12 projektov</p>
              <p className="text-sm text-gray-400">Praha, Brno, Ostrava</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* CTA Section */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Pripravení začať?</h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Kontaktujte nás ešte dnes pre bezplatnú konzultáciu a cenovú ponuku
          </p>
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-sm font-medium tracking-wider uppercase">
              Kontaktujte nás
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
