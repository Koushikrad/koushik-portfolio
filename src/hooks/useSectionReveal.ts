import { useEffect } from 'react'

export function useSectionReveal(sectionId: string, childSelector: string) {
  useEffect(() => {
    const section = document.querySelector(`#${sectionId}`)
    if (!section) return

    const elements = Array.from(section.querySelectorAll<HTMLElement>(childSelector))
    
    const revealSection = () => {
      const sectionRect = section.getBoundingClientRect()
      const threshold = window.innerHeight * 0.7 // Trigger when section is 60% into viewport
      
      // If section is in view, reveal all elements at once
      if (sectionRect.top < threshold) {
        elements.forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      }
    }

    const checkInitialVisibility = () => {
      const sectionRect = section.getBoundingClientRect()
      
      // Only reveal if section is well into viewport
      if (sectionRect.top < window.innerHeight * 0.6) {
        elements.forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      }
    }

    const initializeElements = () => {
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(60px)' // More movement for visible animation
        el.style.transition = 'all 1.2s ease' // Slower transition for better visibility
      })
    }

    initializeElements()
    
    // Check initial state on load (like production)
    window.addEventListener('load', checkInitialVisibility)
    
    // Also check on scroll
    window.addEventListener('scroll', revealSection, { passive: true })
    window.addEventListener('resize', revealSection, { passive: true })
    
    // Initial check
    checkInitialVisibility()
    
    return () => {
      window.removeEventListener('scroll', revealSection)
      window.removeEventListener('resize', revealSection)
      window.removeEventListener('load', checkInitialVisibility)
    }
  }, [sectionId, childSelector])
}
