import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaArrowRight, 
  FaTimes,
  FaTruck,
  FaBuilding,
  FaInfoCircle,
  FaUser,
  FaCalendarAlt,
  FaHome,
  FaRegSmile,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const Enquiry = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

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
    officeSqft: '',
    shopType: '',
    shopArea: '',
    serviceType: 'enquiry',
    categories: [],
    subcategories: [],
    floorNumber: '',
    liftAvailable: '',
    additionalMessage: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [showPackersFields, setShowPackersFields] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

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

  // Toggle accordion expand/collapse
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Handle category toggle (checkbox)
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      let newCategories;
      if (isSelected) {
        newCategories = prev.filter(item => item !== category);
        // Remove subcategories from the deselected category
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
      
      // Update formData
      setFormData(prev => ({
        ...prev,
        categories: newCategories
      }));
      
      // Clear error for categories
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

  // Format date for WhatsApp message
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Get all subcategories from selected categories
  const getSubcategoriesForSelectedCategories = () => {
    const allSubs = [];
    selectedCategories.forEach(category => {
      const subs = serviceCategories[category]?.subcategories || [];
      allSubs.push(...subs);
    });
    return allSubs;
  };

  const currentSubcategories = getSubcategoriesForSelectedCategories();

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const relocationTypeMap = {
      'house': '🏠 House',
      'office': '🏢 Office',
      'shop': '🏪 Shop'
    };

    const serviceTypeMap = {
      'emergency': '🚨 Emergency Service',
      'enquiry': '📋 Quotation (Enquiry)'
    };

    // Build Packers & Movers details
    let packersDetails = '';
    if (showPackersFields) {
      packersDetails = `
📦 *Packers & Movers Details:*
─────────────────
• Floor Number: ${formData.floorNumber || 'Not specified'}
• Lift Available: ${formData.liftAvailable || 'Not specified'}`;
    }

    // Build additional message
    let additionalMsg = '';
    if (formData.additionalMessage) {
      additionalMsg = `
📝 *Additional Message:*
─────────────────
${formData.additionalMessage}`;
    }

    let message = `📋 *NEW SERVICE ENQUIRY - GBOOMBA HOME SERVICES*
═══════════════════════════

📌 *WORK TYPE*
${serviceTypeMap[formData.serviceType] || 'Not specified'}

📌 *SERVICE CATEGORIES*
`;
    if (selectedCategories.length > 0) {
      selectedCategories.forEach((category, index) => {
        message += `  ${index + 1}. ${category}\n`;
      });
    } else {
      message += `Not selected\n`;
    }
    message += `\n`;
    
    if (selectedSubcategories.length > 0) {
      message += `📌 *SELECTED SERVICES*\n`;
      selectedSubcategories.forEach((service, index) => {
        message += `  ${index + 1}. ${service}\n`;
      });
      message += `\n`;
    }
    
    message += `👤 *CUSTOMER DETAILS*
─────────────────
👤 Name: ${formData.name || 'Not provided'}
📱 Mobile: ${formData.mobile || 'Not provided'}
📍 Address: ${formData.address || 'Not provided'}
📅 Date & Time: ${formatDate(formData.shiftingDate)}

📌 *RELOCATION TYPE*
${relocationTypeMap[formData.relocationType] || 'Not selected'}
`;
    
    if (formData.relocationType === 'house' && formData.homeBHK) {
      message += `
🏠 *House Details*
BHK: ${formData.homeBHK}
`;
    }
    
    if (formData.relocationType === 'office' && formData.officeSqft) {
      message += `
🏢 *Office Details*
Area: ${formData.officeSqft} sq.ft
`;
    }
    
    if (formData.relocationType === 'shop') {
      if (formData.shopType || formData.shopArea) {
        message += `\n🏪 *Shop Details*\n`;
        if (formData.shopType) {
          message += `Shop Type: ${formData.shopType}\n`;
        }
        if (formData.shopArea) {
          message += `Shop Area: ${formData.shopArea} sq.ft\n`;
        }
      }
    }
    
    // Add Packers & Movers details if selected
    if (showPackersFields) {
      message += packersDetails;
    }
    
    // Add additional message if provided
    if (formData.additionalMessage) {
      message += additionalMsg;
    }
    
    message += `
═══════════════════════════
📩 *GBOOMBA HOME SERVICES*
📞 Contact: 81 1100 2100
🌐 *Complete Home Solutions*
• Cleaning • Painting • Electrical & Plumbing
• AC Technician • Packers & Movers • Transport
• Carpentry Services
═══════════════════════════
_This is an automated enquiry from the website._`;
    
    return encodeURIComponent(message);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.shiftingDate) {
      newErrors.shiftingDate = 'Shifting date & time is required';
    }
    if (!formData.relocationType) {
      newErrors.relocationType = 'Please select a relocation type';
    }
    if (selectedCategories.length === 0) {
      newErrors.categories = 'Please select at least one service category';
    }
    if (selectedSubcategories.length === 0) {
      newErrors.subcategories = 'Please select at least one service';
    }
    
    // Validate Packers & Movers extra fields
    if (showPackersFields) {
      if (!formData.floorNumber) {
        newErrors.floorNumber = 'Please enter floor number';
      }
      if (!formData.liftAvailable) {
        newErrors.liftAvailable = 'Please select lift availability';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Generate WhatsApp message and open WhatsApp
    const whatsappMessage = generateWhatsAppMessage();
    const phoneNumber = '918111002100';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        shiftingDate: '',
        relocationType: '',
        homeBHK: '',
        officeSqft: '',
        shopType: '',
        shopArea: '',
        serviceType: 'enquiry',
        categories: [],
        subcategories: [],
        floorNumber: '',
        liftAvailable: '',
        additionalMessage: ''
      });
      setSelectedCategories([]);
      setSelectedSubcategories([]);
      setShowPackersFields(false);
      setExpandedCategories({});
    }, 5000);
  };

  const today = new Date().toISOString().slice(0, 16);

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Header with Gradient */}
          <div style={{ 
            background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
            padding: '24px 20px'
          }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm animate-bounce-slow">
                📋
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Customer Requirement Form</h1>
                <p className="text-white/80 text-sm mt-0.5">Fill in your details and we'll get back to you shortly</p>
              </div>
            </div>
          </div>

          {/* Emergency Service Banner */}
          <div className="px-5 py-3 border-b" style={{ backgroundColor: colors.tealLight }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl animate-pulse">🚨</span>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: colors.navy }}>EMERGENCY SERVICE</h3>
                  <p className="text-xs" style={{ color: colors.navy }}>Call our team for immediate assistance</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a 
                  href="tel:918111002100" 
                  className="text-white px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: colors.navy,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.teal;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.navy;
                  }}
                >
                  <FaPhoneAlt size={12} /> 81 1100 2100
                </a>
                <a 
                  href="https://wa.me/918111002100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 text-white px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:bg-green-700 hover:-translate-y-0.5"
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-5 py-6">
            {/* Work Type */}
            <div className="mb-5">
              <label className="block font-semibold text-gray-700 text-sm mb-2">
                Work Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label 
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.serviceType === 'emergency' 
                      ? 'border-teal bg-teal-light' 
                      : 'border-gray-200 hover:border-teal hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="serviceType"
                    value="emergency"
                    checked={formData.serviceType === 'emergency'}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 accent-teal"
                  />
                  <div>
                    <span className="font-medium text-sm">Emergency Service</span>
                    <p className="text-xs text-gray-500">Quick site visit within your enquiry</p>
                  </div>
                </label>
                <label 
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.serviceType === 'enquiry' 
                      ? 'border-teal bg-teal-light' 
                      : 'border-gray-200 hover:border-teal hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="serviceType"
                    value="enquiry"
                    checked={formData.serviceType === 'enquiry'}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 accent-teal"
                  />
                  <div>
                    <span className="font-medium text-sm">Quotation (Enquiry)</span>
                    <p className="text-xs text-gray-500">Our team will contact you</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Service Categories - Accordion Design */}
            <div className="mb-5">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Which Service Are You Looking For? <span className="text-red-500">*</span>
                <span className="block text-xs font-normal text-gray-400 mt-0.5">(Select one or more services)</span>
              </label>
              
              {/* Selected Categories Count */}
              {selectedCategories.length > 0 && (
                <div className="mb-2 p-2 rounded-lg" style={{ backgroundColor: colors.tealLight }}>
                  <p className="text-xs font-medium" style={{ color: colors.teal }}>
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
                <p className="text-red-500 text-xs mt-1 error-message">{errors.categories}</p>
              )}
            </div>

            {/* Packers & Movers Extra Fields */}
            {showPackersFields && (
              <div className="mb-5 p-4 rounded-lg border-2 border-orange-200 animate-fade-in-up" style={{ backgroundColor: '#fff7ed' }}>
                <div className="flex items-center gap-2 mb-3">
                  <FaTruck className="text-orange-600" size={18} />
                  <h4 className="text-sm font-bold text-orange-800">Packers & Movers Details</h4>
                  <span className="text-[10px] bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full">Required</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Floor Number */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      <FaBuilding className="inline mr-1" style={{ color: colors.teal }} size={12} />
                      Which Floor? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="floorNumber"
                      value={formData.floorNumber}
                      onChange={handleChange}
                      placeholder="e.g. Ground, 1st, 2nd, etc."
                      className={`w-full px-3 py-2.5 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-[1.01] ${
                        errors.floorNumber 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-teal/20 focus:border-teal'
                      }`}
                      style={{
                        borderColor: errors.floorNumber ? undefined : colors.teal + '40',
                      }}
                    />
                    {errors.floorNumber && (
                      <p className="text-red-500 text-xs mt-1 error-message">{errors.floorNumber}</p>
                    )}
                  </div>

                  {/* Lift Available */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      <FaBuilding className="inline mr-1" style={{ color: colors.teal }} size={12} />
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
                          className={`flex-1 px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
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
                      <p className="text-red-500 text-xs mt-1 error-message">{errors.liftAvailable}</p>
                    )}
                  </div>
                </div>

                <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                  <FaInfoCircle className="text-blue-500" size={12} />
                  <span>This information helps us assign the right moving team and equipment</span>
                </div>
              </div>
            )}

            {/* Selected Services Summary */}
            {selectedSubcategories.length > 0 && (
              <div className="mb-5 p-3 rounded-lg" style={{ backgroundColor: colors.tealLight }}>
                <p className="text-xs font-medium" style={{ color: colors.teal }}>
                  📌 Selected Services:
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {selectedSubcategories.map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs shadow-sm"
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
                  <p className="text-red-500 text-xs mt-1 error-message">{errors.subcategories}</p>
                )}
              </div>
            )}

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">
                  <FaUser className="inline mr-1" style={{ color: colors.teal }} size={12} />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-teal focus:border-teal'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 error-message">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">
                  <FaPhoneAlt className="inline mr-1" style={{ color: colors.teal }} size={12} />
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.mobile 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-teal focus:border-teal'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1 error-message">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium text-sm mb-1.5">
                <FaHome className="inline mr-1" style={{ color: colors.teal }} size={12} />
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="2"
                className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.address 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-teal focus:border-teal'
                }`}
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.address}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium text-sm mb-1.5">
                <FaCalendarAlt className="inline mr-1" style={{ color: colors.teal }} size={12} />
                Shifting Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="shiftingDate"
                value={formData.shiftingDate}
                onChange={handleChange}
                min={today}
                className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.shiftingDate 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-teal focus:border-teal'
                }`}
              />
              {errors.shiftingDate && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.shiftingDate}</p>
              )}
            </div>

            {/* Relocation Type */}
            <div className="mt-5">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Relocation Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label 
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.relocationType === 'house' 
                      ? 'border-teal bg-teal-light' 
                      : 'border-gray-200 hover:border-teal hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="relocationType"
                    value="house"
                    checked={formData.relocationType === 'house'}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 accent-teal"
                  />
                  <span className="text-sm">🏠 House</span>
                </label>
                <label 
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.relocationType === 'office' 
                      ? 'border-teal bg-teal-light' 
                      : 'border-gray-200 hover:border-teal hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="relocationType"
                    value="office"
                    checked={formData.relocationType === 'office'}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 accent-teal"
                  />
                  <span className="text-sm">🏢 Office</span>
                </label>
                <label 
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.relocationType === 'shop' 
                      ? 'border-teal bg-teal-light' 
                      : 'border-gray-200 hover:border-teal hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="relocationType"
                    value="shop"
                    checked={formData.relocationType === 'shop'}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 accent-teal"
                  />
                  <span className="text-sm">🏪 Shop</span>
                </label>
              </div>
              {errors.relocationType && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.relocationType}</p>
              )}
            </div>

            {/* Property Details */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">🏠 Home (BHK)</label>
                <input
                  type="text"
                  name="homeBHK"
                  value={formData.homeBHK}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="e.g., 2 BHK"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">🏢 Office (Sq.ft)</label>
                <input
                  type="text"
                  name="officeSqft"
                  value={formData.officeSqft}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="Enter office area"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">🏪 Shop Type</label>
                <input
                  type="text"
                  name="shopType"
                  value={formData.shopType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="e.g., Retail, Grocery"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">Shop Area (Sq.ft)</label>
                <input
                  type="text"
                  name="shopArea"
                  value={formData.shopArea}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="Enter shop area"
                />
              </div>
            </div>

            {/* Additional Message Box */}
            <div className="mt-5">
              <label className="block text-gray-700 font-medium text-sm mb-1.5">
                <FaRegSmile className="inline mr-1" style={{ color: colors.teal }} size={14} />
                Additional Message
                <span className="block text-xs font-normal text-gray-400 mt-0.5">Any special requirements or instructions</span>
              </label>
              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleChange}
                placeholder="e.g. Fragile items, specific timing, parking instructions, etc."
                rows="3"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
              }}
            >
              <span className="flex items-center justify-center gap-2 relative z-10">
                <FaWhatsapp size={16} />
                Submit & Send via WhatsApp
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>

            {/* Success Message */}
            {formSubmitted && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 text-sm">✓ Enquiry sent to WhatsApp!</p>
                    <p className="text-xs text-green-600">Our team will contact you shortly.</p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.tealLight }}>
                <FaEnvelope style={{ color: colors.teal }} size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: colors.navy }}>Email Us</h3>
                <a href="mailto:gboombappy@gmail.com" className="text-sm hover:underline transition-colors" style={{ color: colors.teal }}>
                  gboombappy@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.tealLight }}>
                <FaMapMarkerAlt style={{ color: colors.teal }} size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: colors.navy }}>Visit Us</h3>
                <p className="text-gray-600 text-xs">
                  23/17, Mutthu Vinayagar Kovil Street,<br />
                  Punjai Puliampatti, Erode - 638459
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        /* Scrollbar Styles */
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
        .max-h-64::-webkit-scrollbar,
        .max-h-48::-webkit-scrollbar {
          width: 4px;
        }
        .max-h-64::-webkit-scrollbar-track,
        .max-h-48::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .max-h-64::-webkit-scrollbar-thumb,
        .max-h-48::-webkit-scrollbar-thumb {
          background: #008080;
          border-radius: 4px;
        }
        .max-h-64::-webkit-scrollbar-thumb:hover,
        .max-h-48::-webkit-scrollbar-thumb:hover {
          background: #006666;
        }
      `}</style>
    </div>
  );
};

export default Enquiry;