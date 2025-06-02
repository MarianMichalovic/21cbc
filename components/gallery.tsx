"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/images/new.jpg",
    alt: "Stavebný projekt 1",
    title: "Rezidenčný komplex",
    location: "Berlín, Nemecko",
    description: "Moderný bytový komplex s 120 bytmi a podzemným parkovaním",
    year: "2023"
  },
  {
    src: "/images/second.jpg",
    alt: "Stavebný projekt 2",
    title: "Kancelárska budova",
    location: "Viedeň, Rakúsko",
    description: "Energeticky efektívna administratívna budova s certifikáciou LEED Gold",
    year: "2022"
  },
  {
    src: "/images/new.jpg",
    alt: "Stavebný projekt 3",
    title: "Obchodné centrum",
    location: "Praha, ČR",
    description: "Multifunkčný komplex s obchodmi, reštauráciami a zábavným centrom",
    year: "2023"
  },
  {
    src: "/images/second.jpg",
    alt: "Stavebný projekt 2",
    title: "Kancelárska budova",
    location: "Viedeň, Rakúsko",
    description: "Energeticky efektívna administratívna budova s certifikáciou LEED Gold",
    year: "2022"
  },
  {
    src: "/images/new.jpg",
    alt: "Stavebný projekt 3",
    title: "Obchodné centrum",
    location: "Praha, ČR",
    description: "Multifunkčný komplex s obchodmi, reštauráciami a zábavným centrom",
    year: "2023"
  },
  {
    src: "/images/second.jpg",
    alt: "Stavebný projekt 2",
    title: "Kancelárska budova",
    location: "Viedeň, Rakúsko",
    description: "Energeticky efektívna administratívna budova s certifikáciou LEED Gold",
    year: "2022"
  },
  // Add more images as needed
]

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Galéria</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Naše projekty</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-orange-600 text-sm font-medium mb-2">{image.year}</p>
                <h3 className="text-white text-xl font-medium mb-2">{image.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{image.location}</p>
                <p className="text-gray-400 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div 
              ref={modalRef}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-orange-600 text-4xl z-10 transition-colors"
              >
                ×
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 text-4xl z-10 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 text-4xl z-10 transition-colors"
              >
                ›
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-orange-600 text-sm font-medium mb-2">{images[currentIndex].year}</p>
                  <h3 className="text-white text-2xl font-medium mb-2">{images[currentIndex].title}</h3>
                  <p className="text-gray-300 text-base mb-3">{images[currentIndex].location}</p>
                  <p className="text-gray-400 text-base">{images[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 