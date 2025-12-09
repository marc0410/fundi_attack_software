import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-sm text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Our Commitment to Privacy</h2>
                <p>
                  At Fvundi, privacy isn't just a policy — it's our core technology. We've built our entire platform
                  around the principle that your financial data should remain yours and only yours.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">How We Protect Your Data</h2>
                <p>
                  We use homomorphic encryption, which allows our AI to analyze your data without ever decrypting it.
                  Combined with zero-knowledge proofs, we can verify financial statements and generate insights without
                  accessing the underlying numbers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Data We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (email, name, organization)</li>
                  <li>Encrypted financial data (never stored in raw form)</li>
                  <li>Usage analytics (anonymized)</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Data We Never See</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Raw financial numbers</li>
                  <li>Bank account details</li>
                  <li>Transaction amounts</li>
                  <li>Any unencrypted financial data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your data at any time. You can export your encrypted
                  data or request complete account deletion through your dashboard.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Sharing</h2>
                <p>
                  We never sell your data. We only share verified proofs with third parties (like investors) when you
                  explicitly authorize it, and even then, only the proof — never the underlying data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
                <p>For privacy-related questions, contact our Data Protection Officer at privacy@fundi.ai</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
