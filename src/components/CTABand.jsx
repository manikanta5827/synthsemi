import './CTABand.css'

const CTABand = () => {
  const goContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section className="cta-band">
      <div className="cta-band-inner fade-up">
        <span className="cta-band-eyebrow">Silicon · Software · Growth</span>
        <h2 className="cta-band-title">
          Engineered by people,<br />built to last.
        </h2>
        <p className="cta-band-sub">
          One accountable partner from the first transistor to the final campaign.
        </p>
        <button className="cta-band-btn" onClick={goContact}>
          Start a conversation <span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  )
}

export default CTABand
