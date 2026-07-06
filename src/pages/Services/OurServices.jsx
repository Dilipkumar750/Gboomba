import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaPaintRoller,
  FaWrench,
  FaTools,
  FaClock,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaHome,
  FaBuilding,
  FaStore,
  FaBroom,
  FaFan,
  FaHammer,
  FaPlug,
  FaLightbulb,
  FaWater,
  FaBolt,
  FaCogs,
  FaBoxes,
  FaCouch,
  FaChair,
  FaBed,
  FaDoorOpen,
  FaScrewdriver,
  FaSearch,
  FaTimes,
  FaAward,
  FaThumbsUp,
  FaUsers,
  FaMedal,
  FaHeart,
  FaCalendarAlt,
  FaUserCheck,
  FaGem,
  FaRocket,
  FaLeaf,
  FaCrown,
  FaQuoteLeft
} from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices, MdAcUnit, MdPlumbing } from 'react-icons/md';

// Import local images
import cleaning from "../../assets/cleaning.jpg";
import painting from "../../assets/painting.jpg";
import electrical from "../../assets/electrical.jpg";
import packers from "../../assets/packers1.jpg";
import transport from "../../assets/transport.jpg";
import carpentry from "../../assets/carpentry.webp";
import actechnician from "../../assets/actechnician.webp";

const OurServices = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Colors matching the brand
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  // Service Images
  const serviceImages = [
    cleaning,
    painting,
    electrical,
    packers,
    transport,
    actechnician,
    carpentry
  ];

  // All Services Data with Images
  const services = [
    {
      id: 1,
      category: 'Cleaning',
      icon: MdCleaningServices,
      title: 'Cleaning Services',
      description: 'Professional Cleaning Solutions for Homes and Businesses.',
      longDescription: 'From routine cleaning to deep cleaning solutions, every project reflects care and attention to detail. Our team uses eco-friendly products and advanced techniques to deliver fresh, spotless, and healthier environments for you and your family.',
      tags: ['Normal Cleaning', 'Deep Cleaning', 'Kitchen', 'Bathroom', 'Water Tanks'],
      features: [
        'Floor Sweeping & Mopping',
        'Dusting & Surface Wiping',
        'Kitchen & Bathroom Cleaning',
        'Sink & Wash Basin Cleaning',
        'Waste Collection & Disposal',
        'Hard Water Stain Removal',
        'Deep Scrubbing & Sanitization',
        'Wall, Floor & Corner Cleaning',
        'Glass & Window Cleaning'
      ],
      areas: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Balcony', 'Garden Area', 'Water Tanks'],
      iconBg: '#e6f7f7',
      borderColor: '#008080',
      image: serviceImages[0],
      featured: true,
    },
    {
      id: 2,
      category: 'Painting',
      icon: FaPaintRoller,
      title: 'Painting Services',
      description: 'Quality Interior & Exterior Solutions for Homes and Businesses.',
      longDescription: 'Transform your space with our professional painting services. From touch-ups to complete makeovers, every painting project showcases precision and quality craftsmanship using premium paints and materials.',
      tags: ['Interior', 'Exterior', 'Touch-up', 'Waterproof Coating'],
      features: [
        'Painting After House Shifting',
        'Rental House Painting',
        'Previous House Repainting',
        'Interior Painting',
        'Exterior Painting',
        'Waterproof Coating',
        'Crack Filling',
        'Putty Work',
        'Primer Coat',
        'Ceiling Painting',
        'Doors & Windows Painting',
        'Grill & Metal Painting',
        'Wood Polish & Enamel Painting'
      ],
      iconBg: '#fff0e6',
      borderColor: '#e67e22',
      image: serviceImages[1],
      featured: false,
    },
    {
      id: 3,
      category: 'Electrical & Plumbing',
      icon: MdElectricalServices,
      title: 'Electrical & Plumbing',
      description: 'Installation, Repair & Maintenance for Homes and Businesses.',
      longDescription: 'From minor repairs to complete installations, every electrical and plumbing project reflects quality workmanship and reliable service. Our certified professionals ensure safe, efficient, and lasting solutions for all your needs.',
      tags: ['Electrical', 'Plumbing', 'Installation', 'Repair'],
      features: [
        'Installation & Repair',
        'Pipe & Leakage Repairs',
        'Appliance Installation',
        'Fan, Light & Appliance Installation',
        'Wiring & Switch Works',
        'Tap, Sink & Bathroom Fittings',
        'Emergency Assistance Available',
        'Fast & Reliable Service',
        'On-Time Visit & Support',
        'Safe & Quality Workmanship'
      ],
      iconBg: '#e6f0ff',
      borderColor: '#3498db',
      image: serviceImages[2],
      featured: true,
    },
    {
      id: 4,
      category: 'Packers & Movers',
      icon: FaTruck,
      title: 'Packers & Movers',
      description: 'Safe and Hassle-Free Relocation Solutions for Homes and Businesses.',
      longDescription: 'Moving made easy! From careful packing to safe relocation, every moving project is handled with professionalism and care. Our experienced team ensures your belongings reach their destination safely and on time.',
      tags: ['Household', 'Office', 'Shop', 'Transport'],
      features: [
        'Local & Long-Distance',
        'Safe & Secure Relocation Services',
        'Household & Commercial Shifting',
        'Complete End-to-End Moving Solutions',
        'Professional Packing & Unpacking',
        'Careful Loading & Unloading',
        'Furniture Dismantling & Reinstallation',
        'Premium Quality Packing Materials',
        'Safe Handling of Valuable Goods',
        'Experienced & Skilled Team',
        'On-Time Pickup & Delivery',
        'Secure & Reliable Transportation',
        'Trained & Professionals team',
        'Affordable & Trusted Service'
      ],
      iconBg: '#e6f7f0',
      borderColor: '#27ae60',
      image: serviceImages[3],
      featured: false,
    },
    {
      id: 5,
      category: 'Transport',
      icon: FaBoxes,
      title: 'Transport Services',
      description: 'Fast and Secure Transport Solutions for Homes and Businesses.',
      longDescription: 'Reliable transport solutions for all your needs. From local transportation to complete relocations, every project is handled with professionalism and care. We offer multiple vehicle options to suit your requirements.',
      tags: ['Local', 'Long-Distance', 'Goods', 'Furniture'],
      features: [
        'Local & Long-Distance Transport',
        'Multiple Vehicle Options',
        'Goods & Materials Transportation',
        'Furniture & Goods Transportation',
        'Door-to-Door Service',
        'Well-Maintained Vehicles',
        'On-Time Pickup & Delivery Services',
        'Experienced & Professional Drivers',
        'Fast & Reliable Transportation'
      ],
      iconBg: '#f0e6ff',
      borderColor: '#8e44ad',
      image: serviceImages[4],
      featured: false,
    },
    {
      id: 6,
      category: 'AC Technician',
      icon: MdAcUnit,
      title: 'AC Technician',
      description: 'Expert Cooling Solutions for Homes and Businesses.',
      longDescription: 'Stay cool with our professional AC services. From installation to repair and maintenance, every AC service reflects expertise and reliable workmanship. We ensure your cooling systems perform at their best.',
      tags: ['Installation', 'Repair', 'Maintenance', 'Gas Refilling'],
      features: [
        'AC Installation/Uninstallation',
        'AC Repair & Maintenance',
        'AC Gas Refilling',
        'AC Deep Cleaning',
        'AC Water Leakage Repair'
      ],
      iconBg: '#e6f7ff',
      borderColor: '#00bcd4',
      image: serviceImages[5],
      featured: false,
    },
    {
      id: 7,
      category: 'Carpentry',
      icon: FaHammer,
      title: 'Carpentry Services',
      description: 'Custom Woodwork and Repair Solutions for Homes and Businesses.',
      longDescription: 'Transform your space with our expert carpentry services. From custom fittings to furniture repairs, every carpentry project showcases precision and craftsmanship. We create durable, functional, and elegant solutions.',
      tags: ['Furniture', 'Doors', 'Windows', 'Modular Kitchen'],
      features: [
        'Furniture Assembly & Repair',
        'Door & Window Works',
        'Cupboard & Cabinet Works',
        'Wooden Partition & Shelving',
        'Bed, Table & Chair Repairs',
        'Lock, Handle & Hinge Replacement',
        'Home & Office Services'
      ],
      iconBg: '#fff0e6',
      borderColor: '#d4a017',
      image: serviceImages[6],
      featured: false,
    }
  ];

  // Stats
  const stats = [
    { number: '7', label: 'Service Categories', icon: FaTools },
    { number: '50+', label: 'Service Features', icon: FaCheckCircle },
    { number: '500+', label: 'Happy Customers', icon: FaUsers },
    { number: '100%', label: 'Satisfaction Guaranteed', icon: FaMedal }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightGray }}>
      {/* Hero Section - Minimized */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
          animation: 'gradientPulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32 animate-float-delayed"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12"
                style={{
                  background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
                  boxShadow: '0 4px 12px rgba(0,128,128,0.3)'
                }}
              >
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-white">
                  <span style={{ color: colors.teal }}>GBOOMBA</span>
                </h1>
                <p className="text-[10px] font-medium text-white/70 tracking-wider">COMPLETE HOME SERVICES</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 animate-pulse-slow" style={{ backgroundColor: colors.teal + '33' }}>
              <FaTools className="text-white" size={12} />
              <span className="text-[10px] font-medium text-white tracking-wider">OUR SERVICES</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight animate-fade-in-up">
              Complete <span style={{ color: colors.teal }}>Home Solutions</span>
            </h2>
            <p className="text-white/70 text-xs max-w-2xl mx-auto animate-fade-in-up-delayed">
              Professional, reliable, and high-quality services for all your home needs
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <a
                href="tel:918111002100"
                className="inline-flex items-center gap-1.5 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                style={{ backgroundColor: colors.teal }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.tealDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.teal}
              >
                <FaPhoneAlt className="group-hover:animate-pulse" size={12} /> Call Now: 81 1100 2100
              </a>
              <a
                href="https://wa.me/918111002100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
              >
                <FaWhatsapp className="group-hover:animate-pulse" size={12} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 30" className="w-full">
            <path fill={colors.lightGray} d="M0,20L80,18C160,16,320,12,480,14C640,16,800,24,960,22C1120,20,1280,8,1360,6L1440,4L1440,30L1360,30C1280,30,1120,30,960,30C800,30,640,30,480,30C320,30,160,30,80,30L0,30Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section with Stagger Animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <Icon style={{ color: colors.teal }} size={18} className="animate-bounce-slow" />
                  <span className="text-xl sm:text-2xl font-bold" style={{ color: colors.navy }}>{stat.number}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Grid - Zigzag Layout with Animations */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isImageLeft = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isImageLeft ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Image Section */}
                    <div
                      className={`relative overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[400px] ${
                        isImageLeft ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent lg:to-transparent"></div>

                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-300 hover:scale-105" style={{ color: service.borderColor }}>
                          <Icon size={14} className="animate-pulse-slow" />
                          {service.category}
                        </span>
                      </div>

                      {service.featured && (
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-[8px] sm:text-[10px] font-bold rounded-full shadow-lg flex items-center gap-0.5 sm:gap-1 animate-pulse-slow">
                            <FaStar size={10} /> Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className={`p-5 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            background: `linear-gradient(135deg, ${service.iconBg || colors.tealLight}, ${service.iconBg ? service.iconBg + 'cc' : colors.tealLight})`,
                            boxShadow: `0 4px 16px ${service.borderColor || colors.teal}44`
                          }}
                        >
                          <Icon style={{ color: service.borderColor || colors.teal }} size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>{service.title}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {service.tags.slice(0, 4).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[8px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded-full font-medium transition-all duration-300 hover:scale-105"
                                style={{
                                  backgroundColor: service.iconBg || colors.tealLight,
                                  color: service.borderColor || colors.teal
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                            {service.tags.length > 4 && (
                              <span className="text-[8px] sm:text-[10px] text-gray-400">+{service.tags.length - 4}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2">{service.description}</p>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.longDescription}</p>

                      {/* What We Offer Section - Fixed */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: colors.navy }}>
                          <FaCheckCircle style={{ color: service.borderColor || colors.teal }} size={14} />
                          What We Offer
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 transition-all duration-300 hover:translate-x-1">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: service.borderColor || colors.teal }}></div>
                              <span className="text-[11px] sm:text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Areas Covered */}
                      {service.areas && (
                        <div className="mb-4 sm:mb-5">
                          <h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 flex items-center gap-2" style={{ color: colors.navy }}>
                            <FaHome style={{ color: service.borderColor || colors.teal }} size={14} />
                            Areas Covered
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {service.areas.slice(0, 5).map((area, idx) => (
                              <span
                                key={idx}
                                className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                                style={{ backgroundColor: colors.tealLight, color: colors.teal }}
                              >
                                {area}
                              </span>
                            ))}
                            {service.areas.length > 5 && (
                              <span className="text-[9px] sm:text-[10px] text-gray-400">+{service.areas.length - 5}</span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t-2 border-gray-100">
                        <Link
                          to="/contact"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] group relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${service.borderColor || colors.teal}, ${colors.tealDark})`,
                            boxShadow: `0 4px 16px ${(service.borderColor || colors.teal) + '55'}`
                          }}
                        >
                          <span className="relative z-10">Get Quote</span>
                          <FaArrowRight size={12} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        </Link>
                        <a
                          href="tel:918111002100"
                          className="inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-110"
                          style={{ color: service.borderColor || colors.teal }}
                        >
                          <FaPhoneAlt size={16} className="hover:animate-pulse" />
                        </a>
                        <a
                          href="https://wa.me/918111002100"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-110"
                          style={{ color: '#25D366' }}
                        >
                          <FaWhatsapp size={18} className="hover:animate-pulse" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section with Animations */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center transition-all duration-1000 transform ${
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-gradient" style={{ color: colors.navy }}>
              Need Our <span style={{ color: colors.teal }}>Services?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
              Contact us today for a free quote. Our team is ready to help with all your home service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:918111002100"
                className="inline-flex items-center justify-center gap-2 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: colors.navy }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.teal}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.navy}
              >
                <span className="relative z-10"><FaPhoneAlt className="inline mr-2 group-hover:animate-pulse" /> Call Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </a>
              <a
                href="https://wa.me/918111002100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 group"
              >
                <FaWhatsapp className="group-hover:animate-pulse" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.7s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-gradient {
          background: linear-gradient(135deg, #1a2a4a, #008080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Improved scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #008080;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #006666;
        }
      `}</style>
    </div>
  );
};

export default OurServices;