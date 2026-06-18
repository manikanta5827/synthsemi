import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const items = [
  {
    quote:
      'SynthSemi took our SoC from spec to first-time-right silicon on a brutal schedule. Their verification rigor caught issues that would have cost us a respin.',
    name: 'Hardware Lead',
    role: 'Fabless Semiconductor Startup',
    accent: 'lavender',
  },
  {
    quote:
      'One team handled our firmware, the cloud backend, and the launch campaign. Having silicon and software under one roof removed every hand-off delay.',
    name: 'VP Engineering',
    role: 'Connected Devices Company',
    accent: 'blue',
  },
  {
    quote:
      'The growth team rebuilt our funnel and tripled qualified inbound in a quarter. Every rupee was tracked and accountable to real pipeline.',
    name: 'Founder',
    role: 'B2B SaaS Platform',
    accent: 'mint',
  },
]

const Testimonials = () => {
  const [idx, setIdx] = useState(0)
  const paused = useRef(false)

  // auto-advance one card at a time
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % items.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head-split fade-up">
          <div>
            <span className="section-eyebrow">Proven impact</span>
            <h2 className="section-title">
              Real work, <span className="accent">real results.</span>
            </h2>
          </div>
          <p className="section-head-aside">
            How teams use SynthSemi to ship silicon, software and growth — without the hand-offs.
          </p>
        </div>

        <div
          className="testimonial-viewport"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="testimonial-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {items.map((t) => (
              <figure key={t.name} className={`testimonial-card t-${t.accent}`}>
                <span className="testimonial-mark" aria-hidden="true">“</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="t-avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.role}</em>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {items.map((t, i) => (
            <button
              key={t.name}
              className={i === idx ? 'active' : ''}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
