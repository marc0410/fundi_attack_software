"use client"

import { useState, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { TrustCapsule, type Company } from "./trust-capsule"
import { CryptoBloomTransition } from "./crypto-bloom-transition"
import { EncryptedIdentityPage } from "./encrypted-identity-page"

const companies: Company[] = [
  {
    id: 1,
    name: "Kofi Farms Ltd",
    sector: "Agriculture",
    trustScore: 94,
    stability: [65, 70, 68, 75, 80, 85, 82, 88, 90, 92, 94, 96],
    zkpVerified: true,
    fundingGoal: 150000,
    fundingRaised: 112500,
    country: "Ghana",
    tagline: "Encrypted • Sustainable • Growth • Verified • Trusted",
    esg: { environmental: true, social: true, governance: false },
    founded: "2018",
    employees: "50-100",
  },
  {
    id: 2,
    name: "Lagos Logistics Co",
    sector: "Transport",
    trustScore: 89,
    stability: [50, 55, 60, 58, 65, 70, 72, 75, 80, 82, 85, 88],
    zkpVerified: true,
    fundingGoal: 200000,
    fundingRaised: 160000,
    country: "Nigeria",
    tagline: "Connected • Efficient • Secure • Proven • Scalable",
    esg: { environmental: false, social: true, governance: true },
    founded: "2019",
    employees: "100-200",
  },
  {
    id: 3,
    name: "Mombasa Tech Hub",
    sector: "Technology",
    trustScore: 97,
    stability: [70, 75, 78, 82, 85, 88, 90, 92, 94, 95, 96, 97],
    zkpVerified: true,
    fundingGoal: 300000,
    fundingRaised: 285000,
    country: "Kenya",
    tagline: "Innovative • Digital • Encrypted • Future • Ready",
    esg: { environmental: true, social: true, governance: true },
    founded: "2017",
    employees: "200-500",
  },
  {
    id: 4,
    name: "Dakar Solar Energy",
    sector: "Energy",
    trustScore: 91,
    stability: [60, 62, 65, 70, 72, 78, 80, 85, 88, 90, 91, 92],
    zkpVerified: true,
    fundingGoal: 250000,
    fundingRaised: 175000,
    country: "Senegal",
    tagline: "Renewable • Clean • Verified • Impact • Trusted",
    esg: { environmental: true, social: true, governance: false },
    founded: "2020",
    employees: "25-50",
  },
  {
    id: 5,
    name: "Abidjan Textiles",
    sector: "Manufacturing",
    trustScore: 86,
    stability: [55, 58, 60, 65, 68, 72, 75, 78, 80, 82, 84, 86],
    zkpVerified: true,
    fundingGoal: 180000,
    fundingRaised: 90000,
    country: "Ivory Coast",
    tagline: "Crafted • Quality • Ethical • Proven • Growing",
    esg: { environmental: false, social: true, governance: false },
    founded: "2016",
    employees: "100-200",
  },
  {
    id: 6,
    name: "Kampala Fresh Foods",
    sector: "FMCG",
    trustScore: 93,
    stability: [68, 72, 75, 78, 82, 85, 87, 89, 91, 92, 93, 94],
    zkpVerified: true,
    fundingGoal: 120000,
    fundingRaised: 108000,
    country: "Uganda",
    tagline: "Fresh • Local • Verified • Sustainable • Trusted",
    esg: { environmental: true, social: true, governance: true },
    founded: "2019",
    employees: "50-100",
  },
]

export function TrustArena() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company)
    setIsTransitioning(true)
  }

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false)
    setShowProfile(true)
  }, [])

  const handleCloseProfile = () => {
    setShowProfile(false)
    setSelectedCompany(null)
  }

  return (
    <>
      <section id="trust-arena" className="pt-24 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Trust Arena</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Invest in{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Verified Trust
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A curated gallery of SMEs with cryptographically proven performance. No raw data exposed. Only
              mathematical truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <TrustCapsule key={company.id} company={company} onSelect={handleSelectCompany} />
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Bloom Transition */}
      <CryptoBloomTransition company={selectedCompany} isOpen={isTransitioning} onComplete={handleTransitionComplete} />

      {/* Encrypted Identity Page */}
      {showProfile && selectedCompany && (
        <EncryptedIdentityPage company={selectedCompany} onClose={handleCloseProfile} />
      )}
    </>
  )
}
