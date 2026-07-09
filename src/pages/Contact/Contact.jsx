import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaTruck,
  FaHome,
  FaBuilding,
  FaStore,
  FaUsers,
  FaAward,
  FaThumbsUp,
  FaHeadset,
  FaCalendarCheck,
  FaMailBulk,
  FaGlobe,
  FaPhoneAlt,
  FaWhatsappSquare,
  FaBoxes,
  FaTools,
  FaRegSmile,
  FaShieldAlt,
  FaRocket,
  FaGem,
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaHome as FaHomeIcon,
  FaBuilding as FaBuildingIcon,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices, MdAcUnit } from 'react-icons/md';

const Contact = () => {
  // Colors matching HomePage and About
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  // Category and Subcategory Data
  const serviceCategories = {
    'Cleaning Services': {
      subcategories: ['One-Time Cleaning', 'Regular Cleaning', 'Basic Cleaning', 'Deep Cleaning'],
      icon: '🧹'
    },
    'Painting Services': {
      subcategories: ['Rental House Painting', 'Interior Painting', 'Exterior Painting', 'Waterproof Coating', 'Touch-up'],
      icon: '🎨'
    },
    'Electrical & Plumbing Services': {
      subcategories: ['Installation Works', 'Repair & Maintenance', 'Wiring & Fitting Works', 'Leakage & Pipe Repair'],
      icon: '⚡'
    },
    'Packers & Movers': {
      subcategories: ['Complete Relocation Package', 'Household Shifting', 'Office Relocation', 'Shop Relocation', 'Packing & Unpacking', 'Loading & Unloading'],
      icon: '🚚'
    },
    'Transport Services': {
      subcategories: ['Mini Door Vehicle - TATA Ace', 'Pickup Vehicle - 2 Ton', 'Eicher Vehicle', 'Other Long-Chassis Vehicle', 'Local Transport', 'Long-Distance Transport'],
      icon: '🚐'
    },
    'AC Installation & Services': {
      subcategories: ['Old House to New House Shifting', 'New AC Installation', 'General Service', 'Deep Service', 'Gas Charging'],
      icon: '❄️'
    },
    'Carpentry Services': {
      subcategories: ['Furniture Assembly', 'Furniture Repair', 'Door & Window Works', 'Modular Kitchen Works', 'Wardrobe & Storage Works'],
      icon: '🔨'
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    shiftingDate: '',
    relocationType: '',
    homeBHK: '',
    officeArea: '',
    shopType: '',
    shopArea: '',
    categories: [],
    subcategories: [],
    floorNumber: '',
    liftAvailable: '',
    additionalMessage: ''
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRelocation, setSelectedRelocation] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [animateIn, setAnimateIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPackersFields, setShowPackersFields] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Check if Packers & Movers is selected
  useEffect(() => {
    const isPackersSelected = selectedCategories.includes('Packers & Movers');
    setShowPackersFields(isPackersSelected);
  }, [selectedCategories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      let newCategories;
      if (isSelected) {
        newCategories = prev.filter(item => item !== category);
        // Remove subcategories of this category
        const categorySubcategories = serviceCategories[category]?.subcategories || [];
        setSelectedSubcategories(prevSubs => 
          prevSubs.filter(sub => !categorySubcategories.includes(sub))
        );
        // Collapse the category when unselecting
        setExpandedCategories(prev => ({
          ...prev,
          [category]: false
        }));
      } else {
        newCategories = [...prev, category];
        // Auto-expand the category when selecting
        setExpandedCategories(prev => ({
          ...prev,
          [category]: true
        }));
      }
      
      setFormData(prev => ({
        ...prev,
        categories: newCategories
      }));
      
      if (errors.categories) {
        setErrors(prev => ({ ...prev, categories: '' }));
      }
      
      return newCategories;
    });
  };

  const handleSubcategoryToggle = (subcategory) => {
    setSelectedSubcategories(prev => {
      if (prev.includes(subcategory)) {
        return prev.filter(item => item !== subcategory);
      } else {
        return [...prev, subcategory];
      }
    });
    
    setFormData(prev => ({
      ...prev,
      subcategories: selectedSubcategories.includes(subcategory)
        ? prev.subcategories.filter(item => item !== subcategory)
        : [...prev.subcategories, subcategory]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter valid 10-digit number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.shiftingDate) newErrors.shiftingDate = 'Shifting date is required';
    if (!formData.relocationType) newErrors.relocationType = 'Please select relocation type';
    if (selectedCategories.length === 0) newErrors.categories = 'Please select at least one service category';
    if (selectedSubcategories.length === 0) newErrors.subcategories = 'Please select at least one service';
    
    // Validate Packers & Movers extra fields
    if (showPackersFields) {
      if (!formData.floorNumber) newErrors.floorNumber = 'Please enter floor number';
      if (!formData.liftAvailable) newErrors.liftAvailable = 'Please select lift availability';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    const now = new Date();
    const timestamp = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

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

    let propertyDetails = '';
    if (formData.relocationType === 'Old House to New House') {
      propertyDetails = `BHK: ${formData.homeBHK || 'Not specified'}`;
    } else if (formData.relocationType === 'Office Relocation') {
      propertyDetails = `Office Area: ${formData.officeArea || 'Not specified'} sq.ft`;
    } else if (formData.relocationType === 'Shop Relocation') {
      propertyDetails = `Shop Type: ${formData.shopType || 'Not specified'}, Area: ${formData.shopArea || 'Not specified'} sq.ft`;
    }

    let packersDetails = '';
    if (showPackersFields) {
      packersDetails = `
━━━━━━━━━━━━━━━━━━━━━━
📦 *Packers & Movers Details:*
• Floor Number: ${formData.floorNumber || 'Not specified'}
• Lift Available: ${formData.liftAvailable || 'Not specified'}`;
    }

    let additionalMsg = '';
    if (formData.additionalMessage) {
      additionalMsg = `
━━━━━━━━━━━━━━━━━━━━━━
📝 *Additional Message:*
${formData.additionalMessage}`;
    }

    const selectedServicesList = selectedSubcategories.length > 0 
      ? selectedSubcategories.map((s, i) => `  ${i + 1}. ${s}`).join('\n')
      : 'Not specified';

    const selectedCategoriesList = selectedCategories.length > 0
      ? selectedCategories.map((c, i) => `  ${i + 1}. ${c}`).join('\n')
      : 'Not specified';

    const message = `📋 *NEW ENQUIRY - GBOOMBA HOME SERVICES*
━━━━━━━━━━━━━━━━━━━━━━

📌 *Service Details:*
• Categories:
${selectedCategoriesList}
• Selected Services:
${selectedServicesList}
${packersDetails}
${additionalMsg}

👤 *Customer Details:*
• Name: ${formData.name}
• Mobile: ${formData.mobile}
• Address: ${formData.address}

📅 *Shifting Details:*
• Date & Time: ${shiftingDateFormatted}
• Type: ${formData.relocationType}
• Property: ${propertyDetails}

⏰ *Enquiry Time:* ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━
🙏 Thank you for choosing GBOOMBA!
📞 Contact: 81 1100 2100
🌐 www.gboomba.in`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '918111002100';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setFormSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        shiftingDate: '',
        relocationType: '',
        homeBHK: '',
        officeArea: '',
        shopType: '',
        shopArea: '',
        categories: [],
        subcategories: [],
        floorNumber: '',
        liftAvailable: '',
        additionalMessage: ''
      });
      setSelectedRelocation('');
      setSelectedCategories([]);
      setSelectedSubcategories([]);
      setShowPackersFields(false);
      setExpandedCategories({});
    }, 5000);
  };

  const quickServices = [
    { icon: FaTruck, name: 'Packers & Movers' },
    { icon: MdCleaningServices, name: 'Cleaning Services' },
    { icon: FaHome, name: 'Painting Services' },
    { icon: MdElectricalServices, name: 'Electrical & Plumbing' },
    { icon: MdAcUnit, name: 'AC Technician' },
    { icon: FaBuilding, name: 'Carpentry Services' },
    { icon: FaTruck, name: 'Transport Services' }
  ];

  const getSubcategoriesForSelectedCategories = () => {
    const allSubs = [];
    selectedCategories.forEach(category => {
      const subs = serviceCategories[category]?.subcategories || [];
      allSubs.push(...subs);
    });
    return allSubs;
  };

  const currentSubcategories = getSubcategoriesForSelectedCategories();
  const phoneNumber = '918111002100';
  const formattedPhone = '81 1100 2100';

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightGray }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        <div style={{ 
          height: '3px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
          animation: 'gradientPulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -mr-24 -mt-24 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full animate-pulse-slow"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2 animate-bounce-slow">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12"
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
                <p className="text-xs font-medium text-white/70 tracking-wider">COMPLETE HOME SERVICES</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 animate-pulse-slow" style={{ backgroundColor: colors.teal + '33' }}>
              <FaTruck className="text-white animate-bounce-slow" size={12} />
              <span className="text-[10px] font-medium text-white tracking-wider">PACKERS & MOVERS</span>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight animate-fade-in-up">
              Complete Relocation, Repair & Maintenance Solutions for Homes and Businesses.
            </h2>
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Skilled Support for Shifting, Arrangements & Daily Tasks for Homes and Businesses.
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-1.5 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 group"
                style={{ backgroundColor: colors.teal }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealDark}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
              >
                <FaPhoneAlt size={12} className="group-hover:animate-pulse" /> Call Now: {formattedPhone}
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 group"
              >
                <FaWhatsapp size={12} className="group-hover:animate-pulse" /> WhatsApp
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

      {/* Enquiry Form & Contact Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left - Enquiry Form (3 columns) */}
            <div className="lg:col-span-3">
              <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-1000 transform ${
                animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ border: `1px solid ${colors.teal}22` }}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg animate-bounce-slow">🚨</span>
                    <span className="text-sm font-bold uppercase" style={{ color: colors.navy }}>EMERGENCY SERVICE</span>
                    <span className="text-[10px] font-bold text-red-500 animate-pulse bg-red-50 px-2 py-0.5 rounded ml-auto">24/7 Active</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Call Our Team: <a href={`tel:${phoneNumber}`} className="font-bold hover:text-teal-700 transition-colors" style={{ color: colors.teal }}>📞 {formattedPhone}</a>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {[
                      'Quick site visit after receiving your enquiry',
                      'Immediate support from our expert team',
                      'Work starts within 10 minutes of your confirmation'
                    ].map((text, idx) => (
                      <span key={idx} className="text-[10px] text-green-700 flex items-center gap-1 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                        <FaCheckCircle size={10} className="animate-pulse-slow" /> {text}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div className="mb-4">
                  <h3 className="text-lg font-bold animate-gradient" style={{ color: colors.navy }}>
                    📋 QUOTATION / ENQUIRY FORM
                  </h3>
                  <p className="text-xs text-gray-500">Our team will contact you shortly after receiving your enquiry.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Categories - Accordion Design */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      Which Service Are You Looking For? <span className="text-red-500">*</span>
                      <span className="block text-[10px] font-normal text-gray-400 mt-0.5">(Select one or more services)</span>
                    </label>
                    
                    {/* Selected Categories Count */}
                    {selectedCategories.length > 0 && (
                      <div className="mb-2 p-2 rounded-lg" style={{ backgroundColor: colors.tealLight }}>
                        <p className="text-[10px] font-medium" style={{ color: colors.teal }}>
                          Selected: {selectedCategories.length} category(s)
                        </p>
                      </div>
                    )}

                    {/* Accordion Categories */}
                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                      {Object.keys(serviceCategories).map((category) => {
                        const isSelected = selectedCategories.includes(category);
                        const isExpanded = expandedCategories[category] || false;
                        const categoryData = serviceCategories[category];
                        const subcategories = categoryData.subcategories || [];
                        const selectedSubsForCategory = subcategories.filter(sub => selectedSubcategories.includes(sub));

                        return (
                          <div 
                            key={category}
                            className={`border-2 rounded-lg transition-all duration-300 overflow-hidden ${
                              isSelected ? 'border-teal shadow-md' : 'border-gray-200'
                            }`}
                            style={{
                              borderColor: isSelected ? colors.teal : undefined,
                              backgroundColor: isSelected ? colors.tealLight : 'white'
                            }}
                          >
                            {/* Category Header */}
                            <div 
                              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => toggleCategory(category)}
                              style={{
                                backgroundColor: isSelected ? colors.tealLight : 'white'
                              }}
                            >
                              <div 
                                className="flex items-center gap-3 flex-1"
                                onClick={(e) => {
                                  // Only toggle category if clicking on the text/icon area, not the checkbox
                                  if (e.target.type !== 'checkbox') {
                                    handleCategoryToggle(category);
                                  }
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    handleCategoryToggle(category);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="w-4 h-4 accent-teal flex-shrink-0"
                                />
                                <span className="text-sm font-medium">
                                  {categoryData.icon} {category}
                                </span>
                                {isSelected && selectedSubsForCategory.length > 0 && (
                                  <span className="text-[10px] bg-teal text-white px-2 py-0.5 rounded-full">
                                    {selectedSubsForCategory.length}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {isSelected && (
                                  <span className="text-[10px] text-teal font-medium">✓ Selected</span>
                                )}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleCategory(category);
                                  }}
                                  className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                                >
                                  {isExpanded ? (
                                    <FaChevronUp size={14} className="text-gray-500" />
                                  ) : (
                                    <FaChevronDown size={14} className="text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Subcategories - Accordion Content */}
                            <div 
                              className={`transition-all duration-300 overflow-hidden ${
                                isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="p-3 pt-0 border-t border-gray-200" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                                  {subcategories.map((subcategory) => (
                                    <label
                                      key={subcategory}
                                      className={`flex items-center p-1.5 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                        selectedSubcategories.includes(subcategory)
                                          ? 'border-teal bg-white shadow-md'
                                          : 'border-gray-300 hover:border-teal hover:bg-gray-50'
                                      } ${
                                        !isSelected ? 'opacity-50 cursor-not-allowed' : ''
                                      }`}
                                      onClick={(e) => {
                                        if (isSelected) {
                                          handleSubcategoryToggle(subcategory);
                                        }
                                      }}
                                      style={{
                                        borderColor: selectedSubcategories.includes(subcategory) ? colors.teal : undefined,
                                        backgroundColor: selectedSubcategories.includes(subcategory) ? 'white' : undefined,
                                        cursor: isSelected ? 'pointer' : 'not-allowed'
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={selectedSubcategories.includes(subcategory)}
                                        onChange={() => {
                                          if (isSelected) {
                                            handleSubcategoryToggle(subcategory);
                                          }
                                        }}
                                        disabled={!isSelected}
                                        className="mr-2 w-4 h-4 accent-teal flex-shrink-0"
                                      />
                                      <span className="text-xs">{subcategory}</span>
                                    </label>
                                  ))}
                                </div>
                                {!isSelected && (
                                  <p className="text-[10px] text-gray-400 mt-2 italic">
                                    Please select this category to choose services
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.categories && (
                      <p className="text-red-500 text-[10px] mt-1 animate-fade-in-up">{errors.categories}</p>
                    )}
                  </div>

                  {/* Selected Services Summary */}
                  {selectedSubcategories.length > 0 && (
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.tealLight }}>
                      <p className="text-xs font-medium mb-2" style={{ color: colors.teal }}>
                        📌 Selected Services:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSubcategories.map((service, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-[10px] shadow-sm"
                            style={{ color: colors.navy }}
                          >
                            {service}
                            <button
                              type="button"
                              onClick={() => handleSubcategoryToggle(service)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <FaTimes size={10} />
                            </button>
                          </span>
                        ))}
                      </div>
                      {errors.subcategories && (
                        <p className="text-red-500 text-[10px] mt-1 animate-fade-in-up">{errors.subcategories}</p>
                      )}
                    </div>
                  )}

                  {/* Packers & Movers Extra Fields */}
                  {showPackersFields && (
                    <div className="p-3 rounded-lg border-2 border-orange-200 animate-fade-in-up" style={{ backgroundColor: '#fff7ed' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <FaTruck className="text-orange-600" size={16} />
                        <h4 className="text-sm font-bold text-orange-800">Packers & Movers Details</h4>
                        <span className="text-[10px] bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full">Required</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Floor Number */}
                        <div>
                          <label className="block text-[10px] font-medium text-gray-600 mb-1">
                            <FaBuildingIcon className="inline mr-1" style={{ color: colors.teal }} size={10} />
                            Which Floor? <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="floorNumber"
                            value={formData.floorNumber}
                            onChange={handleChange}
                            placeholder="e.g. Ground, 1st, 2nd, etc."
                            className={`w-full px-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                              errors.floorNumber 
                                ? 'border-red-500 focus:ring-red-200 animate-shake' 
                                : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                            }`}
                            style={{
                              borderColor: errors.floorNumber ? undefined : colors.teal + '40',
                            }}
                          />
                          {errors.floorNumber && (
                            <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.floorNumber}</p>
                          )}
                        </div>

                        {/* Lift Available */}
                        <div>
                          <label className="block text-[10px] font-medium text-gray-600 mb-1">
                            <FaBuildingIcon className="inline mr-1" style={{ color: colors.teal }} size={10} />
                            Lift Available? <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-2">
                            {['Yes', 'No'].map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, liftAvailable: option }));
                                  if (errors.liftAvailable) {
                                    setErrors(prev => ({ ...prev, liftAvailable: '' }));
                                  }
                                }}
                                className={`flex-1 px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 ${
                                  formData.liftAvailable === option
                                    ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md'
                                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                                }`}
                                style={{
                                  borderColor: formData.liftAvailable === option ? colors.teal : undefined,
                                  backgroundColor: formData.liftAvailable === option ? colors.tealLight : undefined,
                                  color: formData.liftAvailable === option ? colors.teal : undefined
                                }}
                              >
                                {option === 'Yes' ? '✅ Yes' : '❌ No'}
                              </button>
                            ))}
                          </div>
                          {errors.liftAvailable && (
                            <p className="text-red-500 text-[10px] mt-0.5 animate-fade-in-up">{errors.liftAvailable}</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
                        <FaBuilding className="text-blue-500" size={12} />
                        <span>This information helps us assign the right moving team and equipment</span>
                      </div>
                    </div>
                  )}

                  {/* Customer Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">CUSTOMER DETAILS</label>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          <FaUser className="inline mr-1" style={{ color: colors.teal }} size={10} />
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                            errors.name 
                              ? 'border-red-500 focus:ring-red-200 animate-shake' 
                              : 'border-gray-300 focus:ring-teal/20 focus:border-teal hover:border-teal/50'
                          }`}
                          style={{
                            borderColor: errors.name ? undefined : colors.teal + '40',
                          }}
                        />
                        {errors.name && <p className="text-red-500 text-[11px] mt-0.5 animate-fade-in-up">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          <FaPhoneAlt className="inline mr-1" style={{ color: colors.teal }} size={10} />
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          maxLength="10"
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                            errors.mobile 
                              ? 'border-red-500 focus:ring-red-200 animate-shake' 
                              : 'border-gray-300 focus:ring-teal/20 focus:border-teal hover:border-teal/50'
                          }`}
                          style={{
                            borderColor: errors.mobile ? undefined : colors.teal + '40',
                          }}
                        />
                        {errors.mobile && <p className="text-red-500 text-[11px] mt-0.5 animate-fade-in-up">{errors.mobile}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          <FaHomeIcon className="inline mr-1" style={{ color: colors.teal }} size={10} />
                          Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your complete address"
                          rows="2"
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                            errors.address 
                              ? 'border-red-500 focus:ring-red-200 animate-shake' 
                              : 'border-gray-300 focus:ring-teal/20 focus:border-teal hover:border-teal/50'
                          }`}
                          style={{
                            borderColor: errors.address ? undefined : colors.teal + '40',
                          }}
                        />
                        {errors.address && <p className="text-red-500 text-[11px] mt-0.5 animate-fade-in-up">{errors.address}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          <FaCalendarAlt className="inline mr-1" style={{ color: colors.teal }} size={10} />
                          Shifting Date & Time <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="datetime-local"
                          name="shiftingDate"
                          value={formData.shiftingDate}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                            errors.shiftingDate 
                              ? 'border-red-500 focus:ring-red-200 animate-shake' 
                              : 'border-gray-300 focus:ring-teal/20 focus:border-teal hover:border-teal/50'
                          }`}
                          style={{
                            borderColor: errors.shiftingDate ? undefined : colors.teal + '40',
                          }}
                        />
                        {errors.shiftingDate && <p className="text-red-500 text-[11px] mt-0.5 animate-fade-in-up">{errors.shiftingDate}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Relocation Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">RELOCATION TYPE <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['Old House to New House', 'Office Relocation', 'Shop Relocation'].map((type, idx) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, relocationType: type }));
                            setSelectedRelocation(type);
                          }}
                          className={`px-3 py-2 border rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
                            selectedRelocation === type 
                              ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md scale-105' 
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
                    {errors.relocationType && <p className="text-red-500 text-[11px] mt-1 animate-fade-in-up">{errors.relocationType}</p>}
                  </div>

                  {/* Property Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">PROPERTY DETAILS</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedRelocation === 'Old House to New House' && (
                        <div className="col-span-2 animate-fade-in-up">
                          <label className="block text-[10px] text-gray-500 mb-1">Home</label>
                          <input
                            type="text"
                            name="homeBHK"
                            value={formData.homeBHK}
                            onChange={handleChange}
                            placeholder="BHK (e.g. 2BHK)"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50 focus:scale-[1.01]"
                            style={{ borderColor: colors.teal + '40' }}
                          />
                        </div>
                      )}
                      {selectedRelocation === 'Office Relocation' && (
                        <div className="col-span-2 animate-fade-in-up">
                          <label className="block text-[10px] text-gray-500 mb-1">Office</label>
                          <input
                            type="text"
                            name="officeArea"
                            value={formData.officeArea}
                            onChange={handleChange}
                            placeholder="Area (Sq.ft)"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50 focus:scale-[1.01]"
                            style={{ borderColor: colors.teal + '40' }}
                          />
                        </div>
                      )}
                      {selectedRelocation === 'Shop Relocation' && (
                        <>
                          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <label className="block text-[10px] text-gray-500 mb-1">Shop</label>
                            <input
                              type="text"
                              name="shopType"
                              value={formData.shopType}
                              onChange={handleChange}
                              placeholder="Shop Type"
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50 focus:scale-[1.01]"
                              style={{ borderColor: colors.teal + '40' }}
                            />
                          </div>
                          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <label className="block text-[10px] text-gray-500 mb-1">&nbsp;</label>
                            <input
                              type="text"
                              name="shopArea"
                              value={formData.shopArea}
                              onChange={handleChange}
                              placeholder="Area (Sq.ft)"
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50 focus:scale-[1.01]"
                              style={{ borderColor: colors.teal + '40' }}
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

                  {/* Additional Message Box */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      <FaRegSmile className="inline mr-1" style={{ color: colors.teal }} size={12} />
                      Additional Message
                      <span className="block text-[10px] font-normal text-gray-400 mt-0.5">Any special requirements or instructions</span>
                    </label>
                    <textarea
                      name="additionalMessage"
                      value={formData.additionalMessage}
                      onChange={handleChange}
                      placeholder="e.g. Fragile items, specific timing, parking instructions, etc."
                      rows="3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal hover:border-teal/50 focus:scale-[1.01] resize-none"
                      style={{ borderColor: colors.teal + '40' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
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
                          <FaWhatsapp size={14} />
                          Submit & Send via WhatsApp
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
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

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 transition-all duration-300 hover:text-teal-600">
                        <FaPhoneAlt style={{ color: colors.teal }} size={14} className="group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>+91 {formattedPhone}</span>
                      </a>
                    </div>
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg group"
                    >
                      <FaWhatsapp size={12} className="group-hover:animate-pulse" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Information (2 columns) */}
            <div className="lg:col-span-2">
              <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-1000 transform ${
                animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ animationDelay: '300ms', border: `1px solid ${colors.teal}22` }}>
                <h3 className="text-lg font-bold mb-4 animate-gradient" style={{ color: colors.navy }}>
                  Contact <span style={{ color: colors.teal }}>Information</span>
                </h3>

                <div className="mb-4 group cursor-pointer transition-all duration-300 hover:bg-teal-50/50 p-3 rounded-xl">
                  <h4 className="font-semibold text-sm mb-2" style={{ color: colors.navy }}>
                    <FaClock className="inline mr-2 group-hover:animate-spin-slow" style={{ color: colors.teal }} />
                    Working Hours
                  </h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs transition-all duration-300 group-hover:translate-x-1">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-medium" style={{ color: colors.navy }}>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-xs transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '50ms' }}>
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium" style={{ color: colors.navy }}>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-xs transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '100ms' }}>
                      <span className="text-gray-600">Emergency</span>
                      <span className="font-medium text-red-500 animate-pulse">24/7 Available</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div className="space-y-3">
                  {[
                    { icon: FaPhoneAlt, label: 'Phone', value: `+91 ${formattedPhone}`, link: `tel:${phoneNumber}` },
                    { icon: FaWhatsapp, label: 'WhatsApp', value: `+91 ${formattedPhone}`, link: `https://wa.me/${phoneNumber}` },
                    { icon: FaEnvelope, label: 'Email', value: 'gboombappy@gmail.com', link: 'mailto:gboombappy@gmail.com' },
                    { icon: FaGlobe, label: 'Website', value: 'www.gboomba.in', link: 'https://www.gboomba.in' },
                    { icon: FaMapMarkerAlt, label: 'Address', value: '23/17, Mutthu Vinayagar Kovil Street, Punjai Puliampatti, Erode - 638459', link: null }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    const content = (
                      <div key={idx} className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:bg-teal-50/50 p-2 rounded-xl hover:translate-x-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md" style={{ backgroundColor: colors.tealLight }}>
                          <Icon style={{ color: colors.teal }} size={14} className="group-hover:animate-pulse" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 transition-all duration-300 group-hover:text-teal-600">{item.label}</p>
                          <p className="text-sm font-medium transition-all duration-300 group-hover:text-teal-700" style={{ color: colors.navy }}>{item.value}</p>
                        </div>
                      </div>
                    );

                    if (item.link) {
                      return (
                        <a key={idx} href={item.link} target={item.label === 'Website' ? '_blank' : undefined} rel="noopener noreferrer">
                          {content}
                        </a>
                      );
                    }
                    return content;
                  })}
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: colors.navy }}>
                    <FaTruck className="inline mr-2 animate-pulse-slow" style={{ color: colors.teal }} />
                    Our Services
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {quickServices.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={index}
                          to="/services"
                          className="flex items-center gap-1.5 p-1.5 rounded-lg text-[10px] transition-all duration-300 hover:shadow-md hover:scale-105 group"
                          style={{ backgroundColor: colors.tealLight }}
                        >
                          <Icon style={{ color: colors.teal }} size={12} className="group-hover:animate-pulse" />
                          <span style={{ color: colors.navy }} className="group-hover:text-teal-700 transition-colors duration-300">{service.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: colors.navy }}>
                    <FaStar className="inline mr-2 animate-spin-slow" style={{ color: colors.teal }} />
                    Why Choose GBOOMBA
                  </h4>
                  <div className="space-y-1">
                    {[
                     'Scratch-Free Care for Your Walls & Furniture',
                     'Quiet, Clean & Neighbor-Friendly Service',
                     'Safe Handling of Every Item – Big or Small',
                     'Professional Packing, Loading & Unloading',
                     'Hassle-Free, Stress-Free Relocation',
                     'On-Time & Reliable Service Every Time',
                     'Make Moving a Happy Memory for Your Family'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs group cursor-pointer transition-all duration-300 hover:translate-x-1">
                        <FaCheckCircle style={{ color: colors.teal }} size={10} className="group-hover:animate-pulse" />
                        <span className="text-gray-600 group-hover:text-teal-700 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ color: colors.teal }} size={12} className="transition-all duration-300 hover:scale-125 hover:rotate-12" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-xs font-medium mt-1 transition-all duration-300 group-hover:text-teal-600" style={{ color: colors.navy }}>
                    Trusted by 500+ Happy Customers
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-[10px] text-gray-500">4.9/5 Rating</span>
                    <span className="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
                    <span className="text-[10px] text-gray-500">100% Satisfaction</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-[10px] text-gray-400">🌐 www.gboomba.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6" style={{ backgroundColor: colors.tealLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl p-3 shadow-lg transition-all duration-1000 transform ${
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ animationDelay: '600ms' }}>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3916.3342!2d77.1693224!3d11.3530614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GBOOMBA Location - Coimbatore"
                className="rounded-xl transition-all duration-500 hover:scale-[1.01]"
              ></iframe>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <FaMapMarkerAlt style={{ color: colors.teal }} size={12} />
                <span>📍 11°21'11.0"N 77°10'09.6"E - Coimbatore, Tamil Nadu</span>
                <a 
                  href="https://www.google.com/maps/place/11%C2%B021'11.0%22N+77%C2%B010'09.6%22E/@11.3530614,77.1667475,778m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d11.3530614!4d77.1693224?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300 text-xs font-medium"
                >
                  View on Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes gradientPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
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
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-gradient {
          background: linear-gradient(135deg, #1a2a4a, #008080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-gradient:hover {
          background: linear-gradient(135deg, #008080, #1a2a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .max-h-500::-webkit-scrollbar {
          width: 4px;
        }
        .max-h-500::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .max-h-500::-webkit-scrollbar-thumb {
          background: #008080;
          border-radius: 4px;
        }
        .max-h-500::-webkit-scrollbar-thumb:hover {
          background: #006666;
        }
      `}</style>
    </div>
  );
};

export default Contact;