import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

const Enquiry = () => {
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
    serviceType: 'enquiry'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Logo Colors
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    console.log('Form submitted:', formData);
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
        serviceType: 'enquiry'
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header with Gradient */}
          <div style={{ 
            background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
            padding: '32px 24px'
          }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
                📋
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Customer Requirement Form</h1>
                <p className="text-white/80 mt-1">Fill in your details and we'll get back to you shortly</p>
              </div>
            </div>
          </div>

          {/* Emergency Service Banner */}
          <div className="px-6 py-4 border-b" style={{ backgroundColor: colors.tealLight }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚨</span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.navy }}>EMERGENCY SERVICE</h3>
                  <p className="text-sm" style={{ color: colors.navy }}>Call our team for immediate assistance</p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="tel:918111002100" 
                  className="text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.navy,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.teal;
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.navy;
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <FaPhone /> 81 1100 2100
                </a>
                <a 
                  href="https://wa.me/918111002100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-green-700 hover:-translate-y-0.5"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-8">
            {/* Work Type */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                Work Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
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
                    className="mr-3 w-4 h-4 accent-teal"
                  />
                  <div>
                    <span className="font-medium">Emergency Service</span>
                    <p className="text-sm text-gray-500">Quick site visit within your enquiry submitting</p>
                  </div>
                </label>
                <label 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
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
                    className="mr-3 w-4 h-4 accent-teal"
                  />
                  <div>
                    <span className="font-medium">Quotation (Enquiry)</span>
                    <p className="text-sm text-gray-500">Our team will contact you</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-teal focus:border-teal'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 error-message">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.mobile 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-teal focus:border-teal'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1 error-message">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.address 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-teal focus:border-teal'
                }`}
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 error-message">{errors.address}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-2">
                Shifting Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="shiftingDate"
                value={formData.shiftingDate}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.shiftingDate 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-teal focus:border-teal'
                }`}
              />
              {errors.shiftingDate && (
                <p className="text-red-500 text-sm mt-1 error-message">{errors.shiftingDate}</p>
              )}
            </div>

            {/* Relocation Type */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Relocation Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
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
                    className="mr-3 w-4 h-4 accent-teal"
                  />
                  🏠 Old House to New House
                </label>
                <label 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
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
                    className="mr-3 w-4 h-4 accent-teal"
                  />
                  🏢 Office Relocation
                </label>
                <label 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
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
                    className="mr-3 w-4 h-4 accent-teal"
                  />
                  🏪 Shop Relocation
                </label>
              </div>
              {errors.relocationType && (
                <p className="text-red-500 text-sm mt-1 error-message">{errors.relocationType}</p>
              )}
            </div>

            {/* Property Details */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Home (BHK)</label>
                <input
                  type="text"
                  name="homeBHK"
                  value={formData.homeBHK}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="e.g., 2 BHK"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Office (Sq.ft)</label>
                <input
                  type="text"
                  name="officeSqft"
                  value={formData.officeSqft}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="Enter office area in sq.ft"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Shop Type</label>
                <input
                  type="text"
                  name="shopType"
                  value={formData.shopType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="e.g., Retail, Grocery"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Shop Area (Sq.ft)</label>
                <input
                  type="text"
                  name="shopArea"
                  value={formData.shopArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-200"
                  placeholder="Enter shop area in sq.ft"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-full text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,128,128,0.3)';
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
              <div className="mt-4 p-4 rounded-lg text-center animate-fadeIn">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCheck className="text-green-600 text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-green-700">✓ Enquiry submitted successfully!</p>
                    <p className="text-sm text-green-600">Our team will contact you shortly.</p>
                  </div>
                </div>
              </div>
            )}

            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(-10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                  animation: fadeIn 0.5s ease-out;
                }
              `}
            </style>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: colors.tealLight }}>
                <FaEnvelope style={{ color: colors.teal }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: colors.navy }}>Email Us</h3>
                <a href="mailto:gboombappy@gmail.com" className="hover:underline transition-colors" style={{ color: colors.teal }}>
                  gboombappy@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: colors.tealLight }}>
                <FaMapMarkerAlt style={{ color: colors.teal }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: colors.navy }}>Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  23/17, Mutthu Vinayagar Kovil Street,<br />
                  Punjai Puliampatti, Erode District - 638459
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Enquiry;