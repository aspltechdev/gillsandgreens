// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   ShieldCheck,
//   Fish,
//   Mountain,
//   Users,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Star,
//   Zap,
// } from "lucide-react";

// import "./USP.css";
// import uspBg from "../../assets/abt1.png"; // Add your background image

// const uspData = [
//   {
//     icon: <ShieldCheck size={24} strokeWidth={1.5} />,
//     title: "Chemical-Free",
//     description: "Fresh vegetables and naturally raised fish without pesticides or chemicals.",
//     metric: "100%",
//     metricLabel: "Organic",
//     color: "#22c55e",
//   },
//   {
//     icon: <TrendingUp size={24} strokeWidth={1.5} />,
//     title: "Dual Revenue",
//     description: "Generate income from premium fish and organic greens in one ecosystem.",
//     metric: "2x",
//     metricLabel: "Revenue",
//     color: "#3b82f6",
//   },
//   {
//     icon: <Zap size={24} strokeWidth={1.5} />,
//     title: "First Mover",
//     description: "Pioneering commercial aquaponics in the Nilgiris with scalable solutions.",
//     metric: "#1",
//     metricLabel: "In Region",
//     color: "#f59e0b",
//   },
//   {
//     icon: <Users size={24} strokeWidth={1.5} />,
//     title: "Farmer First",
//     description: "Training, technology, and market support for local farming communities.",
//     metric: "50+",
//     metricLabel: "Partners",
//     color: "#8b5cf6",
//   },
// ];

// const advantages = [
//   { icon: <Star size={16} />, text: "Sustainable ecosystem" },
//   { icon: <Star size={16} />, text: "Zero chemical runoff" },
//   { icon: <Star size={16} />, text: "Year-round production" },
//   { icon: <Star size={16} />, text: "Scalable model" },
// ];

// const USP = () => {
//   const sectionRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });
  
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });
  
//   const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);
//   const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);

//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.6,
//         ease: [0.22, 0, 0, 1]
//       }
//     })
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         delay,
//         duration: 0.5,
//         ease: [0.22, 0, 0, 1]
//       }
//     })
//   };

//   return (
//     <section className="usp" ref={sectionRef}>
//       {/* Background */}
//       <div className="usp-bg-wrapper">
//         <motion.div 
//           className="usp-bg-image"
//           style={{ scale: bgScale, y: bgY }}
//         >
//           <img src={uspBg} alt="" loading="lazy" />
//         </motion.div>
//         <div className="usp-bg-overlay" />
//       </div>

//       <div className="usp-glow" />

//       <div className="usp-container">
//         <div className="usp-layout">
//           {/* Left - Header */}
//           <motion.div
//             className="usp-header"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0}
//           >
//             <div className="usp-badge">
//               <Sparkles size={14} />
//               <span>Why Choose Us</span>
//             </div>

//             <h2 className="usp-heading">
//               Our{" "}
//               <span className="text-gradient">competitive</span>
//               <br />
//               advantage
//             </h2>

//             <p className="usp-desc">
//               Gills & Greens combines sustainable farming, innovative 
//               aquaponics, and farmer empowerment into one scalable 
//               ecosystem that benefits everyone.
//             </p>

//             {/* Advantages list */}
//             <div className="usp-advantages">
//               {advantages.map((item, index) => (
//                 <div key={index} className="usp-advantage-item">
//                   <div className="advantage-icon">
//                     {item.icon}
//                   </div>
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>

//             <motion.button
//               className="usp-cta"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               <span>Partner with us</span>
//               <ArrowRight size={16} strokeWidth={2} />
//             </motion.button>
//           </motion.div>

//           {/* Right - Cards */}
//           <motion.div
//             className="usp-grid"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0.2}
//           >
//             {uspData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="usp-card"
//                 variants={cardVariants}
//                 custom={0.3 + index * 0.1}
//                 whileHover={{ 
//                   y: -4,
//                   borderColor: `${item.color}40`,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <div className="usp-card-top">
//                   <div 
//                     className="usp-card-icon"
//                     style={{ 
//                       backgroundColor: `${item.color}12`,
//                       color: item.color 
//                     }}
//                   >
//                     {item.icon}
//                   </div>
//                   <div className="usp-card-metric" style={{ color: item.color }}>
//                     <span className="metric-value">{item.metric}</span>
//                     <span className="metric-label">{item.metricLabel}</span>
//                   </div>
//                 </div>

//                 <h3 className="usp-card-title">{item.title}</h3>
//                 <p className="usp-card-desc">{item.description}</p>

//                 <div 
//                   className="usp-card-indicator"
//                   style={{ background: item.color }}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default USP;

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

import "./USP.css";
import uspBg from "../../assets/uspbg1.png";

// Import card images
import cardImg1 from "../../assets/usp1.png";
import cardImg2 from "../../assets/usp2.png";
import cardImg3 from "../../assets/usp3.png";
import cardImg4 from "../../assets/uspfam.png";

const uspData = [
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: "Chemical-Free",
    description: "Fresh vegetables and naturally raised fish without pesticides or chemicals.",
    metric: "100% Organic",
    image: cardImg1,
  },
  {
    icon: <TrendingUp size={20} strokeWidth={1.5} />,
    title: "Dual Revenue",
    description: "Generate income from premium fish and organic greens in one ecosystem.",
    metric: "2x Revenue",
    image: cardImg2,
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: "First Mover",
    description: "Pioneering commercial aquaponics in the Nilgiris with scalable solutions.",
    metric: "#1 in Region",
    image: cardImg3,
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Farmer First",
    description: "Training, technology, and market support for local farming communities.",
    metric: "50+ Partners",
    image: cardImg4,
  },
];

const advantages = [
  { icon: <Star size={14} />, text: "Sustainable ecosystem" },
  { icon: <Star size={14} />, text: "Zero chemical runoff" },
  { icon: <Star size={14} />, text: "Year-round production" },
  { icon: <Star size={14} />, text: "Scalable model" },
];

const USP = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
  });
  
  const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: [0.22, 0, 0, 1] }
    })
  };

  return (
    <section className="usp" ref={sectionRef} id="usp">
      {/* Background */}
      <div className="usp-bg-wrapper">
        <motion.div 
          className="usp-bg-image"
          style={{ y: bgY }}
        >
          <img src={uspBg} alt="" loading="lazy" />
        </motion.div>
        <div className="usp-bg-overlay" />
      </div>

      <div className="usp-container">
        {/* Section Header */}
        <motion.div
          className="usp-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
        >
          <div className="usp-badge">
            <Sparkles size={14} />
            <span>Why Choose Us</span>
          </div>

          <h2 className="usp-heading">
            Our{" "}
            <span className="text-gradient">competitive</span>
            <br />
            advantage
          </h2>

          <p className="usp-desc">
            Gills & Greens combines sustainable farming, innovative 
            aquaponics, and farmer empowerment into one scalable 
            ecosystem that benefits everyone.
          </p>
        </motion.div>

        {/* Image Cards Grid */}
        <div className="usp-grid">
          {uspData.map((item, index) => (
            <motion.div
              key={index}
              className="usp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 0, 0, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Card Background Image */}
              <div className="usp-card-bg">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              {/* Dark Overlay */}
              <div className="usp-card-overlay" />

              {/* Content Overlay */}
              <div className="usp-card-content">
                <div className="usp-card-icon">
                  {item.icon}
                </div>
                
                <span className="usp-card-metric">{item.metric}</span>
                
                <h3 className="usp-card-title">{item.title}</h3>
                <p className="usp-card-desc">{item.description}</p>
              </div>

              {/* Hover Accent Line */}
              <div className="usp-card-line" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="usp-bottom"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          custom={0.5}
        >
          {/* Advantages */}
          <div className="usp-advantages">
            {advantages.map((item, index) => (
              <div key={index} className="usp-advantage-item">
                <div className="advantage-icon">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <motion.button
            className="usp-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Partner with us</span>
            <ArrowRight size={16} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;