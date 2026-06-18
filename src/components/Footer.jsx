import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      title: 'Offerings',
      links: [
        { label: 'VLSI & Chip Design', id: 'services' },
        { label: 'Verification & FPGA', id: 'services' },
        { label: 'Software Solutions', id: 'services' },
        { label: 'Cloud & DevOps', id: 'services' },
        { label: 'Digital Marketing', id: 'services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', id: 'about' },
        { label: 'Why Us', id: 'features' },
        { label: 'Our Process', id: 'features' },
        { label: 'Contact', id: 'contact' },
        { label: 'Careers', id: 'contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', id: 'home' },
        { label: 'Case Studies', id: 'about' },
        { label: 'Blog', id: 'home' },
        { label: 'Status', id: 'home' },
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">SynthSemi</h2>
            <p className="footer-tagline">
              Engineering the future from silicon to screen. Global partners in VLSI, 
              Software, and Digital Growth.
            </p>
          </div>

          <div className="footer-links-grid">
            {sections.map((section) => (
              <div key={section.title} className="footer-link-col">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={`#${link.id}`} 
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} SynthSemi. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-contact-info">
            <span>Bengaluru, India</span>
            <span className="dot"></span>
            <span>Yongin, South Korea</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
