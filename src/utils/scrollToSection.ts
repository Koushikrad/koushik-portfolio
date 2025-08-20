export function scrollToSection(sectionId: string) {
  const el = document.querySelector(sectionId)
  if (el) {
    const element = el as HTMLElement
    const navHeight = 80 // Height of fixed navigation
    const elementTop = element.offsetTop
    const elementHeight = element.offsetHeight
    const viewportHeight = window.innerHeight
    
    // Calculate the optimal scroll position to show the full section
    let scrollTop = elementTop - navHeight
    
    // If section is taller than viewport, start from the top
    if (elementHeight > viewportHeight - navHeight) {
      scrollTop = elementTop - navHeight
    } else {
      // If section fits in viewport, center it or ensure it's fully visible
      const idealTop = elementTop - (viewportHeight - elementHeight) / 2
      
      // Ensure we don't scroll too high or too low
      scrollTop = Math.max(0, Math.min(idealTop, document.documentElement.scrollHeight - viewportHeight))
    }
    
    // Always scroll to the section, regardless of current URL
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
    
    // Update URL after a small delay to ensure scroll starts
    setTimeout(() => {
      if (sectionId.startsWith('#')) {
        window.history.replaceState(null, '', sectionId)
      }
    }, 50)
  }
}
