"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

// Project data with all images for each project
const projects = [
  {
    id: "lozorno",
    title: "RD Lozorno",
    location: "Lozorno, Slovensko",
    description: "Rodinný dom s moderným dizajnom a kvalitným spracovaním",
    year: "2024",
    frontImage: "/images/projects/lozorno/front.jpg",
    images: [
      "/images/projects/lozorno/front.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0026.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0040.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0042.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0045.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0046.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0049.jpg",
      "/images/projects/lozorno/IMG-20250602-WA0056.jpg",
    ]
  },
  {
    id: "modra", 
    title: "RD s dvomi bytovými jednotkami",
    location: "Modra, Slovensko",
    description: "Dvojgeneračný rodinný dom s dvomi samostatnými bytovými jednotkami",
    year: "2024",
    frontImage: "/images/projects/modra/front.jpg",
    images: [
      "/images/projects/modra/front.jpg",
      "/images/projects/modra/IMG_2752.JPG",
      "/images/projects/modra/IMG_2753.JPG", 
      "/images/projects/modra/IMG_2754.JPG",
      "/images/projects/modra/IMG_2756.JPG",
      "/images/projects/modra/IMG_2757.JPG",
      "/images/projects/modra/IMG_2816.JPG",
      "/images/projects/modra/IMG_2817.JPG",
    ]
  },
  {
    id: "borsa",
    title: "RD s dvomi bytovými jednotkami", 
    location: "Hrubá Borša, Slovensko",
    description: "Moderný dvojgeneračný dom s dvomi bytovými jednotkami a vlastným parkovaním",
    year: "2024",
    frontImage: "/images/projects/borsa/front.jpg",
    images: [
      "/images/projects/borsa/front.jpg",
      "/images/projects/borsa/IMG_0290.jpg",
      "/images/projects/borsa/IMG_2287.jpg",
      "/images/projects/borsa/IMG_2365.jpg",
      "/images/projects/borsa/IMG_2417.jpg",
      "/images/projects/borsa/IMG_2433.jpg",
      "/images/projects/borsa/IMG_2691.jpg",
      "/images/projects/borsa/IMG_3726.jpg",
      "/images/projects/borsa/w520_01.jpg",
    ]
  },
]

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const currentProject = projects[currentProjectIndex]
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const currentProject = projects[currentProjectIndex]
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

  const goToImage = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (isModalOpen) {
        if (event.key === 'Escape') {
          closeModal()
        } else if (event.key === 'ArrowLeft') {
          prevImage(event as any)
        } else if (event.key === 'ArrowRight') {
          nextImage(event as any)
        }
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isModalOpen, currentProjectIndex, currentImageIndex])

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4">Galéria</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Naše projekty</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(index)}
            >
              <Image
                src={project.frontImage}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-orange-600 text-sm font-medium mb-2">{project.year}</p>
                <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.location}</p>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div 
              ref={modalRef}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-orange-600 text-4xl z-20 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ×
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 text-4xl z-20 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 text-4xl z-20 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ›
              </button>

              {/* Main image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={projects[currentProjectIndex].images[currentImageIndex]}
                  alt={`${projects[currentProjectIndex].title} - obrázok ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>

              {/* Project info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-orange-600 text-sm font-medium mb-2">{projects[currentProjectIndex].year}</p>
                    <h3 className="text-white text-2xl font-medium mb-2">{projects[currentProjectIndex].title}</h3>
                    <p className="text-gray-300 text-base mb-3">{projects[currentProjectIndex].location}</p>
                    <p className="text-gray-400 text-base">{projects[currentProjectIndex].description}</p>
                  </div>
                  <div className="text-white text-sm">
                    {currentImageIndex + 1} / {projects[currentProjectIndex].images.length}
                  </div>
                </div>
              </div>

              {/* Thumbnail navigation */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center">
                <div className="flex space-x-2 max-w-full overflow-x-auto px-4">
                  {projects[currentProjectIndex].images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-orange-600 opacity-100' 
                          : 'border-white/30 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 