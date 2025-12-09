"use client"

import { useState } from "react"
import { X, Gift, Copy, Check, Sparkles, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReferEarnModalProps {
  isOpen: boolean
  onClose: () => void
  isAutoVerified?: boolean
}

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/L9KJXDpPjFSGg14lOYYK8T?mode=hqrt3"

export function ReferEarnModal({ isOpen, onClose }: ReferEarnModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(WHATSAPP_COMMUNITY_LINK)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleJoinCommunity = () => {
    window.open(WHATSAPP_COMMUNITY_LINK, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal - Dual Panel */}
      <div className="relative w-full max-w-4xl mx-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Panel - Promotional */}
          <div className="relative p-8 bg-gradient-to-br from-secondary/50 to-background border-r border-border hidden lg:flex flex-col justify-center">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />

            {/* Gift icon with glow */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30">
                <Gift className="w-10 h-10 text-white" />
              </div>
              {/* Animated glow ring */}
              <div
                className="absolute inset-0 w-20 h-20 rounded-2xl bg-red-500/20 animate-ping"
                style={{ animationDuration: "2s" }}
              />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Join the fvundi Early Community</h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Join the fvundi early community and unlock exclusive perks, early access updates, and special launch
              rewards.
            </p>

            {/* Benefits list */}
            <div className="space-y-3">
              {[
                "Exclusive early access to new features",
                "Direct connection with the fvundi team",
                "Special launch rewards for early members",
                "Priority support and community insights",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-red-400" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Action */}
          <div className="relative p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Mobile header (hidden on lg) */}
            <div className="lg:hidden mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4">
                <Gift className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground mb-2">Invite. Join. Unlock Rewards.</h2>

            {/* Early Supporter Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">Early Supporter Advantage Activated</span>
            </div>

            {/* Action buttons container */}
            <div className="space-y-4 mb-6">
              {/* Primary Button - Join Community */}
              <Button
                onClick={handleJoinCommunity}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 py-6 text-base font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Continue & Join
              </Button>

              {/* Secondary - Copy & Share */}
              <div className="p-4 bg-secondary/30 rounded-xl border border-border">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground mb-1">Copy & Share</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {WHATSAPP_COMMUNITY_LINK.substring(0, 40)}...
                    </p>
                  </div>
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="px-4 border-border hover:bg-secondary/50 bg-transparent flex-shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              When someone joins the community using the link you share, you both unlock early-bird perks and exclusive
              fvundi launch benefits.
            </p>

            {/* Hidden placeholder for future referral logic */}
            <div id="referralLogicPlaceholder" className="hidden" data-future-integration="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
