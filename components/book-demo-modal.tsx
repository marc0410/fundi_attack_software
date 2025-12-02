"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Copy,
  CheckCircle2,
  Calendar,
  Shield,
  Zap,
  Users,
  Gift,
  Sparkles,
} from "lucide-react"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
  onDemoBooked?: () => void
}

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
  "Cameroon",
  "Other",
]

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

export function BookDemoModal({ isOpen, onClose, onDemoBooked }: BookDemoModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    organization: "",
    selectedDate: "",
    selectedTime: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate referral code
  const referralCode = `FUNDI-${formData.fullName.split(" ")[0]?.toUpperCase() || "USER"}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
  const referralLink = `https://fundi.ai/join?ref=${referralCode}`

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1)
        setFormData({
          fullName: "",
          email: "",
          country: "",
          organization: "",
          selectedDate: "",
          selectedTime: "",
        })
        setErrors({})
      }, 300)
    }
  }, [isOpen])

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.country) newErrors.country = "Please select a country"
    if (!formData.organization.trim()) newErrors.organization = "Organization name is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.selectedDate) newErrors.selectedDate = "Please select a date"
    if (!formData.selectedTime) newErrors.selectedTime = "Please select a time"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
      if (onDemoBooked) {
        onDemoBooked()
      }
      // Store verification in localStorage
      localStorage.setItem("fundi_referral_verified", "true")
      localStorage.setItem(
        "fundi_referral_user",
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          country: formData.country,
        }),
      )
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()
    return { daysInMonth, startingDay }
  }

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth)
  const today = new Date()

  const isDateSelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date >= today
  }

  const formatDate = (day: number) => {
    return `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={step === 3 ? onClose : undefined} />

      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
        {/* Close button - only after success */}
        {step === 3 && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Left Panel - Information */}
        <div className="lg:w-2/5 bg-gradient-to-br from-black via-zinc-900 to-black p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-2xl text-white tracking-tight">Fundi</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-medium">Early Access Program</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Financial Intelligence
              </span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Join the exclusive group of African SMEs transforming their financial operations with AI-powered insights
              — fully encrypted, completely private.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Zero-Knowledge Security</h4>
                  <p className="text-zinc-500 text-xs">Your data is never seen, only analyzed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Instant Reports</h4>
                  <p className="text-zinc-500 text-xs">Professional financial documents in seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Founder-First Design</h4>
                  <p className="text-zinc-500 text-xs">Built for African SMEs and startups</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration area */}
          <div className="relative mt-8 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
            <img
              src="/futuristic-dashboard-with-charts-and-encrypted-dat.jpg"
              alt="Fundi Dashboard Preview"
              className="w-full h-40 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xs text-zinc-400">Preview of your encrypted dashboard</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Interactive Flow */}
        <div className="lg:w-3/5 p-8 lg:p-10 overflow-y-auto max-h-[70vh] lg:max-h-none">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    s < step
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                      : s === step
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white ring-4 ring-red-500/20"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${s < step ? "bg-red-500" : "bg-secondary"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: User Information */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Tell us about you</h3>
                <p className="text-muted-foreground">We will personalize your demo experience</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="country" className="text-sm font-medium">
                    Country
                  </Label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`mt-1.5 w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground text-sm ${errors.country ? "border-red-500" : ""}`}
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                <div>
                  <Label htmlFor="organization" className="text-sm font-medium">
                    Organization / Startup Name
                  </Label>
                  <Input
                    id="organization"
                    placeholder="Acme Inc."
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.organization ? "border-red-500" : ""}`}
                  />
                  {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                </div>
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                Next
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Choose Demo Date */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Schedule your demo</h3>
                <p className="text-muted-foreground">Pick a date and time that works for you</p>
              </div>

              {/* Calendar */}
              <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <h4 className="font-semibold">
                    {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                  </h4>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-xs text-muted-foreground font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: startingDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const dateStr = formatDate(day)
                    const isSelected = formData.selectedDate === dateStr
                    const selectable = isDateSelectable(day)

                    return (
                      <button
                        key={day}
                        disabled={!selectable}
                        onClick={() => setFormData({ ...formData, selectedDate: dateStr })}
                        className={`p-2 text-sm rounded-lg transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                            : selectable
                              ? "hover:bg-secondary text-foreground"
                              : "text-muted-foreground/30 cursor-not-allowed"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {errors.selectedDate && <p className="text-red-500 text-xs">{errors.selectedDate}</p>}

              {/* Time slots */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Preferred Time (GMT+1)</Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({ ...formData, selectedTime: time })}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        formData.selectedTime === time
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500"
                          : "border-border hover:border-red-500/50 bg-secondary/30"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.selectedTime && <p className="text-red-500 text-xs mt-2">{errors.selectedTime}</p>}
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" className="flex-1 py-6 bg-transparent">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
                >
                  Confirm
                  <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Success + Referral */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Success message */}
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Your demo is booked!</h3>
                <p className="text-muted-foreground">We are excited to show you what Fundi can do</p>
              </div>

              {/* Confirmation summary */}
              <div className="bg-secondary/30 rounded-xl p-5 border border-border space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Name</span>
                  <span className="text-foreground font-medium text-sm">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Email</span>
                  <span className="text-foreground font-medium text-sm">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Date</span>
                  <span className="text-foreground font-medium text-sm">
                    {new Date(formData.selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Time</span>
                  <span className="text-foreground font-medium text-sm">{formData.selectedTime}</span>
                </div>
              </div>

              {/* Referral Module */}
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-6 border border-zinc-800 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Invite & Earn Early Credits</h4>
                      <p className="text-zinc-400 text-xs">Share your link and earn early access rewards</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-zinc-400">Your earnings</span>
                      <span className="text-white font-medium">$0 / $200</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all" />
                    </div>
                  </div>

                  {/* Referral link */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 bg-zinc-800/50 rounded-lg px-4 py-3 border border-zinc-700">
                      <p className="text-xs text-zinc-500 mb-1">Your unique referral link</p>
                      <p className="text-white text-sm truncate font-mono">{referralLink}</p>
                    </div>
                    <Button
                      onClick={copyReferralLink}
                      className={`px-4 ${copied ? "bg-green-600 hover:bg-green-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"} text-white`}
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Reward rules */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50">
                      <p className="text-lg font-bold text-white">$5</p>
                      <p className="text-xs text-zinc-400">Per signup</p>
                    </div>
                    <div className="bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50">
                      <p className="text-lg font-bold text-white">$20</p>
                      <p className="text-xs text-zinc-400">Per subscription</p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 text-center">
                    Earn credits when friends sign up ($5) or subscribe ($20). Max $200 in early credits.
                  </p>
                </div>
              </div>

              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                Done
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
