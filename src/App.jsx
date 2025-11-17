import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Hackathons from './pages/Hackathons'
import Courses from './pages/Courses'
import Certificates from './pages/Certificates'
import Awards from './pages/Awards'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </Layout>
  )
}

export default App
