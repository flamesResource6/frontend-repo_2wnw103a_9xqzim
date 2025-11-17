import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, TriangleAlert } from 'lucide-react'

export default function ResultCard({ result }) {
  if (!result) return null
  const { safe } = result

  return (
    <AnimatePresence>
      <motion.div
        key={safe ? 'safe' : 'unsafe'}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
        className="mx-auto max-w-3xl px-4 mt-6"
      >
        <div className={`rounded-2xl p-6 backdrop-blur-xl border ${safe ? 'border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]' : 'border-rose-400/30 bg-rose-400/10 shadow-[0_0_40px_-10px_rgba(239,68,68,0.6)]'}`}>
          <div className="flex items-start gap-3">
            {safe ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 12 }}>
                <CheckCircle2 className="h-7 w-7 text-emerald-400" />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 12 }}>
                <TriangleAlert className="h-7 w-7 text-rose-400" />
              </motion.div>
            )}
            <div>
              <h4 className="text-white font-semibold">
                {safe ? 'This prompt is safe.' : 'Warning: unsafe or harmful prompt.'}
              </h4>
              <p className="text-white/70 text-sm mt-1">
                {safe ? 'No obvious policy violations detected. Consider context and downstream use.' : 'This prompt may contain harmful, disallowed, or risky content. Revise to meet safety guidelines.'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
