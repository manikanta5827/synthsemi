import './Features.css'

const Icon = ({ name }) => {
  const paths = {
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    brain: <><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 1 5 3 3 0 0 0 5 1 3 3 0 0 0 5-1 3 3 0 0 0 1-5 3 3 0 0 0-3-3 3 3 0 0 0-3-3Z" /><path d="M12 5v14" /></>,
    recycle: <><path d="M7 19H5a2 2 0 0 1-1.7-3L6 11M17 5l2.7 4.6A2 2 0 0 1 18 13h-3M9.5 5h5l2 3.5" /><path d="m6 11-2 1 1 2M14.5 19l1.5-1.5-2-1.5" /></>,
    scale: <><path d="M3 7h18M7 7v13M17 7v13" /><path d="m7 7-3 5h6l-3-5ZM17 7l-3 5h6l-3-5Z" /></>,
    track: <><path d="M3 12h4l2 6 4-14 2 8h6" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

const features = [
  { title: 'Strategy & Planning', icon: 'target', description: 'A clear verification and delivery strategy with adequate planning, so every project lands on time.' },
  { title: 'Reliability', icon: 'shield', description: 'Dependable estimations and schedules backed by years of industry experience and proven methodologies.' },
  { title: 'In-depth Understanding', icon: 'brain', description: 'Deep grasp of architecture and requirements to deliver optimal, fit-for-purpose solutions.' },
  { title: 'Reusability', icon: 'recycle', description: 'Reuse of core components and IPs to accelerate development cycles and cut time-to-market.' },
  { title: 'Scalability', icon: 'scale', description: 'We predict and plan for scale, so your designs and systems grow with your business.' },
  { title: 'Transparency', icon: 'track', description: 'Smart milestone tracking from the outset keeps delivery visible and accountable end to end.' },
]

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-head">
          <span className="section-eyebrow fade-in">Why choose us</span>
          <h2 className="section-title fade-in">
            Built on <span className="accent">discipline & trust</span>
          </h2>
          <p className="section-subtitle fade-in">
            The principles that run through every engagement, whether it's silicon, software or growth.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="feature-card scale-in"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="feature-num">{String(index + 1).padStart(2, '0')}</span>
              <div className="feature-icon"><Icon name={feature.icon} /></div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
