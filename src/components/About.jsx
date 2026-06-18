import './About.css'

const stats = [
  { value: '360°', label: 'Silicon-to-screen delivery' },
  { value: '3', label: 'Core disciplines' },
  { value: '2', label: 'Global locations' },
  { value: '100%', label: 'Quality-first mindset' },
]

const pillars = ['VLSI & Chip Design', 'Software Solutions', 'Digital Marketing']

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-head">
          <span className="section-eyebrow fade-in">About SynthSemi</span>
          <h2 className="section-title fade-in">
            Engineering from <span className="accent">silicon to screen</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>
              SynthSemi is an engineering and design services company founded by committed,
              experienced semiconductor professionals. We started in silicon — and grew into a
              partner that takes products end to end across chip design, software and digital growth.
            </p>
            <p>
              A leading service provider in VLSI, we exceed expectations on delivery, meet stringent
              schedules and bring integrity and intelligence to every engagement. We offer a full
              spectrum of design and verification — specification, logic partitioning,
              micro-architecture, RTL coding, synthesis, custom and standard VIPs and verification
              environments using the latest UVM/OVM methodologies.
            </p>
            <p>
              Today that same discipline powers our software engineering and digital marketing teams,
              giving you one accountable partner from the first transistor to the final campaign.
            </p>

            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="about-stat fade-up">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-services-list slide-in-right">
            {pillars.map((p) => (
              <div key={p} className="service-item fade-in">
                <span className="service-item-dot" />
                <h3>{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
