"use client"

import Link from "next/link"
import { ArrowRight, ShieldCheck, TrendingUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const topSMEs = [
  {
    rank: 1,
    name: "GreenHarvest Agritech",
    sector: "Agriculture",
    trustScore: 94.7,
    zkpVerified: true,
    stabilityData: [65, 70, 68, 75, 80, 85, 88, 92, 90, 94],
    funding: "$1.2M",
  },
  {
    rank: 2,
    name: "SolarPay Solutions",
    sector: "Fintech",
    trustScore: 92.3,
    zkpVerified: true,
    stabilityData: [60, 65, 70, 72, 78, 82, 85, 88, 90, 92],
    funding: "$890K",
  },
  {
    rank: 3,
    name: "MediFlow Health",
    sector: "Healthcare",
    trustScore: 89.8,
    zkpVerified: true,
    stabilityData: [55, 58, 62, 68, 72, 75, 80, 84, 87, 90],
    funding: "$750K",
  },
  {
    rank: 4,
    name: "LogiChain Africa",
    sector: "Logistics",
    trustScore: 87.5,
    zkpVerified: true,
    stabilityData: [50, 55, 60, 65, 70, 75, 78, 82, 85, 88],
    funding: "$620K",
  },
  {
    rank: 5,
    name: "EduSpark Digital",
    sector: "EdTech",
    trustScore: 85.2,
    zkpVerified: true,
    stabilityData: [45, 50, 55, 62, 68, 72, 78, 80, 83, 85],
    funding: "$480K",
  },
]

function StabilityCurve({ data }: { data: number[] }) {
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
        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(220, 38, 38)" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,100 ${points} 100,100`} fill="url(#areaGradient)" />
      <polyline
        points={points}
        fill="none"
        stroke="url(#curveGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TopSMEsPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Frosted glass background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-400">VIP Preview</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Top Trusted{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">SMEs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Discover the highest-rated businesses on our platform. Every score is mathematically verified through
            zero-knowledge proofs.
          </p>
        </div>

        {/* Trust Capsules Grid */}
        <div className="grid gap-4 lg:gap-6">
          {topSMEs.map((sme, index) => (
            <div
              key={sme.name}
              className="group relative p-6 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-red-500/30 transition-all duration-500 hover:bg-card/60"
            >
              {/* Rank badge with gradient */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                <span className="text-sm font-bold text-white">#{sme.rank}</span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Company info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground truncate">{sme.name}</h3>
                    {/* ZKP Badge */}
                    {sme.zkpVerified && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-xs text-emerald-400 font-medium">ZKP</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-secondary/50">{sme.sector}</span>
                    <span>Raised: {sme.funding}</span>
                  </div>
                </div>

                {/* Stability Curve */}
                <div className="w-full lg:w-48 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Stability Curve</span>
                  </div>
                  <StabilityCurve data={sme.stabilityData} />
                </div>

                {/* Trust Score */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Trust Score</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {sme.trustScore}
                    </div>
                  </div>
                  {/* Score indicator ring */}
                  <div className="relative w-14 h-14">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-border"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${(sme.trustScore / 100) * 100.53} 100.53`}
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(239, 68, 68)" />
                          <stop offset="100%" stopColor="rgb(220, 38, 38)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <Link href="/marketplace">
            <Button
              size="lg"
              className="group relative px-8 py-6 text-base font-semibold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
            >
              Explore the Marketplace
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">Discover verified investment opportunities across Africa</p>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </section>
  )
}
