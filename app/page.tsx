import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SuperpowersSection } from "@/components/superpowers-section"
import { InterfaceTeaser } from "@/components/interface-teaser"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { WaitlistCounter } from "@/components/waitlist-counter"
import { TopSMEsPreview } from "@/components/top-smes-preview"
import { PricingSection } from "@/components/pricing-section"
import { InsightPulse } from "@/components/insight-pulse"
import { WhyNowSection } from "@/components/why-now-section"
import { BlogPreview } from "@/components/blog-preview"
import { AfricaMap } from "@/components/africa-map"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { BetaAnnouncement } from "@/components/beta-announcement"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SuperpowersSection />
      <InterfaceTeaser />
      <ValueProposition />
      <HowItWorks />
      <FeaturesSection />
      <WaitlistCounter />
      <TopSMEsPreview />
      <PricingSection />
      <InsightPulse />
      <WhyNowSection />
      <BlogPreview />
      <AfricaMap />
      <SecuritySection />
      <CTASection />
      <BetaAnnouncement />
      <Footer />
    </main>
  )
}
