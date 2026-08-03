"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, Users, MapPin } from "lucide-react"

export function ModernStatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    { label: "Projets Réalisés", value: 3700, suffix: "+", icon: Award, color: "from-cyan-400 to-blue-500" },
    { label: "Clients Satisfaits", value: 98, suffix: "%", icon: Users, color: "from-purple-400 to-pink-500" },
    { label: "Années d'Expérience", value: 15, suffix: "+", icon: Star, color: "from-amber-400 to-orange-500" },
  ]

  const featuredProjects = [
    {
      title: "Appartement Haussmannien",
      location: "Paris 16ème",
      image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
      tag: "Rénovation Complète",
      slug: "renovation-appartement-haussmannien"
    },
    {
      title: "Maison Contemporaine",
      location: "Boulogne-Billancourt",
      image: "/modern-house-energy-renovation.jpg",
      tag: "Rénovation Énergétique",
      slug: "maison-contemporaine"
    },
    {
      title: "Loft Industriel",
      location: "Issy-les-Moulineaux",
      image: "/industrial-loft-renovation.jpg",
      tag: "Aménagement",
      slug: "loft-industriel"
    }
  ]

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
    <section ref={sectionRef} className="py-12 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Background Parallax Elements */}
      {/* Removed blobs */}

      <div className="container mx-auto px-4 relative z-10">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-cyan-400" />
            <span>Excellence garantie</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white"
          >
            Nos Dernières <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Réalisations</span>
          </motion.h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Découvrez un aperçu de notre savoir-faire à travers nos projets récents.
            L'art de la rénovation à son plus haut niveau.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Link href={`/realisations/${project.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-md text-cyan-300 text-xs font-bold uppercase tracking-wider">
                      {project.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      {project.location}
                    </div>

                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Voir le projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/realisations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/30 transition-all duration-300 group"
            >
              <span>Découvrir tous nos projets</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CounterItem({ stat, isVisible, index }: { stat: any, isVisible: boolean, index: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isVisible, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      className="p-8 rounded-3xl bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 backdrop-blur-sm relative overflow-hidden group hover:bg-white dark:hover:bg-slate-800/80 transition-colors duration-300 shadow-xl"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-125`} />

      <stat.icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${stat.color} text-transparent bg-clip-text h-12 w-12 text-cyan-500`} />

      <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
        {count}{stat.suffix}
      </div>
      <div className={`text-lg font-medium bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
        {stat.label}
      </div>
    </motion.div>
  )
}

export default ModernStatsSection
