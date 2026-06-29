import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaClock, 
  FaArrowRight,
  FaStar,
  FaTruck,
  FaBoxes,
  FaHome,
  FaBuilding,
  FaStore,
  FaCheckCircle,
  FaUsers,
  FaMedal,
  FaQuoteLeft,
  FaBroom,
  FaPaintRoller,
  FaBolt,
  FaWrench,
  FaTools,
  FaHandshake,
  FaAward,
  FaThumbsUp,
  FaHeadset,
  FaCalendarCheck,
  FaRegSmile
} from 'react-icons/fa';
import { MdVerified, MdEmojiEmotions, MdCleaningServices, MdElectricalServices } from 'react-icons/md';
import HomeTestimonials from './HomeTestimonials';

const Hero = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    relocationType: ''
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.relocationType) {
      newErrors.relocationType = 'Please select a relocation type';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    console.log('Enquiry Form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        relocationType: ''
      });
    }, 5000);
  };

  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  // Stats data
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '20+', label: 'Team Members' },
    { number: '500+', label: 'Happy Customers' },
    { number: '100%', label: 'Satisfaction' }
  ];

  // Features data
  const features = [
    { icon: FaClock, text: 'No Spoiled Weekends' },
    { icon: FaShieldAlt, text: 'No Scratches on Walls & Furniture' },
    { icon: MdEmojiEmotions, text: 'No Noise for Neighbors' },
    { icon: MdVerified, text: 'Surprise Your Homies' }
  ];

  // Main Services
  const mainServices = [
    { icon: FaHome, title: 'House Relocation', desc: 'Stress-free moving from old house to new house' },
    { icon: FaBuilding, title: 'Office Relocation', desc: 'Minimize downtime with efficient office moving' },
    { icon: FaStore, title: 'Shop Relocation', desc: 'Relocate your shop with minimal disruption' }
  ];

  // Why Choose Us
  const whyChooseUs = [
    { icon: FaHandshake, title: 'Trusted & Reliable', desc: '4+ years of experience with 500+ happy customers' },
    { icon: FaClock, title: 'On-Time Service', desc: 'Punctual and efficient service delivery' },
    { icon: FaShieldAlt, title: 'Safe & Secure', desc: '100% insured and damage-free moving' },
    { icon: FaThumbsUp, title: 'Quality Guarantee', desc: 'Best quality service with satisfaction guarantee' },
    { icon: FaHeadset, title: '24/7 Support', desc: 'Round the clock customer support' },
    { icon: FaAward, title: 'Award Winning', desc: 'Recognized for service excellence' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        {/* Top Gradient Border */}
        <div style={{ 
          height: '4px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`
        }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -mr-48 -mt-48" style={{ backgroundColor: colors.teal }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 -ml-48 -mb-48" style={{ backgroundColor: colors.navy }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: colors.teal }}></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Trust Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ 
                  backgroundColor: colors.tealLight,
                }}
              >
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-medium" style={{ color: colors.navy }}>Trusted by 500+ Clients</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight" style={{ color: colors.navy }}>
                <span style={{ color: colors.teal }}>GBOOMBA</span>
              </h1>

              <div className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.navy }}>
                Complete Home Services
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Complete Work With One Call or WhatsApp Me. 
                We provide stress-free relocation services with care and professionalism.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.tealLight,
                      }}
                    >
                      <Icon style={{ color: colors.teal }} size={16} />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:918111002100"
                  className="flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    backgroundColor: colors.navy
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.teal;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.navy;
                  }}
                >
                  <FaPhone />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918111002100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 border-t border-gray-100 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-2xl font-bold" style={{ color: colors.teal }}>{stat.number}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enquiry Form Section */}
            <div className="w-full">
              <div 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border"
                style={{
                  borderColor: colors.teal + '22'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold" style={{ color: colors.navy }}>Enquiry Form</h3>
                  <p className="text-xs text-gray-500 mt-1">Submit details for a quick quote</p>
                </div>

                {/* Emergency Service Box */}
                <div 
                  className="p-3 mb-5 rounded-lg flex items-center gap-3 border transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.tealLight,
                    borderColor: colors.teal + '33',
                  }}
                >
                  <span className="text-xl">🚨</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.tealDark }}>Emergency Service</span>
                      <span className="text-[10px] font-bold text-red-500 animate-pulse bg-red-50 px-1.5 py-0.5 rounded">Active</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 font-medium leading-tight">
                      Quick site visit. Work starts in <span className="font-bold text-teal-800">10 minutes</span>.
                    </p>
                  </div>
                </div>

                {/* Enquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-3 py-2 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Mobile Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter 10-digit number"
                      maxLength="10"
                      className={`w-full px-3 py-2 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                      }`}
                    />
                    {errors.mobile && <p className="text-red-500 text-[11px] mt-0.5">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Address <span className="text-red-500">*</span></label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter shifting address"
                      rows="2"
                      className={`w-full px-3 py-2 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                      }`}
                    />
                    {errors.address && <p className="text-red-500 text-[11px] mt-0.5">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600">Relocation Type <span className="text-red-500">*</span></label>
                    <select
                      name="relocationType"
                      value={formData.relocationType}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg text-sm bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.relocationType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                      }`}
                    >
                      <option value="" disabled>Select relocation type</option>
                      <option value="house">🏠 House Relocation</option>
                      <option value="office">🏢 Office Relocation</option>
                      <option value="shop">🏪 Shop Relocation</option>
                    </select>
                    {errors.relocationType && <p className="text-red-500 text-[11px] mt-0.5">{errors.relocationType}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group mt-2"
                    style={{
                      background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(0,128,128,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Submit Enquiry
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>

                  {/* Success Message */}
                  {formSubmitted && (
                    <div className="mt-3 p-3 rounded-lg text-center bg-green-50 border border-green-200 animate-fadeIn">
                      <div className="flex items-center justify-center gap-2">
                        <FaCheckCircle className="text-green-600 text-lg" />
                        <div className="text-left">
                          <p className="font-semibold text-green-700 text-xs">Enquiry submitted successfully!</p>
                          <p className="text-[10px] text-green-600">Our team will contact you shortly.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: colors.teal + '22' }}
            >
              <FaAward style={{ color: colors.teal }} />
              <span className="text-sm font-medium" style={{ color: colors.teal }}>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
              Why <span style={{ color: colors.teal }}>GBOOMBA</span>?
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We make your relocation stress-free with our professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: colors.tealLight }}
                  >
                    <Icon style={{ color: colors.teal }} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: colors.teal + '22' }}
            >
              <FaTools style={{ color: colors.teal }} />
              <span className="text-sm font-medium" style={{ color: colors.teal }}>Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
              Complete <span style={{ color: colors.teal }}>Home Solutions</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We offer a wide range of professional services for your home and office needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Packers & Movers */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <FaTruck style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>Packers & Movers</h3>
              </div>
              <p className="text-gray-600 text-sm">Professional packing and moving services for house, office and shop relocation</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>House</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Office</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Shop</span>
              </div>
            </div>

            {/* Cleaning Services */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <MdCleaningServices style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>Cleaning Services</h3>
              </div>
              <p className="text-gray-600 text-sm">Normal cleaning & Deep cleaning services for your home and office spaces</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Normal</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Deep</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Office</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Kitchen</span>
              </div>
            </div>

            {/* Painting Services */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <FaPaintRoller style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>Painting Services</h3>
              </div>
              <p className="text-gray-600 text-sm">Full painting and touch-up services for your property with quality finishes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Full</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Touch-up</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Interior</span>
              </div>
            </div>

            {/* Electrical Services */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <MdElectricalServices style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>Electrical Services</h3>
              </div>
              <p className="text-gray-600 text-sm">TV installation, water purifier, heater bathroom and more electrical solutions</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>TV</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Water Purifier</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Heater</span>
              </div>
            </div>

            {/* AC Technician */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <FaWrench style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>AC Technician</h3>
              </div>
              <p className="text-gray-600 text-sm">Professional AC installation, repair and maintenance services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Installation</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Repair</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Maintenance</span>
              </div>
            </div>

            {/* Emergency Service */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: colors.teal }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.tealLight }}
                >
                  <FaClock style={{ color: colors.teal }} size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: colors.navy }}>Emergency Service</h3>
              </div>
              <p className="text-gray-600 text-sm">Quick site visit within your enquiry submitting. Work starts in 10 minutes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>24/7</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Quick Response</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.tealLight, color: colors.teal }}>Immediate</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ 
                backgroundColor: colors.navy
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.teal;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.navy;
              }}
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
<HomeTestimonials />

    </div>
  );
};

export default Hero;