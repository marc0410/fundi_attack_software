"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BookDemoModal } from "@/components/book-demo-modal"

export function CTASection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-red-500/20 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
            Ready to transform your financial clarity?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Join thousands of African SMEs who trust fvundi for secure, intelligent financial insights. Start your free
            trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-6 text-base font-medium group"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-base font-medium border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Talk to Sales
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            No credit card required - 14-day free trial - Cancel anytime
          </p>
        </div>
      </section>

      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  )
}
