import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PromptInputCard({ onResult }) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 500))
    const safe = Math.random() < 0.6
    onResult({ safe, prompt })
    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto max-w-3xl px-4"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_-10px_rgba(0,234,255,0.35)]">
        <h3 className="text-white/90 font-semibold mb-3">Enter a prompt to test it</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt here..."
          className="w-full h-36 rounded-xl bg-[#0a0f1c]/60 border border-cyan-400/20 focus:border-cyan-400/60 outline-none p-4 text-white placeholder:text-white/40 shadow-inner transition-all"
        />

        <div className="mt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(0,234,255,0.6)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheck}
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00eaff] to-[#3b82f6] text-[#00121f] font-semibold"
          >
            {loading ? (
              <span className="relative inline-block w-20 text-center">
                <span className="absolute inset-0 animate-pulse bg-white/20 rounded" />
                <span className="opacity-0">Checking...</span>
              </span>
            ) : (
              'Check Prompt'
            )}
          </motion.button>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/20 [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)]" />
      </div>
    </motion.div>
  )
}
