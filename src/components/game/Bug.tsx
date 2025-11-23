import { motion } from 'framer-motion'

interface BugProps {
    id: number
    x: number
    y: number
    type: 'bug' | 'spider' | 'virus'
    onSquash: (id: number) => void
}

export default function Bug({ id, x, y, type, onSquash }: BugProps) {
    const icons = {
        bug: 'fa-bug',
        spider: 'fa-spider',
        virus: 'fa-virus',
    }

    const colors = {
        bug: 'text-red-500',
        spider: 'text-slate-800 dark:text-slate-200',
        virus: 'text-green-500',
    }

    return (
        <motion.div
            className={`absolute cursor-pointer text-3xl md:text-4xl drop-shadow-lg ${colors[type]}`}
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
                rotate: { repeat: Infinity, duration: 0.5 },
                scale: { duration: 0.2 }
            }}
            onClick={(e) => {
                e.stopPropagation()
                onSquash(id)
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <i className={`fas ${icons[type]}`}></i>
        </motion.div>
    )
}
