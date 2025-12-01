"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle2, ArrowRight } from "lucide-react"

const companies = [
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
  },
]

function MiniSparkline({ data }: { data: number[] }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg viewBox="0 0 100 100" className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="url(#sparklineGradient)" strokeWidth="3" points={points} strokeLinecap="round" />
    </svg>
  )
}

export function TrustArena() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
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
            A curated gallery of SMEs with cryptographically proven performance. No raw data exposed. Only mathematical
            truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(company.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Subtle red gradient accent on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{company.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/50">{company.sector}</span>
                      <span className="text-xs text-white/30">|</span>
                      <span className="text-xs text-white/50">{company.country}</span>
                    </div>
                  </div>
                  {company.zkpVerified && (
                    <div className="flex items-center gap-1 bg-gradient-to-r from-red-500/20 to-red-600/20 px-2 py-1 rounded-full border border-red-500/30">
                      <Shield className="w-3 h-3 text-red-400" />
                      <span className="text-xs text-red-400 font-medium">ZKP</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="text-xs text-white/40 mb-1">Trust Score</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">{company.trustScore}</span>
                      <span className="text-sm text-white/40">/100</span>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex-1">
                    <div className="text-xs text-white/40 mb-1">Stability Curve</div>
                    <MiniSparkline data={company.stability} />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-white/50">Funding Progress</span>
                    <span className="text-white/80">
                      ${(company.fundingRaised / 1000).toFixed(0)}k / ${(company.fundingGoal / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                      style={{ width: `${(company.fundingRaised / company.fundingGoal) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-white/60">Proofs Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60 group-hover:text-red-400 transition-colors">
                    <span className="text-xs font-medium">View Profile</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
