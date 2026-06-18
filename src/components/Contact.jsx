import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'VLSI Design',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Mocking submission for now
      setTimeout(() => {
        setSubmitStatus({ type: 'success', message: 'Request sent! We will contact you shortly.' })
        setFormData({ name: '', email: '', interest: 'VLSI Design', message: '' })
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title">Let's build <br/><span className="accent">the next big thing.</span></h2>
            <p className="contact-intro">
              Join leading semiconductor and software firms who trust SynthSemi 
              for their most critical engineering challenges.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <h4>Bengaluru, India</h4>
                <p>Karthik Nagar, Doddanekundi, Bengaluru 560037</p>
              </div>
              <div className="detail-item">
                <h4>Yongin, South Korea</h4>
                <p>14 Seocheon-ro 201beon-gil, Giheung-gu</p>
              </div>
              <div className="detail-item">
                <h4>Email</h4>
                <p>info@synthsemi.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-heading">Book a Consultation</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">Area of Interest</label>
                <select 
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option>VLSI Design</option>
                  <option>Software Development</option>
                  <option>Digital Marketing</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Request →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
