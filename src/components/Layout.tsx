import { ReactNode, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ProgressBar from './ProgressBar.tsx'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div>
      <ProgressBar />
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/#home" className="text-2xl font-bold gradient-text">Koushik</Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/#home" className="nav-link text-slate-300 hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/#about" className="nav-link text-slate-300 hover:text-white transition-colors">About</NavLink>
            <NavLink to="/#skills" className="nav-link text-slate-300 hover:text-white transition-colors">Skills</NavLink>
            <NavLink to="/#blogs" className="nav-link text-slate-300 hover:text-white transition-colors">Blogs</NavLink>
            <NavLink to="/#experience" className="nav-link text-slate-300 hover:text-white transition-colors">Experience</NavLink>
            <NavLink to="/#contact" className="nav-link text-slate-300 hover:text-white transition-colors">Contact</NavLink>
          </div>
          <button onClick={() => setMobileOpen(v => !v)} className="md:hidden text-white focus:outline-none">
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:hidden bg-slate-900 border-b border-slate-800 mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3" onClick={() => setMobileOpen(false)}>
            <NavLink to="/#home" className="py-2 text-slate-300 hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/#about" className="py-2 text-slate-300 hover:text-white transition-colors">About</NavLink>
            <NavLink to="/#skills" className="py-2 text-slate-300 hover:text-white transition-colors">Skills</NavLink>
            <NavLink to="/#blogs" className="py-2 text-slate-300 hover:text-white transition-colors">Blogs</NavLink>
            <NavLink to="/#experience" className="py-2 text-slate-300 hover:text-white transition-colors">Experience</NavLink>
            <NavLink to="/#contact" className="py-2 text-slate-300 hover:text-white transition-colors">Contact</NavLink>
          </div>
        </div>
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400">
              <p>© 2025 Koushik Radhakrishnan. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <NavLink to="/#home" className="text-slate-400 hover:text-white transition-colors">Home</NavLink>
              <NavLink to="/#about" className="text-slate-400 hover:text-white transition-colors">About</NavLink>
              <NavLink to="/#blogs" className="text-slate-400 hover:text-white transition-colors">Blog</NavLink>
              <NavLink to="/#contact" className="text-slate-400 hover:text-white transition-colors">Contact</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


