"use client"

import type React from "react"

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

  const referralCode = `FUNDI-${formData.fullName.split(" ")[0]?.toUpperCase() || "USER"}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
  const referralLink = `https://fundi.ai/join?ref=${referralCode}`

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Panel */}
        <div className="lg:w-2/5 bg-gradient-to-br from-black via-zinc-900 to-black p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-2xl text-white tracking-tight">Fundi</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-medium">Early Access Program</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Financial Intelligence
              </span>
            </h2>

            <p className="text-white/60 mb-8 leading-relaxed">
              Join hundreds of African businesses already transforming their financial operations with AI that never
              sees your data.
            </p>

            <div className="space-y-4">
              {[
                { icon: Shield, text: "100% encrypted processing" },
                { icon: Zap, text: "Reports in seconds, not days" },
                { icon: Users, text: "Dedicated onboarding support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden">
              <img
                src="/futuristic-dashboard-with-charts-and-encrypted-dat.jpg"
                alt="Fundi Dashboard Preview"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-3/5 p-8 lg:p-10 overflow-y-auto">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step >= s
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-red-500" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: User Info */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-2">Tell us about yourself</h3>
              <p className="text-muted-foreground mb-8">We'll personalize your demo experience</p>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="country" className="text-foreground">
                    Country
                  </Label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`mt-1.5 w-full px-3 py-2 rounded-md bg-secondary/50 border text-foreground ${errors.country ? "border-red-500" : "border-border"}`}
                  >
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                </div>

                <div>
                  <Label htmlFor="organization" className="text-foreground">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company name"
                    className={`mt-1.5 bg-secondary/50 border-border ${errors.organization ? "border-red-500" : ""}`}
                  />
                  {errors.organization && <p className="text-xs text-red-500 mt-1">{errors.organization}</p>}
                </div>
              </div>

              <Button
                onClick={handleNext}
                className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Calendar */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pick a time</h3>
              <p className="text-muted-foreground mb-8">Select a date and time for your demo</p>

              {/* Calendar */}
              <div className="border border-border rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="font-medium text-foreground">
                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-xs text-muted-foreground py-2">
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
                    const isSelectable = isDateSelectable(day)
                    const isSelected = formData.selectedDate === dateStr

                    return (
                      <button
                        key={day}
                        onClick={() => isSelectable && setFormData({ ...formData, selectedDate: dateStr })}
                        disabled={!isSelectable}
                        className={`p-2 text-sm rounded-lg transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                            : isSelectable
                              ? "hover:bg-secondary text-foreground"
                              : "text-muted-foreground/30 cursor-not-allowed"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
                {errors.selectedDate && <p className="text-xs text-red-500 mt-2">{errors.selectedDate}</p>}
              </div>

              {/* Time slots */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Available times</p>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({ ...formData, selectedTime: time })}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        formData.selectedTime === time
                          ? "border-red-500 bg-red-500/10 text-red-400"
                          : "border-border hover:border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.selectedTime && <p className="text-xs text-red-500 mt-2">{errors.selectedTime}</p>}
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 py-6 bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
                >
                  Book Demo
                  <Calendar className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Success + Referral */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Demo Booked!</h3>
                <p className="text-muted-foreground">We've sent a confirmation to {formData.email}</p>
              </div>

              {/* Referral Module */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-card via-card to-secondary/50 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Earn Rewards</h4>
                    <p className="text-sm text-muted-foreground">Share Fundi with your network</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 bg-transparent text-sm text-foreground outline-none"
                    />
                    <Button size="sm" variant="ghost" onClick={copyReferralLink} className="shrink-0">
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                      <p className="text-2xl font-bold text-foreground">$5</p>
                      <p className="text-xs text-muted-foreground">per signup</p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                      <p className="text-2xl font-bold text-foreground">$20</p>
                      <p className="text-xs text-muted-foreground">per subscription</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={onClose}
                className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
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
