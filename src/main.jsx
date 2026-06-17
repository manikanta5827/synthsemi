import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { initScrollAnimations } from './utils/scrollAnimation'
import './index.css'

const Root = () => {
  useEffect(() => {
    // Initialize scroll animations after a short delay
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  }, [])

  return (
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

