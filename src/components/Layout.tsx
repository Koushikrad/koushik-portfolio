import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar.tsx'
import { scrollToSection } from '../utils/scrollToSection'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-400 text-slate-900 px-4 py-2 rounded font-medium z-50">
        Skip to main content
      </a>
      <ProgressBar />
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/#home" className="text-2xl font-bold gradient-text" aria-label="Go to home page">Koushik</Link>
          <div className="hidden md:flex space-x-8" role="menubar">
            <button onClick={() => scrollToSection('#home')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to home section">Home</button>
            <button onClick={() => scrollToSection('#about')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to about section">About</button>
            <button onClick={() => scrollToSection('#skills')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to skills section">Skills</button>
            <button onClick={() => scrollToSection('#blogs')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to blogs section">Blogs</button>
            <button onClick={() => scrollToSection('#experience')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to experience section">Experience</button>
            <button onClick={() => scrollToSection('#contact')} className="nav-link text-slate-300 hover:text-white transition-colors focus:outline-none bg-transparent border-none p-0 cursor-pointer" role="menuitem" aria-label="Go to contact section">Contact</button>
          </div>
          <button 
            onClick={() => setMobileOpen(v => !v)} 
            className="md:hidden text-white focus:outline-none rounded"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div 
          id="mobile-menu"
          className={`md:hidden mobile-menu ${mobileOpen ? 'open' : ''}`}
          role="menu"
          aria-hidden={!mobileOpen}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2" onClick={() => setMobileOpen(false)}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to home section">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to about section">About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to skills section">Skills</a>
            <a href="#blogs" onClick={(e) => { e.preventDefault(); scrollToSection('#blogs'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to blogs section">Blogs</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to experience section">Experience</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-left" role="menuitem" aria-label="Go to contact section">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20" role="main" id="main-content">{children}</main>

      <footer className="py-8 bg-slate-900 border-t border-slate-700" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400">
              <p>© 2025 Koushik Radhakrishnan. All rights reserved.</p>
            </div>
            <nav className="flex space-x-6" role="navigation" aria-label="Footer navigation">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Go to home section">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Go to about section">About</a>
              <a href="#blogs" onClick={(e) => { e.preventDefault(); scrollToSection('#blogs'); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Go to blogs section">Blog</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Go to contact section">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


