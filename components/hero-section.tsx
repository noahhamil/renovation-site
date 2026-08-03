"use client"

import React, { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Star, Phone } from "lucide-react"

import Link from "next/link"
import { ProfessionalHeroTitle } from "./ProfessionalHeroTitle"
import { useIsMobile } from "@/hooks/use-mobile"

import HeroImageSlider from "./HeroImageSlider"

export function ModernHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  // Delay animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Static Background Gradient - instead of Hero3DScene */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-50/10 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 transition-colors duration-300" />

      {/* Robot Spline Background */}


      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/70 dark:from-slate-950/90 dark:via-transparent dark:to-slate-950/70 z-10" />

      {/* SVG Wave Separator at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-auto overflow-hidden z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full h-auto dark:fill-[#0f172a] fill-white"
        >
          <path d="M0,256L48,224C96,192,192,128,288,85.3C384,43,480,21,576,42.7C672,64,768,128,864,176C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 pt-24 pb-10 md:py-12 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left column */}
          <div
            className={`relative space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Animated Blue Glow Behind Content */}
            <div className="absolute -top-20 -left-20 w-[140%] h-[140%] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full animate-pulse pointer-events-none z-[-1]" />
            <div className="absolute top-10 left-10 w-[80%] h-[80%] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[80px] rounded-full animate-blob animation-delay-2000 pointer-events-none z-[-1]" />
            <div className="space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-blue-900/10 border border-slate-200 dark:border-blue-800/30 shadow-sm ">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-blue-100 tracking-wide uppercase text-[11px] ">
                  Expert en Rénovation Île-de-France
                </span>
              </div>

              <ProfessionalHeroTitle />

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-medium">
                Votre partenaire de confiance pour transformer vos espaces. <br className="hidden md:block" />
                Rénovation, extension et aménagement sur mesure avec une expertise reconnue.
              </p>
            </div>

            {/* ✅ Updated Buttons with Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Devis Gratuit → /devis-travaux */}
              <Link href="/devis-travaux">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-600/20"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Devis Gratuit 24h
                </Button>
              </Link>

              {/* Nos Réalisations → /realisations */}
              <Link href="/realisations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 hover:bg-blue-50 text-blue-600 dark:border-blue-500 dark:hover:bg-slate-800 dark:text-blue-500 px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Nos réalisations
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium">Excellent</span>
              </div>
              <div className="text-slate-300 dark:text-slate-600">|</div>
              <div className="text-slate-700 dark:text-white">
                <span className="font-bold">3700+</span> projets réalisés
              </div>
            </div>
          </div>

          {/* Right column - Floating Image Card */}
          <HeroImageSlider isVisible={isVisible} />
        </div>
      </div>
    </section >
  )
}