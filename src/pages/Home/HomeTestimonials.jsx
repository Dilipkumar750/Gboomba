import React, { useState } from 'react';
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
  FaMedal
} from 'react-icons/fa';

const HomeTestimonials = () => {
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

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5 -ml-32 -mt-32" style={{ backgroundColor: colors.teal }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 -mr-48 -mb-48" style={{ backgroundColor: colors.navy }}></div>
      
      {/* Moving Truck Animation */}
      <div className="absolute top-10 right-10 opacity-5 hidden lg:block">
        <FaTruck size={120} style={{ color: colors.teal }} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 hidden lg:block">
        <FaBoxes size={100} style={{ color: colors.navy }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Unique Design */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: colors.teal }}></div>
            <div 
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full"
              style={{ 
                backgroundColor: colors.teal + '15',
                border: `1px solid ${colors.teal}33`
              }}
            >
              <FaHeart style={{ color: colors.teal }} size={14} />
              <span className="text-sm font-medium" style={{ color: colors.teal }}>Client Testimonials</span>
            </div>
            <div className="w-12 h-px" style={{ backgroundColor: colors.teal }}></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
            What Our <span className="relative" style={{ color: colors.teal }}>
              Customers Say
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke={colors.teal} strokeWidth="2" fill="none" opacity="0.3"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Real stories from our happy clients who trusted us with their relocation needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index ? `0 20px 40px ${colors.teal}22` : '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Top Border */}
              <div style={{ 
                height: '4px',
                background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`
              }}></div>

              <div className="p-6">
                {/* Header with Image */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: colors.teal }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                      <FaUserCheck size={10} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: colors.navy }}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ 
                        backgroundColor: colors.teal + '15',
                        color: colors.teal
                      }}>
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating with Animation */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`transition-all duration-300 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      size={16}
                      style={{
                        transform: hoveredCard === index ? `rotate(${i * 10}deg)` : 'rotate(0deg)'
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <FaQuoteLeft 
                    className="absolute -top-1 -left-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                    style={{ color: colors.teal }} 
                    size={20}
                  />
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                  <FaQuoteRight 
                    className="absolute -bottom-1 -right-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                    style={{ color: colors.teal }} 
                    size={20}
                  />
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: colors.teal }} size={14} />
                    <span className="text-xs text-gray-500">Verified Customer</span>
                  </div>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>

              {/* Moving Icon Overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <FaTruck size={20} style={{ color: colors.teal }} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls with Unique Design */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
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
            <FaArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Dots with Unique Design */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all duration-500"
                style={{
                  backgroundColor: index === currentIndex ? colors.teal : '#d1d5db',
                  width: index === currentIndex ? '40px' : '10px',
                  height: '10px',
                  boxShadow: index === currentIndex ? `0 0 20px ${colors.teal}55` : 'none'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
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
            <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Indicators with Moving Theme */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: colors.teal + '15' }}>
              <FaStar className="text-2xl" style={{ color: colors.teal }} />
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.navy }}>4.9/5</div>
            <div className="text-sm text-gray-500">Average Rating</div>
            <div className="flex justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={12} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: colors.teal + '15' }}>
              <FaMedal className="text-2xl" style={{ color: colors.teal }} />
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.navy }}>500+</div>
            <div className="text-sm text-gray-500">Happy Customers</div>
            <div className="text-xs text-gray-400 mt-1">And counting...</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: colors.teal + '15' }}>
              <FaTruck className="text-2xl" style={{ color: colors.teal }} />
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.navy }}>100%</div>
            <div className="text-sm text-gray-500">On-Time Delivery</div>
            <div className="text-xs text-gray-400 mt-1">Guaranteed service</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: colors.teal + '15' }}>
              <FaHeart className="text-2xl" style={{ color: colors.teal }} />
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.navy }}>100%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
            <div className="text-xs text-gray-400 mt-1">Money-back guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;