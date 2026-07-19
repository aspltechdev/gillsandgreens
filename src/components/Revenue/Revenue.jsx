// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Fish,
//   Building2,
//   Recycle,
//   Users,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   DollarSign,
//   BarChart3,
// } from "lucide-react";

// import "./Revenue.css";
// import revenueBg from "../../assets/hero2.png"; // Add your background image

// const revenueData = [
//   {
//     icon: <Fish size={22} strokeWidth={1.5} />,
//     title: "Dual Revenue",
//     description: "Premium fish and pesticide-free greens create recurring income streams year-round.",
//     metric: "2x",
//     metricLabel: "Revenue Sources",
//     color: "#22c55e",
//   },
//   {
//     icon: <Building2 size={22} strokeWidth={1.5} />,
//     title: "B2B Supply",
//     description: "Long-term contracts with retailers, hotels, and institutions ensure stable demand.",
//     metric: "100%",
//     metricLabel: "Sold Rate",
//     color: "#3b82f6",
//   },
//   {
//     icon: <Recycle size={22} strokeWidth={1.5} />,
//     title: "Value Addition",
//     description: "Organic vermicompost from fish waste creates an additional sustainable income stream.",
//     metric: "3x",
//     metricLabel: "Revenue Paths",
//     color: "#f59e0b",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Partner Model",
//     description: "Scale rapidly through farmer partnerships with shared growth and minimal capital.",
//     metric: "50+",
//     metricLabel: "Partners",
//     color: "#8b5cf6",
//   },
// ];

// const stats = [
//   { icon: <DollarSign size={18} />, value: "₹50L+", label: "Projected Annual Revenue" },
//   { icon: <TrendingUp size={18} />, value: "40%", label: "Profit Margin" },
//   { icon: <BarChart3 size={18} />, value: "3x", label: "Growth Potential" },
// ];

// const Revenue = () => {
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
//     <section className="revenue" ref={sectionRef}>
//       {/* Background */}
//       <div className="revenue-bg-wrapper">
//         <motion.div 
//           className="revenue-bg-image"
//           style={{ scale: bgScale, y: bgY }}
//         >
//           <img src={revenueBg} alt="" loading="lazy" />
//         </motion.div>
//         <div className="revenue-bg-overlay" />
//       </div>

//       <div className="revenue-glow revenue-glow-1" />
//       <div className="revenue-glow revenue-glow-2" />

//       <div className="revenue-container">
//         <div className="revenue-layout">
//           {/* Left - Header */}
//           <motion.div
//             className="revenue-header"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0}
//           >
//             <div className="revenue-badge">
//               <Sparkles size={14} />
//               <span>Revenue Model</span>
//             </div>

//             <h2 className="revenue-heading">
//               Sustainable{" "}
//               <span className="text-gradient">business</span>
//               <br />
//               for lasting impact
//             </h2>

//             <p className="revenue-desc">
//               Our diversified revenue streams create long-term financial 
//               sustainability while supporting farmers, customers, and 
//               environmental responsibility.
//             </p>

//             {/* Stats */}
//             <div className="revenue-stats">
//               {stats.map((stat, index) => (
//                 <div key={index} className="revenue-stat-item">
//                   <div className="revenue-stat-icon">
//                     {stat.icon}
//                   </div>
//                   <div className="revenue-stat-info">
//                     <span className="revenue-stat-value">{stat.value}</span>
//                     <span className="revenue-stat-label">{stat.label}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <motion.button
//               className="revenue-cta"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               <span>Invest with us</span>
//               <ArrowRight size={16} strokeWidth={2} />
//             </motion.button>
//           </motion.div>

//           {/* Right - Cards */}
//           <motion.div
//             className="revenue-grid"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0.2}
//           >
//             {revenueData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="revenue-card"
//                 variants={cardVariants}
//                 custom={0.3 + index * 0.1}
//                 whileHover={{ 
//                   y: -4,
//                   borderColor: `${item.color}40`,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <div className="revenue-card-top">
//                   <div 
//                     className="revenue-card-icon"
//                     style={{ 
//                       backgroundColor: `${item.color}12`,
//                       color: item.color 
//                     }}
//                   >
//                     {item.icon}
//                   </div>
//                   <div className="revenue-card-metric" style={{ color: item.color }}>
//                     <span className="revenue-metric-value">{item.metric}</span>
//                     <span className="revenue-metric-label">{item.metricLabel}</span>
//                   </div>
//                 </div>

//                 <h3 className="revenue-card-title">{item.title}</h3>
//                 <p className="revenue-card-desc">{item.description}</p>

//                 <div 
//                   className="revenue-card-indicator"
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

// export default Revenue; 


import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Fish,
  Building2,
  Recycle,
  Users,
  ArrowRight,
  Sparkles,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";

import "./Revenue.css";

// Import card images
import revenueImg1 from "../../assets/usp2.png";
import revenueImg2 from "../../assets/usp3.png";
import revenueImg3 from "../../assets/uspbg1.png";
import revenueImg4 from "../../assets/uspfam.png";

const revenueData = [
  {
    icon: <Fish size={22} strokeWidth={1.5} />,
    title: "Dual Revenue",
    description: "Premium fish and pesticide-free greens create recurring income streams year-round.",
    metric: "2x",
    metricLabel: "Revenue Sources",
    color: "#22c55e",
    image: revenueImg1,
  },
  {
    icon: <Building2 size={22} strokeWidth={1.5} />,
    title: "B2B Supply",
    description: "Long-term contracts with retailers, hotels, and institutions ensure stable demand.",
    metric: "100%",
    metricLabel: "Sold Rate",
    color: "#3b82f6",
    image: revenueImg2,
  },
  {
    icon: <Recycle size={22} strokeWidth={1.5} />,
    title: "Value Addition",
    description: "Organic vermicompost from fish waste creates an additional sustainable income stream.",
    metric: "3x",
    metricLabel: "Revenue Paths",
    color: "#f59e0b",
    image: revenueImg3,
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Partner Model",
    description: "Scale rapidly through farmer partnerships with shared growth and minimal capital.",
    metric: "50+",
    metricLabel: "Partners",
    color: "#8b5cf6",
    image: revenueImg4,
  },
];

const stats = [
  { icon: <DollarSign size={18} />, value: "₹50L+", label: "Projected Annual Revenue" },
  { icon: <TrendingUp size={18} />, value: "40%", label: "Profit Margin" },
  { icon: <BarChart3 size={18} />, value: "3x", label: "Growth Potential" },
];

const Revenue = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });
  
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
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
        duration: 0.5,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  return (
    <section className="revenue" ref={sectionRef} id="revenue">
      <div className="revenue-container">
        <div className="revenue-layout">
          {/* Left - Header */}
          <motion.div
            className="revenue-header"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="revenue-badge">
              <Sparkles size={14} />
              <span>Revenue Model</span>
            </div>

            <h2 className="revenue-heading">
              Sustainable{" "}
              <span className="text-gradient">business</span>
              <br />
              for lasting impact
            </h2>

            <p className="revenue-desc">
              Our diversified revenue streams create long-term financial 
              sustainability while supporting farmers, customers, and 
              environmental responsibility.
            </p>

            {/* Stats */}
            <div className="revenue-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="revenue-stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="revenue-stat-icon">
                    {stat.icon}
                  </div>
                  <div className="revenue-stat-info">
                    <span className="revenue-stat-value">{stat.value}</span>
                    <span className="revenue-stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="revenue-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Invest with us</span>
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>

          {/* Right - Image Cards */}
          <motion.div
            className="revenue-grid"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            {revenueData.map((item, index) => (
              <motion.div
                key={index}
                className="revenue-card"
                variants={cardVariants}
                custom={0.3 + index * 0.1}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card Background Image */}
                <div className="revenue-card-bg">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>

                {/* Dark Overlay */}
                <div className="revenue-card-overlay" />

                {/* Content */}
                <div className="revenue-card-inner">
                  <div className="revenue-card-top">
                    <div 
                      className="revenue-card-icon"
                      style={{ 
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        borderColor: `${item.color}30`
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="revenue-card-metric" style={{ color: item.color }}>
                      <span className="revenue-metric-value">{item.metric}</span>
                      <span className="revenue-metric-label">{item.metricLabel}</span>
                    </div>
                  </div>

                  <h3 className="revenue-card-title">{item.title}</h3>
                  <p className="revenue-card-desc">{item.description}</p>
                </div>

                {/* Hover Indicator */}
                <div 
                  className="revenue-card-indicator"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;