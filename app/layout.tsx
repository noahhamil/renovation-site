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
import { ThemeProvider } from "@/components/theme-provider"

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

import { Preloader } from "@/components/ui/preloader"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Flash Services" />
        <link rel="apple-touch-icon" href="/images/logo-header.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <Preloader />
          <Header />
          <ConditionalHomeButton />
          <Suspense fallback={null}>{children}</Suspense>

          <ModernFooter />
          <Toaster />
          <Analytics />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(function(registration) {
                      console.log('SW registered: ', registration);
                    }).catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                  });
                }
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
