import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCheckCircle,
  FaTruck,
  FaHome,
  FaBuilding,
  FaStore,
  FaBroom,
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
  FaLeaf,
  FaRegSmile,
  FaRegLightbulb,
  FaRegHandshake,
  FaRegClock,
  FaRegStar
} from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices } from 'react-icons/md';

const About = () => {
  // Colors matching the brand
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  // Core values data
  const coreValues = [
    {
      icon: FaRegHandshake,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our dealings.'
    },
    {
      icon: FaRegStar,
      title: 'Excellence',
      description: 'We strive for the highest quality in every service we provide.'
    },
    {
      icon: FaRegClock,
      title: 'Punctuality',
      description: 'We value your time and always deliver on schedule.'
    },
    {
      icon: FaRegSmile,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority and driving force.'
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: FaShieldAlt,
      title: '100% Insured',
      description: 'Full insurance coverage for your belongings and peace of mind.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Trained, experienced, and background-verified professionals.'
    },
    {
      icon: FaClock,
      title: 'On-Time Service',
      description: 'Punctual service delivery with respect for your schedule.'
    },
    {
      icon: FaStar,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a 100% satisfaction guarantee.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Modern techniques and eco-friendly solutions for better results.'
    },
    {
      icon: FaHeart,
      title: 'Customer Care',
      description: '24/7 support and personalized attention to your needs.'
    }
  ];

  // Team stats
  const stats = [
    { number: '4+', label: 'Years of Experience', icon: FaAward },
    { number: '20+', label: 'Team Members', icon: FaUsers },
    { number: '500+', label: 'Happy Customers', icon: FaThumbsUp },
    { number: '100%', label: 'Satisfaction Rate', icon: FaCalendarCheck }
  ];

  // Services we offer (brief)
  const servicesBrief = [
    { icon: MdCleaningServices, name: 'Cleaning Services' },
    { icon: FaPaintRoller, name: 'Painting Services' },
    { icon: MdElectricalServices, name: 'Electrical Services' },
    { icon: FaWrench, name: 'AC Technician' },
    { icon: FaTruck, name: 'Packers & Movers' },
    { icon: FaTools, name: 'Individual Services' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '33' }}>
              <FaHeart className="text-teal-light" size={14} />
              <span className="text-xs font-medium text-white tracking-wider">ABOUT GBOOMBA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Your Trusted Partner for <span className="text-teal-light">Home Solutions</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              We're dedicated to making your life easier with professional, reliable, and 
              high-quality home services. From cleaning to moving, we've got you covered.
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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon style={{ color: colors.teal }} size={20} />
                <span className="text-2xl font-bold" style={{ color: colors.navy }}>{stat.number}</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '22' }}>
                <FaHeart style={{ color: colors.teal }} size={14} />
                <span className="text-xs font-medium" style={{ color: colors.teal }}>OUR STORY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
                Built on Trust, Driven by <span style={{ color: colors.teal }}>Excellence</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                GBOOMBA was founded with a simple mission: to provide exceptional home services 
                that people can truly rely on. We understand that your home is your sanctuary, 
                and we treat it with the respect and care it deserves.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past 4+ years, we've grown from a small team of dedicated professionals 
                to a full-service home solutions company, serving hundreds of satisfied customers 
                across the region. Our commitment to quality, punctuality, and customer satisfaction 
                has made us the preferred choice for home services.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 text-sm" style={{ color: colors.navy }}>
                  <FaCheckCircle style={{ color: colors.teal }} size={16} />
                  Professional Team
                </span>
                <span className="flex items-center gap-2 text-sm" style={{ color: colors.navy }}>
                  <FaCheckCircle style={{ color: colors.teal }} size={16} />
                  Quality Guaranteed
                </span>
                <span className="flex items-center gap-2 text-sm" style={{ color: colors.navy }}>
                  <FaCheckCircle style={{ color: colors.teal }} size={16} />
                  100% Insured
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop" 
                  alt="Team working together"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 60%, ${colors.navy}cc 100%)` }}></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.tealLight }}>
                  <FaUsers style={{ color: colors.teal }} size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: colors.navy }}>20+ Experts</p>
                  <p className="text-xs text-gray-500">Dedicated team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '22' }}>
              <FaRegLightbulb style={{ color: colors.teal }} size={14} />
              <span className="text-xs font-medium" style={{ color: colors.teal }}>CORE VALUES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
              What We <span style={{ color: colors.teal }}>Believe In</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Our values guide everything we do, from the way we treat our customers to how we deliver our services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.tealLight }}>
                  <value.icon style={{ color: colors.teal }} size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: colors.navy }}>{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '22' }}>
              <FaHandshake style={{ color: colors.teal }} size={14} />
              <span className="text-xs font-medium" style={{ color: colors.teal }}>WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
              Why GBOOMBA is Your <span style={{ color: colors.teal }}>Best Choice</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              We combine expertise, reliability, and a customer-first approach to deliver exceptional service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: colors.tealLight }}>
                    <item.icon style={{ color: colors.teal }} size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: colors.navy }}>{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '22' }}>
              <FaTools style={{ color: colors.teal }} size={14} />
              <span className="text-xs font-medium" style={{ color: colors.teal }}>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
              What We <span style={{ color: colors.teal }}>Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              A comprehensive range of professional home services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesBrief.map((service, index) => (
              <Link 
                key={index}
                to="/services"
                className="bg-white rounded-xl p-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: colors.tealLight }}>
                  <service.icon style={{ color: colors.teal }} size={24} />
                </div>
                <p className="text-xs font-medium" style={{ color: colors.navy }}>{service.name}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: colors.navy }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: colors.teal + '22' }}>
                <FaStar style={{ color: colors.teal }} size={14} />
                <span className="text-xs font-medium" style={{ color: colors.teal }}>TESTIMONIAL</span>
              </div>
              <div className="relative">
                <FaQuoteLeft style={{ color: colors.teal }} size={30} className="mb-2 opacity-30" />
                <p className="text-xl font-medium text-gray-700 leading-relaxed">
                  "GBOOMBA provided exceptional service for our house relocation. 
                  The team was professional, careful, and completed everything on time. 
                  Highly recommended for anyone looking for stress-free moving!"
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.tealLight }}>
                  <span className="font-bold" style={{ color: colors.teal }}>RK</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.navy }}>Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Happy Customer, Coimbatore</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg" style={{ border: `1px solid ${colors.teal}22` }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: colors.navy }}>
                Ready to Experience the GBOOMBA Difference?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of satisfied customers who trust us for their home service needs. 
                Get in touch today for a free consultation.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:918111002100"
                  className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full"
                  style={{ backgroundColor: colors.navy }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
                >
                  <FaPhone /> Call Now: 81 1100 2100
                </a>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full"
                  style={{ backgroundColor: colors.teal }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealDark}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
                >
                  Explore Services <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;