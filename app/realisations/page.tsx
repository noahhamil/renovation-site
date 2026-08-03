"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export default function RealisationsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [headerVisible, setHeaderVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])

  const projects = [
    {
      title: "Rénovation Appartement Haussmannien",
      location: "Paris 16ème",
      type: "Rénovation Complète",
      duration: "3 mois",
      image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
      description: "Rénovation complète d'un appartement de 120m² avec conservation des éléments d'époque.",
      slug: generateSlug("Renovation Appartement Haussmannien"),
    },
    {
      title: "Maison Contemporaine",
      location: "Boulogne-Billancourt",
      type: "Rénovation Énergétique",
      duration: "2 mois",
      image: "/modern-house-energy-renovation.jpg",
      description: "Amélioration des performances énergétiques avec isolation et nouveau système de chauffage.",
      slug: generateSlug("Maison Contemporaine"),
    },
    {
      title: "Loft Industriel",
      location: "Issy-les-Moulineaux",
      type: "Aménagement",
      duration: "4 mois",
      image: "/industrial-loft-renovation.jpg",
      description: "Transformation d'un ancien atelier en loft moderne de 200m².",
      slug: generateSlug("Loft Industriel"),
    },
    {
      title: "Villa Familiale",
      location: "Sèvres",
      type: "Extension",
      duration: "5 mois",
      image: "/family-house-extension-renovation.jpg",
      description: "Extension et rénovation d'une villa avec création d'une suite parentale.",
      slug: generateSlug("Villa Familiale"),
    },
    {
      title: "Bureaux d'Entreprise",
      location: "Neuilly-sur-Seine",
      type: "Aménagement Professionnel",
      duration: "2 mois",
      image: "/modern-office-renovation.jpg",
      description: "Aménagement de bureaux modernes avec espaces collaboratifs.",
      slug: generateSlug("Bureaux d'Entreprise"),
    },
    {
      title: "Duplex Moderne",
      location: "Levallois-Perret",
      type: "Rénovation Complète",
      duration: "3 mois",
      image: "/modern-duplex-apartment-renovation.jpg",
      description: "Rénovation totale d'un duplex avec optimisation des espaces.",
      slug: generateSlug("Duplex Moderne"),
    },
    {
      title: "Appartement Standing",
      location: "Paris 8ème",
      type: "Rénovation Luxe",
      duration: "4 mois",
      image: "/placeholder.svg",
      description: "Rénovation haut de gamme d'un appartement de prestige près des Champs-Élysées.",
      slug: generateSlug("Appartement Standing"),
    },
    {
      title: "Maison de Ville",
      location: "Versailles",
      type: "Rénovation Complète",
      duration: "6 mois",
      image: "/placeholder.svg",
      description: "Restauration complète d'une maison de ville avec jardin et dépendances.",
      slug: generateSlug("Maison de Ville"),
    },
    {
      title: "Penthouse Parisien",
      location: "Paris 17ème",
      type: "Aménagement Luxe",
      duration: "5 mois",
      image: "/placeholder.svg",
      description: "Aménagement d'un penthouse avec terrasse panoramique et vue sur la Tour Eiffel.",
      slug: generateSlug("Penthouse Parisien"),
    },
    {
      title: "Studio Artistique",
      location: "Montmartre, Paris 18ème",
      type: "Transformation",
      duration: "3 mois",
      image: "/placeholder.svg",
      description: "Transformation d'un ancien atelier d'artiste en espace de vie moderne et lumineux.",
      slug: generateSlug("Studio Artistique"),
    },
    {
      title: "Résidence Familiale",
      location: "Saint-Cloud",
      type: "Extension & Rénovation",
      duration: "7 mois",
      image: "/placeholder.svg",
      description: "Agrandissement et rénovation complète d'une résidence avec piscine et jardin paysager.",
      slug: generateSlug("Residence Familiale"),
    },
    {
      title: "Hôtel Particulier",
      location: "Paris 7ème",
      type: "Restauration Patrimoine",
      duration: "8 mois",
      image: "/placeholder.svg",
      description: "Restauration d'un hôtel particulier classé avec respect du patrimoine architectural.",
      slug: generateSlug("Hotel Particulier"),
    },
  ]

  // Display only first 6 projects initially
  const displayedProjects = showAll ? projects : projects.slice(0, 6)
  const hasMoreProjects = projects.length > 6

  useEffect(() => {
    setVisibleItems(Array(displayedProjects.length).fill(false))
  }, [displayedProjects.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    // Clean up old observers
    const oldObservers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      headerObserver.disconnect()
      oldObservers.forEach((observer) => observer?.disconnect())
    }
  }, [displayedProjects.length])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 blur-3xl animate-pulse"
        style={{
          top: '10%',
          left: '10%',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 dark:from-sky-500/20 dark:to-cyan-500/20 blur-3xl animate-pulse"
        style={{
          bottom: '10%',
          right: '10%',
          animation: 'float 15s ease-in-out infinite reverse',
        }}
      />

      {/* Mouse follower gradient */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>

      <main className="relative z-10">
        <section className="py-20 md:py-32">
          <div className="container px-4 mx-auto">
            {/* Header with stunning animation */}
            <div
              ref={headerRef}
              className={`text-center space-y-6 mb-20 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              <div className="inline-block">
                <Badge className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 border-0 text-white shadow-lg shadow-sky-500/50 animate-pulse">
                  Portfolio
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-sky-200 dark:to-cyan-200 leading-tight animate-fade-in">
                Nos Réalisations
                <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  D'Exception
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Découvrez nos projets les plus prestigieux qui incarnent l'excellence,
                <br className="hidden md:block" />
                l'innovation et le savoir-faire artisanal français.
              </p>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
              </div>
            </div>

            {/* Projects Grid with advanced animations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {displayedProjects.map((project, index) => (
                <a
                  key={index}
                  href={`/realisations/${project.slug}`}
                  ref={(el) => { itemRefs.current[index] = el }}
                  className={`group transition-all duration-700 block ${visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 border-slate-200 dark:border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 cursor-pointer h-full">
                    {/* Image container with overlay effects */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                      {/* Animated corner accent */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/30 to-transparent transition-all duration-500 ${hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4 relative">
                      {/* Glowing line */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                      <div className="flex items-center justify-between">
                        <Badge className="px-3 py-1 bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-0 shadow-lg shadow-sky-500/30 group-hover:shadow-sky-500/50 transition-all duration-300">
                          {project.type}
                        </Badge>
                        <span className="text-sm text-slate-500 dark:text-gray-400 font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project.duration}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-sky-600 dark:text-sky-300 font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </p>
                      </div>

                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* View project button */}
                      <div className="pt-2">
                        <button className="w-full py-3 px-6 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-semibold rounded-lg group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/50 flex items-center justify-center gap-2">
                          Voir le projet
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* CTA Section with stunning design */}
            <div className="text-center mt-24">
              {hasMoreProjects && !showAll && (
                <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-600 animate-gradient">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl px-12 py-8">
                    <p className="text-slate-600 dark:text-gray-300 mb-6 text-lg">
                      Vous avez un projet en tête ?
                    </p>
                    <Button
                      size="lg"
                      onClick={() => setShowAll(true)}
                      className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-sky-500/50 hover:shadow-sky-500/70 hover:scale-105 transition-all duration-300 border-0"
                    >
                      <span className="flex items-center gap-3">
                        Découvrir Plus de Projets
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              )}

              {showAll && (
                <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-600 animate-gradient">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl px-12 py-8">
                    <p className="text-slate-600 dark:text-gray-300 mb-6 text-lg">
                      Un projet de rénovation en tête ?
                    </p>
                    <a href="/contact">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-sky-500/50 hover:shadow-sky-500/70 hover:scale-105 transition-all duration-300 border-0"
                      >
                        <span className="flex items-center gap-3">
                          Contactez-nous
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
