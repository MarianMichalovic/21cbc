import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import Gallery from "@/components/gallery"

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
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-6">Stavebá spoločnosť 21. storočia</p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Kvalitná výstavba
              <br />
              <span className="text-white/70">a moderné technológie</span>
            </h1>

            <p className="text-white text-xl mb-12 max-w-2xl leading-relaxed">
              Staviame na viac ako 17 ročných skúsenostiach v stavebníctve a 13 ročných skúsenostiach v elektroinštaláciach z mnohých úspešných projektoch.
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

      {/* Projects Section */}
      <ProjectsSection />

      <Gallery />

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
