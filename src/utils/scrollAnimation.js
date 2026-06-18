// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        // Optionally stop observing after animation
        // observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-up, .slide-in-left, .slide-in-right, .scale-in, .blur-in'
  )
  
  animatedElements.forEach(el => observer.observe(el))
}

// Stagger animation for grid items
export const initStaggerAnimation = (containerSelector, itemSelector) => {
  const container = document.querySelector(containerSelector)
  if (!container) return

  const items = container.querySelectorAll(itemSelector)
  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`
    item.classList.add('fade-in')
  })

  initScrollAnimations()
}


