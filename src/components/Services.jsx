import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'Design Services',
      description: 'Comprehensive ASIC design solutions from specification to RTL coding, micro-architecture, and logic partitioning. We deliver high-quality designs that meet your performance and power requirements.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80',
      alt: 'Chip Design and Circuit Board'
    },
    {
      title: 'Verification Services',
      description: 'Advanced verification environments using latest methodologies (UVM/OVM). We develop custom and standard VIPs to ensure robust and reliable verification coverage.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&q=80',
      alt: 'Quality Verification and Testing'
    },
    {
      title: 'FPGA/Emulation Service',
      description: 'Accelerate your verification cycle with our FPGA and emulation services. We help you validate designs faster and more efficiently before tapeout.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&q=80',
      alt: 'FPGA and Hardware Emulation'
    },
    {
      title: 'Backend Services',
      description: 'Complete backend solutions with proven first-time-right silicon success. Our experienced team handles synthesis, place & route, and physical verification.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80',
      alt: 'Backend Design and Layout'
    },
    {
      title: 'Staff Augmentation',
      description: 'Scale your team with our expert engineers. We provide skilled professionals for your design and verification projects on flexible engagement models.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80',
      alt: 'Team Collaboration'
    },
    {
      title: 'Training Services',
      description: 'Comprehensive training programs on VLSI design, verification methodologies, and industry best practices. Enhance your team\'s skills with our expert-led sessions.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&q=80',
      alt: 'Training and Education'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title fade-in">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://via.placeholder.com/400x300/0a66c2/ffffff?text=${encodeURIComponent(service.title)}`
                  }}
                />
                <div className="service-image-overlay"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

