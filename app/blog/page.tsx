"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Clock,
  ArrowRight,
  TrendingUp,
  Zap,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
} from "lucide-react"

const allArticles = [
  {
    id: 1,
    title: "The Rise of AI-Ready Startups in Africa",
    subtitle: "How intelligent systems are reshaping early-stage innovation across the continent.",
    category: "Startup",
    readTime: "8 min",
    image: "/ai-startup-africa-innovation-technology-futuristic.jpg",
    featured: true,
    date: "Nov 28, 2025",
  },
  {
    id: 2,
    title: "Cashflow Discipline for Small Teams",
    subtitle: "Simple rules that turn survival into sustainable growth for lean organizations.",
    category: "SME",
    readTime: "6 min",
    image: "/cashflow-finance-small-business-growth-chart.jpg",
    featured: false,
    date: "Nov 25, 2025",
  },
  {
    id: 3,
    title: "The Investor's New Lens",
    subtitle: "Why predictive data now matters more than pitch decks in modern fundraising.",
    category: "Investment",
    readTime: "10 min",
    image: "/investor-data-analytics-prediction-lens.jpg",
    featured: true,
    date: "Nov 22, 2025",
  },
  {
    id: 4,
    title: "Scaling Without Burning Out",
    subtitle: "A healthy roadmap for founders building lean and sustainable ventures.",
    category: "Strategy",
    readTime: "7 min",
    image: "/founder-startup-scaling-growth-wellness.jpg",
    featured: false,
    date: "Nov 20, 2025",
  },
  {
    id: 5,
    title: "Fundi Metrics Explained",
    subtitle: "How smart signals help you improve before it's too late with real-time insights.",
    category: "Technology",
    readTime: "5 min",
    image: "/metrics-dashboard-analytics-ai-technology.jpg",
    featured: true,
    date: "Nov 18, 2025",
  },
  {
    id: 6,
    title: "The Future of SME Financing",
    subtitle: "Micro-data creating macro-impact across emerging markets.",
    category: "Finance",
    readTime: "9 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    date: "Nov 15, 2025",
  },
  {
    id: 7,
    title: "Founder Mistakes That Cost Millions",
    subtitle: "And how to avoid them with a smarter dashboard and real-time monitoring.",
    category: "Startup",
    readTime: "12 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    date: "Nov 12, 2025",
  },
  {
    id: 8,
    title: "The Connected Marketplace of 2030",
    subtitle: "What African and European businesses must prepare for in the next decade.",
    category: "Strategy",
    readTime: "11 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    date: "Nov 10, 2025",
  },
  {
    id: 9,
    title: "How To Build Trust With Investors in 15 Seconds",
    subtitle: "Hint: It starts with transparent signals and verified metrics.",
    category: "Investment",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    date: "Nov 8, 2025",
  },
  {
    id: 10,
    title: "Turning Data Into Daily Decisions",
    subtitle: "A practical guide for startups and SMEs navigating uncertainty.",
    category: "Technology",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    date: "Nov 5, 2025",
  },
  {
    id: 11,
    title: "Zero-Knowledge Proofs in Finance",
    subtitle: "How cryptographic privacy is revolutionizing financial transparency.",
    category: "Technology",
    readTime: "14 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    date: "Nov 2, 2025",
  },
  {
    id: 12,
    title: "ESG Metrics That Actually Matter",
    subtitle: "Cutting through the noise to find meaningful sustainability indicators.",
    category: "Finance",
    readTime: "8 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    date: "Oct 30, 2025",
  },
]

const filters = [
  "All",
  "Startups",
  "SMEs",
  "Investors",
  "Technology & AI",
  "Finance & Markets",
  "Strategy",
  "Most Popular",
  "Newest",
]

const trendingArticles = [
  { id: 1, title: "The Rise of AI-Ready Startups", views: "12.4K" },
  { id: 3, title: "The Investor's New Lens", views: "9.8K" },
  { id: 5, title: "Fundi Metrics Explained", views: "8.2K" },
  { id: 8, title: "Connected Marketplace 2030", views: "7.1K" },
]

const fundiSignals = [
  { signal: "Trust Score volatility detected in FinTech sector", type: "alert" },
  { signal: "3 new verified SMEs in AgriTech reached 90+ score", type: "success" },
  { signal: "Investor activity up 24% this week", type: "info" },
]

const categories = [
  { name: "Startup", count: 24 },
  { name: "SME", count: 18 },
  { name: "Investment", count: 15 },
  { name: "Technology", count: 32 },
  { name: "Finance", count: 21 },
  { name: "Strategy", count: 12 },
]

const categoryColors: Record<string, string> = {
  Startup: "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
  SME: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
  Investment: "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
  Technology: "from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30",
  Strategy: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30",
  Finance: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30",
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [email, setEmail] = useState("")

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeFilter === "All") return matchesSearch
    if (activeFilter === "Startups") return article.category === "Startup" && matchesSearch
    if (activeFilter === "SMEs") return article.category === "SME" && matchesSearch
    if (activeFilter === "Investors") return article.category === "Investment" && matchesSearch
    if (activeFilter === "Technology & AI") return article.category === "Technology" && matchesSearch
    if (activeFilter === "Finance & Markets") return article.category === "Finance" && matchesSearch
    if (activeFilter === "Strategy") return article.category === "Strategy" && matchesSearch
    if (activeFilter === "Most Popular") return article.featured && matchesSearch
    if (activeFilter === "Newest") return matchesSearch

    return matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Abstract wave pattern background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 C1400,100 1440,200 1440,200 L1440,600 L0,600 Z"
              fill="url(#waveGradient)"
            />
            <path
              d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1200,300 C1400,200 1440,300 1440,300 L1440,600 L0,600 Z"
              fill="url(#waveGradient)"
              opacity="0.5"
            />
          </svg>
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
              <span className="text-sm text-muted-foreground">Fundi Intelligence Hub</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Insights for{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Smarter Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep analysis, practical wisdom, and predictive signals for startups, SMEs, and investors navigating the
              future of finance.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 z-40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.id}`}
                    className="group relative bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border backdrop-blur-sm ${categoryColors[article.category]}`}
                        >
                          {article.category}
                        </span>
                      </div>
                      {article.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-red-600 text-white">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.subtitle}</p>
                      <span className="inline-flex items-center text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors">
                        Read more
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                    {/* Hover gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-border"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white border-0"
                        : "border-border"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                  disabled={currentPage === 5}
                  className="border-border"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              {/* Search */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold text-foreground mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 border-border"
                  />
                </div>
              </div>

              {/* Trending Now */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-foreground">Trending Now</h3>
                </div>
                <div className="space-y-3">
                  {trendingArticles.map((article, index) => (
                    <Link key={article.id} href={`/blog/${article.id}`} className="flex items-start gap-3 group">
                      <span className="text-2xl font-bold text-muted-foreground/50 group-hover:text-red-500 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-red-400 transition-colors line-clamp-2">
                          {article.title}
                        </p>
                        <span className="text-xs text-muted-foreground">{article.views} views</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Fundi Signals of the Week */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full" />
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-foreground">Fundi Signals</h3>
                </div>
                <div className="space-y-3">
                  {fundiSignals.map((signal, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        signal.type === "alert"
                          ? "bg-amber-500/10 border-amber-500/30"
                          : signal.type === "success"
                            ? "bg-green-500/10 border-green-500/30"
                            : "bg-blue-500/10 border-blue-500/30"
                      }`}
                    >
                      <p className="text-xs text-foreground">{signal.signal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() =>
                        setActiveFilter(category.name === "Investment" ? "Investors" : category.name + "s")
                      }
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {category.name}
                      </span>
                      <span className="text-xs text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-xl rounded-2xl border border-red-500/20 p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Stay Ahead</h3>
                <p className="text-sm text-muted-foreground mb-4">Get weekly insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border"
                  />
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Share */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-5">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Mail, label: "Email" },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">
            Stay ahead with Fundi —{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-medium">
              where signals become smart decisions.
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
