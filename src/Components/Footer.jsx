import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, 
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
  FaArrowRight,
  FaTruck,
  FaStar,
  FaHeart,
  FaPaintRoller,
  FaHammer,
  FaBroom,
  FaBolt,
  FaBoxes,
  FaCogs
} from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices, MdAcUnit } from 'react-icons/md';
import logo from "../assets/logo.png"

const Footer = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

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

  // Phone number details
  const phoneNumber = '+918111002100';
  const formattedPhone = '81 1100 2100';
  const whatsappNumber = '918111002100';

  // Data for quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  // Data for services - All 7 Services
  const services = [
    { name: 'Packers & Movers', icon: FaTruck, color: '#27ae60' },
    { name: 'Cleaning Services', icon: MdCleaningServices, color: '#008080' },
    { name: 'Painting Services', icon: FaPaintRoller, color: '#e67e22' },
    { name: 'Electrical & Plumbing', icon: MdElectricalServices, color: '#3498db' },
    { name: 'Transport Services', icon: FaBoxes, color: '#8e44ad' },
    { name: 'AC Technician', icon: MdAcUnit, color: '#00bcd4' },
    { name: 'Carpentry Services', icon: FaHammer, color: '#d4a017' },
  ];

  // Data for social media
  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook', color: '#1877f2' },
    { icon: FaInstagram, url: 'https://www.instagram.com/gboomba_homesolutions', label: 'Instagram', color: '#e4405f' },
    { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube', color: '#ff0000' },
  ];

  return (
    <footer>
      {/* Gradient Top Border with Animation */}
      <div style={{ 
        height: '3px',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className={`transition-all duration-1000 transform ${
              animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-2 mb-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  <img src={logo} alt="GBOOMBA Logo" className="w-8 h-8 object-contain" />
                </div>
                <span 
                  className="text-xl font-extrabold tracking-wide"
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
              <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                Complete Home Solutions - Packers & Movers. We provide stress-free relocation services with care and professionalism.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="transition-all duration-300 p-2 rounded-full group"
                      style={{ 
                        color: '#9ca3af',
                        backgroundColor: `${colors.navy}44`,
                        border: `1px solid ${colors.teal}33`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = social.color;
                        e.target.style.transform = 'translateY(-3px) scale(1.1)';
                        e.target.style.borderColor = social.color;
                        e.target.style.boxShadow = `0 0 20px ${social.color}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#9ca3af';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.borderColor = `${colors.teal}33`;
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className={`transition-all duration-1000 transform ${
              animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '200ms' }}>
              <h3 
                className="font-semibold text-sm mb-3 pb-1.5 border-b inline-block"
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
              <ul className="space-y-1.5">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path}
                      className="flex items-center gap-2 text-gray-300 transition-all duration-200 text-xs group"
                      onMouseEnter={(e) => {
                        e.target.style.color = colors.tealLight;
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#d1d5db';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <FaArrowRight 
                        size={8} 
                        style={{ color: colors.teal }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services - All 7 Services */}
            <div className={`transition-all duration-1000 transform ${
              animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '300ms' }}>
              <h3 
                className="font-semibold text-sm mb-3 pb-1.5 border-b inline-block"
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
              <ul className="space-y-1.5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <Link 
                        to="/services"
                        className="flex items-center gap-2 text-gray-300 transition-all duration-200 text-xs group"
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.tealLight;
                          e.target.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#d1d5db';
                          e.target.style.transform = 'translateX(0)';
                        }}
                      >
                        <Icon style={{ color: service.color || colors.teal }} size={12} />
                        {service.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 transform ${
              animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '400ms' }}>
              <h3 
                className="font-semibold text-sm mb-3 pb-1.5 border-b inline-block"
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
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5 text-gray-300 text-xs">
                  <FaMapMarkerAlt 
                    style={{ color: colors.teal, marginTop: '2px' }} 
                    size={14}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <span>
                    23/17, Mutthu Vinayagar Kovil Street,<br />
                    Punjai Puliampatti, Erode - 638459
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-xs transition-all duration-200 hover:text-teal-300">
                  <FaPhoneAlt style={{ color: colors.teal }} size={12} />
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="hover:text-teal-300 transition-colors duration-200"
                    onClick={(e) => {
                      // Optional: Add analytics tracking here if needed
                      console.log('Call initiated to:', formattedPhone);
                    }}
                  >
                    {formattedPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-xs transition-all duration-200 hover:text-teal-300">
                  <FaWhatsapp style={{ color: '#25D366' }} size={12} />
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-xs transition-all duration-200 hover:text-teal-300">
                  <FaEnvelope style={{ color: colors.teal }} size={12} />
                  <a href="mailto:gboombappy@gmail.com" className="hover:text-teal-300 transition-colors duration-200">
                    gboombappy@gmail.com
                  </a>
                </li>
              </ul>

              {/* Enquire Button */}
              <Link
                to="/enquiry"
                className="inline-block mt-3 text-white px-5 py-2 rounded-md font-semibold text-xs transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                  e.target.style.boxShadow = `0 8px 20px ${colors.teal}55`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Free Quote
                  <FaArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${colors.teal}33, ${colors.navy}33)`,
                  }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        background: `linear-gradient(135deg, ${colors.navyDark} 0%, ${colors.navy} 100%)`,
        borderTop: `1px solid ${colors.teal}`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-300 text-[10px] text-center">
              &copy; {currentYear} <span style={{ color: colors.teal }}>GBOOMBA</span> Home Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-[10px] flex-wrap justify-center">
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