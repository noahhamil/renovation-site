"use client"

import React, { useRef } from "react"
import { Clock, Users, Shield, Award, CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function ModernPromisesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const promises = [
    {
      icon: Clock,
      title: "Estimation Gratuite",
      description: "Recevez une estimation détaillée et transparente sous 24h. Pas de surprise, tout est clair dès le départ.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Users,
      title: "Artisans d'Elite",
      description: "Une sélection rigoureuse des meilleurs experts de votre région. Qualité, ponctualité et savoir-fair garantis.",
      gradient: "from-cyan-500 to-teal-500",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Sécurité Totale",
      description: "Vos acomptes sont sécurisés et votre chantier est assuré. Nous veillons à votre tranquillité d'esprit.",
      gradient: "from-indigo-500 to-blue-600",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Un interlocuteur unique dédié à votre projet pour un suivi personnalisé de la conception à la livraison.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3
    }
  ]

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 dark:opacity-10" />
      </div>

      <div className="container px-4 mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-wider backdrop-blur-md shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Notre Engagement</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Pourquoi nous faire <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 animate-gradient-x">
              confiance ?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Nous ne faisons pas que rénover des espaces, nous construisons des relations durables basées sur la qualité, la confiance et l'excellence.
          </motion.p>
        </div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: promise.delay }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full p-8 rounded-[2rem] bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 group-hover:bg-white dark:group-hover:bg-slate-800/60 shadow-lg dark:shadow-none">

                {/* Icon Halo */}
                <div className="relative w-16 h-16 mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${promise.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${promise.gradient} flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-500`}>
                    <promise.icon className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {promise.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {promise.description}
                </p>

                {/* Bottom Shine */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
