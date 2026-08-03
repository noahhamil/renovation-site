import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Paintbrush, Wrench, Home, Shield, Droplets, CheckCircle, Star } from "lucide-react"

export default function ExpertisesPage() {
  const expertises = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Rénovation complète",
      description: "Transformation totale de votre habitat avec une approche globale",
      services: ["Gros œuvre", "Second œuvre", "Finitions", "Coordination"],
      color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rénovation énergétique",
      description: "Amélioration de la performance énergétique de votre logement",
      services: ["Isolation", "Chauffage", "Ventilation", "Menuiseries"],
      color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Décoration & Aménagement",
      description: "Création d'espaces personnalisés selon vos goûts",
      services: ["Design d'intérieur", "Peinture", "Revêtements", "Mobilier"],
      color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Plomberie & Sanitaires",
      description: "Installation et rénovation de vos équipements sanitaires",
      services: ["Salle de bain", "Cuisine", "Chauffage", "Évacuation"],
      color: "bg-teal-500/20 text-teal-600 dark:text-teal-400",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Électricité",
      description: "Mise aux normes et installation électrique complète",
      services: ["Tableau électrique", "Éclairage", "Prises", "Domotique"],
      color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Étanchéité & Isolation",
      description: "Protection et confort thermique de votre habitation",
      services: ["Toiture", "Façade", "Combles", "Sous-sol"],
      color: "bg-red-500/20 text-red-600 dark:text-red-400",
    },
  ]

  const certifications = ["RGE Qualibat", "Artisan certifié", "Assurance décennale", "Qualité Pro", "Eco Artisan"]

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.1),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating orbs for visual depth */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <Badge variant="outline" className="mb-4 text-slate-900 dark:text-white border-slate-300 dark:border-white/20">
                  <Star className="h-4 w-4 mr-2" />
                  Nos expertises
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
                  Des <span className="text-cyan-600 dark:text-cyan-400">compétences</span> multiples pour tous vos projets
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 text-pretty">
                  Flash Services 78 maîtrise tous les corps d'état pour vous offrir une solution complète et coordonnée
                  pour vos travaux de rénovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertises Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertises.map((expertise, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-cyan-400/20 hover-lift transition-all duration-500 animate-fade-in-up border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-lg ${expertise.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      {expertise.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 text-slate-900 dark:text-white">{expertise.title}</CardTitle>
                    <CardDescription className="text-base text-slate-600 dark:text-gray-300">{expertise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {expertise.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="text-sm text-slate-600 dark:text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Notre <span className="text-primary">méthode</span> de travail
              </h2>
              <p className="text-lg text-slate-600 dark:text-muted-foreground">
                Une approche structurée pour garantir la réussite de votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
              {[
                { step: "01", title: "Diagnostic", desc: "Analyse complète de votre projet et de vos besoins" },
                { step: "02", title: "Conception", desc: "Élaboration des plans et choix des matériaux" },
                { step: "03", title: "Réalisation", desc: "Exécution des travaux par nos équipes qualifiées" },
                { step: "04", title: "Livraison", desc: "Réception des travaux et garanties" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Nos <span className="text-primary">certifications</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-muted-foreground mb-12">Des garanties de qualité et de professionnalisme</p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 animate-fade-in-up bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-white/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {cert}
                  </Badge>
                ))}
              </div>

              <div className="bg-white dark:bg-primary/5 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Prêt à démarrer votre projet ?</h3>
                <p className="text-slate-600 dark:text-muted-foreground mb-6">Contactez-nous pour un devis gratuit et personnalisé</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                    Demander un devis gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
