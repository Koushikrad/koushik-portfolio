import { useEffect } from 'react'

export function useRevealOnScroll(selector = '.skill-pill, .project-card, .blog-card, .contact-card, .timeline-item') {
  useEffect(() => {
    let elements = Array.from(document.querySelectorAll<HTMLElement>(selector))

    const reveal = () => {
      const threshold = window.innerHeight * 0.7 // Trigger when element is 70% into viewport
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < threshold) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }

    const checkInitialVisibility = () => {
      // Re-query elements in case new ones were added
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // Only reveal if element is well into viewport
        if (rect.top < window.innerHeight * 0.7) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }

    const initializeElements = () => {
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(50px)' // More movement for visible animation
        el.style.transition = 'all 1s ease' // Slower transition for better visibility
      })
    }

    initializeElements()
    
    // Check initial state on load (like production)
    window.addEventListener('load', checkInitialVisibility)
      
    // Also check on scroll
    window.addEventListener('scroll', reveal, { passive: true })
    window.addEventListener('resize', reveal, { passive: true })
    
    // Initial check
    checkInitialVisibility()
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('resize', reveal)
      window.removeEventListener('load', checkInitialVisibility)
    }
  }, [selector])
}


