import './About.css'

const About = () => {
  return (
    <section id="about" className="about-modern">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src="/chip.png" alt="AI Silicon Architecture" className="about-main-image" />
              <div className="image-overlay-glow"></div>
            </div>
          </div>

          <div className="about-info">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title text-left">
              Engineering from <span className="accent">silicon to screen</span>
            </h2>
            <p className="about-description">
              SynthSemi is an engineering and design services company founded by committed,
              experienced semiconductor professionals. We started in silicon — and grew into a
              partner that takes products end to end across chip design, software and digital growth.
            </p>
            
            <div className="about-pillars">
              <div className="pillar">
                <h4>VLSI Design</h4>
                <p>Full spectrum design & verification using UVM/OVM methodologies.</p>
              </div>
              <div className="pillar">
                <h4>Software</h4>
                <p>Custom cloud-native solutions and embedded systems.</p>
              </div>
              <div className="pillar">
                <h4>Marketing</h4>
                <p>Performance-driven digital growth and brand positioning.</p>
              </div>
            </div>

            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Learn more about us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
