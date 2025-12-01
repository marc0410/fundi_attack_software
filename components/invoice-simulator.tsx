"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, FileText, Lock, Sparkles, CheckCircle, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type SimulationStep = "idle" | "uploading" | "encrypting" | "analyzing" | "complete"

export function InvoiceSimulator() {
  const [step, setStep] = useState<SimulationStep>("idle")
  const [isDragOver, setIsDragOver] = useState(false)

  const runSimulation = useCallback(() => {
    setStep("uploading")
    setTimeout(() => setStep("encrypting"), 1200)
    setTimeout(() => setStep("analyzing"), 2400)
    setTimeout(() => setStep("complete"), 4000)
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
  }, [])

  return (
    <div className="mt-16 relative">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
          <Sparkles className="w-4 h-4 text-red-500" />
          <span className="text-sm text-red-400 font-medium">Interactive Demo</span>
        </div>
        <h4 className="text-xl font-semibold text-foreground mb-2">See how Fundi analyzes your data</h4>
        <p className="text-sm text-muted-foreground">Drop a sample invoice to preview the magic</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div
          className={`
            relative p-8 rounded-2xl border-2 border-dashed transition-all duration-300
            ${
              step === "idle"
                ? isDragOver
                  ? "border-red-500 bg-red-500/5"
                  : "border-border hover:border-muted-foreground bg-card/50"
                : "border-border bg-card/50"
            }
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {step === "idle" && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Upload className={`w-7 h-7 ${isDragOver ? "text-red-500" : "text-muted-foreground"}`} />
              </div>
              <p className="text-foreground font-medium mb-2">Drop an invoice here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse (simulation only)</p>
              <Button variant="outline" size="sm" className="border-border bg-transparent" onClick={runSimulation}>
                Try with sample invoice
              </Button>
            </div>
          )}

          {step === "uploading" && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 animate-pulse">
                <FileText className="w-7 h-7 text-foreground" />
              </div>
              <p className="text-foreground font-medium mb-2">Uploading document...</p>
              <div className="w-48 h-1 bg-secondary rounded-full mx-auto overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-[loading_1s_ease-in-out_infinite]"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          )}

          {step === "encrypting" && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-red-500 animate-pulse" />
              </div>
              <p className="text-foreground font-medium mb-2">Encrypting with zero-knowledge proofs...</p>
              <p className="text-sm text-muted-foreground">Your data is never visible to our AI</p>
            </div>
          )}

          {step === "analyzing" && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-red-500 animate-spin" />
              </div>
              <p className="text-foreground font-medium mb-2">AI analyzing encrypted data...</p>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-red-500 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "complete" && (
            <div className="text-center relative">
              <button
                onClick={reset}
                className="absolute top-0 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-500" />
              </div>
              <p className="text-foreground font-medium mb-4">Analysis Complete!</p>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-6">
                <div className="p-3 rounded-lg bg-secondary/50 border border-border text-left">
                  <p className="text-xs text-muted-foreground mb-1">Detected</p>
                  <p className="text-sm font-medium text-foreground">Sales Invoice</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border text-left">
                  <p className="text-xs text-muted-foreground mb-1">Amount</p>
                  <p className="text-sm font-medium text-foreground">$4,250.00</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border text-left">
                  <p className="text-xs text-muted-foreground mb-1">Category</p>
                  <p className="text-sm font-medium text-foreground">Revenue</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border text-left">
                  <p className="text-xs text-muted-foreground mb-1">Tax Impact</p>
                  <p className="text-sm font-medium text-foreground">+$637.50</p>
                </div>
              </div>

              <Button
                size="sm"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
              >
                View Full Report
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          This is a simulation. No data is actually processed.
        </p>
      </div>
    </div>
  )
}
