"use client"

import React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin, Star, Award, Users, Zap } from "lucide-react"

export function ModernFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        {/* Floating particles - adjusted for visibility */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 dark:bg-blue-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Wave Separator */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-12 sm:h-16 md:h-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.1)" />
                <stop offset="50%" stopColor="rgba(79, 70, 229, 0.1)" />
                <stop offset="100%" stopColor="rgba(124, 58, 237, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 lg:py-16">

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 dark:text-blue-400 font-medium tracking-wide uppercase text-sm">Flash Services 78</span>
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Prêt à transformer votre espace ?
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Contactez notre équipe d'experts pour un devis gratuit et personnalisé
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, value: "3700+", label: "Projets Réalisés", color: "from-blue-600 to-indigo-600" },
              { icon: Award, value: "5★", label: "Satisfaction", color: "from-yellow-500 to-orange-500" },
              { icon: Zap, value: "24h", label: "Réponse", color: "from-purple-500 to-pink-500" },
              { icon: Star, value: "Expert", label: "Tous Corps d'État", color: "from-indigo-500 to-blue-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-gray-300 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">

            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                Contactez-nous
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: "sfs.78@outlook.fr", href: "mailto:sfs.78@outlook.fr" },
                  { icon: Phone, text: "06.10.17.11.05", href: "tel:0610171105" },
                  { icon: Globe, text: "www.flashservices78.fr", href: "https://www.flashservices78.fr" }
                ].map((item, index) => (
                  <Link key={index} href={item.href} className="group block">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:translate-x-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-indigo-500/40 transition-all duration-300">
                        <item.icon className="h-6 w-6 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-700 dark:text-white font-medium group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Address */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:bg-gradient-to-br dark:from-indigo-500/10 dark:to-blue-500/10 dark:border-white/10 shadow-sm">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-700 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Adresse</p>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      81 Rue de Silly<br />
                      92100 Boulogne-Billancourt<br />
                      France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Suivez-nous</h3>

              {/* Social Links */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/flashservices78", gradient: "from-pink-500 via-red-500 to-yellow-500" },
                  {
                    name: "TikTok", icon: ({ className }: { className: string }) => (
                      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    ), href: "https://www.tiktok.com/@flash.services78", gradient: "from-black to-gray-700"
                  },
                  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/flashservices78", gradient: "from-blue-600 to-blue-800" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-center"
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${social.gradient} shadow-lg flex items-center justify-center mb-2 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 hover:rotate-6`}>
                      <social.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-slate-600 dark:text-gray-300 text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 block">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Liens Rapides</h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { name: "Nos Réalisations", href: "/realisations" },
                    { name: "Devis Gratuit", href: "/devis-travaux" },
                    { name: "Nos Expertises", href: "/expertises" },
                    { name: "À Propos", href: "/a-propos" }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-slate-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                Notre Localisation
              </h3>

              {/* Map Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-blue-500/30 group bg-white dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8!2d2.239!3d48.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67af3b3c3d3d3%3A0x0!2s81%20Rue%20de%20Silly%2C%2092100%20Boulogne-Billancourt!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flash Services 78 Location"
                  className="w-full h-80"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 border border-slate-200 dark:border-blue-400/30 shadow-lg">
                    <p className="text-slate-900 dark:text-white text-sm font-medium">81 Rue de Silly</p>
                    <p className="text-blue-700 dark:text-blue-300 text-xs">Boulogne-Billancourt 92100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 shadow-xl dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-indigo-500/10 dark:border-blue-400/20 dark:shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Besoin d'un devis ?
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                Réponse garantie sous 24h pour tous vos projets de rénovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis-travaux">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                    📞 Devis Gratuit 24h
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 border-blue-500/50 hover:border-blue-600 hover:bg-blue-50 dark:border-blue-400/50 dark:hover:border-blue-400 dark:hover:bg-blue-400/10 text-blue-700 dark:text-white hover:text-blue-800 dark:hover:text-blue-200 font-bold rounded-2xl transition-all duration-300 hover:scale-105">
                    💬 Nous Contacter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-transparent transition-colors duration-300">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-slate-500 dark:text-gray-400">
                  © 2025 Flash Services 78. Tous droits réservés.
                </p>
                <p className="text-slate-400 dark:text-gray-500 text-sm mt-1">
                  Expert en rénovation tous corps d'état • Île-de-France
                </p>
              </div>

              <div className="flex items-center space-x-6 text-slate-500 dark:text-gray-400 text-sm">
                <Link href="/mentions-legales" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
                  Mentions légales
                </Link>
                <span>•</span>
                <Link href="/politique-confidentialite" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave - adjusted opacity for light mode */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-12 sm:h-16 md:h-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C480,0 960,120 1440,60 L1440,120 L0,120 Z"
              fill="url(#bottom-wave-gradient)"
            />
            <defs>
              <linearGradient id="bottom-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(15, 23, 42, 0.9)" />
                <stop offset="50%" stopColor="rgba(30, 58, 138, 0.9)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.9)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  )
}

export { ModernFooter as Footer };       // named alias
export default ModernFooter;             // optional: default export too
