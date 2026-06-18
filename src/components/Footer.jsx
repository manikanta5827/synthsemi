import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const offerings = [
    'VLSI & Chip Design',
    'Verification & FPGA',
    'Software Solutions',
    'Cloud & DevOps',
    'Digital Marketing',
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>SynthSemi</h3>
            <p>
              An engineering and design services company taking products from silicon to
              software to digital growth — founded by experienced semiconductor professionals.
            </p>
          </div>

          <div className="footer-section">
            <h4>Offerings</h4>
            <ul>
              {offerings.map((o) => (
                <li key={o}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>{o}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features') }}>Why us</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:info@synthsemi.com">info@synthsemi.com</a></li>
              <li><a href="tel:+917676379329">+91 7676379329</a></li>
              <li className="footer-loc">Bengaluru, India · Yongin, South Korea</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SynthSemi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
