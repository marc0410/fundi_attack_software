"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Briefcase,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  Award,
  CheckCircle,
  ChevronRight,
} from "lucide-react"

// Sample talent profiles
const talentProfiles = [
  {
    name: "Amina Okonkwo",
    role: "Data Analyst",
    location: "Lagos, Nigeria",
    university: "University of Lagos",
    skills: ["Python", "SQL", "Tableau", "Excel"],
    avatar: "/young-african-woman-professional-headshot.jpg",
    rating: 4.8,
  },
  {
    name: "Kwame Asante",
    role: "Software Developer",
    location: "Accra, Ghana",
    university: "Ashesi University",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    avatar: "/young-african-man-developer-headshot.jpg",
    rating: 4.9,
  },
  {
    name: "Fatou Diallo",
    role: "Financial Analyst",
    location: "Dakar, Senegal",
    university: "Université Cheikh Anta Diop",
    skills: ["Financial Modeling", "Excel", "Power BI", "Accounting"],
    avatar: "/young-african-woman-finance-professional-headshot.jpg",
    rating: 4.7,
  },
  {
    name: "David Mwangi",
    role: "Product Designer",
    location: "Nairobi, Kenya",
    university: "Strathmore University",
    skills: ["Figma", "UI/UX", "User Research", "Prototyping"],
    avatar: "/young-african-man-designer-headshot.jpg",
    rating: 4.9,
  },
]

const benefits = [
  {
    icon: Rocket,
    title: "Career Launch Pad",
    description: "Get matched with high-growth startups and SMEs looking for fresh talent.",
  },
  {
    icon: GraduationCap,
    title: "Learn & Earn",
    description: "Access free courses on AI, fintech, and business while earning.",
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Connect with industry leaders and experienced professionals.",
  },
  {
    icon: Target,
    title: "Real Projects",
    description: "Work on meaningful projects that impact African businesses.",
  },
]

const stats = [
  { value: "500+", label: "Young Talents" },
  { value: "120+", label: "Partner Companies" },
  { value: "85%", label: "Placement Rate" },
  { value: "26", label: "Countries" },
]

export default function TalentPage() {
  const [showApplyModal, setShowApplyModal] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-medium">For Africans Under 26</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Fvundi{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                Talent
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Connecting Africa's brightest young minds with opportunities in the fvundi ecosystem. Your skills, your
              future, your continent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setShowApplyModal(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-6"
              >
                Join fvundi Talent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 border-border hover:bg-secondary bg-transparent"
              >
                <Briefcase className="mr-2 w-4 h-4" />
                Browse Opportunities
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-card/50 border border-border">
                <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Join{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                fvundi Talent?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              More than a job board — it's your gateway to Africa's fintech revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 mb-4">
                  <benefit.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Talent</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet some of the outstanding young professionals in our network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentProfiles.map((profile, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={profile.avatar || "/placeholder.svg"}
                    alt={profile.name}
                    className="w-14 h-14 rounded-xl object-cover border border-border"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-red-400 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{profile.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3 h-3" />
                  {profile.location}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <GraduationCap className="w-3 h-3" />
                  {profile.university}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {profile.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-secondary/50">
                      {skill}
                    </Badge>
                  ))}
                  {profile.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      +{profile.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-medium text-foreground">{profile.rating}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-0 h-auto"
                  >
                    View Profile
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-border hover:bg-secondary bg-transparent">
              View All Talent
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Works</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Create Your Profile",
                desc: "Sign up and showcase your skills, education, and aspirations.",
              },
              { step: 2, title: "Get Verified", desc: "Complete skill assessments and get your fvundi Talent badge." },
              {
                step: 3,
                title: "Match with Opportunities",
                desc: "Our AI matches you with companies that need your skills.",
              },
              {
                step: 4,
                title: "Start Your Journey",
                desc: "Interview, get hired, and launch your career in Africa's fintech revolution.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-black via-zinc-900 to-black border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <Award className="w-12 h-12 mx-auto text-red-400 mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Launch Your Career?</h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Join thousands of young Africans building the future of finance. Apply now and get matched with your
                dream opportunity.
              </p>
              <Button
                size="lg"
                onClick={() => setShowApplyModal(true)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-6"
              >
                Apply to fvundi Talent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Apply Modal */}
      {showApplyModal && <TalentApplyModal onClose={() => setShowApplyModal(false)} />}
    </main>
  )
}

// Talent Application Modal
function TalentApplyModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    country: "",
    university: "",
    fieldOfStudy: "",
    skills: [] as string[],
    linkedIn: "",
    portfolio: "",
    motivation: "",
  })

  const skillOptions = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Excel",
    "Data Analysis",
    "Financial Modeling",
    "UI/UX Design",
    "Figma",
    "Marketing",
    "Sales",
    "Writing",
    "Project Management",
    "Machine Learning",
    "Cloud Computing",
  ]

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }))
  }

  const handleSubmit = () => {
    // Simulate submission
    setStep(3)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl p-8 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground"
        >
          ×
        </button>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  step >= s
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-red-500" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">Personal Information</h3>
            <p className="text-muted-foreground mb-6">Tell us about yourself</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="john@email.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                    placeholder="22"
                    max="26"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  >
                    <option value="">Select</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">University/Institution</label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="University of Lagos"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Field of Study</label>
                <input
                  type="text"
                  value={formData.fieldOfStudy}
                  onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="Computer Science"
                />
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">Skills & Experience</h3>
            <p className="text-muted-foreground mb-6">What can you bring to the table?</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Select Your Skills</label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        formData.skills.includes(skill)
                          ? "bg-red-500/20 border-red-500/50 text-red-400 border"
                          : "bg-secondary/50 border-border text-muted-foreground border hover:border-muted-foreground"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">LinkedIn Profile (optional)</label>
                <input
                  type="url"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Portfolio/GitHub (optional)</label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground"
                  placeholder="https://github.com/yourprofile"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Why do you want to join fvundi Talent?</label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground h-24 resize-none"
                  placeholder="Tell us about your goals and what excites you about fintech..."
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-6 bg-transparent">
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
              >
                Submit Application
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in zoom-in text-center py-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your application. Our team will review it and get back to you within 48 hours.
            </p>
            <Button onClick={onClose} className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
