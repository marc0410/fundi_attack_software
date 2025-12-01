"use client"

import { Rocket } from "lucide-react"

export function BetaAnnouncement() {
  return (
    <div className="relative bg-gradient-to-r from-background via-card to-background border-y border-border py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
            <Rocket className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-sm font-medium text-foreground tracking-wide">
            Beta Launch —{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-bold">
              Q1 2026
            </span>
            . Get ready.
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-px h-4 bg-border" />
            <span className="text-xs text-muted-foreground">Countdown begins</span>
          </div>
        </div>
      </div>
    </div>
  )
}
