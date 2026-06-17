import './Features.css'

const Features = () => {
  const features = [
    {
      title: 'Strategy and Planning',
      description: 'Defining a verification strategy with adequate planning to ensure project success and timely delivery.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80',
      alt: 'Strategy and Planning'
    },
    {
      title: 'Reliability',
      description: 'Reliable verification estimations and schedules backed by years of industry experience and proven methodologies.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80',
      alt: 'Reliability and Trust'
    },
    {
      title: 'In-depth Understanding',
      description: 'Strong understanding of architecture and verification requirements to deliver optimal solutions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80',
      alt: 'In-depth Analysis'
    },
    {
      title: 'Reusability',
      description: 'Reuse of core components and IPs to accelerate development cycles and reduce time-to-market.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80',
      alt: 'Reusable Components'
    },
    {
      title: 'Scalability',
      description: 'Predicting and planning scalability to ensure your designs can grow with your business needs.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
      alt: 'Scalability and Growth'
    },
    {
      title: 'Tracking',
      description: 'Smart tracking of verification milestones from onset to ensure transparency and on-time delivery.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80',
      alt: 'Progress Tracking'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title fade-in">Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card scale-in">
              <div className="feature-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.alt}
                  className="feature-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://via.placeholder.com/400x300/0a66c2/ffffff?text=${encodeURIComponent(feature.title)}`
                  }}
                />
                <div className="feature-image-overlay"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

