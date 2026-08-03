"use client"

import { Button } from "@/components/ui/button"
import { Palette, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Palette,
    title: "Des architectes qui façonnent votre intérieur",
    description:
      "Rénovation intérieure à 360°, pour un intérieur qui vous ressemble. Nos équipes créent pour votre maison un intérieur sur mesure qui reflète votre personnalité.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Home,
    title: "Une décoration aux tendances inspirantes",
    description:
      "Couleurs tendance et matériaux de qualité pour un intérieur moderne et chaleureux. Nos décorateurs vous accompagnent dans le choix des matériaux et couleurs.",
    color: "from-blue-500 to-purple-500",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900">
      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="group relative cursor-pointer"
            >
              {/* Glass card */}
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:scale-105 hover:shadow-cyan-500/50 transition-transform duration-500">
                {/* Gradient icon circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
            Voir toutes les différences →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
