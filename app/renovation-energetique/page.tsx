"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Euro, Zap, Home, Leaf, Award, Thermometer } from "lucide-react"

export default function RenovationEnergetiquePage() {
  const benefitsRef = useRef<HTMLElement>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  const servicesRef = useRef<HTMLElement>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  const aidesRef = useRef<HTMLElement>(null);
  const [aidesVisible, setAidesVisible] = useState(false);

  const processRef = useRef<HTMLElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  const observeSection = (ref: React.RefObject<HTMLElement>, setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  }

  observeSection(benefitsRef, setBenefitsVisible);
  observeSection(servicesRef, setServicesVisible);
  observeSection(aidesRef, setAidesVisible);
  observeSection(processRef, setProcessVisible);

  const benefits = [
    { icon: Euro, title: "Économies d'énergie", text: "Réduisez vos factures de chauffage et d'électricité jusqu'à 60%" },
    { icon: Home, title: "Confort amélioré", text: "Température homogène, moins d'humidité, meilleure qualité de l'air" },
    { icon: Leaf, title: "Impact environnemental", text: "Réduisez votre empreinte carbone et participez à la transition énergétique" }
  ];

  const services = [
    { icon: Thermometer, title: "Isolation Thermique", items: ["Isolation des combles et toitures", "Isolation des murs par l'intérieur ou l'extérieur", "Isolation des sols et planchers", "Traitement des ponts thermiques"], info: "Jusqu'à 30% d'économies sur vos factures de chauffage" },
    { icon: Zap, title: "Systèmes de Chauffage", items: ["Pompes à chaleur", "Chaudières à condensation", "Radiateurs performants", "Planchers chauffants"], info: "Solutions adaptées à votre logement et votre budget" },
    { icon: Home, title: "Menuiseries", items: ["Fenêtres double/triple vitrage", "Portes isolantes", "Volets roulants motorisés", "Baies vitrées performantes"], info: "Amélioration de l'étanchéité et du confort acoustique" },
    { icon: Award, title: "Audit & Conseil", items: ["Diagnostic énergétique", "Étude thermique personnalisée", "Accompagnement aux aides financières", "Suivi post-travaux"], info: "Expertise certifiée RGE pour vos projets" }
  ];

  const aides = [
    { title: "MaPrimeRénov'", info: "Aide de l'État pour tous les propriétaires" },
    { title: "CEE", info: "Certificats d'Économies d'Énergie" },
    { title: "Éco-PTZ", info: "Prêt à taux zéro pour la rénovation" },
    { title: "TVA 5,5%", info: "Taux réduit pour les travaux éligibles" }
  ];

  const process = [
    { step: 1, title: "Audit énergétique", info: "Diagnostic complet de votre logement" },
    { step: 2, title: "Étude personnalisée", info: "Solutions adaptées à vos besoins" },
    { step: 3, title: "Montage des aides", info: "Optimisation de votre financement" },
    { step: 4, title: "Réalisation", info: "Travaux par nos équipes certifiées" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-white dark:bg-slate-900 transition-colors duration-300" />
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="py-20">
          <div className="container px-4 text-center">
            <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-500/20 bg-cyan-50 dark:text-white dark:border-white/20 dark:bg-transparent">Rénovation Énergétique</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Améliorez l'<span className="text-cyan-500 dark:text-cyan-400">efficacité énergétique</span> de votre logement
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8">Réduisez vos factures d'énergie et augmentez le confort de votre habitat</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-600 dark:hover:bg-cyan-700">
                <Link href="/devis-travaux" className="flex items-center">Demander un devis gratuit </Link>
              </Button>
              <Link href="realisations">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Voir nos réalisations</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-6 rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <item.icon className="h-12 w-12 mx-auto mb-4 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-slate-900 dark:text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section ref={servicesRef} className="py-16 bg-white dark:bg-slate-900">
          <div className="container px-4 grid md:grid-cols-2 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:shadow-lg transition-all"
              >
                <item.icon className="h-8 w-8 mb-4 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-slate-900 dark:text-white font-semibold mb-3">{item.title}</h3>
                <ul className="text-slate-600 dark:text-gray-300 text-sm space-y-1 mb-2">
                  {item.items.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
                <p className="text-slate-500 dark:text-gray-400 text-sm">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Aides */}
        <section ref={aidesRef} className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aides.map((aide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={aidesVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-6 rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-center shadow-sm hover:shadow-lg"
              >
                <Euro className="h-8 w-8 mx-auto mb-3 text-cyan-500 dark:text-cyan-400" />
                <h4 className="text-slate-900 dark:text-white font-semibold">{aide.title}</h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm mt-2">{aide.info}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section ref={processRef} className="py-16 bg-white dark:bg-slate-900">
          <div className="container px-4 grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={processVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-center hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-cyan-600 text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm mt-2">{step.info}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Prêt à améliorer votre confort énergétique ?</h2>
          <p className="text-xl mb-8 text-slate-600 dark:text-white/90">Contactez-nous pour un audit gratuit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-secondary dark:text-secondary-foreground">
              <Link href="/devis-travaux" className="flex items-center">Demander un audit gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-white/10">06.10.17.11.05</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
