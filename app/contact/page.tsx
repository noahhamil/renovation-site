"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      project: formData.get('project') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Succès!",
          description: result.message,
          variant: "default",
        })
        e.currentTarget.reset()
      } else {
        toast({
          title: "Erreur",
          description: result.error || 'Une erreur est survenue',
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: "Erreur réseau",
        description: 'Impossible de contacter le serveur. Veuillez réessayer.',
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as any } },
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-emerald-400/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <main ref={sectionRef} className="py-20 relative z-10">
        <div className="container px-4">
          {/* Title */}
          <motion.div
            className="text-center space-y-4 mb-16 opacity-0 translate-y-12 transition-all duration-1000"
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contactez-nous</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Vous avez un projet de rénovation ? N'hésitez pas à nous contacter pour un devis gratuit et personnalisé.
            </p>
          </motion.div>

          {/* Grid: Info + Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <motion.div
              className="opacity-0 translate-y-12 transition-all duration-1000"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <Card className="hover:shadow-2xl transition-shadow duration-500 bg-white/5 backdrop-blur-2xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Informations de contact</CardTitle>
                  <CardDescription className="text-gray-300">
                    Nous sommes à votre disposition pour répondre à toutes vos questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-white">
                  {[{ icon: Phone, title: "Téléphone", info: "06.10.17.11.05" },
                    { icon: Mail, title: "Email", info: "sfs.78@outlook.fr" },
                    { icon: MapPin, title: "Adresse", info: "81 Rue de Silly\nBoulogne-Billancourt 92100" },
                    { icon: Clock, title: "Horaires", info: "Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 17h00" }].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="whitespace-pre-line">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              className="opacity-0 translate-y-12 transition-all duration-1000"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <Card className="hover:shadow-2xl transition-shadow duration-500 bg-white/5 backdrop-blur-2xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Demande de devis</CardTitle>
                  <CardDescription className="text-gray-300">
                    Remplissez ce formulaire pour recevoir votre devis gratuit sous 24h.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 text-white">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" name="firstName" required placeholder="Votre prénom" className="bg-white/10 text-white border-white/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" name="lastName" required placeholder="Votre nom" className="bg-white/10 text-white border-white/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="votre@email.com" className="bg-white/10 text-white border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" className="bg-white/10 text-white border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Type de projet</Label>
                      <Input id="project" name="project" required placeholder="Rénovation, extension, etc." className="bg-white/10 text-white border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Description du projet</Label>
                      <Textarea id="message" name="message" rows={4} placeholder="Décrivez votre projet en détail..." className="bg-white/10 text-white border-white/20" />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg">
                      {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
      `}</style>
    </div>
  )
}
