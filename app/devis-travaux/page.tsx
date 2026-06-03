"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, FileText, Phone, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function DevisTravauxPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const servicesList = [
      "Rénovation complète",
      "Rénovation énergétique",
      "Salle de bain",
      "Cuisine",
      "Isolation",
      "Chauffage",
      "Électricité",
      "Plomberie",
      "Peinture",
      "Carrelage",
    ]
    const selectedServices: string[] = []
    for (let i = 0; i < servicesList.length; i++) {
      const checkbox = formData.get(`service-${i}`)
      if (checkbox) {
        selectedServices.push(servicesList[i])
      }
    }

    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      typeBien: formData.get('typeBien') as string,
      surface: formData.get('surface') as string,
      services: selectedServices,
      budget: formData.get('budget') as string,
      delai: formData.get('delai') as string,
      description: formData.get('description') as string,
      terms: formData.get('terms') ? true : false,
    }

    try {
      const response = await fetch('/api/devis', {
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
      console.error('Devis form error:', error)
      toast({
        title: "Erreur réseau",
        description: 'Impossible de contacter le serveur. Veuillez réessayer.',
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  const steps = [
    { title: "Décrivez votre projet", desc: "Remplissez le formulaire détaillé" },
    { title: "Visite technique", desc: "Rendez-vous gratuit sous 48h" },
    { title: "Devis personnalisé", desc: "Proposition détaillée sous 5 jours" },
    { title: "Validation", desc: "Signature et planification des travaux" },
  ]

  const services = [
    "Rénovation complète",
    "Rénovation énergétique",
    "Salle de bain",
    "Cuisine",
    "Isolation",
    "Chauffage",
    "Électricité",
    "Plomberie",
    "Peinture",
    "Carrelage",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up text-white">
              <Badge variant="outline" className="mb-4 text-white">
                <Calculator className="h-7 w-8 mr-2" />
                Devis travaux
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Demandez votre <span className="text-primary">devis gratuit</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty text-white">
                Obtenez une estimation précise et personnalisée pour vos travaux de rénovation en moins de 48 heures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment ça <span className="text-primary">fonctionne</span> ?
            </h2>
            <p className="text-lg text-muted-foreground text-white">Un processus simple et transparent pour votre devis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-white">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto  ">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">Formulaire de demande de devis</CardTitle>
                <CardDescription className="text-lg">
                  Plus vous êtes précis, plus notre devis sera adapté à vos besoins
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 ">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Prénom *</label>
                    <Input name="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom *</label>
                    <Input name="lastName" placeholder="Votre nom" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Téléphone *</Label>
                    <Input name="phone" type="tel" placeholder="06 XX XX XX XX" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Adresse du projet *</label>
                  <Input name="address" placeholder="Adresse complète des travaux" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Type de bien</label>
                    <Select name="typeBien">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appartement">Appartement</SelectItem>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="local">Local commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Surface (m²)</label>
                    <Input name="surface" type="number" placeholder="Surface en m²" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Services souhaités *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`service-${index}`} name={`service-${index}`} />
                        <label htmlFor={`service-${index}`} className="text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Budget prévisionnel</label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">Moins de 5 000€</SelectItem>
                      <SelectItem value="10000">5 000€ - 10 000€</SelectItem>
                      <SelectItem value="20000">10 000€ - 20 000€</SelectItem>
                      <SelectItem value="50000">20 000€ - 50 000€</SelectItem>
                      <SelectItem value="plus">Plus de 50 000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Délai souhaité</label>
                  <Select name="delai">
                    <SelectTrigger>
                      <SelectValue placeholder="Quand souhaitez-vous commencer ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Dès que possible</SelectItem>
                      <SelectItem value="1mois">Dans le mois</SelectItem>
                      <SelectItem value="3mois">Dans les 3 mois</SelectItem>
                      <SelectItem value="6mois">Dans les 6 mois</SelectItem>
                      <SelectItem value="flexible">Pas de contrainte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Description détaillée du projet</label>
                  <Textarea
                    name="description"
                    placeholder="Décrivez votre projet en détail : état actuel, travaux souhaités, contraintes particulières..."
                    rows={5}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <label htmlFor="terms" className="text-sm">
                    J'accepte d'être contacté par Flash Services 78 concernant ma demande *
                  </label>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                  <FileText className="h-5 w-5 mr-2" />
                  {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'aide pour remplir le formulaire ?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-white">
              Contactez-nous directement, nous vous aiderons à définir votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Button size="lg" variant="outline" className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
                <Phone className="h-5 w-5 mr-2"  />
                06.10.17.11.05
              </Button>
              <Button size="lg" variant="outline" className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
                <Mail className="h-5 w-5 mr-2" />
                sfs.78@outlook.fr
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
