"use client"

import { useState } from "react"
import { Check, Sparkles, Rocket, Globe, Eye, Target, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

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

function PricingCard({
  plan,
}: {
  plan: (typeof smeePlans)[0]
}) {
  const Icon = plan.icon

  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
        plan.popular
          ? "border-red-500/30 bg-black/80 shadow-[0_0_60px_rgba(239,68,68,0.15)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      } backdrop-blur-xl p-8`}
    >
      {/* Premium glow effect */}
      {plan.popular && (
        <>
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-red-500/20 via-transparent to-red-500/10 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full">
              MOST POPULAR
            </span>
          </div>
        </>
      )}

      {/* Header */}
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

      {/* Price */}
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

      {/* Features */}
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

      {/* Tagline */}
      <p className="text-xs text-muted-foreground/70 italic mb-6 border-t border-white/5 pt-4">"{plan.tagline}"</p>

      {/* CTA */}
      <Button
        className={`w-full py-6 font-semibold transition-all duration-300 ${
          plan.popular
            ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-lg shadow-red-500/25"
            : "bg-white/5 hover:bg-white/10 text-foreground border border-white/10"
        }`}
      >
        Get Started
      </Button>
    </div>
  )
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<"startups" | "investors">("startups")

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your ambition. Scale up anytime as your journey evolves.
          </p>
        </div>

        {/* Toggle */}
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
              Startups & SMEs
            </button>
            <button
              onClick={() => setActiveTab("investors")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "investors"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Investors
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${
            activeTab === "startups" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {smeePlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${
            activeTab === "investors" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {investorPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-white/5">
          <p className="text-muted-foreground mb-4">Need a custom solution for your organization?</p>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-foreground px-8 py-6 bg-transparent"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
