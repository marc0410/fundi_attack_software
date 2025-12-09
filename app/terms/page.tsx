import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <FileText className="w-4 h-4 text-red-400" />
              <span className="text-sm text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Fvundi's services, you agree to be bound by these Terms and Conditions. If you
                  do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
                <p>
                  fvundi provides AI-powered financial intelligence services for small and medium enterprises (SMEs),
                  including automated accounting, encrypted analytics, and investor-ready reports.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p>
                  Users are responsible for maintaining the confidentiality of their account credentials and for all
                  activities that occur under their account. Users must provide accurate information and comply with all
                  applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Processing</h2>
                <p>
                  fvundi processes all financial data using homomorphic encryption and zero-knowledge proofs. We never
                  access or view raw financial data. All processing occurs on encrypted data only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of Fvundi's services are owned by fvundi and are protected by
                  international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  fvundi shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                  resulting from your use of or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact</h2>
                <p>For questions about these Terms, please contact us at legal@fundi.ai</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
