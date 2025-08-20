import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setActiveSection(sectionId)
            
            // Update URL hash without triggering scroll
            const newHash = `#${sectionId}`
            if (window.location.hash !== newHash) {
              navigate(newHash, { replace: true })
            }
          }
        })
      },
      {
        threshold: 0.5, // Section is considered active when 50% visible
        rootMargin: '-80px 0px -20% 0px' // Account for navigation height and some bottom margin
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [navigate])

  return activeSection
}
