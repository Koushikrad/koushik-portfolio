import { useEffect } from 'react'
import { trackPageEvent } from '../utils/analytics'
import { useSectionReveal } from '../hooks/useSectionReveal'
import BlogCard from '../components/BlogCard'
import { blogs } from '../data/blogs'

export default function Blogs() {
  useEffect(() => { trackPageEvent('blogs') }, [])
  useSectionReveal('blogs', '.blog-card')
  const posts = blogs

  return (
    <section className="py-20 bg-slate-800/50 blogs-section" id="blogs" aria-labelledby="blogs-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="blogs-heading" className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Blog</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">I regularly write about software development, tech sharing, and the latest web technologies. Check out my featured articles below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Blog articles">
          {posts.map((p) => (
            <BlogCard key={p.title} id={p.id} iconClass={p.icon} date={p.date} read={p.read} title={p.title} desc={p.desc} tags={p.tags} href={p.href} blobSrc={p.blob} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://medium.com/@koushikrad" className="btn-outline px-8 py-3 rounded-full font-medium inline-block focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800" target="_blank" rel="noreferrer" aria-label="View all articles on Medium">
            View All Articles <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  )
}


