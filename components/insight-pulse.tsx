"use client"

import { useState } from "react"
import { Activity, Shield, TrendingUp, AlertTriangle, CheckCircle, Eye } from "lucide-react"

const smeSignals = [
  {
    type: "warning",
    message: "Stability projection decreasing. Improve cash discipline to maintain expected trajectory.",
    time: "2m ago",
  },
  {
    type: "alert",
    message: "Efficiency forecast dipping. Adjust spending to secure projected return.",
    time: "15m ago",
  },
  {
    type: "success",
    message: "Growth potential rising. Small operations tweak could unlock higher yield.",
    time: "1h ago",
  },
  {
    type: "info",
    message: "Monthly stability checkpoint passed. All projections on track.",
    time: "3h ago",
  },
]

const investorSignals = [
  {
    type: "success",
    message: "A startup in your watchlist crossed a verified stability milestone.",
    time: "5m ago",
  },
  {
    type: "info",
    message: "Solvency strength rising for a tracked company.",
    time: "30m ago",
  },
  {
    type: "alert",
    message: "Risk index updated: one portfolio startup requires attention.",
    time: "2h ago",
  },
  {
    type: "success",
    message: "New high-trust SME matches your investment criteria.",
    time: "4h ago",
  },
]

export function InsightPulse() {
  const [activeTab, setActiveTab] = useState<"sme" | "investor">("sme")

  const signals = activeTab === "sme" ? smeSignals : investorSignals

  const getSignalIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <TrendingUp className="w-4 h-4" />
      case "alert":
        return <AlertTriangle className="w-4 h-4" />
      case "success":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  const getSignalStyle = (type: string) => {
    switch (type) {
      case "warning":
        return "border-amber-500/30 bg-amber-500/5"
      case "alert":
        return "border-red-500/30 bg-red-500/5"
      case "success":
        return "border-emerald-500/30 bg-emerald-500/5"
      default:
        return "border-muted bg-muted/5"
    }
  }

  const getIconStyle = (type: string) => {
    switch (type) {
      case "warning":
        return "text-amber-400"
      case "alert":
        return "text-red-400"
      case "success":
        return "text-emerald-400"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated pulse background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-500/5 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-red-500/10 to-transparent animate-pulse [animation-delay:0.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-red-500/15 to-transparent animate-pulse [animation-delay:1s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 mb-6">
            <div className="relative">
              <Activity className="w-4 h-4 text-red-400" />
              <div className="absolute inset-0 animate-ping">
                <Activity className="w-4 h-4 text-red-400 opacity-50" />
              </div>
            </div>
            <span className="text-sm text-red-400 font-medium">Real-time Intelligence</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Fundi{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Insight Pulse
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encrypted micro-advisory signals that guide without exposing. Pure intelligence, zero raw data.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Encrypted Signal Engine</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fundi Insight Pulse is a real-time signal engine that sends instant, secure micro-notifications based on
                projected performance patterns. It never exposes raw numbers or financial statements—only encrypted,
                actionable signals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/50 bg-card/20 backdrop-blur-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm font-medium text-foreground">Zero Data Exposure</p>
                <p className="text-xs text-muted-foreground mt-1">Guidance without raw access</p>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-card/20 backdrop-blur-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm font-medium text-foreground">Real-time Signals</p>
                <p className="text-xs text-muted-foreground mt-1">Instant encrypted alerts</p>
              </div>
            </div>
          </div>

          {/* Right: Signal notifications */}
          <div className="relative">
            {/* Frosted glass container */}
            <div className="p-6 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl">
              {/* Tab toggle */}
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex p-1 rounded-full border border-border/50 bg-background/50">
                  <button
                    onClick={() => setActiveTab("sme")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === "sme"
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    SMEs / Startups
                  </button>
                  <button
                    onClick={() => setActiveTab("investor")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === "investor"
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Investors
                  </button>
                </div>
              </div>

              {/* Signal bubbles */}
              <div className="space-y-3">
                {signals.map((signal, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border ${getSignalStyle(signal.type)} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-right-4`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${getIconStyle(signal.type)}`}>{getSignalIcon(signal.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground leading-relaxed">{signal.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{signal.time}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Encrypted badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span>All signals encrypted end-to-end</span>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-red-500/10 to-transparent blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/5 to-transparent blur-xl animate-pulse [animation-delay:0.5s]" />
          </div>
        </div>
      </div>
    </section>
  )
}
