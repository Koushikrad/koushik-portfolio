// src/components/Navbar.tsx (Simplified Example)
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };


  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold gradient-text">Koushik</a>

        <div className="hidden md:flex space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-link text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link text-slate-300 hover:text-white transition-colors">About</a>
          {/* ... other nav links */}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link text-slate-300 hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="py-2 text-slate-300 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="py-2 text-slate-300 hover:text-white transition-colors">About</a>
            {/* ... other mobile nav links */}
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="py-2 text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
