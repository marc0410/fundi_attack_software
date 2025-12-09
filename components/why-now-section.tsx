"use client"

import { Zap } from "lucide-react"

export function WhyNowSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 via-red-600/10 to-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
          <Zap className="w-4 h-4 text-red-500" />
          <span className="text-sm text-red-400 font-medium">The Time is Now</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
          Why <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Now</span>?
        </h2>

        <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8 text-balance">
          SMEs and startups must automate fast to survive.
        </p>

        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
          fvundi is built to propel them into the future.
        </p>

        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-foreground">72%</p>
            <p className="text-sm text-muted-foreground mt-1">of SMEs lack financial visibility</p>
          </div>
          <div className="w-px h-16 bg-border" />
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-foreground">10x</p>
            <p className="text-sm text-muted-foreground mt-1">faster report generation</p>
          </div>
          <div className="w-px h-16 bg-border hidden sm:block" />
          <div className="text-center hidden sm:block">
            <p className="text-3xl lg:text-4xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground mt-1">data privacy guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
