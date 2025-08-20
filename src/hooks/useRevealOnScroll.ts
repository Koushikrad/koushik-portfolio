import { useEffect } from 'react'

export function useRevealOnScroll(selector = '.skill-pill, .project-card, .blog-card, .contact-card, .profile-photo') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))

    const reveal = () => {
      const threshold = window.innerHeight * 0.8
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < threshold) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          if (el.classList.contains('profile-photo')) {
            el.classList.add('in-view')
          }
        }
      })
    }

    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 1s ease'
    })
    window.addEventListener('scroll', reveal)
    window.addEventListener('resize', reveal)
    reveal()
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('resize', reveal)
    }
  }, [selector])
}


