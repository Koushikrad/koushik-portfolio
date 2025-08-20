import { useEffect, useRef, useState } from 'react'

export function useTyping(texts: string[], options?: { typingMs?: number; deletingMs?: number; pauseMs?: number }) {
  const typingMs = options?.typingMs ?? 100
  const deletingMs = options?.deletingMs ?? 50
  const pauseMs = options?.pauseMs ?? 1000

  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    const current = texts[indexRef.current % texts.length]
    let timeoutMs = typingMs

    const tick = () => {
      if (isDeleting) {
        setDisplay((prev) => prev.slice(0, -1))
        timeoutMs = deletingMs
        if (display.length <= 1) {
          setIsDeleting(false)
          indexRef.current = (indexRef.current + 1) % texts.length
          timeoutMs = 500
        }
      } else {
        setDisplay((prev) => current.substring(0, prev.length + 1))
        timeoutMs = typingMs
        if (display === current) {
          setIsDeleting(true)
          timeoutMs = pauseMs
        }
      }
      schedule()
    }

    let id: number
    const schedule = () => {
      id = window.setTimeout(tick, timeoutMs)
    }
    schedule()
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, texts.join('|'), typingMs, deletingMs, pauseMs])

  useEffect(() => {
    const startId = setTimeout(() => setDisplay(''), 0)
    return () => clearTimeout(startId)
  }, [])

  return { display, isDeleting }
}


