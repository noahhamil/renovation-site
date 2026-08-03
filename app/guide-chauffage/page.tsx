import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Flame, Zap, Leaf, CheckCircle, Settings, Thermometer } from "lucide-react"

export default function GuideChauffagePage() {
  const heatingSystems = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Pompe à chaleur",
      description: "Solution écologique et économique",
      efficiency: "COP jusqu'à 5",
      price: "8 000€ - 15 000€",
      benefits: ["Très économique", "Écologique", "Aides importantes"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Chaudière gaz condensation",
      description: "Performance et fiabilité",
      efficiency: "Rendement > 90%",
      price: "3 000€ - 8 000€",
      benefits: ["Installation rapide", "Fiable", "Entretien simple"],
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Poêle à granulés",
      description: "Chauffage au bois moderne",
      efficiency: "Rendement > 85%",
      price: "3 000€ - 6 000€",
      benefits: ["Combustible renouvelable", "Autonomie", "Ambiance chaleureuse"],
    },
  ]

  const tips = [
    {
      title: "Programmation intelligente",
      description: "Réduisez de 10% vos consommations avec un thermostat programmable",
    },
    {
      title: "Entretien régulier",
      description: "Un entretien annuel garantit performance et longévité",
    },
    {
      title: "Isolation d'abord",
      description: "Isolez avant de changer votre système de chauffage",
    },
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
                <Flame className="h-4 w-4 mr-2" />
                Guide chauffage
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
                Guide complet du <span className="text-cyan-600 dark:text-cyan-400">chauffage</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 text-pretty">
                Choisissez le système de chauffage idéal pour votre logement et réalisez des économies durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heating Systems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Systèmes de <span className="text-cyan-600 dark:text-cyan-400">chauffage</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">Découvrez les solutions les plus performantes du marché</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heatingSystems.map((system, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-md"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-400 rounded-lg flex items-center justify-center mb-4 text-cyan-600 dark:text-white">
                  {system.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold mb-3">{system.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 mb-2">{system.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white">{system.efficiency}</Badge>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">{system.price}</span>
                </div>
                <div className="space-y-2">
                  {system.benefits.map((benefit, benefitIndex) => (
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

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Comparatif des <span className="text-cyan-600 dark:text-cyan-400">coûts</span>
            </h2>

            <div className="overflow-x-auto bg-white dark:bg-transparent rounded-lg shadow-md dark:shadow-none border border-slate-200 dark:border-none">
              <table className="w-full py-20 rounded-lg shadow-md text-slate-900 dark:text-white">
                <thead className="bg-slate-100 dark:bg-slate-800/50">
                  <tr>
                    <th className="p-4 text-left font-semibold">Système</th>
                    <th className="p-4 text-center font-semibold">Coût installation</th>
                    <th className="p-4 text-center font-semibold">Coût annuel</th>
                    <th className="p-4 text-center font-semibold">Aides disponibles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200 dark:border-white/10">
                    <td className="p-4 font-medium">Pompe à chaleur</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">8 000€ - 15 000€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">600€ - 900€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">Jusqu'à 11 000€</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                    <td className="p-4 font-medium">Chaudière gaz</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">3 000€ - 8 000€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">1 200€ - 1 500€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">Jusqu'à 1 200€</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-white/10">
                    <td className="p-4 font-medium">Poêle à granulés</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">3 000€ - 6 000€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">800€ - 1 200€</td>
                    <td className="p-4 text-center text-slate-600 dark:text-gray-300">Jusqu'à 2 500€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Nos <span className="text-cyan-600 dark:text-cyan-400">conseils</span> d'expert
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">Optimisez votre système de chauffage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-center animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-md"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-400 text-cyan-600 dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold mb-3">{tip.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 text-base ">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Besoin d'aide pour choisir ?</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              Nos experts vous conseillent gratuitement pour trouver la solution idéale
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Thermometer className="h-5 w-5 mr-2" />
                Conseil gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
