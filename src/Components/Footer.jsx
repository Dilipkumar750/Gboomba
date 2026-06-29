import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube,
  FaHome,
  FaBuilding,
  FaStore,
  FaClock,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    navyLight: '#2a3a5a',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  const currentYear = new Date().getFullYear();

  // Data for quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Data for services
  const services = [
    { name: 'House Relocation', icon: FaHome },
    { name: 'Office Relocation', icon: FaBuilding },
    { name: 'Shop Relocation', icon: FaStore },
    { name: 'Packing & Moving', icon: FaShieldAlt },
    { name: 'Emergency Service', icon: FaClock },
  ];

  // Data for social media
  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
  ];

  return (
    <footer>
      {/* Gradient Top Border with Animation */}
      <div style={{ 
        height: '4px',
        background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
        backgroundSize: '200% 100%',
        animation: 'gradientMove 3s ease-in-out infinite',
      }}>
        <style>
          {`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>

      {/* Main Footer */}
      <div style={{ 
        background: `linear-gradient(135deg, ${colors.navyDark} 0%, ${colors.navy} 50%, ${colors.navyLight} 100%)`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span 
                  className="text-2xl font-extrabold tracking-wide"
                  style={{
                    background: `linear-gradient(135deg, #ffffff 0%, ${colors.tealLight} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  GBOOMBA
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Complete Home Solutions - Packers & Movers. We provide stress-free relocation services with care and professionalism.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="transition-all duration-300 p-2 rounded-full"
                      style={{ 
                        color: '#9ca3af',
                        backgroundColor: `${colors.navy}44`,
                        border: `1px solid ${colors.teal}33`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = colors.teal;
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.borderColor = colors.teal;
                        e.target.style.boxShadow = `0 0 20px ${colors.teal}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#9ca3af';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = `${colors.teal}33`;
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 
                className="font-semibold text-lg mb-4 pb-2 border-b inline-block"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderBottomColor: colors.teal
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path}
                      className="flex items-center gap-2 text-gray-300 transition-all duration-200 text-sm group"
                      style={{ color: '#d1d5db' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = colors.tealLight;
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#d1d5db';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <FaArrowRight 
                        size={10} 
                        style={{ color: colors.teal }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 
                className="font-semibold text-lg mb-4 pb-2 border-b inline-block"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderBottomColor: colors.teal
                }}
              >
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <Link 
                        to="/services"
                        className="flex items-center gap-2 text-gray-300 transition-all duration-200 text-sm group"
                        style={{ color: '#d1d5db' }}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.tealLight;
                          e.target.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#d1d5db';
                          e.target.style.transform = 'translateX(0)';
                        }}
                      >
                        <Icon style={{ color: colors.teal }} size={14} />
                        {service.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 
                className="font-semibold text-lg mb-4 pb-2 border-b inline-block"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderBottomColor: colors.teal
                }}
              >
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <FaMapMarkerAlt 
                    style={{ color: colors.teal, marginTop: '4px' }} 
                    size={16}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <span>
                    23/17, Mutthu Vinayagar Kovil Street,<br />
                    Punjai Puliampatti, Erode District - 638459
                  </span>
                </li>
                <li 
                  className="flex items-center gap-3 text-gray-300 text-sm transition-all duration-200 cursor-pointer"
                  style={{ color: '#d1d5db' }}
                  onMouseEnter={(e) => e.target.style.color = colors.tealLight}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  <FaPhone style={{ color: colors.teal }} size={14} />
                  <a href="tel:918111002100">81 1100 2100</a>
                </li>
                <li 
                  className="flex items-center gap-3 text-gray-300 text-sm transition-all duration-200"
                  style={{ color: '#d1d5db' }}
                  onMouseEnter={(e) => e.target.style.color = colors.tealLight}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  <FaWhatsapp style={{ color: '#25D366' }} size={14} />
                  <a 
                    href="https://wa.me/918111002100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li 
                  className="flex items-center gap-3 text-gray-300 text-sm transition-all duration-200"
                  style={{ color: '#d1d5db' }}
                  onMouseEnter={(e) => e.target.style.color = colors.tealLight}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  <FaEnvelope style={{ color: colors.teal }} size={14} />
                  <a href="mailto:gboombappy@gmail.com">gboombappy@gmail.com</a>
                </li>
              </ul>

              {/* Enquire Button with Gradient */}
              <Link
                to="/enquiry"
                className="inline-block mt-4 text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = `0 10px 25px ${colors.teal}55`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote
                  <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.teal}33, ${colors.navy}33)`,
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Gradient */}
      <div style={{ 
        background: `linear-gradient(135deg, ${colors.navyDark} 0%, ${colors.navy} 100%)`,
        borderTop: `2px solid ${colors.teal}`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} <span style={{ color: colors.teal }}>GBOOMBA</span> Home Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <span 
                className="font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                QUALITY
              </span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.teal }}></span>
              <span 
                className="font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                TRUST
              </span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.teal }}></span>
              <span 
                className="font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${colors.tealLight} 0%, ${colors.teal} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                EXCELLENCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;