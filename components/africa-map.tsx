"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"

const signupLocations = [
  { city: "Lagos", country: "Nigeria", x: 48, y: 52, count: 142 },
  { city: "Nairobi", country: "Kenya", x: 75, y: 58, count: 98 },
  { city: "Accra", country: "Ghana", x: 42, y: 54, count: 67 },
  { city: "Abidjan", country: "Côte d'Ivoire", x: 36, y: 52, count: 45 },
  { city: "Johannesburg", country: "South Africa", x: 60, y: 85, count: 84 },
  { city: "Cairo", country: "Egypt", x: 65, y: 18, count: 53 },
  { city: "Casablanca", country: "Morocco", x: 38, y: 15, count: 31 },
  { city: "Dar es Salaam", country: "Tanzania", x: 72, y: 65, count: 29 },
  { city: "Kigali", country: "Rwanda", x: 68, y: 58, count: 24 },
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

  const activeLocation = activePoint !== null ? signupLocations[activePoint] : null

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

          <div className="h-16 mt-6 flex items-center justify-center">
            {activeLocation ? (
              <div className="animate-in fade-in zoom-in duration-200 flex flex-col items-center">
                <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  {activeLocation.country}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeLocation.city} — {activeLocation.count} signups
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground/50 text-sm italic">Hover on a point to see details</p>
            )}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Map Container */}
          <div className="relative aspect-square max-w-lg mx-auto">
            <Image src="/images/africa-vector.png" alt="Map of Africa" fill className="object-contain opacity-40" />

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

                {/* Point - enhanced scale on hover */}
                <div
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    activePoint === index
                      ? "bg-gradient-to-r from-red-500 to-red-600 scale-[2] shadow-lg shadow-red-500/50"
                      : pulseIndex === index
                        ? "bg-gradient-to-r from-red-500 to-red-600 scale-150"
                        : "bg-red-500/70"
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse opacity-50" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm text-foreground font-medium">9 countries</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <span className="text-sm text-foreground font-medium">572+ businesses</span>
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
