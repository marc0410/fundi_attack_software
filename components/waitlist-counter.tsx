"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Users, TrendingUp, Sparkles, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function WaitlistCounter() {
  const [count, setCount] = useState(527)
  const [isAnimating, setIsAnimating] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const { t } = useI18n()

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsAnimating(true)
        setCount((prev) => prev + 1)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Email is required")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setCount((prev) => prev + 1)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/50 border border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">{t("earlyAccess")}</span>
            </div>

            {isSuccess ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{t("successTitle")}</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("successDesc")}</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-sm text-emerald-400 font-medium">#{count.toLocaleString()} in line</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{t("joinWaitlist")}</h3>

                <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("waitlistDesc")}</p>

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
                      <p className="text-sm text-muted-foreground">{t("businessesInLine")}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-400">+47 {t("today")}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="w-full sm:w-80">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("emailPlaceholder")}
                      className={`w-full px-5 py-3 rounded-xl bg-background border ${
                        error ? "border-red-500" : "border-border"
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50`}
                    />
                    {error && <p className="text-xs text-red-500 mt-1 text-left">{error}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("submitting")}
                      </>
                    ) : (
                      t("reserveSpot")
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">{t("noSpam")}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
