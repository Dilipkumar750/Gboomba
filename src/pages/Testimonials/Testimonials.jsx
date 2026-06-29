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
  FaMedal,
  FaFilter,
  FaTimes,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaRegSmile,
  FaHome,
  FaBuilding,
  FaStore,
  FaSearch
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  // Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  // 12 Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Coimbatore',
      rating: 5,
      text: 'Excellent service! GBOOMBA made my house relocation completely stress-free. The team was professional, careful with all my belongings, and finished ahead of schedule. I was amazed at how smoothly everything went. They wrapped each item with care and ensured nothing was damaged during transit. Highly recommended for anyone planning a move!',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=008080&color=fff&size=100',
      type: 'House Relocation',
      date: 'March 2024',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Srinivasan',
      location: 'Erode',
      rating: 5,
      text: 'I was worried about moving my office, but GBOOMBA handled everything perfectly. No downtime, no damage, and they set up everything at the new location within hours. Their team is truly professional, efficient, and knows exactly what they\'re doing. They made a potentially stressful situation feel effortless.',
      image: 'https://ui-avatars.com/api/?name=Priya+Srinivasan&background=008080&color=fff&size=100',
      type: 'Office Relocation',
      date: 'February 2024',
      verified: true
    },
    {
      id: 3,
      name: 'Suresh Babu',
      location: 'Gobi',
      rating: 5,
      text: 'Amazing service! They packed everything with care and delivered without any scratches. The pricing was fair and transparent with no hidden charges. I especially appreciated how they handled my fragile items with extra care. Will definitely use their services again for any future moves.',
      image: 'https://ui-avatars.com/api/?name=Suresh+Babu&background=008080&color=fff&size=100',
      type: 'Shop Relocation',
      date: 'January 2024',
      verified: true
    },
    {
      id: 4,
      name: 'Meena Raghavan',
      location: 'Annur',
      rating: 5,
      text: 'GBOOMBA exceeded my expectations in every way. From the initial enquiry to the final delivery, everything was smooth and professional. Their team is friendly, punctual, and incredibly hardworking. They made sure all my furniture was properly assembled at the new place. Truly a top-notch service!',
      image: 'https://ui-avatars.com/api/?name=Meena+Raghavan&background=008080&color=fff&size=100',
      type: 'House Relocation',
      date: 'December 2023',
      verified: true
    },
    {
      id: 5,
      name: 'Karthik Subramanian',
      location: 'Tirupur',
      rating: 5,
      text: 'The best packers and movers I have ever worked with! They handled my office relocation with utmost professionalism. Every item was carefully packed, labeled, and delivered to the correct location. The team was efficient and completed the move in record time. Highly recommended for corporate moves.',
      image: 'https://ui-avatars.com/api/?name=Karthik+Subramanian&background=008080&color=fff&size=100',
      type: 'Office Relocation',
      date: 'November 2023',
      verified: true
    },
    {
      id: 6,
      name: 'Lakshmi Narayanan',
      location: 'Pollachi',
      rating: 5,
      text: 'I moved my entire shop with GBOOMBA and couldn\'t be happier. They packed all my inventory with extreme care, labeled everything properly, and helped me set up at the new location. Their team was friendly, professional, and went above and beyond to ensure everything was perfect. Thank you, GBOOMBA!',
      image: 'https://ui-avatars.com/api/?name=Lakshmi+Narayanan&background=008080&color=fff&size=100',
      type: 'Shop Relocation',
      date: 'October 2023',
      verified: true
    },
    {
      id: 7,
      name: 'Gopalakrishnan',
      location: 'Mettupalayam',
      rating: 5,
      text: 'Moving from an old house to a new one can be stressful, but GBOOMBA made it a breeze. They arrived on time, packed everything efficiently, and delivered without any issues. The team was courteous and handled all my old furniture with care. I\'m extremely satisfied with their service.',
      image: 'https://ui-avatars.com/api/?name=Gopalakrishnan&background=008080&color=fff&size=100',
      type: 'House Relocation',
      date: 'September 2023',
      verified: true
    },
    {
      id: 8,
      name: 'Saranya Murali',
      location: 'Sathyamangalam',
      rating: 5,
      text: 'GBOOMBA provided exceptional service for our office relocation. They moved all our computers, furniture, and files without any damage. Their attention to detail and commitment to timelines was impressive. Our business had zero downtime thanks to their efficient planning and execution.',
      image: 'https://ui-avatars.com/api/?name=Saranya+Murali&background=008080&color=fff&size=100',
      type: 'Office Relocation',
      date: 'August 2023',
      verified: true
    },
    {
      id: 9,
      name: 'Ramesh Parthasarathy',
      location: 'Perundurai',
      rating: 5,
      text: 'The GBOOMBA team was fantastic! They helped me relocate my shop with minimal disruption to my business. They worked quickly but carefully, making sure every item was properly packed and labeled. I was able to reopen my shop the very next day. Highly recommended for shop owners!',
      image: 'https://ui-avatars.com/api/?name=Ramesh+Parthasarathy&background=008080&color=fff&size=100',
      type: 'Shop Relocation',
      date: 'July 2023',
      verified: true
    },
    {
      id: 10,
      name: 'Deepa Krishnan',
      location: 'Karumathampatti',
      rating: 5,
      text: 'We moved to a new house and GBOOMBA made it so easy! They packed everything with care, labeled each box clearly, and helped us arrange our furniture at the new place. The team was polite, hardworking, and truly professional. I will always recommend GBOOMBA to everyone I know.',
      image: 'https://ui-avatars.com/api/?name=Deepa+Krishnan&background=008080&color=fff&size=100',
      type: 'House Relocation',
      date: 'June 2023',
      verified: true
    },
    {
      id: 11,
      name: 'Mohan Raj',
      location: 'Avinashi',
      rating: 5,
      text: 'Moving my business office was a big task, but GBOOMBA handled it perfectly. They came up with a detailed plan, packed everything systematically, and moved everything to the new location in just one day. Their efficiency and professionalism are unmatched. 5 stars all the way!',
      image: 'https://ui-avatars.com/api/?name=Mohan+Raj&background=008080&color=fff&size=100',
      type: 'Office Relocation',
      date: 'May 2023',
      verified: true
    },
    {
      id: 12,
      name: 'Shanthi Balasubramanian',
      location: 'Kangayam',
      rating: 5,
      text: 'I can\'t thank GBOOMBA enough for their amazing service. They helped me relocate my shop and did an outstanding job. Everything was packed securely, transported safely, and set up perfectly at the new location. Their team was friendly, helpful, and really went the extra mile.',
      image: 'https://ui-avatars.com/api/?name=Shanthi+Balasubramanian&background=008080&color=fff&size=100',
      type: 'Shop Relocation',
      date: 'April 2023',
      verified: true
    }
  ];

  // Get unique types for filter
  const filterOptions = ['All', ...new Set(testimonials.map(t => t.type))];

  // Filter testimonials based on selected filter and search
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = selectedFilter === 'All' || testimonial.type === selectedFilter;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Stats
  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: FaStar, color: 'text-yellow-400' },
    { number: '500+', label: 'Happy Customers', icon: FaRegSmile, color: 'text-teal-500' },
    { number: '100%', label: 'On-Time Delivery', icon: FaTruck, color: 'text-blue-500' },
    { number: '100%', label: 'Satisfaction Rate', icon: FaThumbsUp, color: 'text-green-500' }
  ];

  // Get icon for type
  const getTypeIcon = (type) => {
    if (type.includes('House')) return <FaHome size={14} />;
    if (type.includes('Office')) return <FaBuilding size={14} />;
    if (type.includes('Shop')) return <FaStore size={14} />;
    return <FaHome size={14} />;
  };

  // Rating stars component
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
            size={16}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '33' }}>
              <FaHeart className="text-teal-light" size={14} />
              <span className="text-xs font-medium text-white tracking-wider">TESTIMONIALS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              What Our <span className="text-teal-light">Customers Say</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Real stories from real people who trusted GBOOMBA with their relocation needs
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" className="w-full">
            <path fill="#f8fafc" d="M0,30L80,28C160,26,320,22,480,24C640,26,800,34,960,32C1120,30,1280,18,1360,12L1440,6L1440,40L1360,40C1280,40,1120,40,960,40C800,40,640,40,480,40C320,40,160,40,80,40L0,40Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className={stat.color} size={20} />
                  <span className="text-2xl font-bold" style={{ color: colors.navy }}>{stat.number}</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mr-2">
                <FaFilter size={14} />
                Filter:
              </div>
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedFilter(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === option
                      ? 'text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: selectedFilter === option ? colors.teal : 'transparent'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ 
                  borderColor: searchTerm ? colors.teal : '#e5e7eb',
                  focusRing: colors.teal
                }}
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredTestimonials.length} of {testimonials.length} testimonials
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold" style={{ color: colors.navy }}>No testimonials found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
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
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 group-hover:scale-110"
                          style={{ borderColor: colors.teal }}
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                            <FaUserCheck size={8} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base truncate" style={{ color: colors.navy }}>{testimonial.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaMapMarkerAlt size={10} />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type Badge and Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs" style={{ 
                        backgroundColor: colors.teal + '15',
                        color: colors.teal
                      }}>
                        {getTypeIcon(testimonial.type)}
                        <span>{testimonial.type}</span>
                      </div>
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <FaQuoteLeft 
                        className="absolute -top-1 -left-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                        style={{ color: colors.teal }} 
                        size={16}
                      />
                      <p className="text-gray-600 text-sm leading-relaxed pl-5 line-clamp-4">
                        {testimonial.text}
                      </p>
                      <FaQuoteRight 
                        className="absolute -bottom-1 -right-1 opacity-10 transition-all duration-300 group-hover:opacity-20" 
                        style={{ color: colors.teal }} 
                        size={16}
                      />
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-400">{testimonial.date}</span>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1">
                          <FaCheckCircle style={{ color: colors.teal }} size={12} />
                          <span className="text-xs text-gray-500">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <FaTruck size={16} style={{ color: colors.teal }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
              Ready to Be Our Next <span style={{ color: colors.teal }}>Happy Customer?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied customers who have experienced the GBOOMBA difference. 
              Let us make your move stress-free and memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: colors.navy }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
              >
                Explore Services <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/918111002100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1"
              >
                <FaTruck /> Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Testimonials;