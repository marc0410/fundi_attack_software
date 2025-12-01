"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Eye, EyeOff, Lock, KeyRound, FileCheck, Binary, Fingerprint } from "lucide-react"

const securityFeatures = [
  {
    icon: EyeOff,
    title: "Zero-Knowledge Proofs",
    description: "Prove financial health without revealing any underlying data",
  },
  {
    icon: Lock,
    title: "Homomorphic Encryption",
    description: "AI analyzes encrypted data directly, never seeing raw values",
  },
  {
    icon: KeyRound,
    title: "End-to-End Privacy",
    description: "Your financial documents never leave your encrypted vault",
  },
  {
    icon: Fingerprint,
    title: "Selective Disclosure",
    description: "Choose exactly what proofs to share with each investor",
  },
]

const proofTypes = [
  { label: "Positive Cash Position", proven: true },
  { label: "Coherent Margins", proven: true },
  { label: "Real Growth Verified", proven: true },
  { label: "Healthy Debt Levels", proven: true },
]

export function SecurityLayer() {
  return (
    <section id="security" className="py-20 bg-black relative overflow-hidden">
      {/* Subtle red gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20">
            Zero-Exposure Standard
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Investors See the Truth,{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Never the Data
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Using zero-knowledge proofs, SMEs prove their financial health without revealing a single raw document.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Security Features */}
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 shrink-0 group-hover:border-red-500/40 transition-colors">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Proof Card */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 relative">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Cryptographic Proof Summary</h4>
                  <p className="text-xs text-white/50">All proofs verified on-chain</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {proofTypes.map((proof, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <Binary className="w-4 h-4 text-white/40" />
                      <span className="text-sm text-white/80">{proof.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">Proven</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-xl border border-red-500/20">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Raw Data Exposure</div>
                    <div className="text-xs text-white/50">Documents viewed by investors</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-400">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
