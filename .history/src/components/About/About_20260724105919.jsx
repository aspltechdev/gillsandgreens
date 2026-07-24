import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Leaf, 
  Fish, 
  Droplets, 
  Users, 
  Quote, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ArrowUpRight 
} from "lucide-react";

import "./About.css";
import aboutImage from "../../assets/abthero.png";
import aboutBg from "../../assets/abt4.png";


// Import feature card images
import featureImg1 from "../../assets/abtorg.png";
import featureImg2 from "../../assets/abtfish.png";
import featureImg3 from "../../assets/abtwater.png";
import featureImg4 from "../../assets/abtfam.png";

const features = [
  {
    icon: <Leaf size={24} strokeWidth={1.5} />,
    title: "Organic Farming",
    description: "Pesticide-free leafy greens cultivated using sustainable aquaponics technology.",
    highlight: "100% Natural",
    image: featureImg1,
  },
  {
    icon: <Fish size={24} strokeWidth={1.5} />,
    title: "Chemical-Free Fish",
    description: "Naturally raised Tilapia and Koi fish in a closed-loop ecosystem.",
    highlight: "Antibiotic Free",
    image: featureImg2,
  },
  {
    icon: <Droplets size={24} strokeWidth={1.5} />,
    title: "90% Water Saving",
    description: "Recirculating water technology dramatically reduces water consumption.",
    highlight: "Eco-Friendly",
    image: featureImg3,
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Farmer Empowerment",
    description: "Helping local farmers adopt innovative and profitable farming methods.",
    highlight: "200+ Farmers",
    image: featureImg4,
  },
];

const stats = [
  { value: "50+", label: "Farm Partners" },
  { value: "1000+", label: "Kg Monthly Produce" },
  { value: "5", label: "Active Projects" },
];

const About = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const featuresRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });
  
  // Parallax effects for background
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 60]);
  
  // Content animations
  const imageScale = useTransform(smoothProgress, [0, 0.3, 0.7], [0.92, 1.02, 1]);
  const imageY = useTransform(smoothProgress, [0, 0.5], [50, 0]);
  const imageRotate = useTransform(smoothProgress, [0, 0.3], [2, 0]);
  const contentX = useTransform(smoothProgress, [0, 0.5], [40, 0]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [0.6, 1]);
  
  // Features stagger animation
  const featuresY = useTransform(featuresScrollProgress, [0, 0.3], [60, 0]);
  const featuresOpacity = useTransform(featuresScrollProgress, [0, 0.3], [0, 1]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.7,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  return (
    <section className="about" ref={sectionRef} id="about">
      {/* Background Image with Parallax */}
      <div className="about-bg-wrapper" ref={bgRef}>
        <motion.div 
          className="about-bg-image"
          style={{ scale: bgScale, y: bgY }}
        >
          <img
            src={aboutBg}
            alt=""
            loading="lazy"
          />
        </motion.div>
        
        <div className="about-bg-overlay-1" />
        <div className="about-bg-overlay-2" />
        <div className="about-bg-overlay-3" />
        
        <div className="about-bg-gradient-top" />
        <div className="about-bg-gradient-bottom" />
      </div>

     
      {/* <div className="about-bg-glow about-bg-glow-1" />
      <div className="about-bg-glow about-bg-glow-2" />
       */}
      {/* Floating particles */}
      <div className="about-particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="about-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <motion.div 
            className="about-header-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={14} />
            <span>About Gills & Greens</span>
          </motion.div>

          <h2 className="about-heading">
            Pioneering{" "}
            <span className="text-gradient-green">
              sustainable
            </span>
            <br />
            aquaponics in India
          </h2>

          <p className="about-heading-desc">
            We're transforming agriculture through innovative aquaponics 
            technology, creating a future where farming is sustainable, 
            profitable, and accessible to all.
          </p>
        </motion.div>

        {/* Main Content - Image + Vision/Mission */}
        <div className="about-main">
          {/* Image Column - Enlarged */}
          <motion.div
            className="about-image-wrapper"
            style={{ 
              scale: imageScale, 
              y: imageY,
              rotate: imageRotate
            }}
            variants={scaleInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
          >
            <div className="about-image-container">
              <img
                src={aboutImage}
                alt="Aquaponics farming at Gills & Greens"
                className="about-image"
                loading="lazy"
              />
              
              {/* <motion.div 
                className="about-image-stat"
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 0, 0, 1] }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
            
              </motion.div> */}

              <div className="about-image-gradient" />
            </div>

            <div className="about-image-frame" />
            
            {/* <div className="about-image-dots">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="about-image-dot" />
              ))}
            </div> */}
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="about-content"
            style={{ 
              x: contentX,
              opacity: contentOpacity
            }}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
          >
            {/* Quote */}
            <motion.div 
              className="about-quote"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
                transition: { duration: 0.2 }
              }}
            >
              <Quote size={28} className="quote-icon" />
              <p className="quote-text">
                Our mission is to build a scalable aquaponics ecosystem 
                that transforms sustainable farming and empowers 
                communities across hilly regions.
              </p>
              <div className="quote-author">
                <div className="quote-author-avatar">
                  <span>GG</span>
                </div>
                <div>
                  <span className="quote-author-name">Team Gills & Greens</span>
                  <span className="quote-author-role">Nilgiris, Tamil Nadu</span>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="about-cards">
              <motion.div
                className="about-card about-card-vision"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.35}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 20px 50px rgba(103, 180, 55, 0.12)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="about-card-header">
                  <div className="about-card-icon about-card-icon-vision">
                    <Sparkles size={18} />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To become India's leading aquaponics company, creating 
                  a blueprint for sustainable agriculture that can be 
                  replicated across the country.
                </p>
                <div className="about-card-accent vision-accent" />
              </motion.div>

              <motion.div
                className="about-card about-card-mission"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.45}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 20px 50px rgba(45, 143, 213, 0.12)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="about-card-header">
                  <div className="about-card-icon about-card-icon-mission">
                    <ArrowRight size={18} />
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p>
                  Produce chemical-free food while enabling farmers 
                  through innovation, partnerships, and accessible 
                  aquaponics technology.
                </p>
                <div className="about-card-accent mission-accent" />
              </motion.div>
            </div>

            {/* Stats Row */}
            <motion.div
              className="about-stats"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.55}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="about-stat"
                  whileHover={{ 
                    scale: 1.05,
                    background: "rgba(103, 180, 55, 0.05)"
                  }}
                >
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Learn More Link */}
            <motion.a
              href="#solution"
              className="about-learn-more"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.65}
              whileHover={{ x: 5 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Discover our approach</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Features Section - With Images & Overlay Text */}
      <div className="about-features-wrapper" ref={featuresRef}>
        <div className="about-features-container">
          <motion.div
            className="about-features"
            style={{ 
              y: featuresY, 
              opacity: featuresOpacity 
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="about-feature-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.1 + index * 0.1}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Image */}
                <div className="feature-card-image">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    loading="lazy"
                  />
                  <div className="feature-card-image-overlay" />
                </div>

                {/* Content Overlay */}
                <div className="feature-card-content">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                  <span className="feature-highlight">{feature.highlight}</span>
                </div>

                {/* Hover gradient line */}
                <div className="feature-card-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;