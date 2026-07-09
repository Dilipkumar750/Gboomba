import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeTestimonials from './HomeTestimonials';
import WhyChoose from './WhyChoose';
import {
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaInfoCircle,
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
  FaRegSmile,
  FaWater,
  FaFan,
  FaTree,
  FaCouch,
  FaChair,
  FaDoorOpen,
  FaBed,
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
  FaUser,
  FaCalendarAlt,
  FaHome as FaHomeIcon,
  FaPhoneVolume
} from 'react-icons/fa';
import { MdVerified, MdEmojiEmotions, MdCleaningServices, MdElectricalServices, MdPlumbing, MdLocalShipping, MdAcUnit, MdBuild } from 'react-icons/md';
import logo from "../../assets/logo.png";

const HomePage = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    shiftingDate: '',
    relocationType: '',
    bhk: '',
    officeArea: '',
    shopType: '',
    shopArea: '',
    serviceType: 'enquiry'
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRelocation, setSelectedRelocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.shiftingDate) newErrors.shiftingDate = 'Shifting date is required';
    if (!formData.relocationType) newErrors.relocationType = 'Please select relocation type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Get today's date and time for timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Format shifting date
    const shiftingDateFormatted = formData.shiftingDate
      ? new Date(formData.shiftingDate).toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
      : 'Not specified';

    // Get property details based on relocation type
    let propertyDetails = '';
    if (formData.relocationType === 'Old House to New House') {
      propertyDetails = `BHK: ${formData.bhk || 'Not specified'}`;
    } else if (formData.relocationType === 'Office Relocation') {
      propertyDetails = `Office Area: ${formData.officeArea || 'Not specified'} sq.ft`;
    } else if (formData.relocationType === 'Shop Relocation') {
      propertyDetails = `Shop Type: ${formData.shopType || 'Not specified'}, Area: ${formData.shopArea || 'Not specified'} sq.ft`;
    }

    // Create WhatsApp message
    const message = `📋 *NEW ENQUIRY - GBOOMBA HOME SERVICES*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Customer Details:*
• Name: ${formData.name}
• Mobile: ${formData.mobile}
• Address: ${formData.address}

📅 *Shifting Details:*
• Date & Time: ${shiftingDateFormatted}
• Type: ${formData.relocationType}
• Property: ${propertyDetails}

📌 *Service Type:* ${formData.serviceType === 'emergency' ? '🚨 EMERGENCY' : '📋 Quotation/Enquiry'}

⏰ *Enquiry Time:* ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━
🙏 Thank you for choosing GBOOMBA!
📞 Contact: 81 1100 2100`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '918111002100';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    setFormSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        shiftingDate: '',
        relocationType: '',
        bhk: '',
        officeArea: '',
        shopType: '',
        shopArea: '',
        serviceType: 'enquiry'
      });
      setSelectedRelocation('');
    }, 5000);
  };

  // Services data
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
    // ✨ NEW: Transport Services
    {
      icon: FaTruck, // or you can use FaBus, FaShuttleVan, or any transport icon
      title: 'Transport Services',
      desc: 'Reliable transport solutions for local and outstation goods delivery with safe and timely service.',
      tags: ['Local', 'Outstation', 'Open-Body', 'Close-Body'],
      color: '#2c3e50'
    }
  ];

  // Stats
  const stats = [
    { number: '4+', label: 'Years Experience', icon: FaAward },
    { number: '500+', label: 'Happy Customers', icon: FaUsers },
    { number: '20+', label: 'Team Members', icon: FaHeadset },
    { number: '100%', label: 'Satisfaction Rate', icon: FaThumbsUp }
  ];

  // Get today's date for min datetime attribute
  const today = new Date().toISOString().slice(0, 16);

  // Phone number
  const phoneNumber = '918111002100';
  const formattedPhone = '81 1100 2100';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animations */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.lightGray }}>
        {/* Top Border */}
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
          animation: 'gradientPulse 3s ease-in-out infinite'
        }}></div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 -mr-32 -mt-32 animate-float" style={{ backgroundColor: colors.teal }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 -ml-32 -mb-32 animate-float-delayed" style={{ backgroundColor: colors.navy }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200/20 rounded-full animate-pulse-slow"></div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-5">
              {/* Logo Section */}
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12"
                  >
                    <img src={logo} alt="GBOOMBA Logo" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-extrabold" style={{ color: colors.navy }}>
                      <span style={{ color: colors.teal }}>GBOOMBA</span>
                    </h1>
                    <p className="text-xs font-medium" style={{ color: colors.teal }}>Complete Home Services</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full animate-pulse-slow"
                style={{ backgroundColor: colors.tealLight }}
              >
                <FaStar className="text-yellow-400 animate-bounce-slow" />
                <span className="text-xs font-medium" style={{ color: colors.navy }}>Trusted by 500+ Happy Clients</span>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold animate-fade-in-up" style={{ color: colors.navy }}>
                  Complete Relocation, Repair & Maintenance Solutions
                </h2>
                <p className="text-gray-600 mt-1 text-sm animate-fade-in-up-delayed">
                  Skilled Support for Shifting, Arrangements & Daily Tasks for Homes and Businesses.
                </p>
              </div>

              {/* Emergency Service Box */}
              <div
                className="p-4 rounded-lg border-2 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#fff5f5',
                  borderColor: '#ff4444'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center animate-bounce-slow">
                      <span className="text-xl">🚨</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold uppercase" style={{ color: colors.navy }}>Emergency Service</span>
                      <span className="text-[10px] font-bold text-red-500 animate-pulse bg-red-50 px-2 py-0.5 rounded">24/7 Active</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Quick site visit after receiving your enquiry. Work starts within <span className="font-bold text-red-600">10 minutes</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons - Fixed Phone Icon Direction */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                  style={{ backgroundColor: colors.navy }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = colors.teal}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.navy}
                >
                  <FaPhoneAlt className="group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                  Call Now: {formattedPhone}
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                >
                  <FaWhatsapp className="group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp
                </a>
                <a href="/services" className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group" style={{ backgroundColor: colors.teal }}>
                  <FaInfoCircle className="group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                  Our Services
                </a>
              </div>

              {/* Quick Info */}
              <div className="border-t border-gray-100 pt-3">
                <p className="text-[10px] text-gray-500 flex flex-wrap items-center gap-2">
                  📞{" "}
                  <a
                    href={`tel:+91${formattedPhone.replace(/\s+/g, "")}`}
                    className="text-blue-500 hover:underline"
                  >
                    +91 {formattedPhone}
                  </a>

                  <span>|</span>

                  ✉️{" "}
                  <a
                    href="mailto:gboombappy@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    gboombappy@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Content - Enquiry Form */}
            <div className="w-full lg:sticky lg:top-4">
              <div
                className="bg-white rounded-2xl p-6 shadow-2xl border transition-all duration-300 hover:shadow-3xl"
                style={{ borderColor: colors.teal + '22' }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold animate-gradient" style={{ color: colors.navy }}>Need Our Services?</h3>
                  <p className="text-xs text-gray-500">Fill in your details and we'll get back to you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Customer Details */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-gray-700">Customer Details</label>

                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        <FaUser className="inline mr-1.5" style={{ color: colors.teal }} size={12} />
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                          }`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.name}</p>}
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        <FaPhoneAlt className="inline mr-1.5" style={{ color: colors.teal }} size={12} />
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        className={`w-full px-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                          }`}
                      />
                      {errors.mobile && <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.mobile}</p>}
                    </div>

                    {/* Address Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        <FaHomeIcon className="inline mr-1.5" style={{ color: colors.teal }} size={12} />
                        Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                        rows="2"
                        className={`w-full px-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                          }`}
                      />
                      {errors.address && <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.address}</p>}
                    </div>

                    {/* Shifting Date & Time Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        <FaCalendarAlt className="inline mr-1.5" style={{ color: colors.teal }} size={12} />
                        Shifting Date & Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        name="shiftingDate"
                        value={formData.shiftingDate}
                        onChange={handleChange}
                        min={today}
                        className={`w-full px-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${errors.shiftingDate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                          }`}
                      />
                      {errors.shiftingDate && <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.shiftingDate}</p>}
                    </div>
                  </div>

                  {/* Relocation Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Relocation Type <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Old House to New House', 'Office Relocation', 'Shop Relocation'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, relocationType: type }));
                            setSelectedRelocation(type);
                          }}
                          className={`px-2 py-1.5 border rounded-lg text-[10px] font-medium transition-all duration-300 hover:scale-105 ${selectedRelocation === type
                              ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md'
                              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                            }`}
                          style={{
                            borderColor: selectedRelocation === type ? colors.teal : undefined,
                            backgroundColor: selectedRelocation === type ? colors.tealLight : undefined,
                            color: selectedRelocation === type ? colors.teal : undefined
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors.relocationType && <p className="text-red-500 text-[10px] mt-1 animate-fade-in-up">{errors.relocationType}</p>}
                  </div>

                  {/* Property Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Property Details</label>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRelocation === 'Old House to New House' && (
                        <div className="col-span-2 animate-fade-in-up">
                          <input
                            type="text"
                            name="bhk"
                            value={formData.bhk}
                            onChange={handleChange}
                            placeholder="BHK (e.g. 2BHK)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50"
                          />
                        </div>
                      )}
                      {selectedRelocation === 'Office Relocation' && (
                        <div className="col-span-2 animate-fade-in-up">
                          <input
                            type="text"
                            name="officeArea"
                            value={formData.officeArea}
                            onChange={handleChange}
                            placeholder="Office Area (Sq.ft)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50"
                          />
                        </div>
                      )}
                      {selectedRelocation === 'Shop Relocation' && (
                        <>
                          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <input
                              type="text"
                              name="shopType"
                              value={formData.shopType}
                              onChange={handleChange}
                              placeholder="Shop Type"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50"
                            />
                          </div>
                          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <input
                              type="text"
                              name="shopArea"
                              value={formData.shopArea}
                              onChange={handleChange}
                              placeholder="Shop Area (Sq.ft)"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50"
                            />
                          </div>
                        </>
                      )}
                      {!selectedRelocation && (
                        <div className="col-span-2 text-xs text-gray-400 italic">
                          Please select a relocation type above to enter property details
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Enquiry <FaArrowRight className="inline ml-1 group-hover:translate-x-1 transition-transform duration-300" size={12} />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  </button>

                  {formSubmitted && (
                    <div className="p-3 rounded-lg bg-green-50 border border-green-200 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600 animate-bounce-slow" />
                        <div>
                          <p className="text-green-700 text-sm font-semibold">✓ Enquiry sent successfully!</p>
                          <p className="text-green-600 text-xs">Your enquiry has been sent via WhatsApp. Our team will contact you shortly.</p>
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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <Icon style={{ color: colors.teal }} size={18} className="animate-bounce-slow" />
                  <span className="text-xl font-bold" style={{ color: colors.navy }}>{stat.number}</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <WhyChoose />

      {/* Our Specialized Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 animate-pulse-slow" style={{ backgroundColor: colors.teal + '22' }}>
              <FaTools style={{ color: colors.teal }} size={12} />
              <span className="text-[10px] font-medium" style={{ color: colors.teal }}>Our Services</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold animate-gradient" style={{ color: colors.navy }}>
              Our <span style={{ color: colors.teal }}>Specialized Services</span>
            </h2>
            <p className="text-gray-600 text-sm mt-1">Complete home services at your doorstep</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up relative overflow-hidden`}
                  style={{
                    borderTop: `3px solid ${service.color}`,
                    animationDelay: `${index * 100 + 400}ms`
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${service.color}22, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ backgroundColor: service.color + '22' }}
                      >
                        <Icon style={{ color: service.color }} size={18} />
                      </div>
                      <h3 className="text-base font-semibold transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: service.color + '22', color: service.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeTestimonials />

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
        @keyframes gradientPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-gradient {
          background: linear-gradient(135deg, #1a2a4a, #008080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;