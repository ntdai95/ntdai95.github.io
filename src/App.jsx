import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Hackathons from './pages/Hackathons'
import Credentials from './pages/Credentials'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/credentials" element={<Credentials />} />
        {/* Legacy redirects */}
        <Route path="/courses" element={<Navigate to="/credentials" replace />} />
        <Route path="/certificates" element={<Navigate to="/credentials" replace />} />
        <Route path="/awards" element={<Navigate to="/credentials" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
