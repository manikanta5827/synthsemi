import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in">About Us</h2>
        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>
              SynthSemi is an ASIC IP and Design Services company founded by a group of committed 
              and experienced semiconductor industry professionals with a goal to provide end-to-end 
              design and engineering services. We are driven to use the power of our global network 
              to connect businesses with the right people, and people with the right businesses without bias.
            </p>
            <p>
              It is a leading service provider in VLSI by exceeding expectations on delivery, meeting 
              stringent schedules, demonstrating integrity and intelligence in all our engagements. 
              We offer a spectrum of design and verification services, which includes defining specification, 
              logic partitioning, micro-architecture, RTL coding, synthesis, developing custom and standard 
              VIPs and verification environment development using latest methodologies (UVM/OVM).
            </p>
          </div>
          <div className="about-services-list slide-in-right">
            <div className="service-item fade-in">
              <h3>Design Services</h3>
            </div>
            <div className="service-item fade-in">
              <h3>Verification Services</h3>
            </div>
            <div className="service-item fade-in">
              <h3>FPGA/Emulation Service</h3>
            </div>
            <div className="service-item fade-in">
              <h3>Backend Services</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

