import { ReactNode, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ProgressBar from './ProgressBar.tsx'

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
            <NavLink to="/#home" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to home section">Home</NavLink>
            <NavLink to="/#about" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to about section">About</NavLink>
            <NavLink to="/#skills" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to skills section">Skills</NavLink>
            <NavLink to="/#blogs" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to blogs section">Blogs</NavLink>
            <NavLink to="/#experience" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to experience section">Experience</NavLink>
            <NavLink to="/#contact" className="nav-link text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to contact section">Contact</NavLink>
          </div>
          <button 
            onClick={() => setMobileOpen(v => !v)} 
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
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
          className={`md:hidden bg-slate-900 border-b border-slate-800 mobile-menu ${mobileOpen ? 'open' : ''}`}
          role="menu"
          aria-hidden={!mobileOpen}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3" onClick={() => setMobileOpen(false)}>
            <NavLink to="/#home" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to home section">Home</NavLink>
            <NavLink to="/#about" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to about section">About</NavLink>
            <NavLink to="/#skills" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to skills section">Skills</NavLink>
            <NavLink to="/#blogs" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to blogs section">Blogs</NavLink>
            <NavLink to="/#experience" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to experience section">Experience</NavLink>
            <NavLink to="/#contact" className="py-2 text-slate-300 hover:text-white transition-colors" role="menuitem" aria-label="Go to contact section">Contact</NavLink>
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
              <NavLink to="/#home" className="text-slate-400 hover:text-white transition-colors" aria-label="Go to home section">Home</NavLink>
              <NavLink to="/#about" className="text-slate-400 hover:text-white transition-colors" aria-label="Go to about section">About</NavLink>
              <NavLink to="/#blogs" className="text-slate-400 hover:text-white transition-colors" aria-label="Go to blogs section">Blog</NavLink>
              <NavLink to="/#contact" className="text-slate-400 hover:text-white transition-colors" aria-label="Go to contact section">Contact</NavLink>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


