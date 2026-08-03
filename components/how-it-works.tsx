"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Clock, Users, ShieldCheck, HardHat } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Décrivez-nous votre projet",
        description: "Remplissez notre formulaire en ligne en quelques minutes.",
        icon: MessageSquare,
        position: { top: "15%", left: "2%" },
    },
    {
        id: 2,
        title: "Estimation gratuite 24h",
        description: "Recevez une première estimation détaillée et rapide.",
        icon: Clock,
        position: { top: "45%", left: "22%" },
    },
    {
        id: 3,
        title: "Rencontrez l'artisan expert",
        description: "Visite technique pour affiner votre projet et le devis.",
        icon: Users,
        position: { top: "15%", left: "42%" },
    },
    {
        id: 4,
        title: "Sécurisation du démarrage",
        description: "Acomptes sécurisés et planification validée.",
        icon: ShieldCheck,
        position: { top: "45%", left: "62%" },
    },
    {
        id: 5,
        title: "Accompagnement total",
        description: "Suivi de chantier jusqu'à la réception finale.",
        icon: HardHat,
        position: { top: "15%", left: "82%" },
    },
]

export function HowItWorks() {
    return (
        <section className="py-12 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Background Ambience */}
            {/* Removed background gradient */}

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                        Notre Processus
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                        Comment ça <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">marche ?</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
                        Cinq étapes simples pour des travaux sans stress. Votre expert Flash Services vous guide dès la réception de votre demande.
                    </p>
                </div>

                {/* DESKTOP VIEW (Dashed Wave Layout) */}
                <div className="hidden lg:block relative h-[500px] w-full max-w-7xl ml-20">
                    {/* SVG viewBox matches container: 1000 width (max-w-7xl ≈ 1280px scaled), 500 height */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
                        viewBox="0 0 1000 500"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="dashedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="#4f46e5" />
                            </linearGradient>
                        </defs>

                        <motion.path
                            d="M 120 115 C 220 115, 220 265, 320 265 S 420 115, 520 115 S 620 265, 720 265 S 820 115, 920 115"
                            fill="none"
                            stroke="url(#dashedGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="12 18"
                            initial={{ strokeDashoffset: 0, opacity: 0 }}
                            animate={{
                                strokeDashoffset: -60,
                                opacity: 1
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                                opacity: { duration: 0.5 }
                            }}
                        />
                    </svg>

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="absolute w-72 flex flex-col items-center text-center group"
                            style={{
                                top: step.position.top,
                                left: step.position.left,
                                transform: "translate(-50%, 0)",
                            }}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                        >
                            {/* Premium Number/Icon Blob */}
                            <div className="relative mb-6">
                                {/* Halo Ring */}
                                <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-white/10 scale-125 group-hover:scale-150 transition-transform duration-700 decoration-clone" />

                                {/* Main Circle */}
                                <div className="relative w-20 h-20 rounded-2xl bg-white dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-2xl hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 z-10">
                                    <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />

                                    {/* Notification Badge Number */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-lg">
                                        <span className="text-white font-bold text-sm">{step.id}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE VIEW (Dashed Timeline) */}
                <div className="lg:hidden space-y-12 relative max-w-md mx-auto px-4">
                    {/* Vertical Dashed Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-blue-500/30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="relative flex flex-col items-center text-center z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Number Blob */}
                            <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl shadow-lg z-10 mb-4">
                                <step.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                                    <span className="text-xs text-white font-bold">{step.id}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <motion.a
                        href="/a-propos"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group shadow-lg shadow-blue-600/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>En savoir plus sur notre accompagnement</span>
                        <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
