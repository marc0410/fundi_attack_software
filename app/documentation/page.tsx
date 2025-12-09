import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Book, Code, Zap, Shield, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

const docSections = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick start guide to set up your Fundi account and connect your first data source.",
    links: ["Installation", "Quick Start", "First Report"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation for developers integrating Fundi into their workflows.",
    links: ["Authentication", "Endpoints", "Webhooks"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Learn about our encryption protocols, zero-knowledge proofs, and data protection.",
    links: ["Encryption", "ZK Proofs", "Compliance"],
  },
  {
    icon: FileText,
    title: "Reports",
    description: "Understanding and customizing your financial reports and analytics.",
    links: ["Balance Sheets", "Cash Flow", "Valuations"],
  },
]

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Book className="w-4 h-4 text-red-400" />
              <span className="text-sm text-muted-foreground">Documentation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Fundi <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Docs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate, customize, and maximize your Fundi experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {docSections.map((section, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 mb-4">
                  <section.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-400 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need help?</h3>
            <p className="text-muted-foreground mb-4">Our support team is available 24/7 to assist you.</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
