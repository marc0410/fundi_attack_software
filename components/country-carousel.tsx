"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const countries = [
  { name: "Nigeria", flag: "🇳🇬", signups: 142, city: "Lagos" },
  { name: "Kenya", flag: "🇰🇪", signups: 98, city: "Nairobi" },
  { name: "South Africa", flag: "🇿🇦", signups: 84, city: "Johannesburg" },
  { name: "Ghana", flag: "🇬🇭", signups: 67, city: "Accra" },
  { name: "Egypt", flag: "🇪🇬", signups: 53, city: "Cairo" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", signups: 45, city: "Abidjan" },
  { name: "Morocco", flag: "🇲🇦", signups: 31, city: "Casablanca" },
  { name: "Tanzania", flag: "🇹🇿", signups: 29, city: "Dar es Salaam" },
  { name: "Rwanda", flag: "🇷🇼", signups: 24, city: "Kigali" },
  { name: "Senegal", flag: "🇸🇳", signups: 21, city: "Dakar" },
  { name: "Ethiopia", flag: "🇪🇹", signups: 18, city: "Addis Ababa" },
  { name: "Uganda", flag: "🇺🇬", signups: 15, city: "Kampala" },
]

export function CountryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const { t } = useI18n()

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const scrollEl = scrollRef.current
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkScroll)
      return () => scrollEl.removeEventListener("scroll", checkScroll)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const totalSignups = countries.reduce((acc, c) => acc + c.signups, 0)

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {t("africaReady")}{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {t("readyHighlight")}
            </span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">{t("africaReadyDesc")}</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all ${
              canScrollLeft ? "opacity-100 hover:bg-secondary" : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all ${
              canScrollRight ? "opacity-100 hover:bg-secondary" : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {countries.map((country, index) => (
              <div
                key={country.name}
                className="flex-shrink-0 w-[200px] p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h4 className="font-semibold text-foreground mb-1">{country.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{country.city}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400 animate-pulse" />
                  <span className="text-sm font-medium text-red-400">
                    {country.signups} {t("signups")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm text-foreground font-medium">
              {countries.length} {t("countries")}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <span className="text-sm text-foreground font-medium">
              {totalSignups}+ {t("businesses")}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-red-400 font-medium">{t("liveSignups")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
