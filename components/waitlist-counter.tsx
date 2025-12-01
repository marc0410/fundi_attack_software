"use client"

import { useState, useEffect } from "react"
import { Users, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WaitlistCounter() {
  const [count, setCount] = useState(527)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Simulate occasional new signups for FOMO effect
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsAnimating(true)
        setCount((prev) => prev + 1)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/50 border border-border overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">Early Access</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Join the Waitlist</h3>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Be among the first to experience AI-powered financial intelligence. Secure your spot in the future of SME
              finance.
            </p>

            {/* Counter */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p
                    className={`text-3xl lg:text-4xl font-bold text-foreground tabular-nums transition-all duration-300 ${
                      isAnimating ? "scale-110 text-red-500" : ""
                    }`}
                  >
                    {count.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">businesses in line</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-400">+47 today</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 px-5 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50"
              />
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8"
              >
                Reserve My Spot
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">No spam. Only updates on our launch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
