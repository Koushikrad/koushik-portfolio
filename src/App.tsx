import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Sections from './pages/Sections'
import BlogDetails from './pages/BlogDetails'
import Guestbook from './pages/Guestbook'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import { trackPageEvent } from './utils/analytics'

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageEvent(location.pathname)
  }, [location])

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Sections />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
