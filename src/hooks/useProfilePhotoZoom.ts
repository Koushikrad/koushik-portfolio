import { useEffect } from 'react'

export function useProfilePhotoZoom() {
  useEffect(() => {
    const photo = document.querySelector<HTMLElement>('.profile-photo')
    if (!photo) return

    const handleScroll = () => {
      const rect = photo.getBoundingClientRect()
      const threshold = window.innerHeight * 0.7
      
      if (rect.top < threshold) {
        photo.classList.add('in-view')
      }
    }

    const checkInitialVisibility = () => {
      const rect = photo.getBoundingClientRect()
      // If photo is already in viewport, apply zoom effect immediately
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        photo.classList.add('in-view')
      }
    }

    // Check initial state immediately
    checkInitialVisibility()
    
    // Add a small delay to ensure DOM is ready, then check again
    setTimeout(checkInitialVisibility, 100)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
}
