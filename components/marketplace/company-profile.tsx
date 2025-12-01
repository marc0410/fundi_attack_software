"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, TrendingUp, CheckCircle2, FileCheck, BarChart3, PieChart, Activity } from "lucide-react"

const proofs = [
  {
    icon: FileCheck,
    title: "Proof-of-Solvency",
    status: "Verified",
    description: "Assets exceed liabilities by 2.4x",
    confidence: 99.7,
  },
  {
    icon: Activity,
    title: "Proof-of-Stability",
    status: "Verified",
    description: "12-month cashflow variance < 8%",
    confidence: 98.2,
  },
  {
    icon: TrendingUp,
    title: "Growth Forecast",
    status: "Encrypted",
    description: "Homomorphically computed projection",
    confidence: 94.5,
  },
  {
    icon: Shield,
    title: "Risk Index",
    status: "ZKP-Based",
    description: "Low risk classification proven",
    confidence: 96.8,
  },
]

export function CompanyProfile() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Encrypted Identity</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Nothing Visible.{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Everything Proven.
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Each SME has a minimalist profile where cryptographic proofs replace raw data. No invoices. No statements.
            Only truth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Company Card */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
                    <span className="text-xl font-bold text-red-400">K</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Kofi Farms Ltd</h3>
                    <p className="text-sm text-white/50">Agriculture | Ghana</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Verified</span>
              </div>
            </div>

            {/* AI Performance Graph Placeholder */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/60">AI-Generated Performance Graph</span>
                <div className="flex items-center gap-1 text-xs text-white/40">
                  <Lock className="w-3 h-3" />
                  <span>Encrypted Computation</span>
                </div>
              </div>
              <div className="h-48 bg-white/[0.02] rounded-xl border border-white/5 flex items-end justify-around px-4 pb-4 gap-2">
                {[65, 72, 68, 85, 78, 92, 88, 95, 90, 97, 94, 98].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] text-white/30">
                      {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <BarChart3 className="w-5 h-5 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">94</div>
                <div className="text-xs text-white/50">Trust Score</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <PieChart className="w-5 h-5 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">2.4x</div>
                <div className="text-xs text-white/50">Asset Coverage</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <Activity className="w-5 h-5 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">+18%</div>
                <div className="text-xs text-white/50">Growth Rate</div>
              </div>
            </div>
          </div>

          {/* Cryptographic Proofs */}
          <div className="space-y-4">
            {proofs.map((proof, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 shrink-0">
                    <proof.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-white">{proof.title}</h4>
                      <Badge variant="outline" className="bg-white/5 text-white/70 border-white/20 text-xs">
                        {proof.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-white/50 mb-3">{proof.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          style={{ width: `${proof.confidence}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/60">{proof.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 h-12">
              View Full Encrypted Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
