import { useEffect } from 'react'

export function useRevealOnScroll(selector = '.skill-pill, .project-card, .blog-card, .contact-card, .timeline-item') {
  useEffect(() => {
    let elements = Array.from(document.querySelectorAll<HTMLElement>(selector))

    const reveal = () => {
      const threshold = window.innerHeight * 0.7 // Reduced threshold for earlier triggering
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
        // If element is already in viewport or very close, make it visible immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }

    const initializeElements = () => {
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)' // Slightly more movement for better effect
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' // Faster, smoother easing
      })
    }

    initializeElements()
    
    // Check initial state immediately
    checkInitialVisibility()
    
    // Add delays to ensure DOM is ready, then check again
    setTimeout(() => {
      initializeElements()
      checkInitialVisibility()
    }, 100)
    setTimeout(() => {
      initializeElements()
      checkInitialVisibility()
    }, 300)
    setTimeout(() => {
      initializeElements()
      checkInitialVisibility()
    }, 500)
    
    window.addEventListener('scroll', reveal, { passive: true }) // Added passive for better performance
    window.addEventListener('resize', reveal, { passive: true })
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('resize', reveal)
    }
  }, [selector])
}


