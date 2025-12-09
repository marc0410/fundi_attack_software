"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Coins,
  TrendingUp,
  PieChart,
  FileText,
  ShoppingCart,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Check,
} from "lucide-react"

const fundingInstruments = [
  {
    icon: Coins,
    title: "Tokenized Loans",
    description: "Fractional debt instruments with automated repayment",
    features: ["Smart contract enforcement", "Flexible terms", "Secondary market"],
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Financing",
    description: "Returns tied directly to verified business performance",
    features: ["Performance-linked", "No equity dilution", "Flexible cap"],
  },
  {
    icon: PieChart,
    title: "Fractional Equity",
    description: "Own a piece of verified, growing businesses",
    features: ["Proportional ownership", "Dividend rights", "Exit options"],
  },
  {
    icon: FileText,
    title: "Smart Bonds",
    description: "Fixed income with cryptographic guarantees",
    features: ["Fixed returns", "Maturity terms", "Collateralized"],
  },
  {
    icon: ShoppingCart,
    title: "Secured Pre-Orders",
    description: "Fund production with guaranteed delivery contracts",
    features: ["Production financing", "Delivery guarantee", "Escrow protection"],
  },
]

const complianceFeatures = [
  { icon: Globe, label: "OHADA Compliant" },
  { icon: Shield, label: "KYC/AML Verified" },
  { icon: FileText, label: "Regulatory Reports" },
  { icon: Check, label: "Audit Trail" },
]

export function FundingFlow() {
  return (
    <section id="funding" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Funding Flow</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Crowdfinancing{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Without Exposure
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Advanced funding instruments with smart compliance. Fund a business in under 30 seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {fundingInstruments.map((instrument, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 mb-4">
                <instrument.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{instrument.title}</h3>
              <p className="text-sm text-white/50 mb-4">{instrument.description}</p>
              <ul className="space-y-2">
                {instrument.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1 h-1 rounded-full bg-red-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30 mb-4">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Compliance Engine</h3>
            <p className="text-sm text-white/50 mb-4">
              Auto-adjusts to local laws including OHADA and global investor standards
            </p>
            <div className="grid grid-cols-2 gap-3">
              {complianceFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                  <feature.icon className="w-4 h-4 text-red-400" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Fund in 30 Seconds</h3>
                <p className="text-white/60">Sign in. Choose instrument. Verify proofs. Done.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-12 px-6 bg-transparent"
              >
                Watch Demo
              </Button>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 h-12 px-6">
                Start Funding
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
