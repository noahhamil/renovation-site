"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Paintbrush, Zap, Home, Wrench, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function ServicesPage() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const [headerVisible, setHeaderVisible] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Rénovation Complète",
      description: "Rénovation totale de votre habitat, de la conception à la finition.",
      features: ["Gros œuvre", "Second œuvre", "Finitions", "Coordination des corps d'état"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rénovation Énergétique",
      description: "Améliorez les performances énergétiques de votre logement.",
      features: ["Isolation thermique", "Chauffage", "Ventilation", "Menuiseries"],
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Peinture & Décoration",
      description: "Donnez une nouvelle vie à vos espaces avec nos services de décoration.",
      features: ["Peinture intérieure", "Papier peint", "Revêtements", "Décoration"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Plomberie & Électricité",
      description: "Installation et rénovation de vos réseaux techniques.",
      features: ["Plomberie", "Électricité", "Chauffage", "Climatisation"],
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Maçonnerie & Gros Œuvre",
      description: "Travaux de structure et de maçonnerie pour vos projets.",
      features: ["Maçonnerie", "Cloisons", "Chapes", "Démolition"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Étanchéité & Toiture",
      description: "Protection et rénovation de votre toiture.",
      features: ["Étanchéité", "Couverture", "Charpente", "Isolation"],
    },
  ]

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    // Items observers
    const observers = itemRefs.current.map((ref, index) => {
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
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      headerObserver.disconnect()
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div
              ref={headerRef}
              className={`text-center space-y-4 mb-16 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-slate-900 dark:text-white">Nos Services</h1>
              <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
                Flash Services 78 vous accompagne dans tous vos projets de rénovation avec une expertise reconnue dans
                tous les corps d'état.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el }}
                  className={`h-full hover:shadow-lg transition-all duration-700 hover:scale-105 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 ${visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base text-slate-600 dark:text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
