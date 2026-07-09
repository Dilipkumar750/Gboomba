import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaTruck,
  FaPaintRoller,
  FaWrench,
  FaTools,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaStar,
  FaQuoteLeft,
  FaAward,
  FaThumbsUp,
  FaCalendarCheck,
  FaHeart,
  FaRocket,
  FaRegSmile,
  FaRegLightbulb,
  FaRegHandshake,
  FaRegClock,
  FaRegStar,
  FaHome,
  FaBuilding,
  FaStore,
  FaBroom,
  FaLeaf,
  FaTrophy,
  FaMedal,
  FaHeadset,
  FaBoxes,
  FaCouch,
  FaChair,
  FaBed,
  FaDoorOpen,
  FaLightbulb,
  FaPlug,
  FaHammer,
  FaScrewdriver,
  FaCogs,
  FaClipboardList,
  FaFileInvoice,
  FaPhoneAlt,
  FaWhatsappSquare,
  FaMapMarkerAlt,
  FaMailBulk,
  FaGlobe,
  FaGem,
  FaCrown,
  FaTimesCircle,
  FaUserSlash,
  FaBan,
  FaHourglass,
  FaUsersSlash
} from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices, MdPlumbing, MdAcUnit } from 'react-icons/md';
import collage from "../../assets/collage.png";

const About = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Colors matching HomePage - Navy and Teal
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
    gold: '#FFD700',
    white: '#ffffff',
    lightGray: '#f8f9fa',
    red: '#e74c3c',
    orange: '#f39c12'
  };

  const whyChooseUs = [
    {
      icon: FaShieldAlt,
      title: 'Scratch-Free Care',
      description: 'Protect your walls & furniture with our careful handling and premium moving techniques'
    },
    {
      icon: FaRegSmile,
      title: 'Neighbor-Friendly Service',
      description: 'Quiet, clean, and respectful service that keeps your neighbors happy'
    },
    {
      icon: FaBoxes,
      title: 'Safe Handling of Every Item',
      description: 'Expert care for belongings of all sizes – from delicate to oversized'
    },
    {
      icon: FaTruck,
      title: 'Professional Packing & Loading',
      description: 'Industry-standard packing, loading, and unloading with precision and care'
    },
    {
      icon: FaCalendarCheck,
      title: 'Hassle-Free Relocation',
      description: 'Stress-free moving experience with our dedicated and reliable team'
    },
    {
      icon: FaClock,
      title: 'On-Time & Reliable Service',
      description: 'Punctual delivery and dependable service you can count on every time'
    },
    {
      icon: FaHeart,
      title: 'Happy Moving Memories',
      description: 'Make moving a happy memory for your family with our caring and supportive team'
    }
  ];

  // Promises Data - Updated with new content
  const promises = [
    { 
      icon: FaTimesCircle, 
      text: 'The same problem every time? Not anymore.',
      color: colors.red,
      type: 'problem'
    },
    { 
      icon: FaCalendarCheck, 
      text: 'Don\'t spoil your weekends.',
      color: colors.orange,
      type: 'solution'
    },
    { 
      icon: FaUserSlash, 
      text: 'Don\'t trouble your loved ones.',
      color: colors.orange,
      type: 'solution'
    },
    { 
      icon: FaBan, 
      text: 'DON\'T LET MOVING RUIN YOUR WEEKEND.',
      color: colors.red,
      type: 'warning'
    },
    { 
      icon: FaUsersSlash, 
      text: 'Don\'t burden your friends or relatives with the stress of shifting.',
      color: colors.orange,
      type: 'solution'
    },
    { 
      icon: FaBoxes, 
      text: 'Leave the packing, lifting, loading, transportation, and setup to our trained professionals.',
      color: colors.teal,
      type: 'action'
    },
    { 
      icon: FaRegSmile, 
      text: 'Sit back. Relax. We\'ll handle the hard work.',
      color: colors.teal,
      type: 'relax'
    }
  ];

  // Services Data - Redesigned
  const services = [
    {
      icon: FaTruck,
      title: 'Packers & Movers',
      desc: 'Safe and hassle-free relocation solutions for homes and businesses.',
      tags: ['Household', 'Office', 'Shop'],
      color: '#27ae60'
    },
    {
      icon: MdCleaningServices,
      title: 'Cleaning Services',
      desc: 'Professional cleaning solutions for homes and businesses.',
      tags: ['Normal', 'Deep', 'Tank', 'Bathroom'],
      color: '#008080'
    },
    {
      icon: FaPaintRoller,
      title: 'Painting Services',
      desc: 'Quality interior & exterior solutions for homes and businesses.',
      tags: ['Interior', 'Exterior', 'Touch-up', 'Rental Painting'],
      color: '#e67e22'
    },
    {
      icon: MdElectricalServices,
      title: 'Electrical & Plumbing',
      desc: 'Installation, repair & maintenance for homes and businesses.',
      tags: ['Installation', 'Relocation', 'Maintenance'],
      color: '#3498db'
    },
    {
      icon: MdAcUnit,
      title: 'AC Technician',
      desc: 'Expert cooling solutions for homes and businesses.',
      tags: ['Installation', 'Relocation', 'Services'],
      color: '#00bcd4'
    },
    {
      icon: FaHammer,
      title: 'Carpentry Services',
      desc: 'Custom woodwork and repair solutions for homes and businesses.',
      tags: ['Furniture', 'Doors', 'Windows'],
      color: '#d4a017'
    },
    {
      icon: FaTruck,
      title: 'Transport Services',
      desc: 'Reliable transport solutions for local and outstation goods delivery with safe and timely service.',
      tags: ['Local', 'Outstation', 'Open-Body', 'Close-Body'],
      color: '#2c3e50'
    }
  ];

  // Stats
  const stats = [
    { number: '4+', label: 'Years Experience', icon: FaAward },
    { number: '20+', label: 'Team Members', icon: FaUsers },
    { number: '500+', label: 'Happy Customers', icon: FaThumbsUp },
    { number: '100%', label: 'Satisfaction Rate', icon: FaCalendarCheck }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightGray }}>
      {/* Hero Section - Minimized Height */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
          animation: 'gradientPulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -mr-24 -mt-24 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24 animate-float-delayed"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="text-center max-w-3xl mx-auto">
            {/* Logo - Smaller */}
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
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                  <span style={{ color: colors.teal }}>GBOOMBA</span>
                </h1>
                <p className="text-[10px] font-medium text-white/70 tracking-wider">COMPLETE HOME SERVICES</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 animate-pulse-slow" style={{ backgroundColor: colors.teal + '33' }}>
              <FaTruck className="text-white" size={12} />
              <span className="text-[10px] font-medium text-white tracking-wider">PACKERS & MOVERS</span>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight animate-fade-in-up">
              Complete Relocation, Repair & Maintenance Solutions
            </h2>
            <p className="text-white/70 text-xs max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Skilled Support for Shifting, Arrangements & Daily Tasks for Homes and Businesses.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <a
                href="tel:+918111002100"
                className="inline-flex items-center gap-1.5 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                style={{ backgroundColor: colors.teal }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealDark}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <stat.icon style={{ color: colors.teal }} size={18} className="animate-bounce-slow" />
                <span className="text-xl font-bold" style={{ color: colors.navy }}>{stat.number}</span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 animate-pulse-slow"
              style={{ backgroundColor: colors.teal + '22' }}
            >
              <FaHeart style={{ color: colors.teal }} size={12} />
              <span className="text-[10px] font-medium" style={{ color: colors.teal }}>YOUR HAPPINESS IS OUR PRIDE</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold animate-gradient" style={{ color: colors.navy }}>
              Our Story – <span style={{ color: colors.teal }}>GBOOMBA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Story Text */}
            <div className={`transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderLeft: `4px solid ${colors.teal}` }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>What is GBOOMBA?</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  <strong>GBOOMBA</strong> started in 2019 as a simple transportation service. During every move, our customers shared their struggles and the stress they faced while shifting homes and offices. Their stories made us realize that people needed more than just transportation—they needed support, care, and a reliable team they could trust.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  That realization inspired us to create something better. Since 2022, with 4+ years of industry experience, continuous learning, and a commitment to quality service, <strong>GBOOMBA</strong> has grown into a complete home service company.
                </p>

                <div className="p-3 rounded-lg mb-3 transition-all duration-300 hover:shadow-md" style={{ backgroundColor: colors.teal + '11', borderLeft: `3px solid ${colors.teal}` }}>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    <FaQuoteLeft className="inline mr-1" style={{ color: colors.teal }} size={12} />
                    "For us, GBOOMBA is not just a business. It is about reducing stress, creating smiles, and bringing happiness to our customers."
                  </p>
                  <p className="text-xs text-gray-600 mt-1">- G. Boopathi, Proprietor</p>
                </div>

                <div className="mt-4 p-3 rounded-lg text-center transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: colors.navy }}>
                  <p className="text-white text-sm font-semibold">One Call or WhatsApp is All It Takes!</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <a
                      href="tel:+918111002100"
                      className="inline-flex items-center gap-1.5 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 group"
                      style={{ backgroundColor: colors.teal }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealDark}
                      onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
                    >
                      <FaPhoneAlt className="group-hover:animate-pulse" size={10} /> +91 81 1100 2100
                    </a>
                    <a
                      href="https://wa.me/918111002100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 group"
                    >
                      <FaWhatsapp className="group-hover:animate-pulse" size={10} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Collage Image */}
            <div className={`flex justify-center transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full group" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src={collage}
                  alt="GBOOMBA Home Services Collage"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs font-semibold text-center">Your Trusted Home Service Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GBOOMBA Section */}
      <section className="py-12" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: colors.teal + '22' }}
            >
              <FaHandshake style={{ color: colors.teal }} size={12} />
              <span className="text-[10px] font-medium" style={{ color: colors.teal }}>WHY CHOOSE GBOOMBA</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold animate-gradient" style={{ color: colors.navy }}>
              Why Choose <span style={{ color: colors.teal }}>GBOOMBA</span>?
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-1">
              Qualified for excellence in every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: colors.tealLight }}
                  >
                    <item.icon style={{ color: colors.teal }} size={18} className="group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5 transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promises Section - Left Image, Right Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image Grid */}
            <div className={`transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="bg-gradient-to-br from-navy to-teal p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <FaTruck className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>Packers & Movers</p>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <MdCleaningServices className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>Cleaning Services</p>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <FaPaintRoller className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>Painting Services</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <MdElectricalServices className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>Electrical & Plumbing</p>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <MdAcUnit className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>AC Technician</p>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <FaHammer className="mx-auto mb-1" style={{ color: colors.teal }} size={20} />
                          <p className="text-[10px] font-semibold" style={{ color: colors.navy }}>Carpentry Services</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs font-bold" style={{ color: colors.navy }}>Complete Home Solutions</p>
                      <div className="flex items-center justify-center gap-0.5 mt-0.5">
                        <FaStar style={{ color: colors.gold }} size={10} />
                        <FaStar style={{ color: colors.gold }} size={10} />
                        <FaStar style={{ color: colors.gold }} size={10} />
                        <FaStar style={{ color: colors.gold }} size={10} />
                        <FaStar style={{ color: colors.gold }} size={10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: colors.teal + '22' }}
              >
                <FaCheckCircle style={{ color: colors.teal }} size={12} />
                <span className="text-[10px] font-medium" style={{ color: colors.teal }}>OUR PROMISES</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-gradient" style={{ color: colors.navy }}>
                Our <span style={{ color: colors.teal }}>Promises</span>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Sit back and relax while we take care of the hard work.
              </p>

              <div className="space-y-2">
                {promises.map((item, index) => {
                  const Icon = item.icon;
                  // Determine background color based on type
                  let bgColor = colors.tealLight;
                  let textColor = 'text-gray-700';
                  let borderColor = 'transparent';
                  
                  if (item.type === 'problem') {
                    bgColor = '#fee2e2';
                    textColor = 'text-red-700';
                    borderColor = colors.red;
                  } else if (item.type === 'warning') {
                    bgColor = '#fef3c7';
                    textColor = 'text-red-700';
                    borderColor = colors.red;
                  } else if (item.type === 'solution') {
                    bgColor = '#fef9e7';
                    textColor = 'text-orange-700';
                    borderColor = colors.orange;
                  } else if (item.type === 'action') {
                    bgColor = colors.tealLight;
                    textColor = 'text-teal-700';
                    borderColor = colors.teal;
                  } else if (item.type === 'relax') {
                    bgColor = '#d1fae5';
                    textColor = 'text-green-700';
                    borderColor = '#10b981';
                  }
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-2 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1 animate-fade-in-up`}
                      style={{
                        backgroundColor: bgColor,
                        animationDelay: `${index * 100 + 500}ms`,
                        borderLeft: `3px solid ${borderColor}`
                      }}
                    >
                      <Icon 
                        style={{ color: item.color || colors.teal }} 
                        size={16} 
                        className="flex-shrink-0 mt-0.5 animate-bounce-slow" 
                      />
                      <span className={`text-xs ${textColor} leading-relaxed font-medium`}>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3 rounded-lg text-center transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: colors.navy }}>
                <p className="text-white text-sm font-semibold">Complete Home Services at Your Doorstep</p>
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                  <span className="text-white/60 text-[10px]">✓ Quality</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/60 text-[10px]">✓ Trust</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/60 text-[10px]">✓ Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: colors.teal + '22' }}
            >
              <FaTools style={{ color: colors.teal }} size={12} />
              <span className="text-[10px] font-medium" style={{ color: colors.teal }}>OUR SERVICES</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold animate-gradient" style={{ color: colors.navy }}>
              Our <span style={{ color: colors.teal }}>Services</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-1">
              Complete home services at your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up relative overflow-hidden`}
                  style={{
                    animationDelay: `${index * 100 + 600}ms`,
                    borderTop: `3px solid ${service.color}`
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${service.color}22, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: service.color + '22' }}
                      >
                        <Icon style={{ color: service.color }} size={20} />
                      </div>
                      <h3 className="text-base font-semibold transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-2">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: service.color + '22', color: service.color }}
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 4 && (
                        <span className="text-[10px] text-gray-400">+{service.tags.length - 3}</span>
                      )}
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
                        style={{ color: service.color }}
                      >
                        Learn More <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 group relative overflow-hidden"
              style={{ backgroundColor: colors.navy }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
            >
              <span className="relative z-10">View All Services</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={12} />
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: colors.teal + '22' }}
              >
                <FaStar style={{ color: colors.teal }} size={12} />
                <span className="text-[10px] font-medium" style={{ color: colors.teal }}>TESTIMONIAL</span>
              </div>
              <div className="relative">
                <FaQuoteLeft style={{ color: colors.teal }} size={30} className="mb-1 opacity-20" />
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  "GBOOMBA provided exceptional service for our house relocation.
                  The team was professional, careful, and completed everything on time.
                  Highly recommended!"
                </p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <FaStar style={{ color: colors.teal }} size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: colors.navy }}>Rajesh Kumar</p>
                  <p className="text-xs text-gray-500">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div
              className={`bg-gray-50 rounded-2xl p-6 shadow-lg transition-all duration-1000 transform ${animateIn ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              style={{
                transitionDelay: '800ms',
                border: `1px solid ${colors.teal}22`
              }}
            >
              <h3 className="text-xl font-bold mb-2 animate-gradient" style={{ color: colors.navy }}>
                Ready to Experience the <span style={{ color: colors.teal }}>GBOOMBA</span> Difference?
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Join hundreds of satisfied customers who trust us for their home service needs.
                Get in touch today for a free consultation.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+918111002100"
                  className="flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group relative overflow-hidden w-full"
                  style={{ backgroundColor: colors.navy }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
                >
                  <span className="relative z-10"><FaPhoneAlt className="inline mr-1 group-hover:animate-pulse" size={12} /> Call Now: 81 1100 2100</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </a>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group relative overflow-hidden w-full"
                  style={{ backgroundColor: colors.teal }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealDark}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
                >
                  <span className="relative z-10">Explore Services <FaArrowRight className="inline ml-1 group-hover:translate-x-1 transition-transform duration-300" size={12} /></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </Link>
                <a
                  href="https://wa.me/918111002100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group"
                >
                  <FaWhatsapp className="group-hover:animate-pulse" size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradientPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
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
      `}</style>
    </div>
  );
};

export default About;