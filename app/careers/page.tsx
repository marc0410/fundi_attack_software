import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Africa)",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Nairobi, Kenya",
    type: "Full-time",
  },
  {
    title: "Cryptography Researcher",
    department: "Research",
    location: "Remote (Global)",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Briefcase className="w-4 h-4 text-red-400" />
              <span className="text-sm text-muted-foreground">Careers</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Join the{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Future</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build the financial infrastructure that will empower millions of African businesses.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {openPositions.map((position, index) => (
              <Link
                key={index}
                href="#"
                className="block p-6 rounded-2xl border border-border bg-card/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-red-400 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{position.department}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                    <ArrowRight className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Don't see your role?</h3>
            <p className="text-muted-foreground mb-4">We're always looking for talented people. Send us your CV.</p>
            <Link
              href="mailto:careers@fundi.ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all"
            >
              Send Your CV
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
