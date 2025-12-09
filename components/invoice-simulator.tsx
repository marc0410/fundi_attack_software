"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import {
  Upload,
  FileSpreadsheet,
  Lock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  X,
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  FileText,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type SimulationStep = "idle" | "uploading" | "encrypting" | "analyzing" | "complete"

function useAnimatedCounter(end: number, duration = 1500, start = 0, isActive = false) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isActive) {
      setCount(start)
      return
    }

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(start + (end - start) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start, isActive])

  return count
}

export function InvoiceSimulator() {
  const [step, setStep] = useState<SimulationStep>("idle")
  const [isDragOver, setIsDragOver] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const revenue = useAnimatedCounter(4250, 1200, 0, step === "complete")
  const expenses = useAnimatedCounter(1875, 1400, 0, step === "complete")
  const profit = useAnimatedCounter(2375, 1600, 0, step === "complete")
  const taxImpact = useAnimatedCounter(637, 1000, 0, step === "complete")

  const runSimulation = useCallback(() => {
    setShowTooltip(false)
    setStep("uploading")
    setTimeout(() => setStep("encrypting"), 1500)
    setTimeout(() => setStep("analyzing"), 3000)
    setTimeout(() => setStep("complete"), 5000)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      runSimulation()
    },
    [runSimulation],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false)
  }, [])

  const reset = useCallback(() => {
    setStep("idle")
    setShowTooltip(true)
  }, [])

  return (
    <div className="mt-20 relative">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 mb-5 shadow-lg shadow-red-500/5">
          <Zap className="w-4 h-4 text-red-500" />
          <span className="text-sm text-red-400 font-semibold tracking-wide">Interactive Demo</span>
        </div>
        <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
          See how <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Fundi</span>{" "}
          analyzes your data
        </h4>
        <p className="text-muted-foreground max-w-md mx-auto">
          Drop a sample invoice to preview the magic. This is a simulation – no data is actually processed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          className={`
            relative p-10 rounded-3xl border-2 border-dashed transition-all duration-500 backdrop-blur-sm
            ${
              step === "idle"
                ? isDragOver
                  ? "border-red-500 bg-gradient-to-br from-red-500/10 to-red-600/5 shadow-2xl shadow-red-500/20 scale-[1.02]"
                  : "border-border/50 hover:border-red-500/50 bg-card/30 hover:bg-card/50 hover:shadow-xl"
                : "border-border/30 bg-card/50"
            }
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div
              className={`absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 transition-opacity duration-500 ${step !== "idle" ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          {step === "idle" && showTooltip && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg relative">
                Drag & drop or click below
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
              </div>
            </div>
          )}

          {step === "idle" && (
            <div className="text-center relative z-10">
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${isDragOver ? "scale-110 rotate-3 shadow-lg shadow-green-500/30" : "hover:scale-105"}`}
              >
                <FileSpreadsheet
                  className={`w-12 h-12 ${isDragOver ? "text-green-400 animate-pulse" : "text-green-500/70"}`}
                />
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">Drop an invoice here</p>
              <p className="text-muted-foreground mb-6">Supports Excel, CSV, PDF, or image files</p>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/50 bg-transparent hover:bg-secondary/50 hover:border-red-500/50 transition-all"
                  onClick={runSimulation}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Browse Files
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all"
                  onClick={runSimulation}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Try with Sample Invoice
                </Button>
              </div>
            </div>
          )}

          {step === "uploading" && (
            <div className="text-center relative z-10">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-500/30 flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <FileText className="w-12 h-12 text-blue-400" />
                </div>
                {/* Floating file animation */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 animate-[fileFloat_1.5s_ease-in-out_forwards]">
                  <FileSpreadsheet className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <p className="text-xl font-semibold text-foreground mb-3">Uploading document...</p>
              <p className="text-sm text-muted-foreground mb-4">Securely transferring your file</p>
              <div className="w-64 h-2 bg-secondary rounded-full mx-auto overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "75%", animation: "loadingBar 1.5s ease-out forwards" }}
                />
              </div>
            </div>
          )}

          {step === "encrypting" && (
            <div className="text-center relative z-10">
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* Orbiting particles */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-red-500"
                    style={{
                      animation: `orbit 2s linear infinite`,
                      animationDelay: `${i * 0.66}s`,
                      top: "50%",
                      left: "50%",
                    }}
                  />
                ))}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/40 flex items-center justify-center">
                  <Lock className="w-12 h-12 text-red-500 animate-pulse" />
                </div>
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">Encrypting with zero-knowledge proofs...</p>
              <p className="text-muted-foreground">Your data is mathematically protected – never visible to our AI</p>

              {/* Encryption visualization */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {["0x4f", "0xa2", "0x7c", "0xb9", "0x3e"].map((hex, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-red-400/70 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {hex}
                  </span>
                ))}
              </div>
            </div>
          )}

          {step === "analyzing" && (
            <div className="text-center relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-12 h-12 text-purple-400 animate-pulse" />
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">AI analyzing encrypted data...</p>
              <p className="text-muted-foreground mb-6">Extracting insights without seeing your information</p>

              {/* Mini chart animation preview */}
              <div className="flex items-end justify-center gap-1 h-12">
                {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                  <div
                    key={i}
                    className="w-4 bg-gradient-to-t from-purple-500/50 to-purple-400/50 rounded-t transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      animation: `chartBar 0.5s ease-out forwards`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "complete" && (
            <div className="relative z-10">
              <button
                onClick={reset}
                className="absolute top-0 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-4 animate-[scaleIn_0.5s_ease-out]">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">Analysis Complete!</p>
                <p className="text-muted-foreground">Here's what Fundi discovered from your invoice</p>
              </div>

              {/* Animated Results Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 animate-[slideUp_0.5s_ease-out]">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Revenue</span>
                  </div>
                  <p className="text-2xl font-bold text-green-500">${revenue.toLocaleString()}</p>
                </div>

                <div
                  className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 animate-[slideUp_0.5s_ease-out]"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-muted-foreground">Expenses</span>
                  </div>
                  <p className="text-2xl font-bold text-red-400">${expenses.toLocaleString()}</p>
                </div>

                <div
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 animate-[slideUp_0.5s_ease-out]"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-muted-foreground">Net Profit</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">${profit.toLocaleString()}</p>
                </div>

                <div
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 animate-[slideUp_0.5s_ease-out]"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-muted-foreground">Tax Impact</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-400">+${taxImpact}</p>
                </div>
              </div>

              {/* Animated Mini Chart */}
              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 mb-6 animate-[fadeIn_0.8s_ease-out]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Cash Flow Projection</span>
                  <span className="text-xs text-green-500 font-medium">+12.4% growth</span>
                </div>
                <div className="flex items-end justify-between gap-2 h-20">
                  {[35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-red-500/60 to-red-400/40 rounded-t transition-all duration-500"
                      style={{
                        height: `${height}%`,
                        animation: `growBar 1s ease-out forwards`,
                        animationDelay: `${0.5 + i * 0.05}s`,
                        opacity: 0,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Insights Table */}
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 mb-6 animate-[fadeIn_1s_ease-out]">
                <p className="text-sm font-medium text-foreground mb-3">Key Insights Detected</p>
                <div className="space-y-2">
                  {[
                    { label: "Document Type", value: "Sales Invoice", color: "text-foreground" },
                    { label: "Vendor", value: "TechSupply Ltd.", color: "text-foreground" },
                    { label: "Category", value: "Operating Revenue", color: "text-green-500" },
                    { label: "Payment Terms", value: "Net 30", color: "text-blue-400" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                      style={{
                        animation: `slideRight 0.5s ease-out forwards`,
                        animationDelay: `${0.8 + i * 0.1}s`,
                        opacity: 0,
                      }}
                    >
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all"
                >
                  View Full Financial Report
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2">
          <Lock className="w-3 h-3" />
          This is a simulation. No data is actually processed or stored.
        </p>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes fileFloat {
          0% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, 100%); }
        }
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes chartBar {
          0% { height: 0%; opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes growBar {
          0% { height: 0%; opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
