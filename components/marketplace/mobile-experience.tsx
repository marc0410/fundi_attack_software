"use client"

import { Badge } from "@/components/ui/badge"
import { Smartphone, ChevronRight, ChevronUp, ChevronDown, Clock, Shield, Zap, Heart } from "lucide-react"

const gestures = [
  {
    icon: ChevronRight,
    action: "Swipe Right",
    result: "Add to Watchlist",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ChevronUp,
    action: "Swipe Up",
    result: "View Encrypted Proofs",
    color: "from-green-500 to-green-600",
  },
  {
    icon: ChevronDown,
    action: "Swipe Down",
    result: "Instant Funding",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Clock,
    action: "Long Press",
    result: "12-Month Stability Capsule",
    color: "from-purple-500 to-purple-600",
  },
]

export function MobileExperience() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4 bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Mobile First</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Swipe to{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Fund</span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              A tactile mobile interface designed for the modern investor. Intuitive gestures make funding faster than
              ever.
            </p>

            <div className="space-y-4">
              {gestures.map((gesture, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:bg-white/[0.04] transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gesture.color} flex items-center justify-center`}
                  >
                    <gesture.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{gesture.action}</div>
                    <div className="text-sm text-white/50">{gesture.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[580px] bg-zinc-900 rounded-[40px] p-3 border border-white/10 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[32px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />

                  {/* App Content */}
                  <div className="pt-8 px-4 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">F</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Fundi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-white/60" />
                        <Shield className="w-4 h-4 text-white/60" />
                      </div>
                    </div>

                    {/* Company Card */}
                    <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
                          <span className="text-red-400 font-bold text-sm">K</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Kofi Farms Ltd</div>
                          <div className="text-white/40 text-xs">Agriculture | Ghana</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white/40 text-xs">Trust Score</div>
                          <div className="text-white font-bold text-lg">94</div>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full">
                          <Zap className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-xs">ZKP Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Gesture Hint */}
                    <div className="text-center py-8">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mx-auto mb-2 animate-pulse">
                        <ChevronDown className="w-6 h-6 text-white/40" />
                      </div>
                      <p className="text-white/40 text-xs">Swipe down to fund</p>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-around bg-white/[0.03] rounded-2xl p-3 border border-white/10">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white/60" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-transparent rounded-[50px] blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
