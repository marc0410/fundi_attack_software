"use client"

import { Camera, Lock, FileBarChart, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Camera,
    title: "Ingest Your Data",
    description:
      "Upload photos of receipts, invoices, mobile money statements, or Excel spreadsheets. We accept any format.",
    items: ["Photos & Scans", "Mobile Money", "Bank Statements", "Spreadsheets"],
  },
  {
    step: "02",
    icon: Lock,
    title: "Encrypted Processing",
    description:
      "Your data is encrypted before analysis. Our AI operates on encrypted data using homomorphic encryption.",
    items: ["Zero-Knowledge Proofs", "End-to-End Encryption", "No Raw Data Access", "Secure Computation"],
  },
  {
    step: "03",
    icon: FileBarChart,
    title: "Instant Reports",
    description: "Receive professional financial reports, insights, and recommendations — delivered securely to you.",
    items: ["Balance Sheets", "Cash Flow Analysis", "Risk Assessment", "Growth Projections"],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <span className="text-sm text-muted-foreground">Simple process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">How Fundi works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From raw data to professional insights in three secure steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step number with glow */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto lg:mx-0 relative">
                    <step.icon className="w-7 h-7 text-foreground" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <span className="text-xs font-mono text-muted-foreground tracking-wider mb-2 block">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {step.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-6 w-12 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
