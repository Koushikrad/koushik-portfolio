import { useEffect } from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Blogs from './Blogs'
import Experience from './Experience'
import Contact from './Contact'
import { useLocation } from 'react-router-dom'

export default function Sections() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <div>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="blogs"><Blogs /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}


