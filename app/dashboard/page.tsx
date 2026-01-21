"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowLeft, 
  Info, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Percent,
  Briefcase,
  BarChart3,
  PieChart,
  LineChart,
  Shield,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FileText,
  Download,
  Share2,
  Bookmark,
  Clock,
  Users,
  Globe,
  Layers,
  Activity,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Types
interface FinancialInputs {
  revenue: number
  ebitda: number
  debt: number
  sector: string
  region: string
  yoyGrowth: number
  cashReserves: number
}

interface RiskScore {
  score: number
  category: "Low" | "Moderate" | "High"
  drivers: { name: string; impact: number }[]
  sectorAverage: number
}

interface AIInsight {
  type: "strength" | "risk" | "opportunity"
  text: string
  confidence: "Low" | "Medium" | "High"
}

// Tooltip Component
function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false)
  
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="ml-1 text-slate-400 hover:text-slate-300 transition-colors"
      >
        <Info className="w-3.5 h-3.5" />
      </button>
      {show && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 w-56 px-3 py-2 text-xs text-white bg-slate-800 rounded-lg shadow-xl border border-slate-700">
          {text}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 rotate-45 border-l border-b border-slate-700" />
        </div>
      )}
    </div>
  )
}

// Interactive Hint Component
function InteractiveHint({ text }: { text: string }) {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <span className="flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        {text}
      </span>
    </div>
  )
}

// French translations
const fr = {
  back: "Retour",
  save: "Sauvegarder",
  share: "Partager",
  exportPdf: "Exporter PDF",
  investmentGrade: "Qualite Investissement",
  recommended: "Recommande",
  riskLevel: "Niveau de Risque",
  moderate: "Modere",
  low: "Faible",
  high: "Eleve",
  confidence: "Confiance",
  dataQuality: "Qualite des Donnees",
  excellent: "Excellente",
  aiAnalysisComplete: "Analyse IA Terminee",
  readyForDueDiligence: "Pret pour Due Diligence",
  financialInputs: "Donnees Financieres",
  revenue: "Chiffre d'Affaires (M$)",
  revenueTooltip: "Chiffre d'affaires annuel total en millions USD",
  ebitda: "EBITDA (M$)",
  ebitdaTooltip: "Benefices avant interets, impots, depreciation et amortissement",
  totalDebt: "Dette Totale (M$)",
  debtTooltip: "Dette totale incluant prets et obligations",
  sector: "Secteur",
  sectorTooltip: "Classification industrielle principale",
  region: "Region",
  regionTooltip: "Region geographique d'operation",
  yoyGrowth: "Croissance Annuelle (%)",
  yoyGrowthTooltip: "Taux de croissance du chiffre d'affaires sur un an",
  cashReserves: "Reserves de Tresorerie (M$)",
  cashReservesTooltip: "Liquidites et equivalents disponibles",
  recalculateScore: "Recalculer le Score",
  calculating: "Calcul en cours...",
  analystNotes: "Notes d'Analyste",
  addObservations: "Ajoutez vos observations...",
  creditRiskScore: "Score de Risque Credit",
  aiPoweredAssessment: "Evaluation assistee par IA",
  updatedAgo: "Mis a jour il y a 2min",
  risk: "Risque",
  sectorAvg: "Moy. Secteur:",
  ebitdaMargin: "Marge EBITDA",
  debtEbitda: "Dette/EBITDA",
  vsLastQuarter: "vs trimestre precedent",
  aboveSectorAvg: "Au-dessus moy. secteur",
  aiGeneratedInsights: "Analyses Generees par IA",
  probabilityOfDefault: "Probabilite de Defaut",
  currentVsPredicted: "Actuel vs Prevu",
  predicted: "Prevu:",
  sectorBenchmarking: "Benchmark Sectoriel",
  companyDataset: "Base de 500 entreprises",
  yourSme: "Votre PME",
  percentileRank: "Rang Percentile",
  vsBottomQuartile: "vs Quartile Inferieur",
  vsTopQuartile: "vs Quartile Superieur",
  bottomQuartile: "25% Inferieur",
  topQuartile: "25% Superieur",
  cashFlowSolvencyTrends: "Tendances de Solvabilite",
  vsDebtObligations: "vs Obligations de Dette",
  cashFlow: "Flux de Tresorerie",
  debtObligations: "Obligations de Dette",
  liquidityDip: "Baisse de liquidite",
  liveDataConnection: "Connexion Donnees en Direct",
  lastUpdated: "Derniere maj:",
  dataSource: "Source:",
  fvundiEncrypted: "Fvundi Chiffre",
  topScoreDrivers: "Facteurs Cles du Score",
  debtRatio: "Ratio d'Endettement",
  industryRisk: "Risque Sectoriel",
  growthRate: "Taux de Croissance",
  technology: "Technologie",
  agriculture: "Agriculture",
  finance: "Finance",
  manufacturing: "Industrie",
  retail: "Commerce",
  westAfrica: "Afrique de l'Ouest",
  eastAfrica: "Afrique de l'Est",
  southernAfrica: "Afrique Australe",
  northAfrica: "Afrique du Nord",
  centralAfrica: "Afrique Centrale",
  strength: "Force",
  opportunity: "Opportunite",
  confidenceLabel: "Confiance:",
  monthPd12: "PD 12 Mois",
  monthPd24: "PD 24 Mois",
  monthPd36: "PD 36 Mois",
  hoverForDrivers: "Survolez pour les facteurs",
  clickToSeeTrend: "Cliquez pour voir la tendance"
}

// Risk Gauge Component
function RiskGauge({ score, sectorAverage, drivers }: { score: number; sectorAverage: number; drivers: { name: string; impact: number }[] }) {
  const [showDrivers, setShowDrivers] = useState(false)
  const category = score >= 70 ? "Faible" : score >= 40 ? "Modere" : "Eleve"
  const categoryColor = score >= 70 ? "text-emerald-400" : score >= 40 ? "text-amber-400" : "text-red-400"
  const gaugeColor = score >= 70 ? "#10b981" : score >= 40 ? "#f59e0b" : "#ef4444"
  
  // Calculate gauge arc
  const radius = 80
  const circumference = Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Gauge */}
      <div 
        className="relative cursor-pointer group"
        onMouseEnter={() => setShowDrivers(true)}
        onMouseLeave={() => setShowDrivers(false)}
      >
        {/* Hover hint */}
        <InteractiveHint text={fr.hoverForDrivers} />
        <svg width="200" height="120" viewBox="0 0 200 120">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#1e293b"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Score arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={gaugeColor}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          {/* Sector average indicator */}
          <g transform={`rotate(${180 + (sectorAverage / 100) * 180}, 100, 100)`}>
            <polygon points="100,25 96,35 104,35" fill="#94a3b8" />
          </g>
        </svg>
        
        {/* Score display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <span className="text-4xl font-bold text-white">{score}</span>
          <span className="text-xs text-slate-400 mt-1">/ 100</span>
        </div>
        
        {/* Drivers tooltip */}
        {showDrivers && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-4 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 z-50">
            <p className="text-xs font-medium text-slate-300 mb-3">{fr.topScoreDrivers}</p>
            {drivers.map((driver, i) => (
              <div key={i} className="flex items-center justify-between mb-2 last:mb-0">
                <span className="text-xs text-slate-400">{driver.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${Math.abs(driver.impact)}%`,
                        backgroundColor: driver.impact > 0 ? "#10b981" : "#ef4444"
                      }}
                    />
                  </div>
                  <span className={`text-xs ${driver.impact > 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {driver.impact > 0 ? "+" : ""}{driver.impact}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Category label */}
      <div className={`mt-2 px-4 py-1.5 rounded-full ${
        score >= 70 ? "bg-emerald-500/10 border border-emerald-500/20" :
        score >= 40 ? "bg-amber-500/10 border border-amber-500/20" :
        "bg-red-500/10 border border-red-500/20"
      }`}>
        <span className={`text-sm font-semibold ${categoryColor}`}>
          {fr.risk} {category}
        </span>
      </div>
      
      {/* Sector benchmark */}
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
        <span>{fr.sectorAvg}</span>
        <span className="font-medium text-slate-300">{sectorAverage}</span>
        {score > sectorAverage ? (
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-red-400" />
        )}
      </div>
    </div>
  )
}

// Bar Chart Component
function BarChart({ data, title, subtitle }: { 
  data: { label: string; current: number; predicted?: number }[]; 
  title: string; 
  subtitle?: string 
}) {
  const maxValue = Math.max(...data.flatMap(d => [d.current, d.predicted || 0]))
  
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-sm font-medium text-white">{title}</h4>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
        <BarChart3 className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-400">{item.label}</span>
              <span className="text-xs font-medium text-white">{item.current}%</span>
            </div>
            <div className="relative h-6 bg-slate-700/50 rounded-lg overflow-hidden">
              {/* Current value bar */}
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg transition-all duration-700"
                style={{ width: `${(item.current / maxValue) * 100}%` }}
              />
              {/* Predicted value indicator */}
              {item.predicted && (
                <div 
                  className="absolute inset-y-0 w-0.5 bg-emerald-400"
                  style={{ left: `${(item.predicted / maxValue) * 100}%` }}
                />
              )}
            </div>
            {item.predicted && (
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-0.5 bg-emerald-400 rounded" />
                <span className="text-xs text-emerald-400">{fr.predicted} {item.predicted}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Line Chart Component
function CashFlowChart({ data, debtObligations }: { 
  data: { month: string; value: number }[]; 
  debtObligations: { month: string; value: number }[] 
}) {
  const maxValue = Math.max(...[...data, ...debtObligations].map(d => d.value))
  const minValue = Math.min(...[...data, ...debtObligations].map(d => d.value))
  const range = maxValue - minValue
  
  const getY = (value: number) => 100 - ((value - minValue) / range) * 80 - 10
  
  const cashFlowPath = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = getY(d.value)
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')
  
  const debtPath = debtObligations.map((d, i) => {
    const x = (i / (debtObligations.length - 1)) * 100
    const y = getY(d.value)
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')
  
  // Find liquidity dip
  const liquidityDipIndex = data.findIndex((d, i) => 
    i > 0 && d.value < data[i-1].value * 0.85
  )
  
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-sm font-medium text-white">Cash Flow Solvency Trends</h4>
          <p className="text-xs text-slate-400 mt-0.5">vs Debt Obligations</p>
        </div>
        <LineChart className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="relative h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#334155" strokeWidth="0.3" strokeDasharray="2,2" />
          ))}
          
          {/* Debt obligations line */}
          <path
            d={debtPath}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="4,4"
            className="opacity-60"
          />
          
          {/* Cash flow line */}
          <path
            d={cashFlowPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          
          {/* Liquidity dip annotation */}
          {liquidityDipIndex > 0 && (
            <g>
              <circle 
                cx={(liquidityDipIndex / (data.length - 1)) * 100} 
                cy={getY(data[liquidityDipIndex].value)} 
                r="3" 
                fill="#ef4444" 
              />
            </g>
          )}
        </svg>
        
        {/* Annotation */}
        {liquidityDipIndex > 0 && (
          <div 
            className="absolute px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-400"
            style={{ 
              left: `${(liquidityDipIndex / (data.length - 1)) * 100}%`,
              top: '10%',
              transform: 'translateX(-50%)'
            }}
          >
            Liquidity dip {data[liquidityDipIndex].month}
          </div>
        )}
      </div>
      
      {/* X-axis labels */}
      <div className="flex justify-between mt-2">
        {data.filter((_, i) => i % 2 === 0).map((d, i) => (
          <span key={i} className="text-xs text-slate-500">{d.month}</span>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-emerald-500 rounded" />
          <span className="text-xs text-slate-400">Cash Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-amber-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b 0, #f59e0b 4px, transparent 4px, transparent 8px)' }} />
          <span className="text-xs text-slate-400">Debt Obligations</span>
        </div>
      </div>
    </div>
  )
}

// Sector Benchmarking Chart
function SectorBenchmarkChart({ companyScore, topQuartile, bottomQuartile }: {
  companyScore: number
  topQuartile: number
  bottomQuartile: number
}) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-sm font-medium text-white">Sector Benchmarking</h4>
          <p className="text-xs text-slate-400 mt-0.5">500-company dataset</p>
        </div>
        <PieChart className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="relative pt-8 pb-4">
        {/* Scale */}
        <div className="relative h-4 bg-gradient-to-r from-red-500/30 via-amber-500/30 to-emerald-500/30 rounded-full">
          {/* Quartile markers */}
          <div 
            className="absolute top-full mt-1 flex flex-col items-center"
            style={{ left: `${bottomQuartile}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-0.5 h-3 bg-red-400" />
            <span className="text-xs text-red-400 mt-1">Bottom 25%</span>
          </div>
          
          <div 
            className="absolute top-full mt-1 flex flex-col items-center"
            style={{ left: `${topQuartile}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-0.5 h-3 bg-emerald-400" />
            <span className="text-xs text-emerald-400 mt-1">Top 25%</span>
          </div>
          
          {/* Company indicator */}
          <div 
            className="absolute -top-6 flex flex-col items-center transition-all duration-500"
            style={{ left: `${companyScore}%`, transform: 'translateX(-50%)' }}
          >
            <div className="px-2 py-1 bg-blue-500 rounded text-xs font-medium text-white shadow-lg">
              Your SME
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-500" />
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 shadow-lg shadow-blue-500/50" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-8 pt-3 border-t border-slate-700/50">
        <div className="text-center">
          <p className="text-lg font-bold text-white">{companyScore}%</p>
          <p className="text-xs text-slate-400">Percentile Rank</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-emerald-400">+{companyScore - bottomQuartile}%</p>
          <p className="text-xs text-slate-400">vs Bottom Quartile</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-amber-400">{topQuartile - companyScore > 0 ? `-${topQuartile - companyScore}%` : `+${companyScore - topQuartile}%`}</p>
          <p className="text-xs text-slate-400">vs Top Quartile</p>
        </div>
      </div>
    </div>
  )
}

// AI Insight Card
function AIInsightCard({ insight }: { insight: AIInsight }) {
  const icon = insight.type === "strength" ? CheckCircle2 : 
               insight.type === "risk" ? AlertTriangle : Target
  const iconColor = insight.type === "strength" ? "text-emerald-400" :
                    insight.type === "risk" ? "text-red-400" : "text-blue-400"
  const bgColor = insight.type === "strength" ? "bg-emerald-500/10 border-emerald-500/20" :
                  insight.type === "risk" ? "bg-red-500/10 border-red-500/20" :
                  "bg-blue-500/10 border-blue-500/20"
  const confidenceColor = insight.confidence === "High" ? "text-emerald-400" :
                          insight.confidence === "Medium" ? "text-amber-400" : "text-slate-400"
  const Icon = icon
  
  return (
    <div className={`p-3 rounded-lg border ${bgColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-4 h-4 mt-0.5 ${iconColor}`} />
        <div className="flex-1">
          <p className="text-sm text-white">{insight.text}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-slate-400">Confidence:</span>
            <span className={`text-xs font-medium ${confidenceColor}`}>{insight.confidence}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Component
export default function CreditScoringDashboard() {
  const [inputs, setInputs] = useState<FinancialInputs>({
    revenue: 12.3,
    ebitda: 2.1,
    debt: 4.5,
    sector: "Technology",
    region: "West Africa",
    yoyGrowth: 18.5,
    cashReserves: 1.8
  })
  
  const [isCalculating, setIsCalculating] = useState(false)
  const [notes, setNotes] = useState("")
  const [expandedPanels, setExpandedPanels] = useState({
    inputs: true,
    insights: true
  })
  
  // Calculated risk score based on inputs
  const riskScore: RiskScore = {
    score: Math.min(100, Math.max(0, 
      50 + 
      (inputs.ebitda / inputs.revenue) * 100 - 
      (inputs.debt / inputs.revenue) * 30 +
      inputs.yoyGrowth * 0.5 +
      (inputs.cashReserves / inputs.debt) * 20
    )),
    category: "Moderate",
    drivers: [
      { name: "Debt Ratio", impact: -15 },
      { name: "Cash Flow", impact: 22 },
      { name: "Industry Risk", impact: -8 },
      { name: "Growth Rate", impact: 18 }
    ],
    sectorAverage: 58
  }
  
  // AI Insights
  const aiInsights: AIInsight[] = [
    { type: "strength", text: "EBITDA margin above sector median at 17.1%", confidence: "High" },
    { type: "risk", text: "Debt-to-Equity rising past 50% threshold", confidence: "Medium" },
    { type: "opportunity", text: "Positive cash flow trend suggests short-term lending capacity", confidence: "High" },
    { type: "strength", text: "YoY growth of 18.5% outperforms regional peers", confidence: "High" }
  ]
  
  // Probability of Default data
  const pdData = [
    { label: "12-Month PD", current: 8.2, predicted: 6.5 },
    { label: "24-Month PD", current: 14.5, predicted: 11.2 },
    { label: "36-Month PD", current: 22.3, predicted: 18.8 }
  ]
  
  // Cash flow data
  const cashFlowData = [
    { month: "Jan", value: 180 },
    { month: "Feb", value: 195 },
    { month: "Mar", value: 210 },
    { month: "Apr", value: 188 },
    { month: "May", value: 220 },
    { month: "Jun", value: 245 },
    { month: "Jul", value: 238 },
    { month: "Aug", value: 190 },
    { month: "Sep", value: 175 },
    { month: "Oct", value: 205 },
    { month: "Nov", value: 230 },
    { month: "Dec", value: 255 }
  ]
  
  const debtObligations = [
    { month: "Jan", value: 120 },
    { month: "Feb", value: 120 },
    { month: "Mar", value: 125 },
    { month: "Apr", value: 125 },
    { month: "May", value: 130 },
    { month: "Jun", value: 130 },
    { month: "Jul", value: 135 },
    { month: "Aug", value: 135 },
    { month: "Sep", value: 140 },
    { month: "Oct", value: 140 },
    { month: "Nov", value: 145 },
    { month: "Dec", value: 145 }
  ]
  
  const handleInputChange = (field: keyof FinancialInputs, value: string) => {
    const numValue = parseFloat(value) || 0
    setInputs(prev => ({ ...prev, [field]: numValue }))
  }
  
  const handleRecalculate = () => {
    setIsCalculating(true)
    setTimeout(() => setIsCalculating(false), 1500)
  }
  
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </Link>
              <div className="h-6 w-px bg-slate-700" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-white">TechVentures Ltd.</h1>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      Technology
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Lagos, Nigeria
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Rating: BBB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="text-slate-300 border-slate-700 hover:bg-slate-800 bg-transparent">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="text-slate-300 border-slate-700 hover:bg-slate-800 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Quick Summary Bar */}
        <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/40 rounded-2xl border border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Investment Grade</p>
                <p className="text-lg font-bold text-emerald-400">Recommended</p>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-700" />
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-slate-400">Risk Level</p>
                <p className="text-sm font-semibold text-white">Moderate</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Confidence</p>
                <p className="text-sm font-semibold text-white">87%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Data Quality</p>
                <p className="text-sm font-semibold text-emerald-400">Excellent</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
              AI Analysis Complete
            </div>
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
              Ready for Due Diligence
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Panel - Input Section */}
          <div className="col-span-3">
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
              <button 
                className="w-full px-4 py-3 flex items-center justify-between bg-slate-800/80 border-b border-slate-700/50"
                onClick={() => setExpandedPanels(p => ({ ...p, inputs: !p.inputs }))}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Financial Inputs</span>
                </div>
                {expandedPanels.inputs ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              
              {expandedPanels.inputs && (
                <div className="p-4 space-y-4">
                  {/* Revenue */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">Revenue ($M)</Label>
                      <Tooltip text="Total annual revenue in millions USD" />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        type="number"
                        value={inputs.revenue}
                        onChange={(e) => handleInputChange("revenue", e.target.value)}
                        className="pl-9 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  {/* EBITDA */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">EBITDA ($M)</Label>
                      <Tooltip text="Earnings Before Interest, Tax, Depreciation, and Amortization" />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        type="number"
                        value={inputs.ebitda}
                        onChange={(e) => handleInputChange("ebitda", e.target.value)}
                        className="pl-9 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  {/* Debt */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">Total Debt ($M)</Label>
                      <Tooltip text="Total outstanding debt including loans and bonds" />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        type="number"
                        value={inputs.debt}
                        onChange={(e) => handleInputChange("debt", e.target.value)}
                        className="pl-9 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="h-px bg-slate-700/50 my-2" />
                  
                  {/* Sector */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">Sector</Label>
                      <Tooltip text="Primary industry classification" />
                    </div>
                    <select 
                      value={inputs.sector}
                      onChange={(e) => setInputs(p => ({ ...p, sector: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Finance">Finance</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail</option>
                    </select>
                  </div>
                  
                  {/* Region */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">Region</Label>
                      <Tooltip text="Geographic operating region" />
                    </div>
                    <select 
                      value={inputs.region}
                      onChange={(e) => setInputs(p => ({ ...p, region: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="West Africa">West Africa</option>
                      <option value="East Africa">East Africa</option>
                      <option value="Southern Africa">Southern Africa</option>
                      <option value="North Africa">North Africa</option>
                      <option value="Central Africa">Central Africa</option>
                    </select>
                  </div>
                  
                  {/* YoY Growth */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">YoY Growth (%)</Label>
                      <Tooltip text="Year-over-Year revenue growth rate" />
                    </div>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        type="number"
                        value={inputs.yoyGrowth}
                        onChange={(e) => handleInputChange("yoyGrowth", e.target.value)}
                        className="pl-9 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  {/* Cash Reserves */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label className="text-xs text-slate-400">Cash Reserves ($M)</Label>
                      <Tooltip text="Available cash and cash equivalents" />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        type="number"
                        value={inputs.cashReserves}
                        onChange={(e) => handleInputChange("cashReserves", e.target.value)}
                        className="pl-9 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleRecalculate}
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <Activity className="w-4 h-4 mr-2 animate-pulse" />
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Recalculate Score
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
            
            {/* Notes Section */}
            <div className="mt-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium text-white">Analyst Notes</span>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your observations..."
                className="w-full h-32 px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
          
          {/* Center Panel - Risk Gauge & Key Metrics */}
          <div className="col-span-5">
            {/* Risk Gauge Card */}
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-white">Credit Risk Score</h2>
                  <p className="text-sm text-slate-400">AI-powered assessment</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-blue-400">Updated 2m ago</span>
                </div>
              </div>
              
              <RiskGauge 
                score={Math.round(riskScore.score)} 
                sectorAverage={riskScore.sectorAverage}
                drivers={riskScore.drivers}
              />
              
              {/* Key Metrics - Enhanced Typography */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-700/50">
                <div className="text-center p-4 bg-slate-900/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors group relative">
                  <InteractiveHint text="Click to see trend" />
                  <p className="text-3xl font-bold text-white tracking-tight">{(inputs.ebitda / inputs.revenue * 100).toFixed(1)}<span className="text-lg text-slate-400">%</span></p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">EBITDA Margin</p>
                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>+2.3% vs last quarter</span>
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-900/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors group relative">
                  <InteractiveHint text="Click to see trend" />
                  <p className="text-3xl font-bold text-white tracking-tight">{(inputs.debt / inputs.ebitda).toFixed(1)}<span className="text-lg text-slate-400">x</span></p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">Debt/EBITDA</p>
                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-amber-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>+0.2x vs last quarter</span>
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-900/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors group relative">
                  <InteractiveHint text="Click to see trend" />
                  <p className="text-3xl font-bold text-emerald-400 tracking-tight">+{inputs.yoyGrowth}<span className="text-lg">%</span></p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">YoY Growth</p>
                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>Above sector avg</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="mt-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
              <button 
                className="w-full px-4 py-3 flex items-center justify-between bg-slate-800/80 border-b border-slate-700/50"
                onClick={() => setExpandedPanels(p => ({ ...p, insights: !p.insights }))}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-white">AI-Generated Insights</span>
                </div>
                {expandedPanels.insights ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              
              {expandedPanels.insights && (
                <div className="p-4 space-y-3">
                  {aiInsights.map((insight, i) => (
                    <AIInsightCard key={i} insight={insight} />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Panel - Visualizations */}
          <div className="col-span-4 space-y-4">
            {/* Probability of Default */}
            <BarChart 
              data={pdData}
              title="Probability of Default"
              subtitle="Current vs Predicted"
            />
            
            {/* Sector Benchmarking */}
            <SectorBenchmarkChart 
              companyScore={68}
              topQuartile={75}
              bottomQuartile={25}
            />
            
            {/* Cash Flow Trends */}
            <CashFlowChart 
              data={cashFlowData}
              debtObligations={debtObligations}
            />
          </div>
          
        </div>
        
        {/* Bottom Status Bar */}
        <div className="mt-6 px-4 py-3 bg-slate-800/30 rounded-xl border border-slate-700/30 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400">Live Data Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-400">Last sync: Jan 21, 2026 at 14:32 UTC</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-400">Data source: Fvundi Intelligence API</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Powered by</span>
            <span className="text-xs font-semibold text-white">FVUNDI</span>
          </div>
        </div>
      </main>
    </div>
  )
}
