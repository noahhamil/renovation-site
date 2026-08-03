"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Calendar, Sparkles, Star, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.1),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 100%)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
      </div>

      {/* Animated Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-float-slow" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <main ref={sectionRef} className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-24 text-center px-4 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">

          </div>

          <div className="relative inline-block mb-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-200">
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-slate-900 dark:text-white">
              Flash Services 78
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl -z-10" />
          </div>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-400 font-light leading-relaxed">
            Votre partenaire de confiance pour tous vos projets de rénovation
          </p>
          <div className="flex justify-center gap-3 mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-600">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </section>

        {/* Company Story with 3D Effect */}
        <section className="py-20 px-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-800">
          <div className="container mx-auto max-w-6xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
              <Card className="relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-12 space-y-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                        <Zap className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
                      </div>
                      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Notre Histoire</h2>
                      <p className="text-lg text-slate-600 dark:text-gray-200 leading-relaxed">
                        Flash Services 78 est spécialisée dans la <span className="text-cyan-600 dark:text-cyan-300 font-semibold">rénovation tous corps d'état</span>, basée à Boulogne-Billancourt.
                      </p>
                      <p className="text-lg text-slate-600 dark:text-gray-200 leading-relaxed">
                        Avec des années d'expérience, nous avons une <span className="text-cyan-600 dark:text-cyan-300 font-semibold">réputation solide</span> grâce à notre expertise et notre engagement envers la satisfaction client.
                      </p>
                      <p className="text-lg text-slate-600 dark:text-gray-200 leading-relaxed">
                        Notre équipe intervient sur tous types de projets, respectant <span className="text-cyan-600 dark:text-cyan-300 font-semibold">délais et budgets</span> convenus.
                      </p>
                    </div>
                    <div className="relative h-96 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
                      <img
                        src="/renovation-team-working-on-house-project.jpg"
                        alt="Équipe Flash Services 78"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values with Enhanced Cards */}
        <section className="py-20 px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <Badge className="mb-4 bg-white/80 dark:bg-slate-900/90 text-slate-900 dark:text-white border-slate-200 dark:border-white/50 backdrop-blur-xl px-6 py-2 shadow-sm">
              NOS VALEURS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Les principes qui nous définissent
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Des valeurs qui guident chacune de nos actions au quotidien
            </p>
          </div>
          <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Qualité Supérieure",
                desc: "Nous utilisons uniquement des matériaux de qualité premium et appliquons les meilleures techniques du marché.",
                color: "from-cyan-400 to-blue-400"
              },
              {
                icon: Users,
                title: "Relation Client",
                desc: "Une relation de confiance avec nos clients basée sur l'écoute active, la transparence et la communication.",
                color: "from-blue-400 to-purple-400"
              },
              {
                icon: Calendar,
                title: "Engagement",
                desc: "Respect strict des délais convenus et disponibilité permanente pour répondre à toutes vos demandes.",
                color: "from-purple-400 to-pink-400"
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <Card
                  key={i}
                  className="relative group bg-white dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-cyan-500/20 hover:border-sky-500/50 dark:hover:border-white/20 transition-all duration-700 overflow-hidden rounded-3xl animate-on-scroll opacity-0 translate-y-12 hover:scale-105"
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardContent className="p-8 text-center relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{value.title}</h3>
                    <p className="text-slate-600 dark:text-gray-200 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Certifications with Floating Effect */}
        <section className="py-20 px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <Badge className="mb-4 bg-white/80 dark:bg-slate-900/90 text-slate-900 dark:text-white border-slate-200 dark:border-white/50 backdrop-blur-xl px-6 py-2 shadow-sm">
              CERTIFICATIONS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Nos Garanties
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-200 max-w-2xl mx-auto">
              Des qualifications professionnelles pour votre tranquillité d'esprit
            </p>
          </div>
          <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
            {[
              { name: "RGE Qualibat", desc: "Reconnu Garant de l'Environnement", color: "from-emerald-400 to-teal-400" },
              { name: "Assurance Décennale", desc: "Garantie 10 ans sur tous travaux", color: "from-cyan-400 to-blue-400" },
              { name: "Artisan Certifié", desc: "Savoir-faire traditionnel d'excellence", color: "from-purple-400 to-pink-400" }
            ].map((cert, i) => (
              <Card
                key={i}
                className="relative group bg-white dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/50 dark:hover:border-white/30 transition-all duration-700 overflow-hidden rounded-3xl animate-on-scroll opacity-0 translate-y-12 hover:scale-105 hover:-rotate-1"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                <CardContent className="p-8 text-center relative">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${cert.color} mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cert.name}</h4>
                  <p className="text-slate-600 dark:text-gray-200 text-sm leading-relaxed">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section with Glassmorphism */}
        <section className="py-24 px-4 text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
          <div className="container mx-auto max-w-4xl relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
            <Card className="relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <CardContent className="p-12 md:p-16">

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                  Prêt à démarrer votre projet ?
                </h2>
                <p className="text-xl mb-10 text-slate-600 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour un devis gratuit et personnalisé
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:0610171105"
                    className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span className="relative z-10">Appelez maintenant</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="group relative border-2 border-slate-900 dark:border-white/30 text-slate-900 dark:text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-xl hover:scale-105"
                  >
                    Demander un devis
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
          animation-delay: 5s;
        }
        .animate-float-slow {
          animation: float 30s ease-in-out infinite;
          animation-delay: 10s;
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        .animate-on-scroll {
          transition: all 1s ease-out;
        }
      `}</style>
    </div>
  )
}