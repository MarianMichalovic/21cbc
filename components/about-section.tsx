"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import CountUp from "react-countup"
import { Users, Package, Clock, Globe } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: 150, label: "Dokončených projektov", suffix: "+" },
    { value: 7, label: "Rokov skúseností", suffix: "+" },
    { value: 12, label: "Krajín pôsobenia", suffix: "" },
    { value: 98, label: "Spokojnosť klientov", suffix: "%" },
  ]

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">O nás</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">Staviame budúcnosť</h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              S viac ako 7-ročnými skúsenosťami náš tím kvalifikovaných odborníkov poskytuje výnimočné služby v oblasti
              výstavby po celej Európe. Sme hrdí na kvalitu našej práce a záväzok k spokojnosti klientov.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-orange-600" />
                <p className="text-gray-900 font-medium">Profesionálny tím</p>
              </div>
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-orange-600" />
                <p className="text-gray-900 font-medium">Kvalitné materiály</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-600" />
                <p className="text-gray-900 font-medium">Včasné dokončenie</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-orange-600" />
                <p className="text-gray-900 font-medium">Celoeurópske pôsobenie</p>
              </div>
            </div>

            <div className="flex flex flex-col space-x-6">
              <img src="/images/signature.png" alt="podpis_ceo" className="w-48 sm:w-80" />
              <div>
                <p className="font-medium text-gray-900">Tomáš Wagner</p>
                <p className="text-sm text-gray-500">Generálny riaditeľ & Zakladateľ</p>
              </div>
            </div>
          </div>

          <div className="relative" ref={ref}>
            <div
              className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <Image
                  src="/images/new.jpg"
                  alt="Stavebný tím"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <p className="absolute -left-5 -bottom-9 sm:-bottom-12 text-orange-400 p-6 text-4xl sm:text-6xl z-[9999]">Pevné základy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center py-12 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 700}ms` }}
            >
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
                {isInView ? <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} /> : "0"}
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
