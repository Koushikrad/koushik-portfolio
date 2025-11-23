import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useTyping } from '../hooks/useTyping'
import { trackClickEvent, trackPageEvent } from '../utils/analytics'
import { scrollToSection } from '../utils/scrollToSection'
import ParticleBackground from '../components/ParticleBackground'
import PageTransition from '../components/PageTransition'

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    trackPageEvent('home')
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setShowArrow(y < 40)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const { display } = useTyping([
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Blogger',
    'Tech Leader',
  ], { typingMs: 120, deletingMs: 60, pauseMs: 1400 })

  return (
    <PageTransition>
      <section ref={sectionRef} className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden" id="home" aria-labelledby="hero-heading">
        <ParticleBackground />
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-sky-400 font-medium mb-2 opacity-0 animate-fadeInUp">Hello, I'm</p>
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp delay-100">
              <span className="gradient-text">Koushik Radhakrishnan</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 opacity-0 animate-fadeInUp delay-200" aria-live="polite">
              <span>{display}</span><span className="cursor" aria-hidden="true" />
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg opacity-0 animate-fadeInUp delay-300">
              Senior Frontend Developer with 10+ years of experience crafting beautiful, responsive, and user-friendly web applications that
              deliver exceptional user experiences. Specializing in modern web technologies.
            </p>
            <div className="flex space-x-4 opacity-0 animate-fadeInUp delay-400">
              <Link to="/#contact" onClick={() => trackClickEvent('Hire Me')} className="btn-primary px-8 py-3 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900">Hire Me</Link>
              <Link to="/#experience" onClick={() => trackClickEvent('View Work')} className="px-8 py-3 rounded-full font-medium border border-sky-400 text-sky-400 hover:bg-sky-400/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900">View Work</Link>
            </div>
            <div className="mt-10 flex space-x-6 opacity-0 animate-fadeInUp delay-500" role="list" aria-label="Social media links">
              <a href="https://www.linkedin.com/in/koushikradhakrishnan/" onClick={() => trackClickEvent('Linkedin')} target="_blank" className="social-icon text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" rel="noreferrer" aria-label="Visit LinkedIn profile">
                <i className="fab fa-linkedin text-2xl" aria-hidden="true"></i>
              </a>
              <a href="https://x.com/koushikrad" onClick={() => trackClickEvent('twitter')} target="_blank" className="social-icon text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" rel="noreferrer" aria-label="Visit X (Twitter) profile">
                <i className="fab fa-brands fa-x-twitter text-2xl" aria-hidden="true"></i>
              </a>
              <a href="https://medium.com/@koushikrad" onClick={() => trackClickEvent('medium')} target="_blank" className="social-icon text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" rel="noreferrer" aria-label="Visit Medium profile">
                <i className="fab fa-medium-m text-2xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('#about')}
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator z-10 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded ${showArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll to about section"
        >
          <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </section>
    </PageTransition>
  )
}


