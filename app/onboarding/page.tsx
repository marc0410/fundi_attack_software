"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  FileText,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  DollarSign,
  Shield,
  Sparkles,
  Plus,
  X,
  Loader2,
} from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, title: "Company Info", icon: Building2 },
  { id: 2, title: "Business Details", icon: Briefcase },
  { id: 3, title: "Financials", icon: DollarSign },
  { id: 4, title: "Founders", icon: Users },
  { id: 5, title: "Documents", icon: FileText },
  { id: 6, title: "Review", icon: CheckCircle },
]

const sectors = [
  "Fintech",
  "Agritech",
  "E-commerce",
  "Healthtech",
  "Edtech",
  "Logistics",
  "Manufacturing",
  "Retail",
  "SaaS",
  "Clean Energy",
  "Other",
]

const countries = [
  "Nigeria",
  "Kenya",
  "South Africa",
  "Ghana",
  "Egypt",
  "Morocco",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "Côte d'Ivoire",
  "Senegal",
  "Other",
]

const fundingStages = ["Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Bootstrapped"]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Form data with save capability
  const [formData, setFormData] = useState({
    // Step 1: Company Info
    companyName: "",
    legalName: "",
    registrationNumber: "",
    country: "",
    city: "",
    website: "",
    yearFounded: "",

    // Step 2: Business Details
    sector: "",
    description: "",
    problemSolved: "",
    targetMarket: "",
    competitors: "",
    uniqueValue: "",

    // Step 3: Financials
    fundingStage: "",
    totalRaised: "",
    seekingAmount: "",
    monthlyRevenue: "",
    monthlyExpenses: "",
    runway: "",

    // Step 4: Founders
    founders: [{ name: "", role: "", linkedin: "", bio: "" }],
    teamSize: "",

    // Step 5: Documents
    pitchDeck: null as File | null,
    financials: null as File | null,
    businessPlan: null as File | null,
    incorporation: null as File | null,
  })

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("fundi_onboarding_draft")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData((prev) => ({ ...prev, ...parsed, founders: parsed.founders || prev.founders }))
      } catch (e) {
        console.error("Failed to load saved data")
      }
    }
  }, [])

  // Auto-save to localStorage
  useEffect(() => {
    const saveData = { ...formData, pitchDeck: null, financials: null, businessPlan: null, incorporation: null }
    localStorage.setItem("fundi_onboarding_draft", JSON.stringify(saveData))
  }, [formData])

  const updateFormData = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addFounder = () => {
    setFormData((prev) => ({
      ...prev,
      founders: [...prev.founders, { name: "", role: "", linkedin: "", bio: "" }],
    }))
  }

  const removeFounder = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      founders: prev.founders.filter((_, i) => i !== index),
    }))
  }

  const updateFounder = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      founders: prev.founders.map((f, i) => (i === index ? { ...f, [field]: value } : f)),
    }))
  }

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsComplete(true)
    localStorage.removeItem("fundi_onboarding_draft")
  }

  const getProgress = () => {
    return (currentStep / 6) * 100
  }

  if (isComplete) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
          <p className="text-muted-foreground mb-8">
            Your SME/Startup application is now under review. Our team will verify your information and get back to you
            within 3-5 business days.
          </p>
          <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-8">
            <p className="text-sm text-muted-foreground">Application ID</p>
            <p className="text-lg font-mono font-semibold text-foreground">
              FUNDI-{Date.now().toString(36).toUpperCase()}
            </p>
          </div>
          <div className="space-y-3">
            <Link href="/marketplace">
              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6">
                Explore Marketplace
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full py-6 bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-xl text-foreground">Fundi</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">Progress saved automatically</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-emerald-400">Draft saved</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="fixed top-[73px] left-0 right-0 z-40 h-1 bg-secondary">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500"
          style={{ width: `${getProgress()}%` }}
        />
      </div>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Step indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between overflow-x-auto pb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        currentStep >= step.id
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                    </div>
                    <span
                      className={`text-xs mt-2 whitespace-nowrap ${
                        currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 lg:w-20 h-0.5 mx-2 ${currentStep > step.id ? "bg-red-500" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Company Info */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Company Information</h2>
                <p className="text-muted-foreground">Tell us about your company</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateFormData("companyName", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Legal Entity Name</label>
                    <input
                      type="text"
                      value={formData.legalName}
                      onChange={(e) => updateFormData("legalName", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="Acme Technologies Ltd."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Registration Number</label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => updateFormData("registrationNumber", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="RC-123456"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Year Founded *</label>
                    <input
                      type="number"
                      value={formData.yearFounded}
                      onChange={(e) => updateFormData("yearFounded", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="2022"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => updateFormData("country", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">City *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="Lagos"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData("website", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Business Details</h2>
                <p className="text-muted-foreground">Help us understand what you do</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground">Sector *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => updateFormData("sector", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  >
                    <option value="">Select sector</option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Company Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData("description", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 h-24 resize-none"
                    placeholder="Briefly describe what your company does..."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Problem You Solve *</label>
                  <textarea
                    value={formData.problemSolved}
                    onChange={(e) => updateFormData("problemSolved", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 h-24 resize-none"
                    placeholder="What problem does your product/service solve?"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Target Market</label>
                  <input
                    type="text"
                    value={formData.targetMarket}
                    onChange={(e) => updateFormData("targetMarket", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="SMEs in Nigeria, B2B SaaS..."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Key Competitors</label>
                  <input
                    type="text"
                    value={formData.competitors}
                    onChange={(e) => updateFormData("competitors", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="List main competitors..."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Unique Value Proposition</label>
                  <textarea
                    value={formData.uniqueValue}
                    onChange={(e) => updateFormData("uniqueValue", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50 h-20 resize-none"
                    placeholder="What makes you different from competitors?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Financials */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Financial Information</h2>
                <p className="text-muted-foreground">This information will be encrypted and never exposed</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-8 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-300">
                  All financial data is encrypted using homomorphic encryption. fvundi never sees your raw numbers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Funding Stage *</label>
                    <select
                      value={formData.fundingStage}
                      onChange={(e) => updateFormData("fundingStage", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    >
                      <option value="">Select stage</option>
                      {fundingStages.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Total Raised (USD)</label>
                    <input
                      type="text"
                      value={formData.totalRaised}
                      onChange={(e) => updateFormData("totalRaised", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="$500,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Amount Seeking (USD)</label>
                  <input
                    type="text"
                    value={formData.seekingAmount}
                    onChange={(e) => updateFormData("seekingAmount", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="$1,000,000"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Monthly Revenue (USD)</label>
                    <input
                      type="text"
                      value={formData.monthlyRevenue}
                      onChange={(e) => updateFormData("monthlyRevenue", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="$50,000"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Monthly Expenses (USD)</label>
                    <input
                      type="text"
                      value={formData.monthlyExpenses}
                      onChange={(e) => updateFormData("monthlyExpenses", e.target.value)}
                      className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="$40,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Current Runway (months)</label>
                  <input
                    type="number"
                    value={formData.runway}
                    onChange={(e) => updateFormData("runway", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="18"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Founders */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Founders & Team</h2>
                <p className="text-muted-foreground">Tell us about the people behind the company</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground">Team Size</label>
                  <input
                    type="number"
                    value={formData.teamSize}
                    onChange={(e) => updateFormData("teamSize", e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    placeholder="10"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-foreground">Founders</label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addFounder}
                      className="gap-1 bg-transparent"
                    >
                      <Plus className="w-4 h-4" />
                      Add Founder
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {formData.founders.map((founder, index) => (
                      <div key={index} className="p-4 rounded-xl border border-border bg-card/50 relative">
                        {formData.founders.length > 1 && (
                          <button
                            onClick={() => removeFounder(index)}
                            className="absolute top-3 right-3 p-1 rounded-full hover:bg-secondary text-muted-foreground"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-muted-foreground">Full Name</label>
                            <input
                              type="text"
                              value={founder.name}
                              onChange={(e) => updateFounder(index, "name", e.target.value)}
                              className="mt-1 w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground text-sm"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Role</label>
                            <input
                              type="text"
                              value={founder.role}
                              onChange={(e) => updateFounder(index, "role", e.target.value)}
                              className="mt-1 w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground text-sm"
                              placeholder="CEO & Co-founder"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="text-xs text-muted-foreground">LinkedIn URL</label>
                          <input
                            type="url"
                            value={founder.linkedin}
                            onChange={(e) => updateFounder(index, "linkedin", e.target.value)}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground text-sm"
                            placeholder="https://linkedin.com/in/johndoe"
                          />
                        </div>
                        <div className="mt-4">
                          <label className="text-xs text-muted-foreground">Short Bio</label>
                          <textarea
                            value={founder.bio}
                            onChange={(e) => updateFounder(index, "bio", e.target.value)}
                            className="mt-1 w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground text-sm h-16 resize-none"
                            placeholder="Brief background and expertise..."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Documents */}
          {currentStep === 5 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Documents</h2>
                <p className="text-muted-foreground">Upload supporting documents (optional but recommended)</p>
              </div>

              <div className="space-y-6">
                {[
                  { key: "pitchDeck", label: "Pitch Deck", desc: "PDF or PPT, max 20MB" },
                  { key: "financials", label: "Financial Statements", desc: "PDF or Excel, max 10MB" },
                  { key: "businessPlan", label: "Business Plan", desc: "PDF, max 10MB" },
                  { key: "incorporation", label: "Certificate of Incorporation", desc: "PDF, max 5MB" },
                ].map((doc) => (
                  <div
                    key={doc.key}
                    className="p-4 rounded-xl border border-dashed border-border hover:border-red-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{doc.label}</p>
                        <p className="text-xs text-muted-foreground">{doc.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {formData[doc.key as keyof typeof formData] ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-emerald-400">
                              {(formData[doc.key as keyof typeof formData] as File)?.name}
                            </span>
                            <button
                              onClick={() => handleFileUpload(doc.key, null)}
                              className="p-1 rounded hover:bg-secondary text-muted-foreground"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload(doc.key, e.target.files?.[0] || null)}
                            />
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:bg-secondary transition-colors">
                              <Upload className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">Upload</span>
                            </div>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Review */}
          {currentStep === 6 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Review & Submit</h2>
                <p className="text-muted-foreground">Please review your information before submitting</p>
              </div>

              <div className="space-y-6">
                {/* Summary cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-card/50 border border-border">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-red-400" />
                      Company
                    </h4>
                    <p className="text-muted-foreground text-sm">{formData.companyName || "Not provided"}</p>
                    <p className="text-muted-foreground text-sm">
                      {formData.city}, {formData.country}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card/50 border border-border">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-red-400" />
                      Business
                    </h4>
                    <p className="text-muted-foreground text-sm">{formData.sector || "Not provided"}</p>
                    <p className="text-muted-foreground text-sm">{formData.fundingStage}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card/50 border border-border">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-red-400" />
                      Financials
                    </h4>
                    <p className="text-muted-foreground text-sm">Seeking: {formData.seekingAmount || "Not provided"}</p>
                    <p className="text-muted-foreground text-sm">
                      Revenue: {formData.monthlyRevenue || "Not provided"}/mo
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card/50 border border-border">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-400" />
                      Team
                    </h4>
                    <p className="text-muted-foreground text-sm">{formData.founders.length} founder(s)</p>
                    <p className="text-muted-foreground text-sm">{formData.teamSize || "?"} team members</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-red-300 font-medium">By submitting, you agree to:</p>
                      <ul className="text-sm text-red-300/80 mt-2 space-y-1">
                        <li>• Fvundi's Terms of Service and Privacy Policy</li>
                        <li>• Allow encrypted processing of your financial data</li>
                        <li>• Verification of submitted information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-12">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1 py-6 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            {currentStep < 6 ? (
              <Button
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
