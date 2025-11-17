import { motion } from 'framer-motion'
import { Shield, BookOpen, Code2, LayoutDashboard } from 'lucide-react'

export default function Navbar() {
  const hoverGlow = {
    rest: { filter: 'drop-shadow(0 0 0px rgba(0,234,255,0))' },
    hover: { filter: 'drop-shadow(0 0 12px rgba(0,234,255,0.6))' },
  }

  return (
    <div className="w-full sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl bg-[#020617]/60 backdrop-blur-xl border border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.a
              href="#"
              className="flex items-center gap-2"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverGlow}
            >
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-semibold tracking-tight">PromptShield AI</span>
            </motion.a>

            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <NavLink href="#how" icon={BookOpen} label="Docs" />
              <NavLink href="#api" icon={Code2} label="API" />
              <NavLink href="#" icon={LayoutDashboard} label="Dashboard" />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavLink({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      className="text-white/70 hover:text-white flex items-center gap-2"
      initial={{ filter: 'drop-shadow(0 0 0px rgba(59,130,246,0))' }}
      whileHover={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.6))' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Icon className="h-4 w-4 text-cyan-400/80" />
      <span>{label}</span>
    </motion.a>
  )
}
