import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-slide hero-slide-1">
        <div className="hero-slide-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Chip Design Services</h1>
          <p className="hero-subtitle">Our Core Service</p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('about')} className="btn btn-primary">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Contact</button>
          </div>
        </div>
      </div>
      <div className="hero-slide hero-slide-2">
        <div className="hero-slide-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">ASIC Design and Verification Services</h1>
          <p className="hero-subtitle">Flexible solutions that adapt to customer requirements and needs</p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('about')} className="btn btn-primary">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Contact</button>
          </div>
        </div>
      </div>
      <div className="hero-slide hero-slide-3">
        <div className="hero-slide-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Backend Services</h1>
          <p className="hero-subtitle">Our engineers' proven track record of first-time-right silicon over 30 tapeouts makes us a one-stop solution for customer designs.</p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('about')} className="btn btn-primary">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Contact</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

