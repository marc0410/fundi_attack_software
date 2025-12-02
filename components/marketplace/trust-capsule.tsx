"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Shield, CheckCircle2, ArrowRight, Leaf, Users, Building2 } from "lucide-react"

// Country flags mapping
const countryFlags: Record<string, string> = {
  Ghana: "🇬🇭",
  Nigeria: "🇳🇬",
  Kenya: "🇰🇪",
  Senegal: "🇸🇳",
  "Ivory Coast": "🇨🇮",
  Uganda: "🇺🇬",
  Rwanda: "🇷🇼",
  Tanzania: "🇹🇿",
  Ethiopia: "🇪🇹",
  "South Africa": "🇿🇦",
}

// ESG compliance data
interface ESGData {
  environmental: boolean
  social: boolean
  governance: boolean
}

export interface Company {
  id: number
  name: string
  sector: string
  trustScore: number
  stability: number[]
  zkpVerified: boolean
  fundingGoal: number
  fundingRaised: number
  country: string
  tagline?: string
  esg?: ESGData
  founded?: string
  employees?: string
  description?: string
}

interface TrustCapsuleProps {
  company: Company
  onSelect: (company: Company) => void
}

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
        <linearGradient id="sparklineGradientCapsule" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#sparklineGradientCapsule)"
        strokeWidth="3"
        points={points}
        strokeLinecap="round"
      />
    </svg>
  )
}

function ESGBadge({ esg }: { esg: ESGData }) {
  return (
    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/10">
      <div className="flex items-center gap-0.5">
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${esg.environmental ? "bg-green-500/20 border border-green-500/50" : "bg-white/5 border border-white/10"}`}
        >
          <Leaf className={`w-2.5 h-2.5 ${esg.environmental ? "text-green-400" : "text-white/30"}`} />
        </div>
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${esg.social ? "bg-blue-500/20 border border-blue-500/50" : "bg-white/5 border border-white/10"}`}
        >
          <Users className={`w-2.5 h-2.5 ${esg.social ? "text-blue-400" : "text-white/30"}`} />
        </div>
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${esg.governance ? "bg-purple-500/20 border border-purple-500/50" : "bg-white/5 border border-white/10"}`}
        >
          <Building2 className={`w-2.5 h-2.5 ${esg.governance ? "text-purple-400" : "text-white/30"}`} />
        </div>
      </div>
      {/* Encrypted validation ring */}
      <div className="w-3 h-3 rounded-full border border-red-500/50 flex items-center justify-center animate-pulse">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
      </div>
    </div>
  )
}

export function TrustCapsule({ company, onSelect }: TrustCapsuleProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Physics-based tilt motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const esg = company.esg || { environmental: true, social: true, governance: false }

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer perspective-1000"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(company)}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-500/20 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
      />

      <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm">
        {/* Background gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              {/* Country flag chip */}
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                {countryFlags[company.country] || "🌍"}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{company.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/50">{company.sector}</span>
                  <span className="text-xs text-white/30">|</span>
                  <span className="text-xs text-white/50">{company.country}</span>
                </div>
              </div>
            </div>

            {/* ESG Compliance Tag */}
            <ESGBadge esg={esg} />
          </div>

          {/* ZKP Badge */}
          {company.zkpVerified && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-gradient-to-r from-red-500/20 to-red-600/20 px-2 py-1 rounded-full border border-red-500/30">
                <Shield className="w-3 h-3 text-red-400" />
                <span className="text-xs text-red-400 font-medium">ZKP Verified</span>
              </div>
            </div>
          )}

          {/* Trust Score and Stability */}
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

          {/* Funding Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-white/50">Funding Progress</span>
              <span className="text-white/80">
                ${(company.fundingRaised / 1000).toFixed(0)}k / ${(company.fundingGoal / 1000).toFixed(0)}k
              </span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(company.fundingRaised / company.fundingGoal) * 100}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          {/* Footer */}
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
    </motion.div>
  )
}
