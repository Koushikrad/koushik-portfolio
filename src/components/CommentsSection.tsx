import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, Timestamp, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { getRelativeTime } from '../utils/date';

interface Comment {
    id: string;
    userName: string;
    text: string;
    createdAt: Timestamp;
}

interface CommentsSectionProps {
    blogId: string;
}

export default function CommentsSection({ blogId }: CommentsSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [visibleCount, setVisibleCount] = useState<number>(5);

    useEffect(() => {
        const q = query(
            collection(db, 'comments'),
            where('blogId', '==', blogId),
            orderBy('createdAt', 'desc'),
            limit(visibleCount)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newComments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Comment[];
            setComments(newComments);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [blogId, visibleCount]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'comments'), {
                blogId,
                userName: name.trim() || 'Anonymous',
                text: comment.trim(),
                createdAt: serverTimestamp()
            });
            setComment('');
            // Keep name for convenience
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Failed to post comment. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    return (
        <div className="mt-12 border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-8">Comments ({comments.length}{comments.length === visibleCount ? '+' : ''})</h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name (Optional)</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Anonymous"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-2">Comment</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your thoughts..."
                        required
                        rows={4}
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
                {loading ? (
                    <div className="text-center text-gray-500">Loading comments...</div>
                ) : comments.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">No comments yet. Be the first to share your thoughts!</div>
                ) : (
                    <>
                        <AnimatePresence mode='popLayout'>
                            {comments.map((comment) => (
                                <motion.div
                                    key={comment.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white/5 p-6 rounded-xl border border-white/5"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-white">{comment.userName}</h4>
                                        <span
                                            className="text-xs text-gray-500"
                                            title={comment.createdAt?.toDate().toLocaleString()}
                                        >
                                            {comment.createdAt ? getRelativeTime(comment.createdAt.toDate()) : 'Just now'}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 whitespace-pre-wrap">{comment.text}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {comments.length >= visibleCount && (
                            <div className="text-center pt-4">
                                <button
                                    onClick={handleLoadMore}
                                    className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                                >
                                    Load More Comments
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
