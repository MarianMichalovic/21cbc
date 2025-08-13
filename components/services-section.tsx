"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Hammer, Building2, Shovel, ToyBrickIcon as Bricks, Wind, Truck, Wrench, PaintBucket } from "lucide-react"
import { Home, HardHat, ThermometerSun, Palette, SquareStack, Droplets, Zap, BrickWall } from "lucide-react"

const services = [
  {
    title: "Stavby na klúč",
    description: "Kompletná realizácia stavby od projektu až po odovzdanie vrátane všetkých dokončovacích prác.",
    icon: Home,
  },
  {
    title: "Stavby do štádia Holodom",
    description: "Realizácia stavby s kompletne dokončenými vnútornými rozvodmi a priečkami pripravená na dokončenie.",
    icon: HardHat,
  },
  {
    title: "Stavby do štádia Hrubá stavba",
    description: "Výstavba nosných konštrukcií, základov, stien a strechy s dokončenou hrubou stavbou.",
    icon: BrickWall,
  },
  {
    title: "Zateplenie a fasády",
    description: "Profesionálne zatepľovacie systémy a fasádne práce pre energetickú efektívnosť budov.",
    icon: ThermometerSun,
  },
  {
    title: "Omietky",
    description: "Kvalitné vnútorné a vonkajšie omietky s použitím moderných materiálov a techník.",
    icon: Palette,
  },
  {
    title: "Potery",
    description: "Presné vyhotovenie podkladových a finálnych poterov pre všetky typy podláh.",
    icon: SquareStack,
  },
  {
    title: "Zdravotechnika",
    description: "Kompletné inštalácie vody, kúrenia a kanalizácie s moderným technickým vybavením.",
    icon: Droplets,
  },
  {
    title: "Elektroinštalácie a Bleskozvody",
    description: "Odborné elektrické inštalácie a bleskozvody v súlade s najnovšími bezpečnostnými normami.",
    icon: Zap,
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Služby</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Komplexné riešenia</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Poskytujeme širokú škálu stavebných služieb s dôrazom na kvalitu a precíznosť.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group cursor-pointer transition-all duration-700 border border-gray-200 rounded-lg hover:border-orange-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center py-12 px-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-8 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Image
              src="/images/second.jpg"
              alt="Ukážka stavebných služieb"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

            <div>
            <h2 className="text-3xl font-light mb-8 text-gray-900">Prečo my</h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              S viac ako 17-ročnými skúsenosťami prinášame do každého projektu
              neprekonateľné odborné znalosti.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Dlhoročné skúsenosti</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Moderné technológie</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Spoľahlivosť</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Vysoká kvalita</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Férová cena</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">Rýchle riešenia</span>
              </div>
              <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
              <span className="text-gray-700">5 ročná záruka</span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
