import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'

export default function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
    </div>
  )
}
