import { MarketplaceHeader } from "@/components/marketplace/marketplace-header"
import { TrustArena } from "@/components/marketplace/trust-arena"
import { CompanyProfile } from "@/components/marketplace/company-profile"
import { FundingFlow } from "@/components/marketplace/funding-flow"
import { SecurityLayer } from "@/components/marketplace/security-layer"
import { TrustRankings } from "@/components/marketplace/trust-rankings"
import { MobileExperience } from "@/components/marketplace/mobile-experience"
import { MarketplaceFooter } from "@/components/marketplace/marketplace-footer"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-background dark">
      <MarketplaceHeader />
      <TrustArena />
      <CompanyProfile />
      <FundingFlow />
      <SecurityLayer />
      <TrustRankings />
      <MobileExperience />
      <MarketplaceFooter />
    </main>
  )
}
