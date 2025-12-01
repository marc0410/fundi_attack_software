"use client"

import { Zap, Shield, FileText, Eye, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Automated Intelligence",
    description:
      "Upload photos, invoices, or spreadsheets. Our AI transforms raw data into actionable financial insights instantly.",
  },
  {
    icon: Shield,
    title: "Encrypted AI Processing",
    description:
      "Powered by homomorphic encryption and zero-knowledge proofs. Your data is analyzed without ever being seen.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description: "Generate investor-ready balance sheets, cash-flow statements, and business valuations in minutes.",
  },
  {
    icon: Eye,
    title: "AI That Never Looks",
    description:
      "Complete privacy by design. Our AI works on encrypted data — delivering results without accessing your raw information.",
  },
  {
    icon: Users,
    title: "Crowdfunding Marketplace",
    description:
      "A next-generation funding marketplace where SMEs raise capital securely through certified and encrypted data. Trust scores powered by real performance, transparent reports without raw data exposure.",
  },
  {
    icon: Leaf,
    title: "ESG & Impact Module",
    description:
      "Automatically calculate carbon footprint, social impact, and governance quality. Generate full ESG reports aligned with international standards to attract responsible capital.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Financial clarity, total privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Built for SMEs who need powerful financial tools without compromising sensitive business data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-red-500/30 transition-all duration-300"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-all duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mb-6 group-hover:from-red-500/20 group-hover:to-red-600/20 transition-colors">
                  <value.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
