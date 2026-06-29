import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    teal: '#008080',
    tealLight: '#e6f7f7',
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Top Header Bar - Email & Phone */}
      <div 
        className="hidden md:block py-2"
        style={{ 
          backgroundColor: colors.navy,
          borderBottom: `2px solid ${colors.teal}`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:gboombappy@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-teal-light transition-colors duration-200 text-sm"
              >
                <FaEnvelope size={14} />
                gboombappy@gmail.com
              </a>
              <a 
                href="tel:918111002100" 
                className="flex items-center gap-2 text-white hover:text-teal-light transition-colors duration-200 text-sm"
              >
                <FaPhone size={14} />
                81 1100 2100
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/918111002100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-teal-light transition-colors duration-200 text-sm"
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-2 text-white/80 text-xs">
                <FaMapMarkerAlt size={12} />
                Punjai Puliampatti, Erode
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div 
        className="bg-white shadow-lg"
        style={{ borderBottom: `2px solid ${colors.tealLight}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="GBOOMBA Home Solutions" 
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <span 
                  className="text-2xl font-extrabold block leading-tight tracking-wide"
                  style={{ color: colors.navy }}
                >
                  GBOOMBA
                </span>
                <span 
                  className="text-xs font-semibold block tracking-wider uppercase"
                  style={{ color: colors.teal }}
                >
                  Complete Home Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  style={{
                    color: location.pathname === link.path ? colors.teal : '#4b5563',
                    borderBottom: location.pathname === link.path ? `2px solid ${colors.teal}` : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.color = colors.teal;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.color = '#4b5563';
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/enquiry"
                className="text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: colors.navy,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.teal;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.navy;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                }}
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="https://wa.me/918111002100"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                <FaWhatsapp size={18} />
              </a>
              <Link
                to="/enquiry"
                onClick={closeMenu}
                className="text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                style={{ backgroundColor: colors.navy }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
              >
                Enquire
              </Link>
              <button
                onClick={toggleMenu}
                className="focus:outline-none transition-colors duration-200 p-2"
                style={{ color: colors.navy }}
                onMouseEnter={(e) => e.target.style.color = colors.teal}
                onMouseLeave={(e) => e.target.style.color = colors.navy}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4" style={{ borderTop: `1px solid ${colors.tealLight}` }}>
              <div className="pt-2 pb-2 space-y-1">
                {/* Mobile Contact Info */}
                <div className="px-3 py-2 space-y-2 border-b border-gray-100 mb-2">
                  <a 
                    href="tel:918111002100" 
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: colors.navy }}
                  >
                    <FaPhone style={{ color: colors.teal }} />
                    81 1100 2100
                  </a>
                  <a 
                    href="mailto:gboombappy@gmail.com" 
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: colors.navy }}
                  >
                    <FaEnvelope style={{ color: colors.teal }} />
                    gboombappy@gmail.com
                  </a>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{
                      color: location.pathname === link.path ? colors.teal : '#4b5563',
                      backgroundColor: location.pathname === link.path ? colors.tealLight : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== link.path) {
                        e.target.style.backgroundColor = '#f9fafb';
                        e.target.style.color = colors.teal;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== link.path) {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#4b5563';
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
                    className="flex items-center gap-2 font-medium text-sm p-3 rounded-lg transition-colors duration-200"
                    style={{ 
                      color: '#059669',
                      backgroundColor: '#ecfdf5'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#d1fae5';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ecfdf5';
                    }}
                  >
                    <FaWhatsapp style={{ color: '#059669' }} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;