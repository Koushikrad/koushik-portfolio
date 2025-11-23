import { useEffect } from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Blogs from './Blogs'
import Experience from './Experience'
import Contact from './Contact'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'
import SEO from '../components/SEO'

export default function Sections() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [hash])

  return (
    <div>
      <SEO title="Koushik Radhakrishnan" description="Senior Frontend Developer & UI/UX Enthusiast" />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="blogs"><Blogs /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}


