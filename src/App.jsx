import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>SynthSemi - ASIC IP and Design Services | VLSI Design Solutions</title>
        <meta name="description" content="SynthSemi is a leading ASIC IP and Design Services company providing end-to-end semiconductor design and engineering solutions. Expert VLSI design, verification, FPGA, and backend services." />
        <meta name="keywords" content="ASIC Design, VLSI, Semiconductor Design, Verification Services, FPGA, Backend Services, RTL Coding, UVM, OVM, IP Design, Chip Design" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://synthsemi.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SynthSemi - ASIC IP and Design Services" />
        <meta property="og:description" content="Leading semiconductor design services company providing end-to-end ASIC design and verification solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synthsemi.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SynthSemi - ASIC IP and Design Services" />
        <meta name="twitter:description" content="Leading semiconductor design services company" />
      </Helmet>
      
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Services />
          <Features />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

