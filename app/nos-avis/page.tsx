"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Intersection Observer Hook
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible] as const
}

export default function NosAvisPage() {
  const [sectionRef, isSectionVisible] = useInView(0.1)

  const reviews = [
    {
      name: "Sophie L.",
      location: "Boulogne-Billancourt",
      rating: 5,
      date: "Mars 2024",
      project: "Rénovation appartement",
      comment:
        "Excellent travail ! L'équipe de Flash Services 78 a rénové notre appartement avec un professionnalisme remarquable. Délais respectés et qualité au rendez-vous.",
    },
    {
      name: "Pierre M.",
      location: "Issy-les-Moulineaux",
      rating: 5,
      date: "Février 2024",
      project: "Rénovation énergétique",
      comment:
        "Très satisfait de la rénovation énergétique de ma maison. L'équipe est compétente et les conseils prodigués sont de qualité. Je recommande vivement !",
    },
    {
      name: "Marie D.",
      location: "Sèvres",
      rating: 5,
      date: "Janvier 2024",
      project: "Salle de bain",
      comment:
        "Transformation complète de notre salle de bain. Résultat magnifique et travail soigné. Merci à toute l'équipe pour leur professionnalisme.",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-emerald-400/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <main ref={sectionRef} className="py-20 container mx-auto px-4 relative z-10 pt-32">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
            Nos Avis Clients
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>

          <div className="flex items-center justify-center space-x-2 mt-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-900 dark:text-white">4.9/5</span>
            <span className="text-slate-600 dark:text-gray-300">(127 avis)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const delay = index * 150
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Card className="relative group bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400">{review.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-gray-300">{review.location}</p>
                        <p className="text-sm text-slate-500 dark:text-gray-300">{review.date}</p>
                      </div>
                      <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-400 dark:text-white dark:border-0">
                        {review.project}
                      </Badge>
                    </div>

                    <div className="flex space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-6 w-6 text-slate-300 dark:text-white/20 absolute -top-2 -left-2" />
                      <p className="text-slate-600 dark:text-gray-300 italic pl-4">{review.comment}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }

        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
      `}</style>
    </div>
  )
}
