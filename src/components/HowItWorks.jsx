import { motion } from 'framer-motion'
import { Layers, ScanLine, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Layers, title: 'Preprocessing', text: 'Normalize and sanitize your input for robust analysis.' },
  { icon: ScanLine, title: 'Dual Detection', text: 'Blend rule-based and model scoring to detect risks.' },
  { icon: ShieldCheck, title: 'Safety Decision', text: 'Classify as SAFE or UNSAFE with transparent reasons.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-white text-2xl font-semibold mb-10"
      >
        How it works
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 relative overflow-hidden"
          >
            <it.icon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-white font-semibold mt-3">{it.title}</h4>
            <p className="text-white/70 text-sm mt-1">{it.text}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/10 [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)]" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
