import { useState, useEffect } from 'react'
import './Hero.css'

const words = ['Silicon Design', 'Enterprise Software', 'Mission Critical']

const Hero = () => {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let delay = deleting ? 45 : 95
    if (!deleting && display === current) delay = 1500
    if (deleting && display === '') delay = 350

    const t = setTimeout(() => {
      if (!deleting && display === current) {
        setDeleting(true)
      } else if (deleting && display === '') {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      } else {
        const next = deleting
          ? current.slice(0, display.length - 1)
          : current.slice(0, display.length + 1)
        setDisplay(next)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [display, deleting, wordIdx])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Leading the Hardware-Software Convergence
          </div>
          
          <h1 className="hero-title">
            Engineering your <br />
            <div className="hero-type-container">
              <span className="hero-gradient-text">
                {display}<span className="hero-cursor">|</span>
              </span>
            </div>
            with Precision.
          </h1>

          <p className="hero-subtitle">
            The world's most trusted partner for high-stakes VLSI chip design 
            and complex enterprise software architecture.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToSection('contact')} className="btn btn-hero-primary">
              Consult with an Architect
            </button>
            <button onClick={() => scrollToSection('services')} className="btn btn-hero-outline">
              Explore Solutions
            </button>
          </div>

          <div className="hero-trust">
            <p>Proven Expertise in</p>
            <div className="trust-logos">
              <div className="trust-logo">ARM</div>
              <div className="trust-logo">RISC-V</div>
              <div className="trust-logo">CADENCE</div>
              <div className="trust-logo">TSMC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
