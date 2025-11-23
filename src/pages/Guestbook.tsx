import { useState, useEffect } from 'react'
import GuestbookForm from '../components/GuestbookForm'
import GuestbookList from '../components/GuestbookList'
import { trackPageEvent } from '../utils/analytics'
import ParticleBackground from '../components/ParticleBackground'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'

export default function Guestbook() {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    useEffect(() => {
        trackPageEvent('guestbook')
    }, [])

    const handleCommentAdded = () => {
        setRefreshTrigger(prev => prev + 1)
    }

    return (
        <PageTransition>
            <SEO title="Guestbook" description="Leave a note, say hello, or share your thoughts." />
            <div className="min-h-screen pt-24 pb-20 relative">
                {/* Reuse particle background for consistency, or remove if preferred */}
                <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
                    <ParticleBackground variant="bubbles" />
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Guestbook</h1>
                        <p className="text-slate-400 text-lg">
                            Leave a note, say hello, or share your thoughts. I'd love to hear from you!
                        </p>
                    </div>

                    <GuestbookForm onCommentAdded={handleCommentAdded} />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Recent Messages</h3>
                        <GuestbookList refreshTrigger={refreshTrigger} />
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
