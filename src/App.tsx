import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Sections from './pages/Sections'
import BlogDetails from './pages/BlogDetails'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/*" element={<Sections />} />
      </Routes>
    </Layout>
  )
}


