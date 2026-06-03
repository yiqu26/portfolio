import './index.css'
import Grain from './components/Grain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Marquee from './components/Marquee'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Grain />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Marquee />
      <Contact />
    </div>
  )
}
