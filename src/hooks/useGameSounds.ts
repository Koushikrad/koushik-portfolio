import { useCallback, useRef, useEffect } from 'react'

export function useGameSounds() {
    const audioContext = useRef<AudioContext | null>(null)
    const masterGain = useRef<GainNode | null>(null)

    useEffect(() => {
        // Initialize AudioContext on first user interaction (browser policy)
        const initAudio = () => {
            if (!audioContext.current) {
                audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()
                masterGain.current = audioContext.current.createGain()
                masterGain.current.connect(audioContext.current.destination)
                masterGain.current.gain.value = 0.3 // Default volume
            }
        }

        window.addEventListener('click', initAudio, { once: true })
        return () => window.removeEventListener('click', initAudio)
    }, [])

    const playTone = useCallback((freq: number, type: OscillatorType, duration: number, startTime = 0) => {
        if (!audioContext.current || !masterGain.current) return

        const osc = audioContext.current.createOscillator()
        const gain = audioContext.current.createGain()

        osc.type = type
        osc.frequency.setValueAtTime(freq, audioContext.current.currentTime + startTime)

        gain.connect(masterGain.current)
        osc.connect(gain)

        // Envelope
        gain.gain.setValueAtTime(0, audioContext.current.currentTime + startTime)
        gain.gain.linearRampToValueAtTime(1, audioContext.current.currentTime + startTime + 0.01)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.current.currentTime + startTime + duration)

        osc.start(audioContext.current.currentTime + startTime)
        osc.stop(audioContext.current.currentTime + startTime + duration)
    }, [])

    const playSquash = useCallback(() => {
        // Short, high-pitched "pop"
        playTone(600, 'sine', 0.1)
        playTone(800, 'triangle', 0.05)
    }, [playTone])

    const playStart = useCallback(() => {
        // Rising arpeggio
        playTone(440, 'sine', 0.1, 0)
        playTone(554, 'sine', 0.1, 0.1)
        playTone(659, 'sine', 0.2, 0.2)
    }, [playTone])

    const playGameOver = useCallback(() => {
        // Descending tones
        playTone(659, 'sawtooth', 0.2, 0)
        playTone(554, 'sawtooth', 0.2, 0.2)
        playTone(440, 'sawtooth', 0.4, 0.4)
    }, [playTone])

    return { playSquash, playStart, playGameOver }
}
