import React, { useState, useEffect } from 'react';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaArrowRight,
  FaTruck,
  FaBoxes,
  FaHeart,
  FaUserCheck,
  FaMedal,
  FaThumbsUp,
  FaRegSmile,
  FaHammer
} from 'react-icons/fa';
const HomeTestimonials = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Coimbatore',
      rating: 5,
      text: 'Excellent service! GBOOMBA made my house relocation completely stress-free. The team was professional, careful, and on time. Highly recommended!',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=008080&color=fff&size=80',
      type: 'House Relocation',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Priya Srinivasan',
      location: 'Erode',
      rating: 5,
      text: 'I was worried about moving my office, but GBOOMBA handled everything perfectly. No downtime, no damage. Their team is truly professional and efficient.',
      image: 'https://ui-avatars.com/api/?name=Priya+Srinivasan&background=008080&color=fff&size=80',
      type: 'Office Relocation',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Suresh Babu',
      location: 'Gobi',
      rating: 5,
      text: 'Amazing service! They packed everything with care and delivered without any scratches. The pricing was fair and transparent. Will definitely use again.',
      image: 'https://ui-avatars.com/api/?name=Suresh+Babu&background=008080&color=fff&size=80',
      type: 'Shop Relocation',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Meena Raghavan',
      location: 'Annur',
      rating: 5,
      text: 'GBOOMBA exceeded my expectations. From the initial enquiry to the final delivery, everything was smooth. Their team is friendly and professional.',
      image: 'https://ui-avatars.com/api/?name=Meena+Raghavan&background=008080&color=fff&size=80',
      type: 'House Relocation',
      date: 'December 2023'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  const remaining = 3 - visibleTestimonials.length;
  if (remaining > 0) {
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  // Trust indicators data
  const trustIndicators = [
    { icon: FaStar, number: '4.9/5', label: 'Average Rating', sub: '5 Stars Rating', color: '#FFD700' },
    { icon: FaMedal, number: '500+', label: 'Happy Customers', sub: 'And counting...', color: colors.teal },
    { icon: FaHammer, number: '100%', label: 'On-Time Service', sub: 'Guaranteed service', color: colors.teal },
    { icon: FaHeart, number: '100%', label: 'Satisfaction Rate', sub: 'Money-back guarantee', color: colors.teal }
  ];

  return (
    <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Decorative Background Elements with Animations */}
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-5 -ml-24 -mt-24 animate-float" style={{ backgroundColor: colors.teal }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5 -mr-32 -mb-32 animate-float-delayed" style={{ backgroundColor: colors.navy }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200/20 rounded-full animate-pulse-slow"></div>
      
      {/* Moving Truck Animation */}
      <div className="absolute top-10 right-10 opacity-5 hidden lg:block animate-float">
        <FaTruck size={80} style={{ color: colors.teal }} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 hidden lg:block animate-float-delayed">
        <FaBoxes size={60} style={{ color: colors.navy }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animations */}
        <div className={`text-center mb-10 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ backgroundColor: colors.teal }}></div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full animate-pulse-slow"
              style={{ 
                backgroundColor: colors.teal + '15',
                border: `1px solid ${colors.teal}33`
              }}
            >
              <FaHeart style={{ color: colors.teal }} size={12} className="animate-bounce-slow" />
              <span className="text-xs font-medium" style={{ color: colors.teal }}>Client Testimonials</span>
            </div>
            <div className="w-8 h-px" style={{ backgroundColor: colors.teal }}></div>
          </div>
     <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.navy }}>
  What Our <span className="relative" style={{ 
    background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>
    Customers Say
    <svg className="absolute -bottom-2 left-0 w-full h-1.5" viewBox="0 0 200 10">
      <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke={colors.teal} strokeWidth="2" fill="none" opacity="0.3"/>
    </svg>
  </span>
</h2>
          <p className="text-gray-500 mt-1 max-w-2xl mx-auto text-sm">
            Real stories from our happy clients who trusted us with their relocation needs
          </p>
        </div>

        {/* Testimonials Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100 + 200}ms`,
                transform: hoveredCard === index ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredCard === index ? `0 20px 40px ${colors.teal}22` : '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Top Border */}
              <div style={{ 
                height: '3px',
                background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`
              }}></div>

              <div className="p-5">
                {/* Header with Image */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: colors.teal }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                      <FaUserCheck size={8} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: colors.navy }}>{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ 
                        backgroundColor: colors.teal + '15',
                        color: colors.teal
                      }}>
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating with Animation */}
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`transition-all duration-300 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      size={14}
                      style={{
                        transform: hoveredCard === index ? `rotate(${i * 8}deg)` : 'rotate(0deg)'
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <FaQuoteLeft 
                    className="absolute -top-1 -left-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                    style={{ color: colors.teal }} 
                    size={14}
                  />
                  <p className="text-gray-600 text-xs leading-relaxed pl-5 line-clamp-4">
                    {testimonial.text}
                  </p>
                  <FaQuoteRight 
                    className="absolute -bottom-1 -right-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                    style={{ color: colors.teal }} 
                    size={14}
                  />
                </div>

                {/* Footer */}
                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle style={{ color: colors.teal }} size={10} />
                    <span className="text-[10px] text-gray-500">Verified</span>
                  </div>
                  <span className="text-[10px] text-gray-400">{testimonial.date}</span>
                </div>
              </div>

              {/* Moving Icon Overlay */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <FaTruck size={16} style={{ color: colors.teal }} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            style={{ 
              backgroundColor: colors.teal,
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.navy;
              e.target.style.boxShadow = `0 10px 30px ${colors.teal}44`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.teal;
              e.target.style.boxShadow = 'none';
            }}
            aria-label="Previous testimonials"
          >
            <FaArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all duration-500"
                style={{
                  backgroundColor: index === currentIndex ? colors.teal : '#d1d5db',
                  width: index === currentIndex ? '32px' : '8px',
                  height: '8px',
                  boxShadow: index === currentIndex ? `0 0 16px ${colors.teal}55` : 'none'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            style={{ 
              backgroundColor: colors.teal,
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.navy;
              e.target.style.boxShadow = `0 10px 30px ${colors.teal}44`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.teal;
              e.target.style.boxShadow = 'none';
            }}
            aria-label="Next testimonials"
          >
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '400ms' }}>
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 500}ms` }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: colors.teal + '15' }}>
                  <Icon className="text-xl" style={{ color: item.color }} />
                </div>
                <div className="text-xl font-bold animate-bounce-slow" style={{ color: colors.navy }}>{item.number}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{item.sub}</div>
                {item.label === 'Average Rating' && (
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={10} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS Animations */}
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
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
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
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonials;