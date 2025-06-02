"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Hammer, Building2, Shovel, ToyBrickIcon as Bricks, Wind, Truck, Wrench, PaintBucket } from "lucide-react"

const services = [
  {
    title: "Demolácia",
    description: "Profesionálne a bezpečné demolačné služby pre obytné, komerčné a priemyselné objekty.",
    icon: Hammer,
  },
  {
    title: "Výstavba",
    description: "Kompletné stavebné služby od základov až po dokončovacie práce s kvalitným remeselným spracovaním.",
    icon: Building2,
  },
  {
    title: "Výkopové práce",
    description: "Presné výkopové práce pre základy, inžinierske siete a prípravu staveniska po celej Európe.",
    icon: Shovel,
  },
  {
    title: "Murárske práce",
    description: "Odborné murárske služby vrátane tehlových, kamenných a betónových prác s tradičnými technikami.",
    icon: Bricks,
  },
  {
    title: "Klimatizácia",
    description: "Inštalácia a údržba HVAC systémov pre optimálnu klimatizáciu v akejkoľvek budove.",
    icon: Wind,
  },
  {
    title: "Preprava materiálu",
    description: "Efektívna preprava stavebných materiálov na a z vášho staveniska.",
    icon: Truck,
  },
  {
    title: "Inštalatérske práce",
    description: "Kompletné inštalatérske riešenia pre novú výstavbu a rekonštrukčné projekty.",
    icon: Wrench,
  },
  {
    title: "Maľovanie a dokončovanie",
    description: "Profesionálne maliarske a dokončovacie služby na dokončenie vášho stavebného projektu.",
    icon: PaintBucket,
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
            Poskytujeme širokú škálu stavebných služieb po celej Európe s dôrazom na kvalitu a precíznosť.
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
            <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Prečo my</p>
            <h2 className="text-3xl font-light mb-8 text-gray-900">Európska excelentnosť</h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              S viac ako 7-ročnými skúsenosťami v mnohých európskych krajinách prinášame do každého projektu
              neprekonateľné odborné znalosti.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-gray-900">Skúsený tím</h3>
                <p className="text-gray-500">Kvalifikovaní odborníci s dlhoročnými skúsenosťami</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-gray-900">Kvalitné materiály</h3>
                <p className="text-gray-500">Používame len najkvalitnejšie materiály pre dlhú životnosť</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-gray-900">Včasné dodanie</h3>
                <p className="text-gray-500">Dokončujeme projekty podľa harmonogramu a v rámci rozpočtu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
