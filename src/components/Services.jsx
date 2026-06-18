import './Services.css'

// Minimal line icons (stroke = currentColor) keyed by name
const Icon = ({ name }) => {
  const paths = {
    chip: <><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3" /></>,
    check: <><path d="M20 6 9 17l-5-5" /><circle cx="12" cy="12" r="10" opacity="0" /></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
    layers: <><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    code: <><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></>,
    cloud: <><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6 19h11.5Z" /></>,
    board: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="9" r="1.4" /><circle cx="16" cy="15" r="1.4" /><path d="M8 9h5v6M16 15H9" /></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="M12 15 9 12a13 13 0 0 1 9-9c1 4-.5 7-3 9l-3 3Z" /><path d="M9 12H4l2-3h3M12 15v5l3-2v-3" /></>,
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></>,
    trend: <><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></>,
    pen: <><path d="M12 19l7-7 3 3-7 7-3-3Z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18M2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

const groups = [
  {
    id: 'vlsi',
    tag: 'Silicon Engineering',
    heading: 'VLSI & Chip Design',
    blurb: 'Full-spectrum semiconductor design and verification, from spec to first-time-right silicon.',
    items: [
      { title: 'Design Services', icon: 'chip', description: 'ASIC design from specification to RTL coding, micro-architecture and logic partitioning that hits your power and performance targets.' },
      { title: 'Verification Services', icon: 'check', description: 'Robust verification environments using the latest UVM/OVM methodologies, with custom and standard VIPs for reliable coverage.' },
      { title: 'FPGA / Emulation', icon: 'cpu', description: 'Accelerate validation with FPGA prototyping and emulation, catching issues earlier and shortening the path to silicon.' },
      { title: 'Backend Services', icon: 'layers', description: 'Synthesis, place & route and physical verification handled by engineers with a proven first-time-right silicon record.' },
      { title: 'Staff Augmentation', icon: 'users', description: 'Scale your team on demand with skilled design and verification engineers on flexible engagement models.' },
      { title: 'Training Services', icon: 'book', description: 'Expert-led programs on VLSI design, verification methodologies and industry best practices to upskill your team.' },
    ],
  },
  {
    id: 'software',
    tag: 'Software Solutions',
    heading: 'Software Solutions',
    blurb: 'Custom software engineered to scale — across web, mobile, cloud and embedded systems.',
    items: [
      { title: 'Web & App Development', icon: 'code', description: 'Modern, responsive web and mobile applications built with reliable, maintainable engineering practices.' },
      { title: 'Cloud & DevOps', icon: 'cloud', description: 'Cloud architecture, CI/CD pipelines and infrastructure automation for resilient, cost-efficient deployments.' },
      { title: 'Embedded Software', icon: 'board', description: 'Firmware and embedded software that bridges hardware and application — a natural extension of our silicon work.' },
      { title: 'Product Engineering', icon: 'rocket', description: 'End-to-end product development from idea to launch, with design, build and ongoing support under one roof.' },
    ],
  },
  {
    id: 'marketing',
    tag: 'Digital Marketing',
    heading: 'Digital Marketing',
    blurb: 'Turn attention into measurable growth with data-driven digital marketing.',
    items: [
      { title: 'SEO', icon: 'search', description: 'Technical and content SEO that grows organic visibility and brings qualified traffic to your business.' },
      { title: 'Social Media', icon: 'share', description: 'Strategy, content and community management that builds an engaged audience across the platforms that matter.' },
      { title: 'Performance Marketing', icon: 'trend', description: 'Paid campaigns optimised around real metrics — every rupee tracked, tuned and accountable to results.' },
      { title: 'Branding & Design', icon: 'pen', description: 'Identity, visual systems and creative that make your brand distinctive and consistent everywhere it appears.' },
    ],
  },
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head">
          <span className="section-eyebrow fade-in">What we do</span>
          <h2 className="section-title fade-in">
            One team, <span className="accent">silicon to screen.</span>
          </h2>
          <p className="section-subtitle fade-in">
            Chip design, software, and digital growth — engineered to one standard, under one roof.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.id} className="service-group">
            <div className="service-group-head fade-up">
              <span className="service-group-tag">{group.tag}</span>
              <h3 className="service-group-title">{group.heading}</h3>
              <p className="service-group-blurb">{group.blurb}</p>
            </div>
            <div className="services-grid">
              {group.items.map((service, index) => (
                <article
                  key={service.title}
                  className="service-card scale-in"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="service-icon">
                    <Icon name={service.icon} />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <span className="service-shine" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
