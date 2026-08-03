"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, px } from "framer-motion"

export function EnergySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Floating decorative blobs */}
      {/* Removed blobs */}

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="/enr.png"

              alt="Efficacité énergétique"
              className="w-3/4 max-w-md mx-auto h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white drop-shadow-lg">
              Votre partenaire idéal pour allier travaux et rénovation énergétique
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed drop-shadow-sm">
              Gagnez en confort thermique tout en réduisant vos factures !
              Profitez de solutions innovantes et éco-responsables pour vos projets de rénovation.
            </p>
            <Link href="/renovation-energetique">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-2xl hover:scale-105 transition-all duration-500">
                En savoir plus
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
