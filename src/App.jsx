import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Hackathons from './pages/Hackathons'
import Credentials from './pages/Credentials'

function App() {
  const location = useLocation()
  return (
    <MotionConfig reducedMotion="user">
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/courses" element={<Navigate to="/credentials" replace />} />
          <Route path="/certificates" element={<Navigate to="/credentials" replace />} />
          <Route path="/awards" element={<Navigate to="/credentials" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
    </MotionConfig>
  )
}

export default App
