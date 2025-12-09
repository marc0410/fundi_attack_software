"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Gift } from "lucide-react"
import { BookDemoModal } from "@/components/book-demo-modal"
import { ReferEarnModal } from "@/components/refer-earn-modal"
import { useI18n, LanguageToggle } from "@/lib/i18n"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [referModalOpen, setReferModalOpen] = useState(false)
  const [isAutoVerified, setIsAutoVerified] = useState(false)
  const { t } = useI18n()

  const handleDemoBooked = () => {
    setIsAutoVerified(true)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-xl text-foreground tracking-tight">Fundi</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("features")}
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("howItWorks")}
              </Link>
              <Link href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("security")}
              </Link>
              <Link
                href="/marketplace"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("marketplace")}
              </Link>
              <Link href="/talent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("talent")}
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("blog")}
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("pricing")}
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <LanguageToggle />
              <Button variant="ghost" className="text-sm gap-2" onClick={() => setReferModalOpen(true)}>
                <Gift className="w-4 h-4 text-red-500" />
                {t("referEarn")}
              </Button>
              <Button
                onClick={() => setDemoModalOpen(true)}
                className="text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
              >
                {t("bookDemo")}
              </Button>
            </div>

            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <nav className="flex flex-col px-6 py-4 gap-4">
              <div className="flex justify-center pb-2">
                <LanguageToggle />
              </div>
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("features")}
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("howItWorks")}
              </Link>
              <Link href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("security")}
              </Link>
              <Link
                href="/marketplace"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("marketplace")}
              </Link>
              <Link href="/talent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("talent")}
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("blog")}
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("pricing")}
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    setReferModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                >
                  <Gift className="w-4 h-4 text-red-500" />
                  {t("referEarn")}
                </Button>
                <Button
                  onClick={() => {
                    setDemoModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0"
                >
                  {t("bookDemo")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} onDemoBooked={handleDemoBooked} />
      <ReferEarnModal
        isOpen={referModalOpen}
        onClose={() => setReferModalOpen(false)}
        isAutoVerified={isAutoVerified}
      />
    </>
  )
}
