"use client"

import { FileText, Calculator, TrendingUp } from "lucide-react"

const superpowers = [
  {
    icon: FileText,
    text: "Financial statements generated in 30 seconds.",
  },
  {
    icon: Calculator,
    text: "Automatic tax reports.",
  },
  {
    icon: TrendingUp,
    text: "Forecasts with CFO-level precision.",
  },
]

export function SuperpowersSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            What Fundi Will Do{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">for You</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:gap-6">
          {superpowers.map((power, index) => (
            <div
              key={index}
              className="group flex items-center gap-6 p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-red-500/30 transition-all duration-300 hover:bg-card"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <power.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-xl lg:text-2xl font-medium text-foreground tracking-tight">{power.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          These are not features. These are <span className="text-foreground font-medium">future capabilities</span> we
          are building.
        </p>
      </div>
    </section>
  )
}
