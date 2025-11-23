import { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query, startAfter, QueryDocumentSnapshot, QueryConstraint } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { getRelativeTime } from '../utils/date'

type GuestbookEntry = {
    id: string
    name: string
    message: string
    createdAt: any
}

const PAGE_SIZE = 10

export default function GuestbookList({ refreshTrigger }: { refreshTrigger: number }) {
    const [entries, setEntries] = useState<GuestbookEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null)
    const [hasMore, setHasMore] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)

    const fetchEntries = async (isInitial = false) => {
        try {
            const constraints: QueryConstraint[] = [
                orderBy('createdAt', 'desc'),
                limit(PAGE_SIZE)
            ]

            if (!isInitial && lastDoc) {
                constraints.push(startAfter(lastDoc))
            }

            const q = query(collection(db, 'guestbook'), ...constraints)
            const snapshot = await getDocs(q)

            const newEntries = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as GuestbookEntry[]

            if (isInitial) {
                setEntries(newEntries)
            } else {
                setEntries(prev => [...prev, ...newEntries])
            }

            setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null)
            setHasMore(snapshot.docs.length === PAGE_SIZE)
        } catch (error) {
            console.error("Error fetching guestbook entries:", error)
        } finally {
            setLoading(false)
            setLoadingMore(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchEntries(true)
    }, [refreshTrigger])

    const handleLoadMore = () => {
        setLoadingMore(true)
        fetchEntries(false)
    }

    if (loading) {
        return <div className="text-slate-400 text-center py-10">Loading entries...</div>
    }

    return (
        <div className="space-y-6">
            {entries.length === 0 ? (
                <div className="text-center py-10 bg-slate-800/30 rounded-xl border border-slate-800">
                    <p className="text-slate-400">Be the first to sign the guestbook!</p>
                </div>
            ) : (
                entries.map(entry => (
                    <div key={entry.id} className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-sky-400">{entry.name}</h4>
                            <span className="text-xs text-slate-500">{getRelativeTime(entry.createdAt?.toDate())}</span>
                        </div>
                        <p className="text-slate-300 whitespace-pre-wrap">{entry.message}</p>
                    </div>
                ))
            )}

            {hasMore && entries.length > 0 && (
                <div className="text-center pt-4">
                    <button
                        onClick={handleLoadMore}
                        disabled={loadingMore}
                        className="text-sky-400 hover:text-sky-300 text-sm font-medium disabled:opacity-50 transition-colors"
                    >
                        {loadingMore ? 'Loading...' : 'Load more messages'}
                    </button>
                </div>
            )}
        </div>
    )
}
