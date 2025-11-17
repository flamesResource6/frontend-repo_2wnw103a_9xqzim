import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-40 bg-[radial-gradient(closest-side,#00eaff30,transparent_70%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <motion.p
          whileHover={{ textShadow: '0 0 16px rgba(0,234,255,0.7)' }}
          className="text-white/60"
        >
          © 2025 PromptShield AI
        </motion.p>
      </div>
    </footer>
  )
}
