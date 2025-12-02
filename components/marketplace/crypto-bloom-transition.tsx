"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import type { Company } from "./trust-capsule"

interface CryptoBloomTransitionProps {
  company: Company | null
  isOpen: boolean
  onComplete: () => void
}

export function CryptoBloomTransition({ company, isOpen, onComplete }: CryptoBloomTransitionProps) {
  const [stage, setStage] = useState<"fragment" | "bloom" | "flatten" | "done">("fragment")

  useEffect(() => {
    if (isOpen) {
      setStage("fragment")
      // Stage 1: Fragment Lift (0.8s)
      const timer1 = setTimeout(() => setStage("bloom"), 800)
      // Stage 2: Identity Bloom (1.2s)
      const timer2 = setTimeout(() => setStage("flatten"), 2000)
      // Stage 3: Flatten Into Profile (0.6s)
      const timer3 = setTimeout(() => {
        setStage("done")
        onComplete()
      }, 2600)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isOpen, onComplete])

  if (!company || !isOpen) return null

  // Generate shard positions
  const shards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 200,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
    delay: i * 0.05,
  }))

  // Orbit nodes for holo-sphere
  const orbitNodes = [
    { name: "Trust Core", angle: 0, color: "from-red-500 to-red-600" },
    { name: "Stability", angle: 72, color: "from-blue-500 to-blue-600" },
    { name: "Solvency", angle: 144, color: "from-green-500 to-green-600" },
    { name: "ESG", angle: 216, color: "from-purple-500 to-purple-600" },
    { name: "Identity", angle: 288, color: "from-amber-500 to-amber-600" },
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Stage 1: Fragment Lift */}
        {stage === "fragment" && (
          <div className="relative w-80 h-80">
            {shards.map((shard) => (
              <motion.div
                key={shard.id}
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 backdrop-blur-sm"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                animate={{
                  x: shard.x,
                  y: shard.y - 50,
                  opacity: 0.8,
                  scale: shard.scale,
                  rotate: shard.rotation,
                }}
                transition={{
                  duration: 0.8,
                  delay: shard.delay,
                  ease: "easeOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg" />
              </motion.div>
            ))}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-white/60 text-sm">Decrypting fragments...</div>
            </motion.div>
          </div>
        )}

        {/* Stage 2: Identity Bloom - Holo-sphere */}
        {stage === "bloom" && (
          <div className="relative w-96 h-96">
            {/* Central core */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/30 border border-red-500/50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="text-white font-bold text-lg">{company.trustScore}</span>
              </motion.div>
            </motion.div>

            {/* Orbiting nodes */}
            {orbitNodes.map((node, i) => (
              <motion.div
                key={node.name}
                className="absolute top-1/2 left-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: Math.cos((node.angle * Math.PI) / 180) * 120 - 32,
                  y: Math.sin((node.angle * Math.PI) / 180) * 120 - 32,
                }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${node.color} bg-opacity-20 border border-white/20 flex items-center justify-center backdrop-blur-sm`}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-white text-xs font-medium text-center px-1">{node.name}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connecting lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
            >
              <motion.circle
                cx="192"
                cy="192"
                r="120"
                fill="none"
                stroke="rgba(239, 68, 68, 0.3)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </svg>

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-white font-semibold">{company.name}</div>
              <div className="text-white/50 text-sm">Assembling identity...</div>
            </motion.div>
          </div>
        )}

        {/* Stage 3: Flatten transition */}
        {stage === "flatten" && (
          <motion.div
            className="w-full max-w-4xl px-8"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {company.name}
              </motion.div>
              <motion.div
                className="text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Loading encrypted profile...
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
