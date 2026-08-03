"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Enhanced CountUp hook with easing
interface EaseFunction {
  (t: number): number;
}

function useCountUp(end: number, duration = 2, isActive: boolean): number {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    const easeOutExpo: EaseFunction = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easedProgress = easeOutExpo(progress)
      const value = Math.floor(easedProgress * end)
      setCount(value)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isActive])

  return count
}

// Intersection Observer Hook
function useIntersectionObserver(threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function QuiSommesNousPage() {
  const { ref: heroRef, isVisible: isHeroVisible } = useIntersectionObserver(0.1)
  const { ref: valuesRef, isVisible: isValuesVisible } = useIntersectionObserver(0.2)
  const { ref: statsRef, isVisible: isStatsVisible } = useIntersectionObserver(0.3)
  const { ref: ctaRef, isVisible: isCTAVisible } = useIntersectionObserver(0.3)

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, avec des matériaux de qualité et un savoir-faire reconnu.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Proximité",
      description: "Une équipe locale qui comprend vos besoins et vous accompagne tout au long de votre projet.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Réactivité",
      description: "Des délais respectés et une disponibilité constante pour répondre à vos questions.",
      color: "from-blue-400 to-cyan-500"
    },
  ]

  const stats = [
    { number: 7, suffix: "+", label: "Années d'expérience" },
    { number: 3700, suffix: "+", label: "Projets réalisés" },
    { number: 98, suffix: "%", label: "Clients satisfaits" },
    { number: 25, suffix: "", label: "Artisans qualifiés" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
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

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative text-center px-4 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ease-out ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {/* Badge */}
            <div className="inline-block mb-8">
              <Badge className="px-6 py-3 bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/20 backdrop-blur-xl text-slate-900 dark:text-white text-lg font-medium shadow-xl">
                <Users className="h-5 w-5 mr-2" />
                Qui sommes-nous ?
              </Badge>
            </div>

            {/* Main Title with Enhanced Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9] tracking-tight">
              Flash Services 78,
              <br />
              votre{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text animate-gradient">
                  partenaire
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg -z-10" />
              </span>
              <br />
              de confiance
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16 transition-all duration-1000 delay-300 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Depuis plus de 7 ans, nous transformons vos projets de rénovation en réalité avec passion et expertise.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isValuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8">
              Nos{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text">
                valeurs
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <div
                key={i}
                className={`group transition-all duration-700 hover:scale-105 ${isValuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`} />

                {/* Card */}
                <Card className="relative bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 h-full group-hover:shadow-3xl rounded-3xl overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor', padding: '3px' }} />

                  <CardHeader className="relative z-10 text-center pt-12 pb-6">
                    {/* Icon Container */}
                    <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pb-12">
                    <CardDescription className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block mb-6">
              <Badge className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 border border-cyan-500/20 dark:border-cyan-400/30 backdrop-blur-xl text-cyan-600 dark:text-cyan-300 text-lg">
                Nos Réalisations
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {stats.map((stat, i) => {
              const count = useCountUp(stat.number, 3, isStatsVisible)

              return (
                <div
                  key={i}
                  className={`group text-center transition-all duration-700 hover:scale-110 ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Card */}
                    <div className="relative bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-12 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      {/* Number */}
                      <div className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text mb-4 tabular-nums group-hover:scale-110 transition-transform duration-300">
                        {count}{stat.suffix}
                      </div>

                      {/* Label */}
                      <div className="text-slate-600 dark:text-gray-300 text-lg md:text-xl font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 text-center relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`transition-all duration-1000 ${isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Badge */}
            <div className="inline-block mb-8">
              <Badge className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20 dark:border-emerald-400/30 backdrop-blur-xl text-emerald-600 dark:text-emerald-300 text-lg">
                Prêt à Commencer ?
              </Badge>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Prêt à nous faire{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text">
                confiance
              </span>
              ?
            </h2>

            {/* Description */}
            <p className={`text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Contactez-nous dès aujourd'hui pour discuter de votre projet de rénovation
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white px-12 py-4 text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    Nous contacter
                  </span>
                </Button>
              </Link>

              <Link href="/realisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-slate-300 dark:border-white/30 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white hover:text-slate-900 dark:hover:text-slate-900 backdrop-blur-xl px-12 py-4 text-xl rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    Voir nos réalisations
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
      `}</style>
    </div>
  )
}
