import Link from "next/link"
import { Shield } from "lucide-react"

export function MarketplaceFooter() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-xl text-white tracking-tight">Fundi</span>
            <span className="text-xs text-white/50 border border-white/20 px-2 py-0.5 rounded-full ml-2">
              Marketplace
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/marketplace" className="text-sm text-white/60 hover:text-white transition-colors">
              Trust Arena
            </Link>
            <Link href="/marketplace#funding" className="text-sm text-white/60 hover:text-white transition-colors">
              Funding
            </Link>
            <Link href="/marketplace#security" className="text-sm text-white/60 hover:text-white transition-colors">
              Security
            </Link>
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
              Main Site
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white/40 text-sm">
            <Shield className="w-4 h-4" />
            <span>Zero-Exposure Standard</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Fvundi. All rights reserved. Powered by cryptographic trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
