"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader")

        if (hasSeenPreloader) {
            setIsLoading(false)
            return
        }

        // Simulate progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 150)

        const timer = setTimeout(() => {
            setIsLoading(false)
            sessionStorage.setItem("hasSeenPreloader", "true")
        }, 4000)

        return () => {
            clearTimeout(timer)
            clearInterval(progressInterval)
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f172a 50%, #0a1628 100%)" }}
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Animated Aurora Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
                                filter: "blur(80px)",
                            }}
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -100, 50, 0],
                                scale: [1, 1.2, 0.9, 1],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                                filter: "blur(60px)",
                            }}
                            animate={{
                                x: [0, -80, 40, 0],
                                y: [0, 80, -40, 0],
                                scale: [1, 0.8, 1.3, 1],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)",
                                filter: "blur(50px)",
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>

                    {/* Subtle Grid */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "80px 80px",
                        }}
                    />

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Container with 3D Effect */}
                        <motion.div
                            className="relative mb-10"
                            initial={{ scale: 0, rotateY: -180 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                            {/* Outer Glow Ring */}
                            <motion.div
                                className="absolute -inset-8 rounded-full"
                                style={{
                                    background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                                    filter: "blur(30px)",
                                    opacity: 0.5,
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Ring 1 */}
                            <motion.div
                                className="absolute -inset-4 rounded-full border-2 border-cyan-500/50"
                                style={{ borderStyle: "dashed" }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Ring 2 */}
                            <motion.div
                                className="absolute -inset-2 rounded-full border border-blue-400/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Main Logo Circle */}
                            <motion.div
                                className="relative w-28 h-28 rounded-full flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.2) 100%)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    boxShadow: "0 0 60px rgba(6,182,212,0.3), inset 0 0 30px rgba(6,182,212,0.1)",
                                }}
                                animate={{
                                    boxShadow: [
                                        "0 0 60px rgba(6,182,212,0.3), inset 0 0 30px rgba(6,182,212,0.1)",
                                        "0 0 80px rgba(6,182,212,0.5), inset 0 0 40px rgba(6,182,212,0.2)",
                                        "0 0 60px rgba(6,182,212,0.3), inset 0 0 30px rgba(6,182,212,0.1)",
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {/* Lightning Icon */}
                                <motion.svg
                                    viewBox="0 0 24 24"
                                    className="w-14 h-14"
                                    fill="none"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                                >
                                    <motion.path
                                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                        stroke="url(#lightning-gradient)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="url(#lightning-fill)"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.8, duration: 1 }}
                                    />
                                    <defs>
                                        <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#22d3ee" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                        <linearGradient id="lightning-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                                        </linearGradient>
                                    </defs>
                                </motion.svg>
                            </motion.div>

                            {/* Pulse Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-cyan-400"
                                initial={{ scale: 1, opacity: 0.8 }}
                                animate={{ scale: 2.5, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            />
                        </motion.div>

                        {/* Brand Text with Shimmer */}
                        <div className="text-center space-y-3">
                            <motion.div
                                className="overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <motion.h1
                                    className="text-5xl md:text-6xl font-black tracking-wider"
                                    style={{
                                        background: "linear-gradient(90deg, #fff 0%, #06b6d4 25%, #fff 50%, #3b82f6 75%, #fff 100%)",
                                        backgroundSize: "200% 100%",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                    initial={{ y: 60 }}
                                    animate={{
                                        y: 0,
                                        backgroundPosition: ["0% 0%", "200% 0%"]
                                    }}
                                    transition={{
                                        y: { delay: 1, duration: 0.8, ease: "circOut" },
                                        backgroundPosition: { delay: 1.5, duration: 2, repeat: Infinity, ease: "linear" }
                                    }}
                                >
                                    FLASH SERVICES
                                </motion.h1>
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.6 }}
                            >
                                <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                <span className="text-cyan-400/80 text-sm font-light tracking-[0.4em] uppercase">
                                    Rénovation Premium
                                </span>
                                <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                            </motion.div>
                        </div>

                        {/* Premium Progress Bar */}
                        <motion.div
                            className="mt-14 w-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                        >
                            <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                                <span>Chargement</span>
                                <span>{Math.min(100, Math.round(progress))}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                <motion.div
                                    className="h-full rounded-full relative"
                                    style={{
                                        background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                                        width: `${Math.min(100, progress)}%`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                                            animation: "shimmer 1.5s infinite",
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <style jsx>{`
                        @keyframes shimmer {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
