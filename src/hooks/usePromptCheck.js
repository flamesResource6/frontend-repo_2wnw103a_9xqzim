import { useCallback, useState } from 'react'

export function usePromptCheck() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const check = useCallback(async (text) => {
    if (!text?.trim()) return null
    setLoading(true)
    await new Promise(r => setTimeout(r, 500))
    const safe = Math.random() < 0.6
    const res = { safe, input: text }
    setResult(res)
    setLoading(false)
    return res
  }, [])

  return { loading, result, check }
}
