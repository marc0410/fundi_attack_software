"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"

const signupLocations = [
  { city: "Lagos", country: "Nigeria", x: 42, y: 48, count: 142 },
  { city: "Nairobi", country: "Kenya", x: 68, y: 52, count: 98 },
  { city: "Accra", country: "Ghana", x: 38, y: 50, count: 67 },
  { city: "Johannesburg", country: "South Africa", x: 56, y: 78, count: 84 },
  { city: "Cairo", country: "Egypt", x: 60, y: 22, count: 53 },
  { city: "Casablanca", country: "Morocco", x: 32, y: 18, count: 31 },
  { city: "Dar es Salaam", country: "Tanzania", x: 70, y: 58, count: 29 },
  { city: "Kigali", country: "Rwanda", x: 62, y: 52, count: 24 },
]

export function AfricaMap() {
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [pulseIndex, setPulseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % signupLocations.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Africa is{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">ready</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Businesses across the continent are joining the waitlist
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Map Container */}
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Africa silhouette (simplified) */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(127, 127, 127, 0.1)" />
                  <stop offset="100%" stopColor="rgba(127, 127, 127, 0.05)" />
                </linearGradient>
              </defs>
              {/* Simplified Africa outline */}
              <path
                d="M45 10 L55 8 L62 12 L68 15 L70 22 L65 28 L68 35 L72 42 L75 50 L72 58 L68 65 L62 72 L55 78 L48 82 L42 80 L38 75 L35 68 L32 60 L28 52 L25 45 L28 38 L32 32 L35 25 L38 18 L42 12 Z"
                fill="url(#africaGradient)"
                stroke="rgba(127, 127, 127, 0.2)"
                strokeWidth="0.5"
              />
            </svg>

            {/* Signup points */}
            {signupLocations.map((location, index) => (
              <div
                key={location.city}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onMouseEnter={() => setActivePoint(index)}
                onMouseLeave={() => setActivePoint(null)}
              >
                {/* Pulse ring */}
                <div
                  className={`absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    pulseIndex === index ? "animate-ping" : ""
                  }`}
                  style={{
                    background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
                    left: "50%",
                    top: "50%",
                  }}
                />

                {/* Point */}
                <div
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    activePoint === index || pulseIndex === index
                      ? "bg-gradient-to-r from-red-500 to-red-600 scale-150"
                      : "bg-red-500/70"
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse opacity-50" />
                </div>

                {/* Tooltip */}
                {activePoint === index && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg bg-card border border-border shadow-lg whitespace-nowrap z-10">
                    <p className="text-sm font-medium text-foreground">
                      {location.city}, {location.country}
                    </p>
                    <p className="text-xs text-muted-foreground">{location.count} signups</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm text-foreground font-medium">8 countries</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <span className="text-sm text-foreground font-medium">527+ businesses</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-red-400 font-medium">Live signups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
