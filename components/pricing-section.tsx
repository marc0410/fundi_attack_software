"use client"

import { useState } from "react"
import { Check, Sparkles, Rocket, Globe, Eye, Target, Crown, X, Zap, Shield, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

// ... existing code for plans ...

const smeePlans = [
  {
    name: "Starter Pulse",
    price: "$0",
    period: "/month",
    description: "The perfect entry point for young startups testing the ecosystem.",
    tagline: "For startups that want to ignite engines without burning fuel.",
    icon: Sparkles,
    features: [
      "Basic access to the platform",
      "1 hosted pitch deck",
      "1 non-certified Style Pass Code",
      "Public directory listing",
      "Limited visibility analytics",
      "5 investor interactions/month",
    ],
    popular: false,
  },
  {
    name: "Growth Orbit",
    price: "$29",
    period: "/month",
    description: "Designed for teams gaining traction and entering their growth phase.",
    tagline: "For startups stepping into orbital growth.",
    icon: Rocket,
    features: [
      "Everything in Starter Pulse",
      "Live-updatable dynamic pitch deck",
      "3 certified Style Pass Codes",
      "Priority search visibility",
      "Advanced analytics (trends, regions)",
      "Smart investor matching",
      "20 interactions/month",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Galaxy Expansion",
    price: "$89",
    period: "/month",
    description: "Full power for scale-ups and future unicorns.",
    tagline: "Built for long-range missions across Africa and Europe.",
    icon: Globe,
    features: [
      "Everything in Growth Orbit",
      "Unlimited certified Style Pass Codes",
      "Premium startup page",
      "Strategic AI access",
      "Unlimited investor relations",
      "Real-time macroeconomic insights",
      '"Verified Scale-Up" badge',
      "Dedicated support (human + AI)",
    ],
    popular: true,
  },
]

const investorPlans = [
  {
    name: "Explorer",
    price: "$0",
    period: "/month",
    description: "For curious investors discovering the ecosystem.",
    tagline: "Feel the market's temperature without commitment.",
    icon: Eye,
    features: [
      "Limited selection of startups",
      "10 startup profiles/month",
      "Simplified analytics",
      "Basic sector/country filters",
      "Follow up to 5 startups",
    ],
    popular: false,
  },
  {
    name: "Deal Hunter",
    price: "$19",
    period: "/month",
    description: "For active investors seeking promising deals.",
    tagline: "For sharp investors spotting tomorrow's champions.",
    icon: Target,
    features: [
      "Everything in Explorer",
      "Access to all public startups",
      "Basic AI scoring",
      "Smart alerts",
      "Investment dashboard",
      "Follow up to 30 startups",
      "AI matching with relevant deals",
    ],
    popular: false,
  },
  {
    name: "Pan-African Eagle",
    price: "$79",
    period: "/month",
    description: "Designed for funds, angels, and serious deal-makers.",
    tagline: "See the continent five years into the future.",
    icon: Crown,
    features: [
      "Everything in Deal Hunter",
      "Access to protected data",
      "Advanced AI scoring + forecasting",
      "Sector & market intelligence",
      "Unlimited startup tracking",
      "Early access to premium startups",
      "Multi-country dashboard",
      "Dedicated support (analyst + AI)",
    ],
    popular: true,
  },
]

function PreOrderModal({
  isOpen,
  onClose,
  plan,
}: {
  isOpen: boolean
  onClose: () => void
  plan: (typeof smeePlans)[0] | null
}) {
  const { t } = useI18n()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen || !plan) return null

  const handlePreOrder = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const Icon = plan.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 animate-in fade-in zoom-in">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
              <Check className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Pre-Order Confirmed!</h3>
            <p className="text-muted-foreground text-sm">
              You've secured your spot for {plan.name}. We'll notify you at launch!
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("preOrderTitle")}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.name} — {plan.price}
                {plan.period}
              </p>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-6">{t("preOrderDesc")}</p>

            <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
              <p className="text-sm font-medium text-foreground mb-3">{t("preOrderBenefits")}</p>
              <ul className="space-y-2">
                {[t("preOrderBenefit1"), t("preOrderBenefit2"), t("preOrderBenefit3"), t("preOrderBenefit4")].map(
                  (benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        {i === 0 ? (
                          <Zap className="w-3 h-3 text-red-400" />
                        ) : i === 1 ? (
                          <Star className="w-3 h-3 text-red-400" />
                        ) : i === 2 ? (
                          <Shield className="w-3 h-3 text-red-400" />
                        ) : (
                          <Users className="w-3 h-3 text-red-400" />
                        )}
                      </div>
                      {benefit}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <Button
              onClick={handlePreOrder}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-6"
            >
              {isSubmitting ? "Processing..." : t("confirmPreOrder")}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

function PricingCard({
  plan,
  onPreOrder,
}: {
  plan: (typeof smeePlans)[0]
  onPreOrder: (plan: (typeof smeePlans)[0]) => void
}) {
  const { t } = useI18n()
  const Icon = plan.icon

  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
        plan.popular
          ? "border-red-500/30 bg-black/80 shadow-[0_0_60px_rgba(239,68,68,0.15)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      } backdrop-blur-xl p-8`}
    >
      {plan.popular && (
        <>
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-red-500/20 via-transparent to-red-500/10 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full">
              {t("mostPopular")}
            </span>
          </div>
        </>
      )}

      <div className="mb-6">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
            plan.popular
              ? "bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30"
              : "bg-white/5 border border-white/10"
          }`}
        >
          <Icon className={`w-6 h-6 ${plan.popular ? "text-red-400" : "text-white/70"}`} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold ${
              plan.popular
                ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                : "text-foreground"
            }`}
          >
            {plan.price}
          </span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                plan.popular ? "bg-red-500/20" : "bg-white/10"
              }`}
            >
              <Check className={`w-3 h-3 ${plan.popular ? "text-red-400" : "text-white/70"}`} />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground/70 italic mb-6 border-t border-white/5 pt-4">"{plan.tagline}"</p>

      <Button
        onClick={() => onPreOrder(plan)}
        className={`w-full py-6 font-semibold transition-all duration-300 ${
          plan.popular
            ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-lg shadow-red-500/25"
            : "bg-white/5 hover:bg-white/10 text-foreground border border-white/10"
        }`}
      >
        {t("preOrderNow")}
      </Button>
    </div>
  )
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<"startups" | "investors">("startups")
  const [preOrderModal, setPreOrderModal] = useState<{ isOpen: boolean; plan: (typeof smeePlans)[0] | null }>({
    isOpen: false,
    plan: null,
  })
  const { t } = useI18n()

  const handlePreOrder = (plan: (typeof smeePlans)[0]) => {
    setPreOrderModal({ isOpen: true, plan })
  }

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t("pricingTitle")}{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              {t("pricingHighlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("pricingSubtitle")}</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("startups")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "startups"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("startupsSmEs")}
            </button>
            <button
              onClick={() => setActiveTab("investors")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "investors"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("investors")}
            </button>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${
            activeTab === "startups" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {smeePlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} onPreOrder={handlePreOrder} />
          ))}
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${
            activeTab === "investors" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {investorPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} onPreOrder={handlePreOrder} />
          ))}
        </div>

        <div className="text-center mt-16 pt-12 border-t border-white/5">
          <p className="text-muted-foreground mb-4">{t("customSolution")}</p>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-foreground px-8 py-6 bg-transparent"
          >
            {t("contactSales")}
          </Button>
        </div>
      </div>

      <PreOrderModal
        isOpen={preOrderModal.isOpen}
        onClose={() => setPreOrderModal({ isOpen: false, plan: null })}
        plan={preOrderModal.plan}
      />
    </section>
  )
}
