"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function NotreEquipePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const teamMembers = [
    { name: "Amine", title: "Tous Corps d'Etat", projects: 113, image: "/placeholder-user.jpg", badge: "RGE" },
    { name: "Alnoor", title: "Tous Corps d'Etat", projects: 108, image: "/placeholder-user.jpg", badge: "RGE" },
    { name: "Mehdi", title: "Tous Corps d'Etat", projects: 29, image: "/placeholder-user.jpg", badge: "RGE" },
    { name: "Emmanuelle", title: "Tous Corps d'Etat", projects: 12, image: "/placeholder-user.jpg" },
  ]

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  const handleNext = () => setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))

  const membersToShow = 3
  const displayedMembers = Array.from({ length: membersToShow }, (_, i) => teamMembers[(currentIndex + i) % teamMembers.length])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <main className="py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Notre Équipe</h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">Découvrez les membres de notre équipe dévouée et passionnée.</p>
          </motion.div>

          <div className="relative flex items-center justify-center">
            {/* Prev Button */}
            <button onClick={handlePrev} className="absolute left-0 z-10 p-3 rounded-full bg-white/50 dark:bg-white/20 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/40 transition-colors border border-slate-200 dark:border-transparent shadow-lg text-slate-700 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="flex overflow-hidden w-full justify-center space-x-8 relative py-8">
              {displayedMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-shrink-0 w-64 md:w-72 lg:w-80 text-center relative"
                >
                  {/* Floating glow behind the card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 dark:opacity-100 opacity-50"></div>

                  <div className="relative bg-white dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105 border border-slate-200 dark:border-transparent">
                    <div className="relative mx-auto w-36 h-36 mb-4">
                      <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400 shadow-lg relative z-10" />
                      {member.badge && (
                        <div className="absolute -top-2 right-1/2 transform translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-20">
                          {member.badge}
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-600 dark:text-cyan-300 font-medium mb-1 text-lg">{member.title}</p>
                    <p className="text-slate-600 dark:text-gray-300 text-base">{member.projects} Chantiers</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
            <button onClick={handleNext} className="absolute right-0 z-10 p-3 rounded-full bg-white/50 dark:bg-white/20 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/40 transition-colors border border-slate-200 dark:border-transparent shadow-lg text-slate-700 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
