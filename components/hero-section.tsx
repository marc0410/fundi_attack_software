"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { BookDemoModal } from "@/components/book-demo-modal"

export function HeroSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
              <span className="text-sm text-muted-foreground">Privacy-first financial intelligence</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Your AI works for you,{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                  never looks at you
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
              AI-powered financial intelligence for African and emerging-market SMEs. Get professional reports,
              encrypted insights, and business clarity — all without exposing your data.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-6 text-base font-medium group"
              >
                Book a demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 text-base font-medium border-border hover:bg-secondary bg-transparent"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-16 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">Trusted by forward-thinking businesses across Africa</p>
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
                {["Lagos", "Nairobi", "Accra", "Johannesburg", "Cairo"].map((city) => (
                  <span key={city} className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  )
}
