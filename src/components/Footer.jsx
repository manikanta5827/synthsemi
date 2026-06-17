import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            
            <p>
              SynthSemi is an ASIC IP and Design Services company founded by committed 
              and experienced semiconductor industry professionals.
            </p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Design Services</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Verification Services</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>FPGA/Emulation service</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Backend service</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Staff augmentation</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Training services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 All rights reserved by SynthSemi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

