"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import {
  ChevronDown,
  Menu,
  Phone,
  Sparkles,
  Star,
  Zap,
  Leaf,
  Award,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsHeaderHidden(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: "Nos réalisations",
      icon: Sparkles,
      href: "/realisations",
    },
    {
      name: "Nos expertises",
      icon: Award,
      children: [
        { name: "Toutes nos expertises 🧠", href: "/expertises" },
        { name: "Rénovation Appartement 🏢", href: "/renovation-appartement" },
        { name: "Rénovation Maison 🏡", href: "/renovation-maison" },
        { name: "Salle de bain 🛁", href: "/renovation-salle-de-bain" },
        { name: "Cuisine 🍽️", href: "/renovation-cuisine" },
      ],
    },
    {
      name: "Rénovation énergétique",
      icon: Zap,
      children: [
        { name: "Rénovation énergétique ⚡", href: "/renovation-energetique" },
        { name: "Guide isolation 📘", href: "/guide-isolation" },
        { name: "Systèmes de chauffage 🔥", href: "/guide-chauffage" },
        { name: "Devis travaux 🧾", href: "/devis-travaux" },
      ],
    },
    {
      name: "En savoir plus",
      icon: Leaf,
      children: [
        { name: "À propos 👥", href: "/a-propos" },
        { name: "Nos avis ⭐", href: "/nos-avis" },
        { name: "Manifesto 📋", href: "/manifesto" },
        { name: "Blog de la Squad 📝", href: "/blog" },
        { name: "Qui sommes-nous ? 💬", href: "/qui-sommes-nous" },
      ],
    },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 dark:border-white/10 transition-all duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'} bg-white/80 dark:bg-slate-950/80 backdrop-blur-md`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/images/logo-header.jpg"
                alt="Logo"
                className="h-31 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-slate-900 dark:text-white font-bold text-lg">Flash Services78</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.name}
                  open={openMenus[item.name]}
                  onOpenChange={(open) =>
                    setOpenMenus(prev => ({
                      ...prev,
                      [item.name]: open
                    }))
                  }
                >
                  <DropdownMenuTrigger asChild>
                    <motion.div
                      className="relative group flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                      onMouseEnter={() => setOpenMenus(prev => ({ ...prev, [item.name]: true }))}
                      onMouseLeave={() => setOpenMenus(prev => ({ ...prev, [item.name]: false }))}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${openMenus[item.name] ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white'}`} />

                      {/* Animated Underline */}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-72 mt-2 border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/80 backdrop-blur-3xl rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                    onMouseEnter={() => setOpenMenus(prev => ({ ...prev, [item.name]: true }))}
                    onMouseLeave={() => setOpenMenus(prev => ({ ...prev, [item.name]: false }))}
                  >
                    <div className="p-1.5 space-y-1">
                      {item.children.map((child, index) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            href={child.href}
                            className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                          >
                            <span className="text-sm font-medium relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                              {child.name}
                            </span>

                            <div className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                              <item.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex"
            initial={{ scale: 0.8, opacity: 0, x: 40 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 hover:from-blue-800 hover:to-violet-700 text-white font-semibold text-base px-6 py-3 rounded-2xl shadow-lg shadow-blue-500/30 flex items-center space-x-2 transition-all duration-300">
                <Phone className="h-5 w-5" />
                <span>Estimation gratuite</span>
                <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
              </Button>
            </Link>

          </motion.div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} modal={false}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-gradient-to-br dark:from-blue-500/20 border border-slate-200 dark:border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu className="h-6 w-6 text-slate-900 dark:text-white" />
                </motion.button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[80%] bg-white/95 dark:bg-slate-900/90 border-l border-slate-200 dark:border-blue-500/20 backdrop-blur-2xl transition-colors duration-300"
              >
                <SheetHeader>
                  <SheetTitle className="flex justify-center py-4">
                    <img
                      src="/images/logo-header.jpg"
                      alt="Logo"
                      className="h-65 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                  {navigationItems.map((item) =>
                    item.children ? (
                      <details key={item.name} className="group">
                        <summary className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-indigo-500/10 cursor-pointer hover:bg-slate-200/50 transition-colors">
                          <span className="text-slate-900 dark:text-white font-semibold flex items-center space-x-2">
                            <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>{item.name}</span>
                          </span>
                          <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-2 rounded-lg text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-100 dark:hover:bg-blue-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      // ✅ Direct mobile link for Nos réalisations
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-3 rounded-xl bg-slate-100 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-indigo-500/10 text-slate-900 dark:text-white font-semibold flex items-center space-x-2 hover:bg-slate-200/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  )}

                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 text-white font-semibold py-3 rounded-2xl mt-6 flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Estimation gratuite</span>
                      <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
                    </Button>
                  </Link>


                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
