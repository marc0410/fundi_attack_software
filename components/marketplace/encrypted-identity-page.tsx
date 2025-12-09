"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  Lock,
  TrendingUp,
  CheckCircle2,
  Activity,
  BarChart3,
  PieChart,
  X,
  Play,
  Pause,
  Leaf,
  Users,
  Building2,
  Heart,
  Zap,
  Eye,
  AlertCircle,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Company } from "./trust-capsule"

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

interface EncryptedIdentityPageProps {
  company: Company
  onClose: () => void
}

// Proof Orbit Sidebar Node
function ProofNode({
  icon: Icon,
  label,
  angle,
  onSelect,
}: {
  icon: React.ElementType
  label: string
  angle: number
  onSelect: () => void
}) {
  const radius = 140
  const x = Math.cos((angle * Math.PI) / 180) * radius
  const y = Math.sin((angle * Math.PI) / 180) * radius

  return (
    <motion.button
      className="absolute w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all group"
      style={{ left: `calc(50% + ${x}px - 28px)`, top: `calc(50% + ${y}px - 28px)` }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
    >
      <Icon className="w-5 h-5 text-white/70 group-hover:text-red-400 transition-colors" />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
    </motion.button>
  )
}

// Cryptographic Panel Modal
function CryptoProofModal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-lg w-full"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Smart Signal Notification
function SmartSignal({ message, type }: { message: string; type: "info" | "success" | "warning" }) {
  const colors = {
    info: "border-blue-500/50 bg-blue-500/10",
    success: "border-green-500/50 bg-green-500/10",
    warning: "border-amber-500/50 bg-amber-500/10",
  }
  const icons = {
    info: RefreshCw,
    success: CheckCircle2,
    warning: AlertCircle,
  }
  const Icon = icons[type]

  return (
    <motion.div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colors[type]} backdrop-blur-sm`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <Icon className="w-4 h-4 text-white/70" />
      <span className="text-xs text-white/70">{message}</span>
    </motion.div>
  )
}

export function EncryptedIdentityPage({ company, onClose }: EncryptedIdentityPageProps) {
  const [activeProofModal, setActiveProofModal] = useState<string | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | "up" | "down" | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const swipeStartRef = useRef({ x: 0, y: 0 })

  const esg = company.esg || { environmental: true, social: true, governance: false }
  const tagline = company.tagline || "Encrypted • Verified • Trusted • Proven • Secure"

  // Smart signals that appear contextually
  const [signals, setSignals] = useState([
    { id: 1, message: "New stability proof verified", type: "success" as const },
    { id: 2, message: "ESG compliance strengthened", type: "info" as const },
  ])

  // Team members mock data
  const teamMembers = [
    { name: "Kwame Asante", role: "CEO & Founder", esgBadge: true },
    { name: "Amara Diallo", role: "CFO", esgBadge: false },
    { name: "Joseph Okonkwo", role: "CTO", esgBadge: true },
    { name: "Fatou Ndiaye", role: "COO", esgBadge: false },
  ]

  // Gallery images - using proper placeholder URLs
  const galleryImages = [
    {
      src: "/modern-african-office-workspace-technology.jpg",
      label: "Office",
    },
    {
      src: "/african-agricultural-production-warehouse.jpg",
      label: "Production",
    },
    {
      src: "/african-handmade-products-showcase-market.jpg",
      label: "Products",
    },
    {
      src: "/african-community-development-impact-project.jpg",
      label: "Impact",
    },
  ]

  // Handle swipe gestures for Decision Capsule
  const handleSwipeStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
    swipeStartRef.current = { x: clientX, y: clientY }
  }

  const handleSwipeEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
    const clientY = "changedTouches" in e ? e.changedTouches[0].clientY : e.clientY
    const deltaX = clientX - swipeStartRef.current.x
    const deltaY = clientY - swipeStartRef.current.y

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 50) setSwipeDirection("right")
      else if (deltaX < -50) setSwipeDirection("left")
    } else {
      if (deltaY > 50) setSwipeDirection("down")
      else if (deltaY < -50) setSwipeDirection("up")
    }

    setTimeout(() => setSwipeDirection(null), 2000)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[70] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Smart Signals - Fixed position */}
      <div className="fixed top-6 right-24 z-[70] flex flex-col gap-2">
        <AnimatePresence>
          {signals.map((signal) => (
            <SmartSignal key={signal.id} message={signal.message} type={signal.type} />
          ))}
        </AnimatePresence>
      </div>

      {/* A. HERO SECTION - Encrypted Enterprise Header */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Living Stability Waveform Background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M0 ${300 + i * 80} Q ${window?.innerWidth / 4 || 400} ${250 + i * 80} ${window?.innerWidth / 2 || 800} ${320 + i * 80} T ${window?.innerWidth || 1600} ${280 + i * 80}`}
                fill="none"
                stroke={`rgba(239, 68, 68, ${0.3 - i * 0.05})`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  d: [
                    `M0 ${300 + i * 80} Q ${(window?.innerWidth || 1600) / 4} ${250 + i * 80} ${(window?.innerWidth || 1600) / 2} ${320 + i * 80} T ${window?.innerWidth || 1600} ${280 + i * 80}`,
                    `M0 ${320 + i * 80} Q ${(window?.innerWidth || 1600) / 4} ${280 + i * 80} ${(window?.innerWidth || 1600) / 2} ${260 + i * 80} T ${window?.innerWidth || 1600} ${310 + i * 80}`,
                    `M0 ${300 + i * 80} Q ${(window?.innerWidth || 1600) / 4} ${250 + i * 80} ${(window?.innerWidth || 1600) / 2} ${320 + i * 80} T ${window?.innerWidth || 1600} ${280 + i * 80}`,
                  ],
                }}
                transition={{
                  pathLength: { duration: 2, delay: i * 0.2 },
                  d: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            ))}
          </svg>
        </div>

        {/* Animated ESG Compliance Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-green-600" />
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
        </motion.div>

        {/* Country Flag */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-2xl backdrop-blur-sm">
            {countryFlags[company.country] || "🌍"}
          </div>
          <div className="text-white/60 text-sm">{company.country}</div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.3)" }}
          >
            {company.name}
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-white/50 mb-8 font-light tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tagline}
          </motion.p>

          {/* Quick-glance chips */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Verified Stability</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Verified Solvency</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
              <Lock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">ZKP Risk Index: Low</span>
            </div>
          </motion.div>

          {/* Trust Score Display */}
          <motion.div
            className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {company.trustScore}
              </div>
              <div className="text-xs text-white/50 mt-1">Trust Score</div>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">${(company.fundingRaised / 1000).toFixed(0)}k</div>
              <div className="text-xs text-white/50 mt-1">Raised</div>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{company.sector}</div>
              <div className="text-xs text-white/50 mt-1">Industry</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* B. CRYPTOGRAPHIC PANELS */}
      <section className="py-24 px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10">Cryptographic Proofs</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Truth Without{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Exposure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Proof of Performance */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("performance")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
                  <BarChart3 className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Proof-of-Performance</h3>
                  <p className="text-xs text-white/50">AI-driven analysis</p>
                </div>
              </div>
              <div className="h-32 bg-white/[0.02] rounded-xl flex items-end justify-around px-2 pb-2 gap-1">
                {company.stability.map((val, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Proof of Solvency */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("solvency")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center border border-green-500/30">
                  <PieChart className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Proof-of-Solvency</h3>
                  <p className="text-xs text-white/50">Geometric verification</p>
                </div>
              </div>
              <div className="h-32 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#solvencyGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="251"
                      initial={{ strokeDashoffset: 251 }}
                      animate={{ strokeDashoffset: 251 * (1 - 0.85) }}
                      transition={{ duration: 1.5 }}
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="solvencyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">2.4x</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proof of Stability */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("stability")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Proof-of-Stability</h3>
                  <p className="text-xs text-white/50">Rhythm analysis</p>
                </div>
              </div>
              <div className="h-32 flex items-center justify-center">
                <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <motion.path
                    d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
                    fill="none"
                    stroke="url(#stabilityGradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <defs>
                    <linearGradient id="stabilityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Growth Forecast */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("growth")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center border border-amber-500/30">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Growth Forecast</h3>
                  <p className="text-xs text-white/50">Homomorphically encrypted</p>
                </div>
              </div>
              <div className="h-32 flex items-end justify-around px-2 pb-2 gap-1">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t opacity-50"
                    style={{ height: `${30 + i * 5 + Math.random() * 10}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${30 + i * 5 + Math.random() * 10}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ZKP Risk Sphere */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("risk")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center border border-purple-500/30">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">ZKP Risk Index</h3>
                  <p className="text-xs text-white/50">Rotation sphere</p>
                </div>
              </div>
              <div className="h-32 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-purple-500/50 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="text-sm font-bold text-purple-400">LOW</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* ESG Impact Capsule */}
            <motion.div
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveProofModal("esg")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">ESG Impact Capsule</h3>
                  <p className="text-xs text-white/50">Animated rings</p>
                </div>
              </div>
              <div className="h-32 flex items-center justify-center gap-4">
                <motion.div
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${esg.environmental ? "border-green-500 bg-green-500/10" : "border-white/20 bg-white/5"}`}
                  animate={esg.environmental ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Leaf className={`w-6 h-6 ${esg.environmental ? "text-green-400" : "text-white/30"}`} />
                </motion.div>
                <motion.div
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${esg.social ? "border-blue-500 bg-blue-500/10" : "border-white/20 bg-white/5"}`}
                  animate={esg.social ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                >
                  <Users className={`w-6 h-6 ${esg.social ? "text-blue-400" : "text-white/30"}`} />
                </motion.div>
                <motion.div
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${esg.governance ? "border-purple-500 bg-purple-500/10" : "border-white/20 bg-white/5"}`}
                  animate={esg.governance ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                >
                  <Building2 className={`w-6 h-6 ${esg.governance ? "text-purple-400" : "text-white/30"}`} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* C. STORYTELLING VIDEO */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10">The Origin Film</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Discover the Story Behind the Proof</h2>
          </div>

          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <img
              src="/african-business-team-working-in-modern-office.jpg"
              alt="Company story"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {isVideoPlaying ? (
                  <Pause className="w-8 h-8 text-white ml-0" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </motion.div>
            </div>

            {/* Red pulse on interaction */}
            <motion.div
              className="absolute inset-0 border-2 border-red-500/0 rounded-2xl"
              animate={
                isVideoPlaying ? { borderColor: ["rgba(239,68,68,0)", "rgba(239,68,68,0.5)", "rgba(239,68,68,0)"] } : {}
              }
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </section>

      {/* D. STORYTELLING TEXT - The Human Narrative */}
      <section className="py-24 px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/5 text-white/80 border-white/10">The Human Narrative</Badge>

          <div className="space-y-8 text-lg text-white/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-white font-light"
            >
              "{company.name} was born from a simple belief: that every entrepreneur deserves to be trusted for their
              work, not their paperwork."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Founded in {company.country}, this {company.sector.toLowerCase()} enterprise has grown from a small
              operation to a trusted name serving communities across the region. But growth came with challenges—access
              to capital remained elusive, held back by the traditional requirement to expose sensitive financial data.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Through Fvundi's encrypted intelligence, {company.name} can now prove its financial health without
              revealing a single transaction. Trust becomes mathematical. Privacy becomes permanent. And investors can
              participate in Africa's growth story with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 pt-4"
            >
              <Heart className="w-6 h-6 text-red-400" />
              <span className="text-white/50 text-sm">Empowered by fvundi — Privacy is power.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E. TEAM SECTION */}
      <section className="py-24 px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10">Humans Behind the Proof</Badge>
            <h2 className="text-3xl font-bold text-white">The Team</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mx-auto w-24 h-24 mb-4">
                  {/* Red halo */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <div className="relative w-full h-full rounded-full bg-white/10 border-2 border-white/20 overflow-hidden">
                    <img
                      src={`/professional-african-.jpg?height=96&width=96&query=professional african ${index % 2 === 0 ? "man" : "woman"} portrait`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {member.esgBadge && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-black">
                      <Leaf className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">{member.name}</h3>
                <p className="text-sm text-white/50">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F. BUSINESS VISUALS - Encrypted Reality Gallery */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10">Encrypted Reality Gallery</Badge>
            <h2 className="text-3xl font-bold text-white">Behind the Encryption</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.label}
                className="relative aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Glitch-style encrypted reveal animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10"
                  initial={{ opacity: 1, x: "-100%" }}
                  whileInView={{ opacity: 0, x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 text-sm font-medium text-white">{img.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* G. PROOF ORBIT SIDEBAR */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] hidden lg:block">
        <div className="relative w-80 h-80">
          <ProofNode
            icon={BarChart3}
            label="Performance"
            angle={-60}
            onSelect={() => setActiveProofModal("performance")}
          />
          <ProofNode icon={PieChart} label="Solvency" angle={0} onSelect={() => setActiveProofModal("solvency")} />
          <ProofNode icon={Activity} label="Stability" angle={60} onSelect={() => setActiveProofModal("stability")} />
          <ProofNode icon={TrendingUp} label="Growth" angle={120} onSelect={() => setActiveProofModal("growth")} />
          <ProofNode icon={Leaf} label="ESG" angle={180} onSelect={() => setActiveProofModal("esg")} />
          <ProofNode icon={Shield} label="Risk" angle={240} onSelect={() => setActiveProofModal("risk")} />

          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Lock className="w-6 h-6 text-white/40 mx-auto mb-1" />
            <span className="text-xs text-white/40">Tap to Verify</span>
          </div>
        </div>
      </div>

      {/* H. DECISION CAPSULE FOOTER */}
      <section className="py-12 px-8 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
            onMouseDown={handleSwipeStart}
            onMouseUp={handleSwipeEnd}
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Decision Capsule</h3>
              <p className="text-sm text-white/50">Swipe or click to take action</p>
            </div>

            {/* Swipe feedback */}
            <AnimatePresence>
              {swipeDirection && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/80 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      {swipeDirection === "right" && "Added to Watchlist"}
                      {swipeDirection === "left" && "Skipped"}
                      {swipeDirection === "up" && "Viewing Proof Orbit"}
                      {swipeDirection === "down" && "Funding Initiated"}
                    </div>
                    <div className="text-white/50 text-sm">
                      {swipeDirection === "right" && "You'll be notified of updates"}
                      {swipeDirection === "down" && "Processing encrypted transaction..."}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-16 bg-white/5 border-white/20 text-white hover:bg-white/10"
                onClick={() => setSwipeDirection("right")}
              >
                <Eye className="w-5 h-5 mr-2" />
                Watchlist
              </Button>
              <Button
                variant="outline"
                className="h-16 bg-white/5 border-white/20 text-white hover:bg-white/10"
                onClick={() => setActiveProofModal("performance")}
              >
                <Shield className="w-5 h-5 mr-2" />
                Verify
              </Button>
              <Button variant="outline" className="h-16 bg-white/5 border-white/20 text-white hover:bg-white/10">
                <Activity className="w-5 h-5 mr-2" />
                12M Stability
              </Button>
              <Button
                className="h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                onClick={() => setSwipeDirection("down")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Fund Now
              </Button>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/20 hover:border-red-500/50 transition-colors group">
              <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                Want your business featured here?
              </div>
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Add Your Own SME / Startup
              </Button>
              <p className="text-xs text-white/40 max-w-sm">
                Join the encrypted marketplace and get verified trust scores, ESG ratings, and access to investors
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Modals */}
      <CryptoProofModal
        isOpen={activeProofModal === "performance"}
        onClose={() => setActiveProofModal(null)}
        title="Proof-of-Performance"
      >
        <div className="space-y-4">
          <p className="text-white/60 text-sm">
            AI-driven analysis of business performance over 12 months, computed homomorphically without accessing raw
            data.
          </p>
          <div className="h-40 bg-white/[0.02] rounded-xl flex items-end justify-around px-4 pb-4 gap-2">
            {company.stability.map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">Confidence Level</span>
            <span className="text-green-400 font-medium">99.7%</span>
          </div>
        </div>
      </CryptoProofModal>

      <CryptoProofModal
        isOpen={activeProofModal === "solvency"}
        onClose={() => setActiveProofModal(null)}
        title="Proof-of-Solvency"
      >
        <div className="space-y-4 text-center">
          <p className="text-white/60 text-sm">
            Geometric verification proving assets exceed liabilities without revealing exact figures.
          </p>
          <div className="flex justify-center py-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="8"
                  strokeDasharray="251"
                  initial={{ strokeDashoffset: 251 }}
                  animate={{ strokeDashoffset: 251 * 0.15 }}
                  transition={{ duration: 1.5 }}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">2.4x</span>
                <span className="text-xs text-white/50">Asset Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </CryptoProofModal>

      <CryptoProofModal
        isOpen={activeProofModal === "stability"}
        onClose={() => setActiveProofModal(null)}
        title="Proof-of-Stability"
      >
        <div className="space-y-4">
          <p className="text-white/60 text-sm">
            Cash flow variance analysis proving consistent financial rhythm over 12 months.
          </p>
          <div className="py-4">
            <svg className="w-full h-24" viewBox="0 0 200 50" preserveAspectRatio="none">
              <motion.path
                d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">Variance</span>
            <span className="text-blue-400 font-medium">&lt; 8%</span>
          </div>
        </div>
      </CryptoProofModal>

      <CryptoProofModal
        isOpen={activeProofModal === "growth"}
        onClose={() => setActiveProofModal(null)}
        title="Homomorphic Growth Forecast"
      >
        <div className="space-y-4">
          <p className="text-white/60 text-sm">
            12-month projection computed on encrypted data. No raw financials exposed.
          </p>
          <div className="h-32 bg-white/[0.02] rounded-xl flex items-end justify-around px-4 pb-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t opacity-60"
                style={{ height: `${30 + i * 5}%` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">Projected Growth</span>
            <span className="text-amber-400 font-medium">+23% YoY</span>
          </div>
        </div>
      </CryptoProofModal>

      <CryptoProofModal
        isOpen={activeProofModal === "risk"}
        onClose={() => setActiveProofModal(null)}
        title="ZKP Risk Index"
      >
        <div className="space-y-4 text-center">
          <p className="text-white/60 text-sm">
            Zero-knowledge proof of risk classification without revealing underlying metrics.
          </p>
          <div className="flex justify-center py-4">
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center">
                <span className="text-lg font-bold text-purple-400">LOW</span>
              </div>
            </motion.div>
          </div>
          <div className="text-sm text-green-400">Risk level verified cryptographically</div>
        </div>
      </CryptoProofModal>

      <CryptoProofModal
        isOpen={activeProofModal === "esg"}
        onClose={() => setActiveProofModal(null)}
        title="ESG Impact Capsule"
      >
        <div className="space-y-6">
          <p className="text-white/60 text-sm">
            Environmental, Social, and Governance compliance verified through encrypted audits.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${esg.environmental ? "bg-green-500/20" : "bg-white/10"}`}
              >
                <Leaf className={`w-5 h-5 ${esg.environmental ? "text-green-400" : "text-white/30"}`} />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Environmental</div>
                <div className="text-xs text-white/50">
                  {esg.environmental ? "Verified compliant" : "Pending verification"}
                </div>
              </div>
              {esg.environmental && <CheckCircle2 className="w-5 h-5 text-green-400" />}
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${esg.social ? "bg-blue-500/20" : "bg-white/10"}`}
              >
                <Users className={`w-5 h-5 ${esg.social ? "text-blue-400" : "text-white/30"}`} />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Social</div>
                <div className="text-xs text-white/50">
                  {esg.social ? "Verified compliant" : "Pending verification"}
                </div>
              </div>
              {esg.social && <CheckCircle2 className="w-5 h-5 text-blue-400" />}
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${esg.governance ? "bg-purple-500/20" : "bg-white/10"}`}
              >
                <Building2 className={`w-5 h-5 ${esg.governance ? "text-purple-400" : "text-white/30"}`} />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Governance</div>
                <div className="text-xs text-white/50">
                  {esg.governance ? "Verified compliant" : "Pending verification"}
                </div>
              </div>
              {esg.governance && <CheckCircle2 className="w-5 h-5 text-purple-400" />}
            </div>
          </div>
        </div>
      </CryptoProofModal>
    </motion.div>
  )
}
