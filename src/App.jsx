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
        <title>SynthSemi - Chip Design, Software & Digital Marketing Solutions</title>
        <meta name="description" content="SynthSemi is an engineering and design services company delivering across VLSI/ASIC chip design, custom software solutions, and digital marketing. End-to-end semiconductor design, verification, FPGA, cloud, web/app development, SEO and performance marketing." />
        <meta name="keywords" content="ASIC Design, VLSI, Semiconductor Design, Verification Services, FPGA, Backend Services, RTL Coding, UVM, OVM, Chip Design, Software Solutions, Web Development, App Development, Cloud, DevOps, Embedded Software, Digital Marketing, SEO, Social Media, Performance Marketing, Branding" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://synthsemi.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SynthSemi - Chip Design, Software & Digital Marketing" />
        <meta property="og:description" content="One partner across silicon, software and digital growth — VLSI/ASIC chip design, custom software solutions and digital marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synthsemi.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SynthSemi - Chip Design, Software & Digital Marketing" />
        <meta name="twitter:description" content="Engineering from silicon to screen — chip design, software solutions and digital marketing." />
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

