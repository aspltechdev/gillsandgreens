
// import { useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Mountain,
//   IndianRupee,
//   TrendingDown,
//   Sprout,
//   AlertTriangle,
//   ArrowRight,
//   Zap,
//   ChevronDown,
// } from "lucide-react";

// import "./Problem.css";
// import problemBg from "../../assets/prob.png";

// const problems = [
//   {
//     icon: <Mountain size={22} strokeWidth={1.5} />,
//     title: "Limited Hill Farming",
//     description: "Difficult terrain restricts modern farming in hilly regions.",
//     stat: "65%",
//     statLabel: "Uncultivable",
//     delay: 0.1,
//   },
//   {
//     icon: <IndianRupee size={22} strokeWidth={1.5} />,
//     title: "High Farming Costs",
//     description: "Rising costs reduce farmer profitability significantly.",
//     stat: "40%",
//     statLabel: "Cost Increase",
//     delay: 0.2,
//   },
//   {
//     icon: <TrendingDown size={22} strokeWidth={1.5} />,
//     title: "Weak Market Access",
//     description: "Farmers struggle with unstable pricing and middlemen.",
//     stat: "3x",
//     statLabel: "Price Variation",
//     delay: 0.3,
//   },
//   {
//     icon: <Sprout size={22} strokeWidth={1.5} />,
//     title: "Low Tech Adoption",
//     description: "Limited awareness prevents sustainable tech adoption.",
//     stat: "15%",
//     statLabel: "Tech Adoption",
//     delay: 0.4,
//   },
//   {
//     icon: <AlertTriangle size={22} strokeWidth={1.5} />,
//     title: "Environmental Damage",
//     description: "Chemical farming degrades soil and contaminates water.",
//     stat: "70%",
//     statLabel: "Soil Degraded",
//     delay: 0.5,
//   },
// ];

// const Problem = () => {
//   const sectionRef = useRef(null);
//   const bgRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });
  
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });
  
//   // Parallax effects
//   const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
//   const bgY = useTransform(smoothProgress, [0, 1], [0, 40]);
  
//   // Content animations
//   const headerY = useTransform(smoothProgress, [0, 0.4], [50, 0]);
//   const headerOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
//   const cardsY = useTransform(smoothProgress, [0.1, 0.5], [60, 0]);
//   const cardsOpacity = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);
  
//   // Floating particles
//   const particles = Array.from({ length: 12 }, (_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     size: Math.random() * 4 + 2,
//     duration: Math.random() * 6 + 5,
//     delay: Math.random() * 3,
//   }));

//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.8,
//         ease: [0.22, 0, 0, 1]
//       }
//     })
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         delay,
//         duration: 0.7,
//         ease: [0.22, 0, 0, 1]
//       }
//     })
//   };

//   return (
//     <section className="problem" ref={sectionRef} id="problem">
//       {/* Background with Parallax */}
//       <div className="problem-bg-wrapper" ref={bgRef}>
//         <motion.div 
//           className="problem-bg-image"
//           // style={{ scale: bgScale, y: bgY }}
//         >
//           <img src={problemBg} alt="" loading="lazy" />
//         </motion.div>
        
     
  
//       </div>

//       {/* Brand glow effects */}
//       <div className="problem-glow problem-glow-1" />
//       <div className="problem-glow problem-glow-2" />

//       {/* Floating particles */}
//       <div className="problem-particles">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="problem-particle"
//             style={{
//               left: particle.left,
//               top: particle.top,
//               width: particle.size,
//               height: particle.size,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.random() * 15 - 7.5, 0],
//               opacity: [0.15, 0.4, 0.15],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               delay: particle.delay,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="problem-container">
//         {/* Section Header */}
//         <motion.div
//           className="problem-header"
//           style={{ y: headerY, opacity: headerOpacity }}
//         >
//           <motion.div 
//             className="problem-header-badge"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Zap size={14} />
//             <span>The Challenge</span>
//           </motion.div>

//           <h2 className="problem-heading">
//             Farming is facing{" "}
//             <span className="text-gradient-brand">challenges.</span>
//             <br />
//             We have the solution.
//           </h2>

//           <p className="problem-heading-desc">
//             Rising costs, water shortages, and environmental damage 
//             demand a smarter, more sustainable approach to agriculture.
//           </p>

//           {/* Stats Row */}
//           <div className="problem-stats-row">
//             <motion.div 
//               className="problem-stat-item"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="problem-stat-value">₹6L+</span>
//               <span className="problem-stat-label">Average Farmer Debt</span>
//             </motion.div>
//             <div className="problem-stat-divider" />
//             <motion.div 
//               className="problem-stat-item"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="problem-stat-value">80%</span>
//               <span className="problem-stat-label">Water Wasted</span>
//             </motion.div>
//             <div className="problem-stat-divider" />
//             <motion.div 
//               className="problem-stat-item"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="problem-stat-value">30%</span>
//               <span className="problem-stat-label">Crop Loss</span>
//             </motion.div>
//           </div>

//           <motion.button
//             className="problem-cta-btn"
//             whileHover={{ scale: 1.03, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => {
//               document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
//             }}
//           >
//             <span>Discover Our Solution</span>
//             <ArrowRight size={18} strokeWidth={2} />
//           </motion.button>
//         </motion.div>

//         {/* Problem Cards Grid */}
//         <motion.div
//           className="problem-grid"
//           style={{ y: cardsY, opacity: cardsOpacity }}
//         >
//           {problems.map((item, index) => (
//             <motion.div
//               key={index}
//               className="problem-card"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               custom={item.delay}
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//               whileHover={{ 
//                 y: -6,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <div className="problem-card-inner">
//                 {/* Icon */}
//                 <motion.div 
//                   className="problem-card-icon"
//                   animate={{
//                     boxShadow: hoveredCard === index 
//                       ? '0 8px 25px rgba(103, 180, 55, 0.2)' 
//                       : '0 2px 8px rgba(0,0,0,0.04)'
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <div className="problem-card-content">
//                   <h3 className="problem-card-title">{item.title}</h3>
//                   <p className="problem-card-desc">{item.description}</p>
//                 </div>

//                 {/* Stat */}
//                 <motion.div 
//                   className="problem-card-stat"
//                   animate={{
//                     scale: hoveredCard === index ? 1.1 : 1
//                   }}
//                 >
//                   <span className="problem-card-stat-value">{item.stat}</span>
//                   <span className="problem-card-stat-label">{item.statLabel}</span>
//                 </motion.div>
//               </div>
              
//               {/* Bottom indicator */}
//               <motion.div 
//                 className="problem-card-indicator"
//                 animate={{
//                   scaleX: hoveredCard === index ? 1 : 0
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Problem;


import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mountain,
  IndianRupee,
  TrendingDown,
  Sprout,
  AlertTriangle,
  ArrowRight,
  Zap,
} from "lucide-react";

import "./Problem.css";
import problemBg from "../../assets/prob.png";

const problems = [
  {
    icon: <Mountain size={22} strokeWidth={1.5} />,
    title: "Limited Hill Farming",
    description: "Difficult terrain restricts modern farming in hilly regions.",
    stat: "65%",
    statLabel: "Uncultivable",
  },
  {
    icon: <IndianRupee size={22} strokeWidth={1.5} />,
    title: "High Farming Costs",
    description: "Rising costs reduce farmer profitability significantly.",
    stat: "40%",
    statLabel: "Cost Increase",
  },
  {
    icon: <TrendingDown size={22} strokeWidth={1.5} />,
    title: "Weak Market Access",
    description: "Farmers struggle with unstable pricing and middlemen.",
    stat: "3x",
    statLabel: "Price Variation",
  },
  {
    icon: <Sprout size={22} strokeWidth={1.5} />,
    title: "Low Tech Adoption",
    description: "Limited awareness prevents sustainable tech adoption.",
    stat: "15%",
    statLabel: "Tech Adoption",
  },
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Environmental Damage",
    description: "Chemical farming degrades soil and contaminates water.",
    stat: "70%",
    statLabel: "Soil Degraded",
  },
];

const Problem = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 0.5,
  });
  
  // Simplified parallax - only background moves
  const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);

  return (
    <section className="problem" ref={sectionRef} id="problem">
      {/* Background with Parallax */}
      <div className="problem-bg-wrapper">
        <motion.div 
          className="problem-bg-image"
          style={{ y: bgY }}
        >
          <img src={problemBg} alt="" loading="lazy" />
        </motion.div>
        
        {/* Dark overlay */}
        <div className="problem-bg-overlay" />
      </div>

      {/* Minimal glow effects */}
      <div className="problem-glow problem-glow-1" />
      <div className="problem-glow problem-glow-2" />

      <div className="problem-container">
        {/* Section Header */}
        <motion.div
          className="problem-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 0, 0, 1] }}
        >
          <div className="problem-header-badge">
            <Zap size={14} />
            <span>The Challenge</span>
          </div>

          <h2 className="problem-heading">
            Farming is facing{" "}
            <span className="text-gradient-brand">challenges.</span>
            <br />
            We have the solution.
          </h2>

          <p className="problem-heading-desc">
            Rising costs, water shortages, and environmental damage 
            demand a smarter, more sustainable approach to agriculture.
          </p>

          {/* Stats Row */}
          <div className="problem-stats-row">
            <div className="problem-stat-item">
              <span className="problem-stat-value">₹6L+</span>
              <span className="problem-stat-label">Average Farmer Debt</span>
            </div>
            <div className="problem-stat-divider" />
            <div className="problem-stat-item">
              <span className="problem-stat-value">80%</span>
              <span className="problem-stat-label">Water Wasted</span>
            </div>
            <div className="problem-stat-divider" />
            <div className="problem-stat-item">
              <span className="problem-stat-value">30%</span>
              <span className="problem-stat-label">Crop Loss</span>
            </div>
          </div>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="problem-grid">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.5,
                ease: [0.22, 0, 0, 1]
              }}
            >
              <div className="problem-card-inner">
                <div className="problem-card-icon">
                  {item.icon}
                </div>

                <div className="problem-card-content">
                  <h3 className="problem-card-title">{item.title}</h3>
                  <p className="problem-card-desc">{item.description}</p>
                </div>

                <div className="problem-card-stat">
                  <span className="problem-card-stat-value">{item.stat}</span>
                  <span className="problem-card-stat-label">{item.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="problem-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button
            className="problem-cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Discover Our Solution</span>
            <ArrowRight size={18} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;