import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Sections from './pages/Sections'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Sections />} />
      </Routes>
    </Layout>
  )
}


