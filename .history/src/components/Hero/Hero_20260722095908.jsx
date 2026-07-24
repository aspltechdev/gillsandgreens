import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Fish, Droplets, Sprout, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";

import "./Hero.css";

// Import all images
import heroBg1 from "../../assets/h1.png";
import heroBg2 from "../../assets/abt4.png";
import heroBg3 from "../../assets/abt3.png";

// Background images array (synced with slider)
const backgroundImages = [heroBg1, heroBg2, heroBg3];

// Slider images with content
const sliderImages = [
  {
    id: 1,
    image: heroBg1,
    title: "Aquaponics Farm",
    subtitle: "Sustainable ecosystem",
    icon: <Fish size={20} />,
  },
  {
    id: 2,
    image: heroBg2,
    title: "Fresh Fish",
    subtitle: "Chemical-free produce",
    icon: <Droplets size={20} />,
  },
  {
    id: 3,
    image: heroBg3,
    title: "Organic Vegetables",
    subtitle: "Pesticide-free farming",
    icon: <Sprout size={20} />,
  },
];

const stats = [
  { 
    icon: <Droplets size={18} strokeWidth={1.5} />, 
    value: "90%", 
    label: "Less Water Usage",
  },
  { 
    icon: <Sprout size={18} strokeWidth={1.5} />, 
    value: "3x", 
    label: "Faster Growth",
  },
  { 
    icon: <Shield size={18} strokeWidth={1.5} />, 
    value: "100%", 
    label: "Chemical Free",
  },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });
  
  // Parallax effects
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 80]);
  const contentY = useTransform(smoothProgress, [0, 0.5], [0, 60]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 0.9, 0]);
  
  // Mouse parallax for slider
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const cardX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const cardY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-play slider
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  // Navigation functions
  const nextSlide = () => {
    setAutoPlay(false);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const goToSlide = (index) => {
    setAutoPlay(false);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  return (
    <section className="hero" ref={sectionRef}>
      {/* Background Image with Parallax - Synced with Slider */}
      <motion.div 
        className={`hero-bg slide-${currentSlide}`}
        style={{ scale: bgScale, y: bgY }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={backgroundImages[currentSlide]}
            alt="Sustainable aquaponics farm"
            loading="eager"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Overlay - Synced with Slide */}
      <div className={`hero-overlay slide-${currentSlide}`} />
      
      {/* Green accent */}
      <div className="hero-accent" />

      {/* Glow effects */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <motion.div 
        className="hero-container" 
        ref={containerRef}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="hero-grid">
          {/* Left Column - Content */}
          <div className="hero-content">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <div className="hero-badge">
                <Star size={14} fill="#22c55e" color="#22c55e" />
                <span>#1 Aquaponics Farm in Nilgiris</span>
              </div>
            </motion.div>

            <motion.h1
              className="hero-heading"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              Revolutionizing
              <br />
              Agriculture with
              <br />
              <span className="text-highlight">
                Aquaponics
                <svg className="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,6 Q100,12 200,6" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              Sustainable farming that combines fish and plants in a 
              self-sustaining ecosystem. Chemical-free, water-efficient, 
              and designed for the future of food production.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.55}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Explore Our Solution</span>
                <ArrowRight size={20} strokeWidth={2} />
                <span className="btn-shine" />
              </motion.button>
{/* 
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Fish size={18} strokeWidth={2} />
                <span>View Products</span>
              </motion.button> */}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="hero-stats-row"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.7}
            >
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat-item">
                  <div className="hero-stat-icon">{stat.icon}</div>
                  <div>
                    <span className="hero-stat-value">{stat.value}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image Slider */}
          <motion.div
            className="hero-slider-wrapper"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.5}
            style={{ x: cardX, y: cardY }}
          >
            <div className="slider-main">
              {/* Slide container */}
              <div className="slider-viewport">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="slider-slide"
                  >
                    <div className="slide-image-wrapper">
                      <img 
                        src={sliderImages[currentSlide].image} 
                        alt={sliderImages[currentSlide].title}
                        className="slide-image"
                      />
                      <div className="slide-image-overlay" />
                    </div>
                    
                    <div className="slide-content">
                      <div className="slide-icon">
                        {sliderImages[currentSlide].icon}
                      </div>
                      <div className="slide-text">
                        <h3 className="slide-title">{sliderImages[currentSlide].title}</h3>
                        <p className="slide-subtitle">{sliderImages[currentSlide].subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button 
                className="slider-arrow slider-arrow-left"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button 
                className="slider-arrow slider-arrow-right"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>

              {/* Dots Navigation */}
              <div className="slider-dots">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === currentSlide && (
                      <motion.div 
                        className="slider-dot-progress"
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="slider-progress-bar">
                <motion.div
                  className="slider-progress-fill"
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            </div>

            {/* Ecosystem badge */}
            <motion.div
              className="ecosystem-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="badge-flow">
                <Fish size={16} />
                <motion.span
                  className="flow-arrow"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
                <Sprout size={16} />
                <motion.span
                  className="flow-arrow"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  →
                </motion.span>
                <Droplets size={16} />
              </div>
              <span>Closed-Loop Ecosystem</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </motion.div>
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;