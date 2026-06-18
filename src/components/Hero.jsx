import { useState, useEffect } from 'react'
import './Hero.css'

const words = ['Chip Design', 'Software', 'Digital Marketing']

const Hero = () => {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // typewriter loop: type → hold → delete → next
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

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="home" className="hero">
      <div className="hero-stage">
        <div className="hero-mesh" aria-hidden="true">
          <span className="mesh mesh-1" />
          <span className="mesh mesh-2" />
          <span className="mesh mesh-3" />
        </div>

        <div className="hero-stage-inner">
          <span className="hero-eyebrow">SILICON · SOFTWARE · GROWTH</span>

          <h1 className="hero-title">
            We engineer your
            <br />
            <span className="hero-type">
              <span className="hero-type-word">{display}</span>
              <span className="hero-caret" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-subtitle">
            One partner from first transistor to final campaign — VLSI chip design,
            custom software, and digital marketing under one roof.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection('services')} className="btn btn-hero-primary">
              Explore services <span className="btn-arrow">→</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-hero-ghost">
              Talk to us
            </button>
          </div>

          {/* corner cards */}
          <div className="hero-card hero-card-left">
            <div className="hero-card-stars">★★★★★</div>
            <p>Trusted by teams across <strong>India &amp; South Korea</strong> for silicon-to-software delivery.</p>
          </div>

          <div className="hero-card hero-card-right">
            <span className="hero-card-label">Our disciplines</span>
            <div className="hero-card-tags">
              <span>VLSI</span>
              <span>Software</span>
              <span>Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
