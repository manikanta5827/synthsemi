import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Determine API URL based on environment
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Unable to connect to server. Please check your connection or contact us directly via email.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Contact Us</h2>
        <p className="contact-intro fade-in">
          Please contact us using the information below. For additional information on our services.
        </p>
        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <div className="contact-item fade-in">
              <h3>Address</h3>
              <p>
                Karthik Nagar, Bus Stop, Service Rd,<br />
                Wasa Layout, Doddanekundi,<br />
                Doddanekkundi, Bengaluru,<br />
                Karnataka 560037, India
              </p>
            </div>
            <div className="contact-item fade-in">
              <h3>Secondary Address</h3>
              <p>
                Room 510, 14 Seocheon-ro 201beon-gil,<br />
                Giheung-gu,<br />
                Yongin-si, Gyeonggi-do<br />
                Tel: 031.889. 0432<br />
                South Korea
              </p>
            </div>
            <div className="contact-item fade-in">
              <h3>Phone</h3>
              <p>
                <a href="tel:+918374544086">+91 7676379329</a>
              </p>
            </div>
            <div className="contact-item fade-in">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@synthsemi.com">info@synthsemi.com</a>
              </p>
            </div>
          </div>
          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

