"use client"

import { useState, useEffect } from "react"
import { Activity, Shield, TrendingUp, AlertTriangle, CheckCircle, Eye } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const smeSignals = [
  {
    type: "warning",
    message: "Stability projection decreasing. Improve cash discipline to maintain expected trajectory.",
    messageFr:
      "Projection de stabilité en baisse. Améliorez la discipline de trésorerie pour maintenir la trajectoire attendue.",
    time: "2m",
  },
  {
    type: "alert",
    message: "Efficiency forecast dipping. Adjust spending to secure projected return.",
    messageFr: "Prévision d'efficacité en baisse. Ajustez les dépenses pour sécuriser le rendement projeté.",
    time: "15m",
  },
  {
    type: "success",
    message: "Growth potential rising. Small operations tweak could unlock higher yield.",
    messageFr:
      "Potentiel de croissance en hausse. Un petit ajustement opérationnel pourrait débloquer un meilleur rendement.",
    time: "1h",
  },
  {
    type: "info",
    message: "Monthly stability checkpoint passed. All projections on track.",
    messageFr: "Point de contrôle de stabilité mensuel réussi. Toutes les projections sont sur la bonne voie.",
    time: "3h",
  },
]

const investorSignals = [
  {
    type: "success",
    message: "A startup in your watchlist crossed a verified stability milestone.",
    messageFr: "Une startup de votre liste de surveillance a franchi un jalon de stabilité vérifié.",
    time: "5m",
  },
  {
    type: "info",
    message: "Solvency strength rising for a tracked company.",
    messageFr: "La solidité de solvabilité augmente pour une entreprise suivie.",
    time: "30m",
  },
  {
    type: "alert",
    message: "Risk index updated: one portfolio startup requires attention.",
    messageFr: "Indice de risque mis à jour: une startup du portefeuille nécessite attention.",
    time: "2h",
  },
  {
    type: "success",
    message: "New high-trust SME matches your investment criteria.",
    messageFr: "Nouvelle PME à haute confiance correspondant à vos critères d'investissement.",
    time: "4h",
  },
]

export function InsightPulse() {
  const [activeTab, setActiveTab] = useState<"sme" | "investor">("sme")
  const [visibleSignals, setVisibleSignals] = useState<number[]>([])
  const { t, locale } = useI18n()

  const signals = activeTab === "sme" ? smeSignals : investorSignals

  useEffect(() => {
    setVisibleSignals([])
    const timeouts: NodeJS.Timeout[] = []

    signals.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleSignals((prev) => [...prev, index])
      }, index * 400)
      timeouts.push(timeout)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [activeTab, signals])

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
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-500/5 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-red-500/10 to-transparent animate-pulse [animation-delay:0.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-red-500/15 to-transparent animate-pulse [animation-delay:1s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 mb-6">
            <div className="relative">
              <Activity className="w-4 h-4 text-red-400" />
              <div className="absolute inset-0 animate-ping">
                <Activity className="w-4 h-4 text-red-400 opacity-50" />
              </div>
            </div>
            <span className="text-sm text-red-400 font-medium">{t("realTimeIntelligence")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t("insightPulseTitle")}{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              {t("insightPulseHighlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("insightPulseDesc")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t("encryptedSignalEngine")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("encryptedSignalEngineDesc")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/50 bg-card/20 backdrop-blur-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm font-medium text-foreground">{t("zeroDataExposure")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("guidanceWithoutAccess")}</p>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-card/20 backdrop-blur-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm font-medium text-foreground">{t("realTimeSignals")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("instantAlerts")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl">
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
                    {t("smeStartups")}
                  </button>
                  <button
                    onClick={() => setActiveTab("investor")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === "investor"
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t("investors")}
                  </button>
                </div>
              </div>

              <div className="space-y-3 min-h-[280px]">
                {signals.map((signal, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className={`p-4 rounded-2xl border ${getSignalStyle(signal.type)} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
                      visibleSignals.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${getIconStyle(signal.type)}`}>{getSignalIcon(signal.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground leading-relaxed">
                          {locale === "fr" ? signal.messageFr : signal.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{signal.time} ago</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span>{t("allSignalsEncrypted")}</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-red-500/10 to-transparent blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/5 to-transparent blur-xl animate-pulse [animation-delay:0.5s]" />
          </div>
        </div>
      </div>
    </section>
  )
}
