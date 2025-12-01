import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TopSMEsPreview } from "@/components/top-smes-preview"
import { PricingSection } from "@/components/pricing-section"
import { InsightPulse } from "@/components/insight-pulse"
import { BlogPreview } from "@/components/blog-preview"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <FeaturesSection />
      <TopSMEsPreview />
      <PricingSection />
      <InsightPulse />
      <BlogPreview />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  )
}
