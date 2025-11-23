import { useState, useEffect } from 'react';
import { doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from 'framer-motion';

interface LikeButtonProps {
    blogId: string;
}

export default function LikeButton({ blogId }: LikeButtonProps) {
    const [likes, setLikes] = useState<number>(0);
    const [hasLiked, setHasLiked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Check local storage
        const liked = localStorage.getItem(`liked_${blogId}`);
        if (liked) {
            setHasLiked(true);
        }

        // Listen to Firestore
        const docRef = doc(db, 'likes', blogId);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setLikes(docSnap.data().count || 0);
            } else {
                setLikes(0);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [blogId]);

    const handleLike = async () => {
        if (hasLiked) return;

        // Optimistic update
        setHasLiked(true);
        setLikes(prev => prev + 1);
        localStorage.setItem(`liked_${blogId}`, 'true');

        try {
            const docRef = doc(db, 'likes', blogId);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, { count: 1 });
            } else {
                await updateDoc(docRef, {
                    count: increment(1)
                });
            }
        } catch (error) {
            console.error("Error updating likes:", error);
            // Revert on error
            setHasLiked(false);
            setLikes(prev => prev - 1);
            localStorage.removeItem(`liked_${blogId}`);
        }
    };

    return (
        <div className="flex items-center gap-4 my-8 p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Did you enjoy this article?</h3>
                <p className="text-gray-400 text-sm">Give it a like to let me know!</p>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                disabled={hasLiked || loading}
                className={`
          flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all
          ${hasLiked
                        ? 'bg-pink-500/20 text-pink-500 border border-pink-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }
        `}
            >
                <i className={`${hasLiked ? 'fas' : 'far'} fa-heart ${hasLiked ? 'text-pink-500' : ''}`}></i>
                <span>{likes}</span>
            </motion.button>
        </div>
    );
}
