"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn } from "lucide-react"

export function MarketplaceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-xl text-white tracking-tight">Fundi</span>
            <span className="text-xs text-white/50 border border-white/20 px-2 py-0.5 rounded-full ml-2">
              Marketplace
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#trust-arena" className="text-sm text-white/60 hover:text-white transition-colors">
              Trust Arena
            </Link>
            <Link href="#funding" className="text-sm text-white/60 hover:text-white transition-colors">
              Funding
            </Link>
            <Link href="#rankings" className="text-sm text-white/60 hover:text-white transition-colors">
              Rankings
            </Link>
            <Link href="#security" className="text-sm text-white/60 hover:text-white transition-colors">
              Security
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-sm text-white/80 hover:text-white hover:bg-white/10">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0">
              Start Investing
            </Button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link href="#trust-arena" className="text-sm text-white/60 hover:text-white transition-colors">
              Trust Arena
            </Link>
            <Link href="#funding" className="text-sm text-white/60 hover:text-white transition-colors">
              Funding
            </Link>
            <Link href="#rankings" className="text-sm text-white/60 hover:text-white transition-colors">
              Rankings
            </Link>
            <Link href="#security" className="text-sm text-white/60 hover:text-white transition-colors">
              Security
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <Button variant="ghost" className="justify-start text-white/80">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">Start Investing</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
