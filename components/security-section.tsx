"use client"

import { Shield, Lock, Eye, Server } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Homomorphic Encryption",
    description: "Data is encrypted before leaving your device and remains encrypted during all processing.",
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "We prove computations are correct without ever seeing your actual data.",
  },
  {
    icon: Server,
    title: "No Data Storage",
    description: "Your raw financial data is never stored on our servers. Only encrypted results are retained.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 via-red-600/5 to-red-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Horizontal gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-400">Security first</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            AI that analyzes{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              without seeing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Your financial data is your most sensitive asset. Fundi uses cutting-edge cryptographic techniques to
            deliver powerful insights while keeping your information completely private.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-6 border border-red-500/20">
                <feature.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Visual representation */}
        <div className="mt-20 relative">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center">
                <span className="text-2xl">📄</span>
              </div>
              <span className="text-sm text-muted-foreground">Your Data</span>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-border to-red-500/50 hidden sm:block" />

            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 flex items-center justify-center animate-pulse">
                <Lock className="w-8 h-8 text-red-500" />
              </div>
              <span className="text-sm text-red-400">Encrypted</span>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-red-500/50 to-border hidden sm:block" />

            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm text-muted-foreground">Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
