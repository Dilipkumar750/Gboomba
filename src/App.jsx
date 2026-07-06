import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaGoogle, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home/Hero';
import About from './pages/AboutUs/About';
import Services from './pages/Services/OurServices';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsConditions from './Components/TermsAndConditions';
import Enquiry from './Components/Enquiry';
import Testimonials from './pages/Testimonials/Testimonials';

const App = () => {
  // State for scroll to top button
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Replace with your actual URLs
  const socialLinks = {
    whatsapp: 'https://wa.me/918111002100?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services',
    instagram: 'https://www.instagram.com/gboomba_homesolutions?igsh=MXA0djJjcnE3aDQyag==',
    google: 'https://g.page/gboomba.in',
    phone: 'tel:918111002100'
  };

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
        
        {/* Floating Social Icons with Animations */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
          {/* WhatsApp */}
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-slow"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
            style={{ animationDelay: '0.5s' }}
            aria-label="Follow us on Instagram"
          >
            <FaInstagram className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Instagram
            </span>
          </a>

          {/* Google */}
          <a
            href={socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-slow"
            style={{ animationDelay: '1s' }}
            aria-label="Find us on Google"
          >
            <FaGoogle className="text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Google
            </span>
          </a>

          {/* Call Button */}
          <a
            href={socialLinks.phone}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-slow"
            style={{ animationDelay: '1.5s' }}
            aria-label="Call us"
          >
            <FaPhoneAlt className="text-xl" />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Call Now
            </span>
          </a>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;