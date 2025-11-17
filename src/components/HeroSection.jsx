import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -40])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0a0f1c,transparent_40%),radial-gradient(circle_at_80%_30%,#0a0f1c,transparent_40%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-32 bg-[radial-gradient(closest-side,#00eaff40,transparent_70%)] blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#00eaff] via-[#3b82f6] to-[#6d28d9] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,234,255,0.35)]"
          >
            PromptShield AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-white/70 text-lg"
          >
            Instantly check your prompt for safety and policy alignment.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
