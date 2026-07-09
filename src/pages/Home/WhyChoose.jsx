import React, { useState, useEffect } from 'react';
import { 
  FaClock, 
  FaAward, 
  FaUsers, 
  FaThumbsUp, 
  FaHeadset, 
  FaShieldAlt,
  FaStar,
  FaRegSmile,
  FaBoxes,
  FaCheckCircle,
  FaHandshake,
  FaMedal,
  FaTrophy,
  FaHeart,
  FaRocket,
  FaGem,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCalendarCheck,
  FaTruck,
  FaTimesCircle,
  FaUserSlash,
  FaBan,
  FaUsersSlash,
  FaHourglass
} from 'react-icons/fa';
import logo from "../../assets/logo.png";

const WhyChoose = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

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
    orange: '#f39c12',
    green: '#10b981'
  };

  // Why Choose Us data - Updated with all 7 options
  const whyChooseData = [
    { 
      icon: FaShieldAlt, 
      title: 'Scratch-Free Care', 
      desc: 'Protect your walls & furniture with our careful handling and premium moving techniques' 
    },
    { 
      icon: FaRegSmile, 
      title: 'Neighbor-Friendly Service', 
      desc: 'Quiet, clean, and respectful service that keeps your neighbors happy' 
    },
    { 
      icon: FaBoxes, 
      title: 'Safe Handling of Every Item', 
      desc: 'Expert care for belongings of all sizes – from delicate to oversized' 
    },
    { 
      icon: FaTruck, 
      title: 'Professional Packing & Loading', 
      desc: 'Industry-standard packing, loading, and unloading with precision and care' 
    },
    { 
      icon: FaCalendarCheck, 
      title: 'Hassle-Free Relocation', 
      desc: 'Stress-free moving experience with our dedicated and reliable team' 
    },
    { 
      icon: FaClock, 
      title: 'On-Time & Reliable Service', 
      desc: 'Punctual delivery and dependable service you can count on every time' 
    },
    { 
      icon: FaHeart, 
      title: 'Happy Moving Memories', 
      desc: 'Make moving a happy memory for your family with our caring and supportive team' 
    }
  ];

  // Promises data - Updated with new content
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

  return (
    <section className="py-12" style={{ backgroundColor: colors.tealLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animations */}
        <div className={`text-center mb-10 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 animate-pulse-slow"
            style={{ backgroundColor: colors.teal + '22' }}
          >
            <FaTrophy style={{ color: colors.teal }} size={14} className="animate-bounce-slow" />
            <span className="text-xs font-medium" style={{ color: colors.teal }}>Why Choose GBOOMBA</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold animate-gradient" style={{ color: colors.navy }}>
            Why Choose <span style={{ color: colors.teal }}>GBOOMBA</span>?
          </h2>
          <p className="text-gray-600 text-sm mt-1 max-w-2xl mx-auto">
            Making your move a happy memory with our trusted services
          </p>
        </div>

        {/* Why Choose Grid with Staggered Animations - 7 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {whyChooseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up relative overflow-hidden`}
                style={{ 
                  animationDelay: `${index * 100 + 300}ms`,
                  borderTop: `3px solid ${colors.teal}`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${colors.teal}22, transparent)` }}
                ></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: colors.tealLight }}
                  >
                    <Icon style={{ color: colors.teal }} size={20} className="group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5 transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Story Section with Animations */}
        <div className={`bg-white rounded-xl p-6 shadow-lg mb-8 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 animate-gradient" style={{ color: colors.navy }}>Our Story</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                GBOOMBA started in 2019 as a simple transportation service. During every move, our customers shared their struggles and the stress they faced while shifting homes and offices. Their stories made us realize that people needed more than just transportation—they needed support, care, and a reliable team they could trust.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                That realization inspired us to create something better. Since 2022, with 4+ years of industry experience, continuous learning, and a commitment to quality service, GBOOMBA has grown into a complete home service company. We take pride in delivering high-quality solutions with professionalism and care.
              </p>
              <div className="mt-3 p-3 rounded-lg transition-all duration-300 hover:shadow-md" style={{ backgroundColor: colors.tealLight }}>
                <p className="text-sm font-medium" style={{ color: colors.teal }}>
                  <FaHeart className="inline mr-1" size={12} />
                  "For us, GBOOMBA is not just a business. It is about reducing stress, creating smiles, and bringing happiness to our customers."
                </p>
                <p className="text-xs text-gray-600 mt-0.5">- G. Boopathi, Proprietor</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12"
                style={{ backgroundColor: colors.tealLight }}
              >
                <img src={logo} alt="GBOOMBA Logo" className="w-16 h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Promises with New Design */}
        <div className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '500ms' }}>
          <h3 className="text-xl font-bold text-center mb-2 animate-gradient" style={{ color: colors.navy }}>
            Our <span style={{ color: colors.teal }}>Promises</span>
          </h3>
          <p className="text-center text-gray-600 text-sm mb-5">
           We treat your home like our own and your belongings like our responsibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {promises.map((item, index) => {
              const Icon = item.icon;
              // Determine background color based on type
              let bgColor = colors.tealLight;
              let textColor = 'text-gray-700';
              let borderColor = 'transparent';
              let iconBgColor = colors.tealLight;
              
              if (item.type === 'problem') {
                bgColor = '#fee2e2';
                textColor = 'text-red-700';
                borderColor = colors.red;
                iconBgColor = '#fecaca';
              } else if (item.type === 'warning') {
                bgColor = '#fef3c7';
                textColor = 'text-red-700';
                borderColor = colors.red;
                iconBgColor = '#fde68a';
              } else if (item.type === 'solution') {
                bgColor = '#fef9e7';
                textColor = 'text-orange-700';
                borderColor = colors.orange;
                iconBgColor = '#fdebd0';
              } else if (item.type === 'action') {
                bgColor = colors.tealLight;
                textColor = 'text-teal-700';
                borderColor = colors.teal;
                iconBgColor = '#b2dfdb';
              } else if (item.type === 'relax') {
                bgColor = '#d1fae5';
                textColor = 'text-green-700';
                borderColor = colors.green;
                iconBgColor = '#a7f3d0';
              }
              
              return (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1 animate-fade-in-up`}
                  style={{ 
                    backgroundColor: bgColor,
                    animationDelay: `${index * 100 + 600}ms`,
                    borderLeft: `4px solid ${borderColor}`
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: iconBgColor }}
                  >
                    <Icon style={{ color: item.color || colors.teal }} size={14} className="animate-bounce-slow" />
                  </div>
                  <div>
                    <span className={`text-xs ${textColor} font-medium leading-relaxed`}>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA with Animations */}
        <div className={`mt-6 text-center transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '700ms' }}>
          <p className="text-gray-600 text-sm mb-3">
            Complete Home Services at Your Doorstep
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918111002100"
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
              style={{ backgroundColor: colors.navy }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
            >
              <FaPhoneAlt className="group-hover:animate-pulse" size={14} />
              Call Now
            </a>
            <a
              href="https://wa.me/918111002100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
            >
              <FaWhatsapp className="group-hover:animate-pulse" size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
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
    </section>
  );
};

export default WhyChoose;