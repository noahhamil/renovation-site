
import { ModernHeroSection } from "@/components/hero-section"
import { ModernPromisesSection } from "@/components/promises-section"
import { HowItWorks } from "@/components/how-it-works"
import { EnergySection } from "@/components/energy-section"
import { FeaturesSection } from "@/components/features-section"
import { ModernStatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import ServiceAreas from "@/components/ServiceAreas"
import MobileAppShowcase from "@/components/MobileAppShowcase"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <ModernHeroSection />
        <ModernPromisesSection />
        <HowItWorks />
        <EnergySection />
        <FeaturesSection />
        <ModernStatsSection />
        <ServiceAreas />
        <CTASection />
        <MobileAppShowcase />
      </main>
    </div>
  )
}

