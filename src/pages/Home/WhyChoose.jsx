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
  FaArrowRight
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
    lightGray: '#f8f9fa'
  };

  // Why Choose Us data
  const whyChooseData = [
    { 
      icon: FaClock, 
      title: '4+ Years Experience', 
      desc: 'Industry expertise since 2019 with continuous learning and improvement' 
    },
    { 
      icon: FaAward, 
      title: 'Quality Service', 
      desc: 'High-quality service standards with attention to every detail' 
    },
    { 
      icon: FaUsers, 
      title: 'Skilled Team', 
      desc: 'Professional & experienced team dedicated to customer satisfaction' 
    },
    { 
      icon: FaThumbsUp, 
      title: '100% Satisfaction', 
      desc: 'Customer satisfaction focused approach with guaranteed results' 
    },
    { 
      icon: FaHeadset, 
      title: '24/7 Support', 
      desc: 'Round the clock customer support for all your service needs' 
    },
    { 
      icon: FaShieldAlt, 
      title: 'Trusted Service', 
      desc: 'Reliable & trustworthy service with 500+ happy customers' 
    }
  ];

  // Promises data
  const promises = [
    { icon: FaRegSmile, text: 'No Spoiled Weekends' },
    { icon: FaShieldAlt, text: 'Scratch-Free Walls & Furniture' },
    { icon: FaClock, text: 'Quiet & Neighbor-Friendly Service' },
    { icon: FaStar, text: 'Surprise Your Loved Ones' },
    { icon: FaBoxes, text: 'Special Care for Every Item' },
    { icon: FaCheckCircle, text: 'Hassle-Free Relocation' }
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
            Your happiness is our pride - We deliver reliable and stress-free home services with care and professionalism
          </p>
        </div>

        {/* Why Choose Grid with Staggered Animations */}
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

        {/* Our Promises with Animations */}
        <div className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '500ms' }}>
          <h3 className="text-xl font-bold text-center mb-2 animate-gradient" style={{ color: colors.navy }}>
            Our <span style={{ color: colors.teal }}>Promises</span>
          </h3>
          <p className="text-center text-gray-600 text-sm mb-5">
            Sit back and relax while we take care of the hard work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {promises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1 animate-fade-in-up`}
                  style={{ 
                    backgroundColor: colors.tealLight,
                    animationDelay: `${index * 100 + 600}ms`
                  }}
                >
                  <Icon style={{ color: colors.teal }} size={14} className="flex-shrink-0 animate-bounce-slow" />
                  <span className="text-xs text-gray-700">{item.text}</span>
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
              href="tel:918111002100"
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