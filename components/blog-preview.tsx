"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogArticles = [
  {
    id: 1,
    title: "The Rise of AI-Ready Startups in Africa",
    insight: "How intelligent systems are reshaping early-stage innovation.",
    category: "Startup",
    image: "/ai-startup-africa-innovation-technology.jpg",
  },
  {
    id: 2,
    title: "Cashflow Discipline for Small Teams",
    insight: "Simple rules that turn survival into sustainable growth.",
    category: "SME",
    image: "/cashflow-finance-small-business-growth.jpg",
  },
  {
    id: 3,
    title: "The Investor's New Lens",
    insight: "Why predictive data now matters more than pitch decks.",
    category: "Investment",
    image: "/investor-data-analytics-prediction.jpg",
  },
  {
    id: 4,
    title: "Scaling Without Burning Out",
    insight: "A healthy roadmap for founders building lean.",
    category: "Strategy",
    image: "/founder-startup-scaling-growth.jpg",
  },
  {
    id: 5,
    title: "fvundi Metrics Explained",
    insight: "How smart signals help you improve before it's too late.",
    category: "Technology",
    image: "/metrics-dashboard-analytics-ai.jpg",
  },
  {
    id: 6,
    title: "The Future of SME Financing",
    insight: "Micro-data, macro-impact.",
    category: "SME",
    image: "/sme-financing-future-technology.jpg",
  },
  {
    id: 7,
    title: "Founder Mistakes That Cost Millions",
    insight: "And how to avoid them with a smarter dashboard.",
    category: "Startup",
    image: "/founder-mistakes-business-dashboard.jpg",
  },
  {
    id: 8,
    title: "The Connected Marketplace of 2030",
    insight: "What African and European businesses must prepare for.",
    category: "Strategy",
    image: "/global-marketplace-africa-europe-business.jpg",
  },
  {
    id: 9,
    title: "How To Build Trust With Investors in 15 Seconds",
    insight: "Hint: It starts with transparent signals.",
    category: "Investment",
    image: "/investor-trust-transparency-signals.jpg",
  },
  {
    id: 10,
    title: "Turning Data Into Daily Decisions",
    insight: "A practical guide for startups and SMEs.",
    category: "Technology",
    image: "/data-decisions-analytics-practical-guide.jpg",
  },
]

const categoryColors: Record<string, string> = {
  Startup: "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
  SME: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
  Investment: "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
  Technology: "from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30",
  Strategy: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30",
}

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
            <span className="text-sm text-muted-foreground">Knowledge Hub</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Insights for{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Smarter Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep analysis, practical wisdom, and predictive signals for startups, SMEs, and investors.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {blogArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className={`group relative bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 ${
                index >= 5 ? "hidden lg:block" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r border backdrop-blur-sm ${categoryColors[article.category]}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{article.insight}</p>
              </div>

              {/* Hover gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-6 text-base font-medium group"
            >
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
