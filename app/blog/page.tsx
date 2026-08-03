"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function BlogPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      title: "Les tendances 2024 en rénovation",
      excerpt: "Découvrez les dernières tendances en matière de rénovation pour cette année.",
      date: "15 Mars 2024",
      author: "Équipe Flash Services",
      category: "Tendances",
      image: "/modern-renovation-trends-2024.jpg",
    },
    {
      title: "Comment optimiser l'isolation de votre maison",
      excerpt: "Guide complet pour améliorer l'isolation thermique de votre habitation.",
      date: "10 Mars 2024",
      author: "Expert Isolation",
      category: "Conseils",
      image: "/house-insulation-thermal-optimization.jpg",
    },
    {
      title: "Rénovation énergétique : les aides disponibles",
      excerpt: "Tour d'horizon des aides financières pour vos projets de rénovation énergétique.",
      date: "5 Mars 2024",
      author: "Conseiller Énergie",
      category: "Financement",
      image: "/energy-renovation-financial-aids.jpg",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-emerald-400/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <main ref={sectionRef} className="py-20 relative z-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Blog de la Squad</h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conseils, actualités et tendances en rénovation par nos experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 group relative bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-3xl hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-500 text-white border-0">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className=" text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium group-hover:translate-x-2 transition-transform">
                    <span>Lire la suite</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
        .animate-on-scroll {
          transition: all 1s ease-out;
        }
      `}</style>
    </div>
  )
}
