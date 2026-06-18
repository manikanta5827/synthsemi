import { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  {
    eyebrow: 'Silicon Engineering',
    titleLead: 'Chip Design',
    titleAccent: 'Services',
    subtitle:
      'End-to-end ASIC & VLSI design — from specification and RTL to verification and first-time-right silicon.',
  },
  {
    eyebrow: 'Software Solutions',
    titleLead: 'Software',
    titleAccent: 'Solutions',
    subtitle:
      'Web, mobile, cloud and embedded software engineered to scale — custom products built around your business.',
  },
  {
    eyebrow: 'Digital Marketing',
    titleLead: 'Digital',
    titleAccent: 'Marketing',
    subtitle:
      'SEO, performance campaigns, social and branding that turn attention into measurable growth.',
  },
]

const Hero = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const slide = slides[active]

  return (
    <section id="home" className="hero grid-bg">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="section-eyebrow hero-eyebrow" key={`e-${active}`}>
            {slide.eyebrow}
          </span>

          <h1 className="hero-title" key={`t-${active}`}>
            {slide.titleLead} <span className="accent">{slide.titleAccent}</span>
          </h1>

          <p className="hero-subtitle" key={`s-${active}`}>
            {slide.subtitle}
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection('services')} className="btn btn-primary">
              Explore services
              <span className="btn-arrow">→</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Talk to us
            </button>
          </div>

          <div className="hero-dots">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`hero-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.titleLead} ${s.titleAccent}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-chip">
            <div className="hero-chip-core">
              <span className="hero-chip-label">Synth</span>
            </div>
            {/* circuit pins */}
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={`pt-${i}`} className="pin pin-top" style={{ left: `${12 + i * 12}%` }} />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={`pb-${i}`} className="pin pin-bottom" style={{ left: `${12 + i * 12}%` }} />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={`pl-${i}`} className="pin pin-left" style={{ top: `${18 + i * 16}%` }} />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={`pr-${i}`} className="pin pin-right" style={{ top: `${18 + i * 16}%` }} />
            ))}
          </div>

          <div className="hero-badges">
            {slides.map((s, i) => (
              <div key={i} className={`hero-badge ${i === active ? 'active' : ''}`}>
                {s.titleLead} {s.titleAccent}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
