import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { trackClickEvent } from '../utils/analytics'

const MAX_NAME_LENGTH = 50
const MAX_MESSAGE_LENGTH = 280

export default function GuestbookForm({ onCommentAdded }: { onCommentAdded: () => void }) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validations
        if (!name.trim() || !message.trim()) return
        if (name.length > MAX_NAME_LENGTH) {
            setError(`Name must be under ${MAX_NAME_LENGTH} characters`)
            return
        }
        if (message.length > MAX_MESSAGE_LENGTH) {
            setError(`Message must be under ${MAX_MESSAGE_LENGTH} characters`)
            return
        }

        setIsSubmitting(true)
        setError('')

        try {
            await addDoc(collection(db, 'guestbook'), {
                name: name.trim(),
                message: message.trim(),
                createdAt: serverTimestamp()
            })

            // Track successful submission
            trackClickEvent('guestbook_signed')

            setName('')
            setMessage('')
            onCommentAdded()
        } catch (err) {
            console.error('Error adding entry:', err)
            setError('Failed to sign guestbook. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-10 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Sign the Guestbook</h3>
            {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
            <div className="mb-4">
                <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2">
                    Name <span className="text-xs opacity-50">({name.length}/{MAX_NAME_LENGTH})</span>
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    maxLength={MAX_NAME_LENGTH}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    placeholder="Your name"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">
                    Message <span className="text-xs opacity-50">({message.length}/{MAX_MESSAGE_LENGTH})</span>
                </label>
                <textarea
                    id="message"
                    value={message}
                    maxLength={MAX_MESSAGE_LENGTH}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all min-h-[100px]"
                    placeholder="Leave a note..."
                    required
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
                {isSubmitting ? 'Signing...' : 'Sign Guestbook'}
            </button>
        </form>
    )
}
