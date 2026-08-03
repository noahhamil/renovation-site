"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, Users } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ManifestoPage() {
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

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Nous mettons notre cœur dans chaque projet, car votre satisfaction est notre plus belle récompense.",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Transparence, honnêteté et respect des engagements sont les piliers de notre relation client.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et techniques pour des rénovations durables et efficaces.",
    },
    {
      icon: Users,
      title: "Équipe",
      description: "Notre force réside dans la complémentarité de nos expertises et l'esprit d'équipe qui nous unit.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Notre Manifesto</h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les valeurs qui guident Flash Services 78 dans chaque projet
            </p>
          </div>

          {/* Mission Card */}
          <div className="max-w-4xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <Card className="p-8 bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl rounded-3xl hover:shadow-cyan-500/10 transition-all duration-500">
              <CardContent className="text-center">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Notre Mission</h2>
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  Chez Flash Services 78, nous croyons que chaque espace mérite d'être transformé en un lieu de vie
                  exceptionnel. Notre mission est d'accompagner nos clients dans la réalisation de leurs rêves
                  d'habitat, en alliant expertise technique, créativité et respect de l'environnement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 group relative bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl rounded-3xl hover:shadow-xl hover:bg-slate-50 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-500"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 dark:bg-primary/10 mb-6 group-hover:bg-cyan-200 dark:group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{value.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Engagement Card */}
          <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <Card className="p-8 bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl rounded-3xl hover:shadow-xl transition-all duration-500">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Notre Engagement</h2>
                <p className="text-lg text-slate-600 dark:text-gray-300 opacity-90">
                  Nous nous engageons à vous offrir un service d'excellence, des matériaux de qualité et un suivi
                  personnalisé tout au long de votre projet.
                </p>
              </CardContent>
            </Card>
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
