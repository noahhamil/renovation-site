import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { ModernFooter } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ConditionalHomeButton } from "@/components/ConditionalHomeButton"

export const metadata: Metadata = {
  title: "Flash Services 78 - Rénovation Tous Corps d'État | Boulogne-Billancourt",
  description:
    "Flash Services 78 - Expert en rénovation tous corps d'état à Boulogne-Billancourt. Isolation, plomberie, électricité, peinture. Devis gratuit. Contact: 06.10.17.11.05",
  keywords:
    "rénovation, tous corps état, Boulogne-Billancourt, isolation, plomberie, électricité, peinture, Flash Services 78",
  authors: [{ name: "Flash Services 78" }],
  creator: "Flash Services 78",
  publisher: "Flash Services 78",
  robots: "index, follow",
  icons: {
    icon: "/images/flash-services-logo.png",
  },
  openGraph: {
    title: "Flash Services 78 - Rénovation Tous Corps d'État",
    description: "Expert en rénovation tous corps d'état à Boulogne-Billancourt. Devis gratuit.",
    url: "https://www.flashservices78.fr/",
    siteName: "Flash Services 78",
    locale: "fr_FR",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <ConditionalHomeButton />
        <Suspense fallback={null}>{children}</Suspense>
        <ModernFooter />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
