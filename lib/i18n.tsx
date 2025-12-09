"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "en" | "fr"

const translations = {
  en: {
    // Header
    features: "Features",
    howItWorks: "How it Works",
    security: "Security",
    marketplace: "Marketplace",
    blog: "Blog",
    pricing: "Pricing",
    talent: "Talent",
    referEarn: "Refer & Earn",
    bookDemo: "Book a Demo",

    // Hero
    heroTagline: "Privacy-first financial intelligence",
    heroTitle1: "Your AI works for you,",
    heroTitle2: "never looks at you",
    heroSubtitle:
      "AI-powered financial intelligence for African and emerging-market SMEs. Get professional reports, encrypted insights, and business clarity — all without exposing your data.",
    watchDemo: "Watch Demo",
    trustedBy: "Trusted by forward-thinking businesses across Africa",

    // Value Proposition
    valueTitle: "Financial clarity, total privacy",
    valueSubtitle:
      "fvundi transforms how African SMEs manage finances — with AI that analyzes everything but sees nothing.",
    automatedAccounting: "Automated Accounting",
    automatedAccountingDesc:
      "Upload photos of receipts, invoices, or bank statements. Our AI extracts, categorizes, and reconciles automatically.",
    encryptedAI: "Encrypted AI Analysis",
    encryptedAIDesc:
      "Homomorphic encryption + zero-knowledge proofs. Your data is processed in encrypted form — we literally cannot see it.",
    professionalReports: "Professional Reports",
    professionalReportsDesc:
      "Generate investor-ready financial statements, cash flow reports, and business valuations in seconds.",
    smartIntegrations: "Smart Integrations",
    smartIntegrationsDesc:
      "Connect mobile money, bank accounts, and accounting tools. Data flows securely without manual entry.",
    crowdfunding: "Crowdfunding Marketplace",
    crowdfundingDesc:
      "A next-generation funding marketplace where SMEs raise capital securely through certified and encrypted data.",
    esgModule: "ESG & Impact Module",
    esgModuleDesc:
      "An intelligent engine that automatically calculates carbon footprint, social impact, and governance quality.",

    // How it Works
    howItWorksTitle: "How fvundi works",
    howItWorksSubtitle: "From raw data to financial intelligence in three secure steps",
    step1Title: "Connect Your Data",
    step1Desc: "Upload photos, connect mobile money, import spreadsheets, or sync bank feeds. We accept it all.",
    step2Title: "Encrypted Processing",
    step2Desc:
      "Your data is encrypted before it leaves your device. Our AI analyzes patterns without ever seeing raw numbers.",
    step3Title: "Instant Intelligence",
    step3Desc: "Get professional reports, risk alerts, and actionable insights — all verified by cryptographic proofs.",

    // Features
    featuresTitle: "Everything you need",
    featuresSubtitle: "Powerful features designed for African businesses, built with world-class security",
    balanceSheet: "Balance Sheet Generation",
    balanceSheetDesc: "Automated, accurate balance sheets generated from your connected data sources.",
    cashFlow: "Cash Flow Insights",
    cashFlowDesc: "Real-time visibility into money movement with predictive analytics.",
    riskDetection: "Risk Detection",
    riskDetectionDesc: "AI-powered early warning system for financial risks and anomalies.",
    businessValuation: "Business Valuation",
    businessValuationDesc: "Get fair market valuations based on your encrypted financial data.",
    investorDocs: "Investor-Ready Documents",
    investorDocsDesc: "Generate pitch decks, financial summaries, and due diligence packages.",
    taxCompliance: "Tax Compliance",
    taxComplianceDesc: "Automated tax calculations and compliance reports for local regulations.",

    // Security
    securityTitle: "AI that analyzes without seeing",
    securitySubtitle: "Your financial data never leaves your control. Our AI processes everything in encrypted form.",
    homomorphicEncryption: "Homomorphic Encryption",
    homomorphicEncryptionDesc: "Mathematical operations on encrypted data. We compute on ciphertext, never plaintext.",
    zkProofs: "Zero-Knowledge Proofs",
    zkProofsDesc: "Verify financial statements without revealing underlying data.",
    endToEnd: "End-to-End Security",
    endToEndDesc: "Military-grade encryption from your device to our servers and back.",

    // Waitlist
    earlyAccess: "Early Access",
    joinWaitlist: "Join the Waitlist",
    waitlistDesc:
      "Be among the first to experience AI-powered financial intelligence. Secure your spot in the future of SME finance.",
    businessesInLine: "businesses in line",
    reserveSpot: "Reserve My Spot",
    noSpam: "No spam. Only updates on our launch.",
    submitting: "Reserving...",
    successTitle: "You're on the list!",
    successDesc:
      "We'll notify you as soon as fvundi launches. Thank you for believing in the future of African finance.",

    // Pricing
    pricingTitle: "Simple, transparent",
    pricingHighlight: "pricing",
    pricingSubtitle: "Choose the plan that fits your ambition. Scale up anytime as your journey evolves.",
    startupsSmEs: "Startups & SMEs",
    investors: "Investors",
    getStarted: "Get Started",
    preOrderNow: "Pre-Order Now",
    contactSales: "Contact Sales",
    customSolution: "Need a custom solution for your organization?",
    mostPopular: "MOST POPULAR",

    // Pre-Order Modal
    preOrderTitle: "Pre-Order Your Plan",
    preOrderDesc: "Secure your spot and lock in early-bird pricing. You won't be charged until launch.",
    preOrderBenefits: "Early adopter benefits:",
    preOrderBenefit1: "20% lifetime discount",
    preOrderBenefit2: "Priority onboarding",
    preOrderBenefit3: "Exclusive beta access",
    preOrderBenefit4: "Dedicated support line",
    confirmPreOrder: "Confirm Pre-Order",

    // Insight Pulse
    realTimeIntelligence: "Real-time Intelligence",
    insightPulseTitle: "Fvundi",
    insightPulseHighlight: "Insight Pulse",
    insightPulseDesc: "Encrypted micro-advisory signals that guide without exposing. Pure intelligence, zero raw data.",
    encryptedSignalEngine: "Encrypted Signal Engine",
    encryptedSignalEngineDesc:
      "fvundi Insight Pulse is a real-time signal engine that sends instant, secure micro-notifications based on projected performance patterns.",
    zeroDataExposure: "Zero Data Exposure",
    guidanceWithoutAccess: "Guidance without raw access",
    realTimeSignals: "Real-time Signals",
    instantAlerts: "Instant encrypted alerts",
    smeStartups: "SMEs / Startups",
    allSignalsEncrypted: "All signals encrypted end-to-end",

    // Africa Map / Country Carousel
    africaReady: "Africa is",
    readyHighlight: "ready",
    africaReadyDesc: "Businesses across the continent are joining the waitlist",
    countries: "countries",
    businesses: "businesses",
    liveSignups: "Live pre-orders",
    hoverDetails: "Hover on a point to see details",
    signups: "pre-orders",

    // CTA
    ctaTitle: "Ready to transform your financial intelligence?",
    ctaSubtitle: "Join forward-thinking African businesses using AI that respects your privacy.",
    startFree: "Start for Free",
    talkToSales: "Talk to Sales",

    // Footer
    product: "Product",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    about: "About",
    careers: "Careers",
    press: "Press",
    documentation: "Documentation",
    helpCenter: "Help Center",
    apiReference: "API Reference",
    status: "Status",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    allRightsReserved: "All rights reserved.",
    footerDesc: "AI-powered financial intelligence for African and emerging-market SMEs.",

    // FAQ
    faqTitle: "Frequently Asked",
    faqHighlight: "Questions",
    faqSubtitle: "Everything you need to know about fvundi and how it works.",
    faqGeneral: "General",
    faqPricing: "Pricing",
    faqSecurity: "Security",
    faqSMEs: "SMEs",
    faqInvestors: "Investors",

    // Common
    learnMore: "Learn More",
    exploreMore: "Explore More",
    today: "today",
    emailPlaceholder: "Enter your email",
  },
  fr: {
    // Header
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    security: "Sécurité",
    marketplace: "Marketplace",
    blog: "Blog",
    pricing: "Tarifs",
    talent: "Talents",
    referEarn: "Parrainage",
    bookDemo: "Réserver une démo",

    // Hero
    heroTagline: "Intelligence financière axée sur la confidentialité",
    heroTitle1: "Votre IA travaille pour vous,",
    heroTitle2: "sans jamais vous regarder",
    heroSubtitle:
      "Intelligence financière alimentée par l'IA pour les PME africaines et des marchés émergents. Obtenez des rapports professionnels, des analyses cryptées et une clarté commerciale — le tout sans exposer vos données.",
    watchDemo: "Voir la démo",
    trustedBy: "Approuvé par des entreprises visionnaires à travers l'Afrique",

    // Value Proposition
    valueTitle: "Clarté financière, confidentialité totale",
    valueSubtitle:
      "fvundi transforme la gestion financière des PME africaines — avec une IA qui analyse tout sans rien voir.",
    automatedAccounting: "Comptabilité Automatisée",
    automatedAccountingDesc:
      "Téléchargez des photos de reçus, factures ou relevés bancaires. Notre IA extrait, catégorise et réconcilie automatiquement.",
    encryptedAI: "Analyse IA Cryptée",
    encryptedAIDesc:
      "Chiffrement homomorphe + preuves à divulgation nulle. Vos données sont traitées sous forme cryptée — nous ne pouvons littéralement pas les voir.",
    professionalReports: "Rapports Professionnels",
    professionalReportsDesc:
      "Générez des états financiers, des rapports de trésorerie et des évaluations d'entreprise prêts pour les investisseurs en quelques secondes.",
    smartIntegrations: "Intégrations Intelligentes",
    smartIntegrationsDesc:
      "Connectez mobile money, comptes bancaires et outils comptables. Les données circulent en toute sécurité sans saisie manuelle.",
    crowdfunding: "Marketplace de Financement",
    crowdfundingDesc:
      "Une marketplace de financement nouvelle génération où les PME lèvent des capitaux en toute sécurité grâce à des données certifiées et cryptées.",
    esgModule: "Module ESG & Impact",
    esgModuleDesc:
      "Un moteur intelligent qui calcule automatiquement l'empreinte carbone, l'impact social et la qualité de gouvernance.",

    // How it Works
    howItWorksTitle: "Comment fvundi fonctionne",
    howItWorksSubtitle: "Des données brutes à l'intelligence financière en trois étapes sécurisées",
    step1Title: "Connectez vos données",
    step1Desc:
      "Téléchargez des photos, connectez mobile money, importez des tableurs ou synchronisez vos flux bancaires.",
    step2Title: "Traitement crypté",
    step2Desc:
      "Vos données sont cryptées avant de quitter votre appareil. Notre IA analyse les tendances sans jamais voir les chiffres bruts.",
    step3Title: "Intelligence instantanée",
    step3Desc:
      "Obtenez des rapports professionnels, des alertes de risque et des insights actionnables — tous vérifiés par des preuves cryptographiques.",

    // Features
    featuresTitle: "Tout ce dont vous avez besoin",
    featuresSubtitle:
      "Des fonctionnalités puissantes conçues pour les entreprises africaines, construites avec une sécurité de classe mondiale",
    balanceSheet: "Génération de Bilan",
    balanceSheetDesc: "Bilans automatisés et précis générés à partir de vos sources de données connectées.",
    cashFlow: "Analyses de Trésorerie",
    cashFlowDesc: "Visibilité en temps réel sur les mouvements d'argent avec analyses prédictives.",
    riskDetection: "Détection des Risques",
    riskDetectionDesc: "Système d'alerte précoce alimenté par l'IA pour les risques financiers et anomalies.",
    businessValuation: "Évaluation d'Entreprise",
    businessValuationDesc: "Obtenez des évaluations de marché équitables basées sur vos données financières cryptées.",
    investorDocs: "Documents pour Investisseurs",
    investorDocsDesc: "Générez des pitch decks, résumés financiers et dossiers de due diligence.",
    taxCompliance: "Conformité Fiscale",
    taxComplianceDesc: "Calculs fiscaux automatisés et rapports de conformité pour les réglementations locales.",

    // Security
    securityTitle: "Une IA qui analyse sans voir",
    securitySubtitle:
      "Vos données financières ne quittent jamais votre contrôle. Notre IA traite tout sous forme cryptée.",
    homomorphicEncryption: "Chiffrement Homomorphe",
    homomorphicEncryptionDesc:
      "Opérations mathématiques sur données cryptées. Nous calculons sur le chiffré, jamais sur le clair.",
    zkProofs: "Preuves à Divulgation Nulle",
    zkProofsDesc: "Vérifiez les états financiers sans révéler les données sous-jacentes.",
    endToEnd: "Sécurité de Bout en Bout",
    endToEndDesc: "Chiffrement de niveau militaire de votre appareil à nos serveurs et retour.",

    // Waitlist
    earlyAccess: "Accès Anticipé",
    joinWaitlist: "Rejoindre la Liste d'Attente",
    waitlistDesc:
      "Soyez parmi les premiers à découvrir l'intelligence financière alimentée par l'IA. Réservez votre place dans l'avenir de la finance PME.",
    businessesInLine: "entreprises en attente",
    reserveSpot: "Réserver Ma Place",
    noSpam: "Pas de spam. Uniquement des mises à jour sur notre lancement.",
    submitting: "Réservation...",
    successTitle: "Vous êtes sur la liste !",
    successDesc:
      "Nous vous notifierons dès le lancement de Fvundi. Merci de croire en l'avenir de la finance africaine.",

    // Pricing
    pricingTitle: "Tarification simple et",
    pricingHighlight: "transparente",
    pricingSubtitle: "Choisissez le plan qui correspond à votre ambition. Évoluez à tout moment.",
    startupsSmEs: "Startups & PME",
    investors: "Investisseurs",
    getStarted: "Commencer",
    preOrderNow: "Pré-commander",
    contactSales: "Contacter les Ventes",
    customSolution: "Besoin d'une solution personnalisée pour votre organisation ?",
    mostPopular: "PLUS POPULAIRE",

    // Pre-Order Modal
    preOrderTitle: "Pré-commander Votre Plan",
    preOrderDesc:
      "Réservez votre place et bénéficiez des tarifs early-bird. Vous ne serez pas débité avant le lancement.",
    preOrderBenefits: "Avantages early adopter :",
    preOrderBenefit1: "20% de réduction à vie",
    preOrderBenefit2: "Onboarding prioritaire",
    preOrderBenefit3: "Accès bêta exclusif",
    preOrderBenefit4: "Ligne de support dédiée",
    confirmPreOrder: "Confirmer la Pré-commande",

    // Insight Pulse
    realTimeIntelligence: "Intelligence en Temps Réel",
    insightPulseTitle: "Fvundi",
    insightPulseHighlight: "Insight Pulse",
    insightPulseDesc:
      "Signaux micro-consultatifs cryptés qui guident sans exposer. Intelligence pure, zéro donnée brute.",
    encryptedSignalEngine: "Moteur de Signaux Cryptés",
    encryptedSignalEngineDesc:
      "fvundi Insight Pulse est un moteur de signaux en temps réel qui envoie des micro-notifications sécurisées instantanées basées sur les tendances de performance projetées.",
    zeroDataExposure: "Zéro Exposition de Données",
    guidanceWithoutAccess: "Guidage sans accès brut",
    realTimeSignals: "Signaux Temps Réel",
    instantAlerts: "Alertes cryptées instantanées",
    smeStartups: "PME / Startups",
    allSignalsEncrypted: "Tous les signaux cryptés de bout en bout",

    // Africa Map / Country Carousel
    africaReady: "L'Afrique est",
    readyHighlight: "prête",
    africaReadyDesc: "Des entreprises de tout le continent rejoignent la liste d'attente",
    countries: "pays",
    businesses: "entreprises",
    liveSignups: "Inscriptions en direct",
    hoverDetails: "Survolez un point pour voir les détails",
    signups: "inscriptions",

    // CTA
    ctaTitle: "Prêt à transformer votre intelligence financière ?",
    ctaSubtitle: "Rejoignez les entreprises africaines visionnaires utilisant une IA qui respecte votre vie privée.",
    startFree: "Commencer Gratuitement",
    talkToSales: "Parler aux Ventes",

    // Footer
    product: "Produit",
    company: "Entreprise",
    resources: "Ressources",
    legal: "Légal",
    about: "À propos",
    careers: "Carrières",
    press: "Presse",
    documentation: "Documentation",
    helpCenter: "Centre d'aide",
    apiReference: "Référence API",
    status: "Statut",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
    allRightsReserved: "Tous droits réservés.",
    footerDesc: "Intelligence financière alimentée par l'IA pour les PME africaines et des marchés émergents.",

    // FAQ
    faqTitle: "Questions",
    faqHighlight: "Fréquentes",
    faqSubtitle: "Tout ce que vous devez savoir sur fvundi et son fonctionnement.",
    faqGeneral: "Général",
    faqPricing: "Tarifs",
    faqSecurity: "Sécurité",
    faqSMEs: "PME",
    faqInvestors: "Investisseurs",

    // Common
    learnMore: "En savoir plus",
    exploreMore: "Explorer Plus",
    today: "aujourd'hui",
    emailPlaceholder: "Entrez votre email",
  },
} as const

type TranslationKey = keyof typeof translations.en

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const defaultContextValue: I18nContextType = {
  locale: "en",
  setLocale: () => {},
  t: (key: TranslationKey) => translations.en[key] || key,
}

const I18nContext = createContext<I18nContextType>(defaultContextValue)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] || translations.en[key] || key
    },
    [locale],
  )

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  return context
}

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("fr")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          locale === "fr"
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
    </div>
  )
}
