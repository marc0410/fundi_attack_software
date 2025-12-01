"use client"

import { TrendingUp, DollarSign, PieChart, BarChart3, Shield, Zap } from "lucide-react"

export function InterfaceTeaser() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Coming Soon</p>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">A glimpse into the future</h3>
        </div>

        {/* Mockup Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-3xl" />

          {/* Main Dashboard Mockup */}
          <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  app.fundi.ai/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                {/* Sidebar hint */}
                <div className="col-span-3 hidden lg:block">
                  <div className="space-y-3">
                    <div className="h-10 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30" />
                    <div className="h-8 rounded-lg bg-secondary/50" />
                    <div className="h-8 rounded-lg bg-secondary/50" />
                    <div className="h-8 rounded-lg bg-secondary/50" />
                    <div className="h-8 rounded-lg bg-secondary/50" />
                  </div>
                </div>

                {/* Main content area */}
                <div className="col-span-12 lg:col-span-9 space-y-4">
                  {/* Top cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: DollarSign, label: "Revenue", value: "$124.5K", trend: "+12.3%" },
                      { icon: TrendingUp, label: "Growth", value: "23.4%", trend: "+5.2%" },
                      { icon: PieChart, label: "Margin", value: "34.2%", trend: "+2.1%" },
                      { icon: Shield, label: "Risk Score", value: "Low", trend: "Stable" },
                    ].map((card, i) => (
                      <div key={i} className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                        <div className="flex items-center gap-2 mb-2">
                          <card.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{card.label}</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">{card.value}</p>
                        <span className="text-xs text-green-500">{card.trend}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className="lg:col-span-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">Cash Flow Projection</span>
                        <BarChart3 className="w-4 h-4 text-muted-foreground" />
                      </div>
                      {/* Fake chart bars */}
                      <div className="flex items-end gap-2 h-32">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-red-500/40 to-red-500/80"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-4 rounded-xl bg-secondary/30 border border-border/50">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">AI Insights</span>
                        <Zap className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                          <p className="text-xs text-muted-foreground">Detected potential cash gap in Q2</p>
                        </div>
                        <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                          <p className="text-xs text-muted-foreground">Revenue growth exceeds forecast by 8%</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
                          <p className="text-xs text-foreground font-medium">Business valuation: $2.4M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Encrypted badge overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border">
              <Shield className="w-3 h-3 text-green-500" />
              <span className="text-xs text-muted-foreground">End-to-end encrypted</span>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Intelligence you can trust. Data that stays yours.
        </p>
      </div>
    </section>
  )
}
