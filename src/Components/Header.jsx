import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // Gradient colors
  const gradients = {
    primary: 'bg-gradient-to-r from-[#1a2a4a] via-[#1e3a6a] to-[#008080]',
    secondary: 'bg-gradient-to-r from-[#008080] to-[#00b4b4]',
    light: 'bg-gradient-to-r from-[#e6f7f7] via-[#d4f0f0] to-[#b8e8e8]',
    navy: 'bg-gradient-to-r from-[#0f1a33] via-[#1a2a4a] to-[#1e3a6a]',
    teal: 'bg-gradient-to-r from-[#008080] via-[#00a0a0] to-[#00b4b4]',
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}
    >
      {/* Top Header Bar with gradient */}
      <div 
        className={`hidden md:block transition-all duration-500 ${
          scrolled ? 'py-1 opacity-95' : 'py-2'
        } ${gradients.navy}`}
        style={{ 
          borderBottom: '2px solid #008080'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:gboombappy@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-teal-200 transition-all duration-300 text-sm group"
              >
                <FaEnvelope size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">gboombappy@gmail.com</span>
              </a>
              <a 
                href="tel:+918111002100" 
                className="flex items-center gap-2 text-white hover:text-teal-200 transition-all duration-300 text-sm group"
              >
                <FaPhoneAlt size={14} className="group-hover:animate-pulse" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">81 1100 2100</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/918111002100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-green-300 transition-all duration-300 text-sm group"
              >
                <FaWhatsapp size={14} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">WhatsApp</span>
              </a>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-2 text-white/90 text-xs">
                <FaMapMarkerAlt size={12} className="animate-pulse" style={{ color: '#00b4b4' }} />
                Punjai Puliampatti, Erode
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with gradient background */}
      <div 
        className={`transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
        }`}
        style={{ 
          borderBottom: `2px solid #e6f7f7`,
          boxShadow: scrolled ? '0 4px 30px rgba(26,42,74,0.15)' : '0 4px 6px -1px rgba(26,42,74,0.08)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo/Brand with gradient text */}
            <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
              <img 
                src={logo} 
                alt="GBOOMBA Home Solutions" 
                className={`object-contain transition-all duration-500 ${
                  scrolled ? 'h-12' : 'h-14'
                }`}
              />
              <div className="hidden sm:block">
                <span 
                  className="text-2xl font-extrabold block leading-tight tracking-wide transition-all duration-300 group-hover:scale-105 origin-left bg-gradient-to-r from-[#1a2a4a] via-[#1e3a6a] to-[#008080] bg-clip-text text-transparent"
                >
                  GBOOMBA
                </span>
                <span 
                  className="text-xs font-semibold block tracking-wider uppercase transition-all duration-300 group-hover:tracking-widest bg-gradient-to-r from-[#008080] to-[#00b4b4] bg-clip-text text-transparent"
                >
                  Complete Home Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with gradient underline */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
                  style={{
                    color: location.pathname === link.path ? '#008080' : '#4b5563',
                  }}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    } bg-gradient-to-r from-[#1a2a4a] via-[#1e3a6a] to-[#008080]`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons with gradient */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/enquiry"
                className="relative overflow-hidden text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-xl group bg-gradient-to-r from-[#1a2a4a] via-[#1e3a6a] to-[#008080]"
              >
                <span className="relative z-10">Enquire Now</span>
                <span 
                  className="absolute inset-0 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-gradient-to-r from-[#008080] to-[#00b4b4]"
                ></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="https://wa.me/918111002100"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaWhatsapp size={18} />
              </a>
              <Link
                to="/enquiry"
                onClick={closeMenu}
                className="text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-[#1a2a4a] to-[#1e3a6a] hover:from-[#008080] hover:to-[#00b4b4]"
              >
                Enquire
              </Link>
              <button
                onClick={toggleMenu}
                className="focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#e6f7f7] hover:to-[#d4f0f0]"
                style={{ color: '#1a2a4a' }}
              >
                {isMenuOpen ? (
                  <FaTimes size={24} className="animate-spin-once" />
                ) : (
                  <FaBars size={24} className="animate-pulse-once" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu with gradient */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ borderTop: isMenuOpen ? '2px solid #e6f7f7' : 'none' }}
          >
            <div className="pt-2 pb-2 space-y-1">
              {/* Mobile Contact Info with gradient icons */}
              <div className="px-3 py-2 space-y-2 border-b border-gray-100 mb-2">
                <a 
                  href="tel:+918111002100" 
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 group"
                  style={{ color: '#1a2a4a' }}
                >
                  <FaPhoneAlt className="bg-gradient-to-r from-[#008080] to-[#00b4b4] bg-clip-text text-transparent group-hover:animate-pulse" />
                  81 1100 2100
                </a>
                <a 
                  href="mailto:gboombappy@gmail.com" 
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 group"
                  style={{ color: '#1a2a4a' }}
                >
                  <FaEnvelope className="bg-gradient-to-r from-[#008080] to-[#00b4b4] bg-clip-text text-transparent group-hover:rotate-12 transition-transform duration-300" />
                  gboombappy@gmail.com
                </a>
              </div>

              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{
                    color: location.pathname === link.path ? '#008080' : '#4b5563',
                    backgroundColor: location.pathname === link.path ? '#e6f7f7' : 'transparent',
                    transitionDelay: `${index * 50}ms`
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.color = '#008080';
                      e.target.style.transform = 'translateX(8px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#4b5563';
                      e.target.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3 space-y-2">
                <a
                  href="https://wa.me/918111002100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium text-sm p-3 rounded-lg transition-all duration-300 hover:scale-105 group bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5]"
                  style={{ 
                    color: '#059669'
                  }}
                >
                  <FaWhatsapp style={{ color: '#059669' }} className="group-hover:animate-pulse" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        @keyframes pulse-once {
          0% { transform: scale(1); }
          50% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-spin-once {
          animation: spin-once 0.3s ease-out;
        }
        .animate-pulse-once {
          animation: pulse-once 0.3s ease-out;
        }
        /* Gradient text utility */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </header>
  );
};

export default Header;