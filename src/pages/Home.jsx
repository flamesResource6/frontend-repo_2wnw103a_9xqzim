import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PromptInputCard from '../components/PromptInputCard'
import ResultCard from '../components/ResultCard'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <HeroSection />
      <main className="relative z-10 -mt-10">
        <PromptInputCard onResult={setResult} />
        <ResultCard result={result} />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
