import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Thermometer, CheckCircle, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function GuideIsolationPage() {
  const isolationTypes = [
    {
      title: "Isolation des combles",
      description: "Jusqu'à 30% d'économies d'énergie",
      price: "À partir de 20€/m²",
      benefits: ["Réduction des déperditions", "Confort thermique", "Aides financières disponibles"],
    },
    {
      title: "Isolation des murs",
      description: "Isolation par l'intérieur ou l'extérieur",
      price: "À partir de 50€/m²",
      benefits: ["Suppression des ponts thermiques", "Amélioration acoustique", "Valorisation du bien"],
    },
    {
      title: "Isolation des sols",
      description: "Confort et économies garantis",
      price: "À partir de 30€/m²",
      benefits: ["Élimination de l'humidité", "Confort au sol", "Économies de chauffage"],
    },
  ]

  const steps = [
    { title: "Diagnostic thermique", desc: "Analyse des déperditions énergétiques" },
    { title: "Choix des matériaux", desc: "Sélection adaptée à votre habitat" },
    { title: "Réalisation des travaux", desc: "Installation par nos équipes qualifiées" },
    { title: "Contrôle qualité", desc: "Vérification de la performance" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" />
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-4 text-slate-700 dark:text-white border-slate-300 dark:border-white/20">
                <Thermometer className="h-4 w-4 mr-2" />
                Guide isolation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
                Guide complet de l'<span className="text-cyan-600 dark:text-cyan-400">isolation</span> thermique
              </h1>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 text-pretty">
                Découvrez tout ce qu'il faut savoir sur l'isolation pour améliorer le confort et réduire vos factures
                énergétiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Pourquoi <span className="text-cyan-600 dark:text-cyan-400">isoler</span> ?
              </h2>
              <div className="space-y-4">
                {[
                  "Réduction jusqu'à 30% de vos factures de chauffage",
                  "Amélioration du confort thermique été comme hiver",
                  "Valorisation de votre patrimoine immobilier",
                  "Réduction de votre empreinte carbone",
                  "Amélioration de l'isolation acoustique",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700 dark:text-white">
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Image
                src="/isoler.jpeg"
                alt="Isolation thermique maison"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-slate-200 dark:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Isolation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Types d'<span className="text-cyan-600 dark:text-cyan-400">isolation</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">
              Chaque zone de votre habitat nécessite une approche spécifique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isolationTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-md"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-slate-900 dark:text-white font-semibold mb-3">{type.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 mb-2">{type.description}</p>
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">{type.price}</div>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                      <span className="text-sm text-slate-600 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Notre <span className="text-cyan-600 dark:text-cyan-400">processus</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">Une méthode éprouvée pour des résultats optimaux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-cyan-600 dark:bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Prêt à améliorer votre isolation ?</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              Contactez-nous pour un diagnostic gratuit et un devis personnalisé
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Lightbulb className="h-5 w-5 mr-2" />
                Demander un diagnostic gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
