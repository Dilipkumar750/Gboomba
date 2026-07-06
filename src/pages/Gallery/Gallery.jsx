import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages, FaCamera, FaExpand, FaAward, FaUser, FaUsers, FaThumbsUp, FaCalendarCheck } from 'react-icons/fa';

import image1 from "../../assets/tape.avif";
import image2 from "../../assets/pack2.jpg";
import image3 from "../../assets/pack3.jpg";
import image4 from "../../assets/collage.png";
import image5 from "../../assets/pack5.jpg";
import image6 from "../../assets/pack6.jpg";
import image7 from "../../assets/tape2.jpg";
import image8 from "../../assets/pack10.jpg";
import image9 from "../../assets/pack7.jpeg";
import image10 from "../../assets/pack8.jpeg";
import image11 from "../../assets/pack9.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // All gallery images with varying sizes
  const galleryImages = [
    { id: 1, src: image1, size: 'large' },
    { id: 2, src: image2, size: 'medium' },
    { id: 3, src: image3, size: 'small' },
    { id: 4, src: image4, size: 'large' },
    { id: 5, src: image5, size: 'medium' },
    { id: 6, src: image6, size: 'small' },
    { id: 7, src: image7, size: 'medium' },
    { id: 8, src: image8, size: 'large' },
    { id: 9, src: image9, size: 'small' },
    { id: 10, src: image10, size: 'medium' },
    { id: 11, src: image11, size: 'small' },
  ];

  // Colors matching the brand
  const colors = {
    navy: '#1a2a4a',
    navyDark: '#0f1a33',
    teal: '#008080',
    tealDark: '#006666',
    tealLight: '#e6f7f7',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  // Stats
  const stats = [
    { number: '4+', label: 'Years Experience', icon: FaAward },
    { number: '20+', label: 'Team Members', icon: FaUsers },
    { number: '500+', label: 'Happy Customers', icon: FaThumbsUp },
    { number: '100%', label: 'Satisfaction Rate', icon: FaCalendarCheck }
  ];

  // Open lightbox with selected image
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage(e);
        if (e.key === 'ArrowRight') nextImage(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Get size classes for masonry grid
  const getSizeClass = (size) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightGray }}>
      {/* Hero Section with Animations */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.navy} 100%)`,
          animation: 'gradientPulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 transition-all duration-1000 transform ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12"
                style={{
                  background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
                  boxShadow: '0 4px 12px rgba(0,128,128,0.3)'
                }}
              >
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-white">
                  <span style={{ color: colors.teal }}>GBOOMBA</span>
                </h1>
                <p className="text-[10px] font-medium text-white/70 tracking-wider">COMPLETE HOME SERVICES</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 animate-pulse-slow" style={{ backgroundColor: colors.teal + '33' }}>
              <FaImages className="text-white" size={12} />
              <span className="text-[10px] font-medium text-white tracking-wider">OUR GALLERY</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight animate-fade-in-up">
              Our <span style={{ color: colors.teal }}>Work Gallery</span>
            </h2>
            <p className="text-white/70 text-xs max-w-2xl mx-auto animate-fade-in-up-delayed">
              Explore our portfolio of completed projects and see the quality of our work
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 30" className="w-full">
            <path fill={colors.lightGray} d="M0,20L80,18C160,16,320,12,480,14C640,16,800,24,960,22C1120,20,1280,8,1360,6L1440,4L1440,30L1360,30C1280,30,1120,30,960,30C800,30,640,30,480,30C320,30,160,30,80,30L0,30Z"></path>
          </svg>
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

      {/* Gallery Grid Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry Grid with varying sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up ${getSizeClass(image.size)}`}
                style={{
                  gridRow: image.size === 'large' ? 'span 2' : 'span 1',
                  gridColumn: image.size === 'large' ? 'span 2' : 'span 1',
                  animationDelay: `${index * 80 + 300}ms`
                }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center justify-end">
                      <FaExpand className="text-white/80" size={16} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <FaCamera className="text-white" size={14} />
                </div>
                {/* Image number overlay */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-[8px] font-medium">{index + 1}/{galleryImages.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Animations */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-all duration-300 z-10 hover:rotate-90 transform hover:scale-110"
          >
            <FaTimes size={30} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm animate-fade-in-up">
            <span className="font-bold" style={{ color: colors.teal }}>{currentIndex + 1}</span>
            <span className="text-white/50"> / {galleryImages.length}</span>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white transition-all duration-300 z-10 bg-black/30 hover:bg-black/50 rounded-full p-3 hover:scale-110 transform hover:shadow-lg"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white transition-all duration-300 z-10 bg-black/30 hover:bg-black/50 rounded-full p-3 hover:scale-110 transform hover:shadow-lg"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Main Image */}
          <img
            src={selectedImage.src}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4 py-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'ring-2 ring-teal-500 scale-110 shadow-lg' 
                    : 'opacity-40 hover:opacity-100 hover:scale-105'
                }`}
                style={{
                  ringColor: idx === currentIndex ? colors.teal : 'transparent'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                  setSelectedImage(galleryImages[idx]);
                }}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;