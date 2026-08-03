"use client"

import React, { useState, useEffect } from "react"

const images = [
    "/family-apartment-renovation-modern-interior-design.jpg",
    "/modern-kitchen-renovation-sleek-design-contemporar.jpg",
    "/modern-bathroom-renovation-with-italian-shower.jpg",
    "/family-house-renovation-complete-modern-extension.jpg",
    "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
]

export default function HeroImageSlider({ isVisible }: { isVisible: boolean }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
        >
            <div className="relative group perspective-1000 flex justify-center items-center py-10">
                {/* Professional Card Container with Custom Polygon Shape */}
                <div
                    className="relative w-full max-w-lg mx-auto transform transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                        filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))"
                    }}
                >
                    {/* Slides container with clip-path */}
                    <div
                        className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-white dark:bg-slate-800"
                        style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
                        }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`Rénovation Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {/* Overlay gradient for better text readability if added later */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - Re-positioned outside the clip-path for accessibility */}
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 
                       rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-110 z-20 border border-slate-100 dark:border-slate-700"
                        aria-label="Previous Slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 
                       rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-110 z-20 border border-slate-100 dark:border-slate-700"
                        aria-label="Next Slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Dots Indicator - Clean pill shape */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "bg-white w-6"
                                    : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
