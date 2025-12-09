"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Clock,
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  ThumbsDown,
  Calendar,
  X,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Check,
  Eye,
} from "lucide-react"

// Blog data
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
    author: "Amara Okonkwo",
    authorRole: "Head of Research",
    authorImage: "/african-professional-woman-headshot.jpg",
    views: "12.4K",
    content: `
      <p>Africa is witnessing an unprecedented wave of AI-driven innovation. From Lagos to Nairobi, from Cairo to Cape Town, a new generation of founders is building intelligent systems that solve uniquely African challenges while competing on the global stage.</p>
      
      <h2>The New Wave of African Tech</h2>
      <p>The continent's startup ecosystem has matured significantly over the past decade. What began as mobile-first solutions has evolved into sophisticated AI applications across fintech, healthtech, agritech, and beyond. These startups aren't just adapting Western models—they're creating entirely new paradigms.</p>
      
      <blockquote>"African startups are building AI solutions that work in low-connectivity environments, handle multiple languages, and serve populations that global tech giants have historically ignored."</blockquote>
      
      <h2>Key Trends Driving Growth</h2>
      <p>Several factors are converging to accelerate AI adoption across the continent:</p>
      <ul>
        <li><strong>Mobile-first infrastructure:</strong> With over 500 million mobile subscribers, Africa has leapfrogged traditional computing infrastructure.</li>
        <li><strong>Young, tech-savvy population:</strong> The median age in Africa is 19, creating a workforce naturally inclined toward technology adoption.</li>
        <li><strong>Increasing investment:</strong> VC funding in African startups reached $5.2 billion in 2024, with AI companies attracting a growing share.</li>
        <li><strong>Government support:</strong> Countries like Rwanda, Kenya, and Nigeria are implementing AI-friendly policies and digital transformation agendas.</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>Despite the optimism, African AI startups face unique challenges. Data availability, infrastructure gaps, and talent retention remain significant hurdles. However, these challenges also present opportunities for innovation.</p>
      
      <p>Startups like fvundi are addressing the data challenge by using privacy-preserving AI techniques that can work with limited data while maintaining security. This approach not only solves a local problem but creates solutions with global applications.</p>
      
      <h2>Looking Ahead</h2>
      <p>The next five years will be critical for African AI. As more success stories emerge and exit values increase, we expect to see accelerated growth in both the quantity and quality of AI startups. The continent is poised to become not just a consumer of AI technology, but a significant contributor to its global development.</p>
    `,
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
    author: "Kwame Mensah",
    authorRole: "Financial Strategist",
    authorImage: "/african-professional-man-headshot.jpg",
    views: "8.7K",
    content: `
      <p>For small teams operating in emerging markets, cash flow management isn't just a financial practice—it's a survival skill. The difference between thriving and failing often comes down to understanding where every dollar goes and when it arrives.</p>
      
      <h2>The 50/30/20 Rule for SMEs</h2>
      <p>While the traditional personal finance rule doesn't directly apply to businesses, we've adapted it for small teams:</p>
      <ul>
        <li><strong>50% Operating Costs:</strong> Essential expenses that keep the business running daily.</li>
        <li><strong>30% Growth Investment:</strong> Marketing, product development, and expansion activities.</li>
        <li><strong>20% Reserve:</strong> Emergency fund and opportunity capital.</li>
      </ul>
      
      <h2>Weekly Cash Reviews</h2>
      <p>The most successful small teams we've studied conduct weekly cash reviews. This isn't about creating complex spreadsheets—it's about maintaining awareness. A simple 15-minute review each Monday can prevent 90% of cash flow crises.</p>
      
      <blockquote>"Cash is oxygen. You don't think about it until you're running out, and by then it might be too late."</blockquote>
      
      <h2>Invoice Management</h2>
      <p>In our research, late payments account for over 60% of small business cash flow problems. Implementing these practices can dramatically improve your position:</p>
      <ul>
        <li>Send invoices immediately upon delivery</li>
        <li>Offer early payment discounts (2-3% for payment within 10 days)</li>
        <li>Follow up on day 1 after due date, not day 30</li>
        <li>Use automated payment reminders</li>
      </ul>
      
      <h2>The Power of Forecasting</h2>
      <p>Even basic 30-day cash flow forecasting can transform your decision-making. Tools like fvundi automate this process, giving you real-time visibility into your future cash position without manual calculations.</p>
    `,
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
    author: "Sarah Chen",
    authorRole: "Investment Analyst",
    authorImage: "/professional-asian-woman-investor-headshot.jpg",
    views: "9.8K",
    content: `
      <p>The venture capital landscape is undergoing a fundamental shift. While compelling narratives and charismatic founders still matter, sophisticated investors are increasingly relying on data-driven insights to make funding decisions.</p>
      
      <h2>Beyond the Pitch Deck</h2>
      <p>Traditional due diligence focused on reviewing financial statements, checking references, and assessing market size. Today's investors want real-time operational data, predictive analytics, and verifiable performance metrics.</p>
      
      <h2>The Rise of Encrypted Trust</h2>
      <p>One of the most significant developments is the emergence of privacy-preserving analytics. Investors can now verify a company's financial health without accessing sensitive data. This creates a new paradigm of "encrypted trust."</p>
      
      <blockquote>"We can now verify a startup's burn rate, customer retention, and growth trajectory without ever seeing their actual financial records. It's revolutionary."</blockquote>
      
      <h2>Key Metrics That Matter</h2>
      <p>Based on our analysis of successful funding rounds, these are the metrics modern investors prioritize:</p>
      <ul>
        <li><strong>Cash Runway:</strong> How many months until you need more funding?</li>
        <li><strong>Revenue Growth Rate:</strong> Month-over-month and year-over-year trends</li>
        <li><strong>Unit Economics:</strong> Customer acquisition cost vs. lifetime value</li>
        <li><strong>Operational Efficiency:</strong> How well do you convert resources into output?</li>
      </ul>
      
      <h2>Preparing for Data-Driven Fundraising</h2>
      <p>Founders should start building their data infrastructure early. Having clean, verifiable financial data isn't just for investors—it's essential for making better business decisions.</p>
    `,
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
    author: "Dr. Fatima Al-Hassan",
    authorRole: "Leadership Coach",
    authorImage: "/professional-middle-eastern-woman-headshot.png",
    views: "7.1K",
    content: `
      <p>The startup world glorifies hustle culture, but the data tells a different story. Founder burnout is one of the leading causes of startup failure, yet it remains one of the least discussed topics in entrepreneurship.</p>
      
      <h2>The Burnout Epidemic</h2>
      <p>Our research shows that 72% of founders experience significant burnout symptoms within their first three years. The consequences aren't just personal—they directly impact business performance and decision-making quality.</p>
      
      <h2>Sustainable Scaling Principles</h2>
      <p>The most successful long-term founders we've studied share common practices:</p>
      <ul>
        <li><strong>Energy Management:</strong> Treating energy as a finite resource that requires strategic allocation</li>
        <li><strong>Delegation Architecture:</strong> Building systems that reduce founder dependency</li>
        <li><strong>Recovery Rituals:</strong> Non-negotiable practices for mental and physical renewal</li>
        <li><strong>Growth Boundaries:</strong> Saying no to opportunities that don't align with sustainable capacity</li>
      </ul>
      
      <blockquote>"The goal isn't to work less—it's to work in a way that allows you to keep working for decades."</blockquote>
      
      <h2>Building a Sustainable Team</h2>
      <p>Sustainable scaling requires building a team that shares your values around work-life integration. This starts with hiring practices and extends to how you measure performance.</p>
    `,
  },
  {
    id: 5,
    title: "fvundi Metrics Explained",
    subtitle: "How smart signals help you improve before it's too late with real-time insights.",
    category: "Technology",
    readTime: "5 min",
    image: "/metrics-dashboard-analytics-ai-technology.jpg",
    featured: true,
    date: "Nov 18, 2025",
    author: "Emmanuel Nwosu",
    authorRole: "Product Lead",
    authorImage: "/african-tech-professional-man-headshot.jpg",
    views: "8.2K",
    content: `
      <p>Understanding your business metrics shouldn't require a finance degree. Fvundi's smart signals translate complex financial data into actionable insights that any founder can understand and act upon.</p>
      
      <h2>The Trust Score</h2>
      <p>At the heart of fvundi is the Trust Score—a comprehensive measure of your business's financial health. Unlike traditional credit scores, the Trust Score is dynamic, updating in real-time as your financial situation changes.</p>
      
      <h2>Key Components</h2>
      <ul>
        <li><strong>Solvency Index:</strong> Your ability to meet short-term obligations</li>
        <li><strong>Stability Curve:</strong> Consistency of cash flow over time</li>
        <li><strong>Growth Trajectory:</strong> Revenue and customer growth patterns</li>
        <li><strong>Risk Exposure:</strong> Concentration and dependency risks</li>
      </ul>
      
      <h2>Smart Alerts</h2>
      <p>fvundi doesn't just show you data—it tells you what matters. Our AI analyzes your metrics continuously and alerts you when action is needed, before problems become crises.</p>
      
      <blockquote>"Getting a notification that my receivables were trending toward a danger zone gave me two weeks to act instead of discovering the problem when cash ran out."</blockquote>
      
      <h2>Privacy-First Analytics</h2>
      <p>All these insights are generated using encrypted computing. fvundi analyzes your data without ever seeing it—providing the intelligence you need while maintaining complete privacy.</p>
    `,
  },
]

// Fallback article for IDs not in our data
const getFallbackArticle = (id: number) => ({
  id,
  title: `Article ${id}`,
  subtitle: "Insights and analysis for the modern business landscape.",
  category: "Strategy",
  readTime: "6 min",
  image: "/business-fintech-abstract.jpg",
  featured: false,
  date: "Nov 15, 2025",
  author: "fvundi Research Team",
  authorRole: "Editorial",
  authorImage: "/professional-team-avatar.jpg",
  views: "5.2K",
  content: `
    <p>This article provides valuable insights for businesses navigating the modern financial landscape. Stay tuned for more detailed content.</p>
    
    <h2>Key Takeaways</h2>
    <p>Understanding market dynamics and leveraging technology are essential for success in today's competitive environment.</p>
    
    <h2>Looking Forward</h2>
    <p>The future belongs to businesses that embrace innovation while maintaining strong financial fundamentals.</p>
  `,
})

const categoryColors: Record<string, string> = {
  Startup: "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
  SME: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
  Investment: "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
  Technology: "from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30",
  Strategy: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30",
  Finance: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30",
}

export default function BlogDetailPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const commentRef = useRef<HTMLDivElement>(null)

  const [isLoaded, setIsLoaded] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(127)
  const [showShareModal, setShowShareModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Michael O.",
      avatar: "/african-man-avatar.png",
      date: "2 days ago",
      text: "Great insights! This really helped me understand the landscape better.",
      likes: 12,
    },
    {
      id: 2,
      author: "Aisha K.",
      avatar: "/african-woman-avatar.jpg",
      date: "1 day ago",
      text: "Would love to see more content like this. Very practical advice.",
      likes: 8,
    },
  ])

  // Find the article
  const article = allArticles.find((a) => a.id === Number.parseInt(id)) || getFallbackArticle(Number.parseInt(id))

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      setLiked(true)
      setDisliked(false)
      setLikeCount((prev) => prev + 1)
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikeCount((prev) => prev - 1)
      }
    }
  }

  const handleShare = () => {
    setShowShareModal(true)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToComments = () => {
    setShowComments(true)
    setTimeout(() => {
      commentRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const submitComment = () => {
    if (comment.trim()) {
      setComments((prev) => [
        {
          id: Date.now(),
          author: "You",
          avatar: "/diverse-user-avatars.png",
          date: "Just now",
          text: comment,
          likes: 0,
        },
        ...prev,
      ])
      setComment("")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Article Content */}
      <article
        className={`pt-24 pb-32 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover"
            style={{
              transform: isLoaded ? "scale(1)" : "scale(1.1)",
              transition: "transform 1s ease-out",
            }}
          />

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="absolute top-8 left-6 lg:left-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border text-sm text-foreground hover:bg-background transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-32 relative z-20">
          <div
            className={`bg-background/95 backdrop-blur-xl rounded-3xl border border-border p-8 lg:p-12 shadow-2xl transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r border backdrop-blur-sm ${categoryColors[article.category]}`}
              >
                {article.category}
              </span>
              {article.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-red-600 text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8">{article.subtitle}</p>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <img
                  src={article.authorImage || "/placeholder.svg"}
                  alt={article.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-medium text-foreground">{article.author}</p>
                  <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} read
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {article.views} views
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-invert prose-lg max-w-none mt-8
              prose-headings:text-foreground prose-headings:font-bold
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-red-500 prose-blockquote:bg-secondary/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-foreground
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-li:marker:text-red-500"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {["AI", "Startups", "Africa", "Innovation", "Technology"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div
          ref={commentRef}
          className={`max-w-4xl mx-auto px-6 lg:px-8 mt-12 transition-all duration-500 ${showComments ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
        >
          <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-red-500" />
              Comments ({comments.length})
            </h3>

            {/* Comment Input */}
            <div className="flex gap-4 mb-8">
              <img src="/diverse-user-avatars.png" alt="Your avatar" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full bg-background/50 border border-border rounded-xl p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <Button
                    onClick={submitComment}
                    disabled={!comment.trim()}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0"
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-4">
                  <img
                    src={c.avatar || "/placeholder.svg"}
                    alt={c.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium text-foreground">{c.author}</span>
                      <span className="text-xs text-muted-foreground">{c.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{c.text}</p>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-400 mt-2 transition-colors">
                      <Heart className="w-3 h-3" />
                      {c.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Floating Bottom Bar */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <div className="flex items-center gap-1 px-3 py-2 bg-background/90 backdrop-blur-xl rounded-full border border-border shadow-2xl shadow-black/20">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${liked ? "bg-red-500/20 text-red-400" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
            style={{
              transform: liked ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Heart className={`w-5 h-5 transition-all ${liked ? "fill-red-500" : ""}`} />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-border" />

          {/* Comment */}
          <button
            onClick={scrollToComments}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{comments.length}</span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-border" />

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-border" />

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${disliked ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
          >
            <ThumbsDown className={`w-5 h-5 ${disliked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowShareModal(false)} />
          <div className="relative bg-background border border-border rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-foreground mb-6">Share this article</h3>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                <span className="text-xs text-muted-foreground">Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="text-xs text-muted-foreground">LinkedIn</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
                <span className="text-xs text-muted-foreground">Facebook</span>
              </button>
              <button
                onClick={copyLink}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Link2 className="w-5 h-5 text-red-500" />}
                <span className="text-xs text-muted-foreground">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl border border-border">
              <input
                type="text"
                value={typeof window !== "undefined" ? window.location.href : ""}
                readOnly
                className="flex-1 bg-transparent text-sm text-muted-foreground outline-none"
              />
              <button
                onClick={copyLink}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
