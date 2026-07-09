import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} onHero={!scrolled} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Process />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
