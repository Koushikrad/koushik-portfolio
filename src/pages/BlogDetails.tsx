import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { blogs } from '../data/blogs'
import ReactMarkdown from 'react-markdown'
import { trackPageEvent } from '../utils/analytics'
import { motion, useScroll, useSpring } from 'framer-motion'
import LikeButton from '../components/LikeButton'
import CommentsSection from '../components/CommentsSection'

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const blog = blogs.find(b => b.id === id)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        if (blog) {
            trackPageEvent(`blog_details_${id}`)
            window.scrollTo(0, 0)
        } else {
            navigate('/#blogs')
        }
    }, [id, blog, navigate])

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
    }

    if (!blog) return null

    return (
        <div className="min-h-screen bg-slate-900 pt-24 pb-20 relative">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-sky-400 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/#blogs" className="inline-flex items-center text-sky-400 hover:text-sky-300 mb-8 transition-colors group">
                        <motion.i
                            className="fas fa-arrow-left mr-2"
                            whileHover={{ x: -5 }}
                        ></motion.i>
                        Back to Blogs
                    </Link>
                </motion.div>

                <motion.article
                    className="bg-slate-800/50 rounded-2xl p-8 md:p-16 border border-white/5 backdrop-blur-sm shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <header className="mb-16 text-center relative">
                        <div className="absolute inset-0 bg-sky-400/5 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
                        <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-700/50 mb-8 text-sky-400 relative z-10"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <i className={`${blog.icon} text-4xl`}></i>
                        </motion.div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 relative z-10">{blog.title}</h1>
                        <div className="flex items-center justify-center text-slate-400 text-sm md:text-base relative z-10">
                            <div className="flex items-center">
                                <i className="far fa-calendar-alt mr-2"></i>
                                <time dateTime={blog.date}>{blog.date}</time>
                            </div>
                            <span className="mx-3">•</span>
                            <div className="flex items-center">
                                <i className="far fa-clock mr-2"></i>
                                <span>{blog.read}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-8 relative z-10">
                            {blog.tags.map(tag => (
                                <span key={tag} className="bg-sky-400/10 text-sky-400 px-3 py-1 rounded-full text-sm border border-sky-400/20 hover:bg-sky-400/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="prose prose-lg prose-invert max-w-none prose-headings:text-slate-100 prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6 prose-p:text-slate-300 prose-p:leading-loose prose-p:my-6 prose-a:text-sky-400 hover:prose-a:text-sky-300 prose-strong:text-white prose-code:text-sky-300 prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-700/50 prose-img:rounded-xl prose-li:text-slate-300 prose-li:my-2">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-700/30">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                            <div className="flex items-center space-x-4">
                                <motion.button
                                    onClick={handleCopyLink}
                                    className="flex items-center space-x-2 px-6 py-2 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-slate-500 transition-colors"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="fas fa-link"></i>
                                    <span>Copy Link</span>
                                </motion.button>
                            </div>

                            <div className="flex space-x-4">
                                <motion.button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="p-3 rounded-full bg-slate-700 hover:bg-sky-500 hover:text-white text-slate-300 transition-all"
                                    aria-label="Share on Twitter"
                                    whileHover={{ y: -3 }}
                                >
                                    <i className="fab fa-twitter text-xl"></i>
                                </motion.button>
                                <motion.button
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="p-3 rounded-full bg-slate-700 hover:bg-blue-600 hover:text-white text-slate-300 transition-all"
                                    aria-label="Share on LinkedIn"
                                    whileHover={{ y: -3 }}
                                >
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </motion.button>
                            </div>
                        </div>

                        {/* New Components */}
                        <LikeButton blogId={blog.id} />
                        <CommentsSection blogId={blog.id} />
                    </div>
                </motion.article>
            </div>
        </div>
    )
}
