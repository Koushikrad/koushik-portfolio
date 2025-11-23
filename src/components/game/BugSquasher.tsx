
import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Bug from './Bug'
import { trackClickEvent } from '../../utils/analytics'
import { useGameSounds } from '../../hooks/useGameSounds'

type BugType = 'bug' | 'spider' | 'virus'

interface BugEntity {
    id: number
    x: number
    y: number
    type: BugType
    createdAt: number
}

export default function BugSquasher() {
    const [isOpen, setIsOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(30)
    const [bugs, setBugs] = useState<BugEntity[]>([])
    const [gameOver, setGameOver] = useState(false)
    const [highScore, setHighScore] = useState(0)

    const { playSquash, playStart, playGameOver } = useGameSounds()

    const requestRef = useRef<number>()
    const lastSpawnTime = useRef<number>(0)
    const spawnRate = useRef<number>(1000) // Start with 1 bug per second
    const endTimeRef = useRef<number>(0)

    useEffect(() => {
        const stored = localStorage.getItem('bugSquasherHighScore')
        if (stored) setHighScore(parseInt(stored, 10))
    }, [])

    const startGame = () => {
        setIsPlaying(true)
        setScore(0)
        setTimeLeft(30)
        setBugs([])
        setGameOver(false)
        spawnRate.current = 1000
        endTimeRef.current = Date.now() + 30000 // 30 seconds from now
        trackClickEvent('Start Bug Squasher')
        playStart()
    }

    const stopGame = () => {
        setIsPlaying(false)
        setBugs([])
        setGameOver(false) // Reset game over state on exit
        if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }

    const finishGame = useCallback(() => {
        setGameOver(true)
        setIsPlaying(false)
        playGameOver()
        if (score > highScore) {
            setHighScore(score)
            localStorage.setItem('bugSquasherHighScore', score.toString())
        }
    }, [score, highScore, playGameOver])

    const squashBug = (id: number) => {
        setBugs((prev) => prev.filter((b) => b.id !== id))
        setScore((prev) => prev + 1)
        playSquash()
    }

    const spawnBug = useCallback(() => {
        const types: BugType[] = ['bug', 'spider', 'virus']
        const type = types[Math.floor(Math.random() * types.length)]
        const padding = 50
        const topSafeZone = 100 // Space for HUD/Exit button

        const x = Math.random() * (window.innerWidth - padding * 2) + padding
        // Ensure y is below the top safe zone
        const y = Math.random() * (window.innerHeight - padding - topSafeZone) + topSafeZone

        const newBug: BugEntity = {
            id: Date.now(),
            x,
            y,
            type,
            createdAt: Date.now(),
        }

        setBugs((prev) => [...prev, newBug])
    }, [])

    // Game Loop
    useEffect(() => {
        if (!isPlaying || gameOver) return

        const loop = (time: number) => {
            const now = Date.now()

            // Timer Logic
            const remaining = Math.ceil((endTimeRef.current - now) / 1000)
            if (remaining <= 0) {
                setTimeLeft(0)
                finishGame()
                return // Stop loop
            } else {
                setTimeLeft(remaining)
            }

            // Spawn Logic
            if (time - lastSpawnTime.current > spawnRate.current) {
                spawnBug()
                lastSpawnTime.current = time
                // Increase difficulty: spawn faster as time goes on
                spawnRate.current = Math.max(400, 1000 - (score * 20))
            }
            requestRef.current = requestAnimationFrame(loop)
        }

        requestRef.current = requestAnimationFrame(loop)
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [isPlaying, gameOver, spawnBug, score, finishGame])

    return (
        <>
            {/* Subtle Floating Trigger Button */}
            {!isOpen && (
                <motion.button
                    className="fixed bottom-4 right-4 z-40 w-10 h-10 bg-slate-800/50 hover:bg-rose-500 text-white/50 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center text-lg shadow-sm hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    aria-label="Play Bug Squasher Game"
                    title="Debug Mode"
                >
                    <i className="fas fa-bug"></i>
                </motion.button>
            )}

            {/* Game Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close/Exit Button */}
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white text-sm md:text-lg font-medium px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-white/10 transition-colors z-50 bg-slate-900/50 backdrop-blur-md border border-white/10"
                            onClick={() => {
                                setIsOpen(false)
                                stopGame()
                            }}
                        >
                            Exit
                        </button>

                        {!isPlaying && !gameOver && (
                            <div className="text-center text-white p-8 max-w-md relative z-10">
                                {/* ... existing start screen ... */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-6xl mb-6"
                                >
                                    🐞
                                </motion.div>
                                <h2 className="text-4xl font-bold mb-4">Bug Squasher</h2>
                                <p className="text-xl text-slate-300 mb-2">
                                    Can you squash them all?
                                </p>
                                {highScore > 0 && (
                                    <div className="mb-8 text-sky-400 font-medium bg-sky-400/10 inline-block px-4 py-1 rounded-full">
                                        High Score: {highScore}
                                    </div>
                                )}
                                <div className="mt-4">
                                    <button
                                        onClick={startGame}
                                        className="bg-rose-500 hover:bg-rose-600 text-white text-xl font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Start Debugging
                                    </button>
                                </div>
                            </div>
                        )}

                        {isPlaying && (
                            <>
                                {/* HUD */}
                                <div className="absolute top-4 left-4 md:left-0 md:right-0 flex md:justify-center space-x-4 md:space-x-12 text-white text-xl md:text-2xl font-bold pointer-events-none z-40">
                                    <div className="flex items-center bg-slate-900/50 px-4 py-1 md:px-6 md:py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        <i className="fas fa-clock mr-2 md:mr-3 text-sky-400"></i>
                                        <span className={timeLeft <= 5 ? 'text-red-500 animate-pulse' : ''}>{timeLeft}s</span>
                                    </div>
                                    <div className="flex items-center bg-slate-900/50 px-4 py-1 md:px-6 md:py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        <i className="fas fa-trophy mr-2 md:mr-3 text-yellow-400"></i>
                                        {score}
                                    </div>
                                </div>

                                {/* Game Area */}
                                <div className="absolute inset-0 overflow-hidden cursor-crosshair">
                                    <AnimatePresence>
                                        {bugs.map((bug) => (
                                            <Bug
                                                key={bug.id}
                                                {...bug}
                                                onSquash={squashBug}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </>
                        )}

                        {gameOver && (
                            <motion.div
                                className="text-center text-white p-8 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl max-w-md mx-4 relative z-10"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                <h2 className="text-3xl font-bold mb-2">Debugging Complete!</h2>
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 my-6">
                                    {score}
                                </div>

                                {score >= highScore && score > 0 && (
                                    <div className="mb-6 text-sky-400 font-bold animate-bounce">
                                        🎉 New High Score! 🎉
                                    </div>
                                )}

                                <p className="text-xl text-slate-300 mb-8">
                                    {score > 20 ? "Wow! You're a natural debugger. We should work together!" : "Not bad! But some bugs got away."}
                                </p>
                                <div className="flex flex-col space-y-4">
                                    <button
                                        onClick={startGame}
                                        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                                    >
                                        Play Again
                                    </button>
                                    <a
                                        href="/#contact"
                                        onClick={() => {
                                            setIsOpen(false)
                                            trackClickEvent('Hire Me from Game')
                                        }}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        Hire me to fix real bugs &rarr;
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
