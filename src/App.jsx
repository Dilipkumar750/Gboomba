import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaGoogle } from 'react-icons/fa'
import ScrollToTop from './Components/ScrollToTop'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home/Hero'
import About from './pages/AboutUs/About'
import Services from './pages/Services/OurServices'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsConditions from './Components/TermsAndConditions'
import Enquiry from './Components/Enquiry'
import Testimonials from './pages/Testimonials/Testimonials'

const App = () => {
  // Replace with your actual URLs
  const socialLinks = {
    whatsapp: 'https://wa.me/1234567890?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services',
    instagram: 'https://www.instagram.com/yourusername/',
    google: 'https://g.page/yourbusiness?gm'
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Social Icons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
          {/* WhatsApp */}
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Instagram
            </span>
          </a>

          {/* Google */}
          <a
            href={socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            aria-label="Find us on Google"
          >
            <FaGoogle className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Google
            </span>
          </a>
        </div>
      </div>
    </Router>
  )
}

export default App