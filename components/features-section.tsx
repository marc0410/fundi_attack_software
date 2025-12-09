"use client"

import { BarChart3, TrendingUp, AlertTriangle, Calculator, FileCheck, PieChart } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Balance Sheet Generation",
    description: "Automated creation of professional balance sheets from your uploaded financial data.",
  },
  {
    icon: TrendingUp,
    title: "Cash-Flow Insights",
    description: "Real-time tracking and forecasting of your business cash flow with AI-powered predictions.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Detection",
    description: "Early warning system for financial risks, late payments, and cash shortfalls.",
  },
  {
    icon: Calculator,
    title: "Business Valuation",
    description: "Get accurate business valuations based on multiple methodologies and market comparables.",
  },
  {
    icon: FileCheck,
    title: "Investor-Ready Documents",
    description: "Generate pitch decks, financial summaries, and due diligence packages instantly.",
  },
  {
    icon: PieChart,
    title: "Expense Analytics",
    description: "Detailed breakdown of spending patterns with optimization recommendations.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="text-sm text-muted-foreground">Powerful features</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight text-balance">
              Everything you need to understand your finances
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From daily bookkeeping to investor presentations, fvundi handles the complexity so you can focus on growing
              your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{"<"}5min</div>
                <div className="text-sm text-muted-foreground">Report generation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Data encrypted</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mb-4 group-hover:from-red-500/20 group-hover:to-red-600/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
