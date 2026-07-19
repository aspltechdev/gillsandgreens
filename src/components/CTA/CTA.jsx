// import { motion } from "framer-motion";
// import { ArrowRight, Phone, Mail } from "lucide-react";

// import "./CTA.css";

// const CTA = () => {
//   return (
//     <section className="cta">

//       <div className="cta-overlay"></div>

//       <div className="container">

//         <motion.div
//           className="cta-content"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >

//           <span className="cta-tag">
//             Join The Green Revolution
//           </span>

//           <h2>
//             Let's Build The Future Of
//             <br />
//             Sustainable Farming Together
//           </h2>

//           <p>
//             Whether you're a farmer, investor, retailer, or sustainability
//             partner, Gills & Greens welcomes you to be part of a healthier,
//             greener future powered by innovative aquaponics.
//           </p>

//           <div className="cta-buttons">

//             <button className="btn-primary">
//               Become a Partner
//               <ArrowRight size={18} />
//             </button>

//             <button className="btn-secondary">
//               Contact Us
//             </button>

//           </div>

//           <div className="cta-contact">

//             <div className="contact-item">
//               <Phone size={18} />
//               <span>+91 97175 94510</span>
//             </div>

//             <div className="contact-item">
//               <Mail size={18} />
//               <span>gillsandgreensbluehills@gmail.com</span>
//             </div>

//           </div>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default CTA;



import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Phone, Mail, Sparkles, Users, Handshake, Leaf } from "lucide-react";

import "./CTA.css";
import ctaBg from "../../assets/abt3.png"; // Add your CTA background image

const CTA = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });
  
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(smoothProgress, [0, 0.5], [60, 0]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <section className="cta" ref={sectionRef} id="cta">
      {/* Background Image with Parallax */}
      <div className="cta-bg-wrapper">
        <motion.div 
          className="cta-bg-image"
          style={{ scale: bgScale }}
        >
          <img src={ctaBg} alt="" loading="lazy" />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="cta-overlay" />
        
        {/* Brand Glow */}
        <div className="cta-glow cta-glow-1" />
        <div className="cta-glow cta-glow-2" />
      </div>

      {/* Floating Particles */}
      <div className="cta-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="cta-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative leaves */}
      <div className="cta-decorative">
        <motion.div 
          className="cta-leaf cta-leaf-left"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf size={120} />
        </motion.div>
        <motion.div 
          className="cta-leaf cta-leaf-right"
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Leaf size={100} />
        </motion.div>
      </div>

      <div className="cta-container">
        <motion.div
          className="cta-content"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {/* Top Badge */}
          <motion.div 
            className="cta-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={14} />
            <span>Join The Green Revolution</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's build the{" "}
            <span className="cta-heading-highlight">future</span>
            <br />
            of sustainable farming
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="cta-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Whether you're a farmer, investor, retailer, or sustainability
            partner, Gills & Greens welcomes you to be part of a healthier,
            greener future powered by innovative aquaponics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="cta-btn-primary"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Become a Partner</span>
              <ArrowRight size={18} strokeWidth={2} />
              <span className="btn-shine" />
            </motion.button>

            <motion.button
              className="cta-btn-secondary"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Contact Us</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          {/* <motion.div 
            className="cta-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <motion.a 
              href="tel:+919717594510" 
              className="cta-contact-item"
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="contact-icon-wrapper">
                <Phone size={16} />
              </div>
              <span>+91 97175 94510</span>
            </motion.a>

            <motion.a 
              href="mailto:gillsandgreensbluehills@gmail.com" 
              className="cta-contact-item"
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="contact-icon-wrapper">
                <Mail size={16} />
              </div>
              <span>gillsandgreensbluehills@gmail.com</span>
            </motion.a>
          </motion.div> */}

          {/* Trust Indicators */}
          <motion.div 
            className="cta-trust"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="trust-item">
              <Users size={16} />
              <span>50+ Farm Partners</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <Handshake size={16} />
              <span>Trusted by 200+ Customers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default CTA;