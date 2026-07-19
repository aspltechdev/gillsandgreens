// // import { motion } from "framer-motion";
// // import {
// //   Fish,
// //   Leaf,
// //   Droplets,
// //   Users,
// //   Store,
// //   ArrowRight,
// // } from "lucide-react";

// // import "./Solution.css";

// // const solutions = [
// //   {
// //     icon: <Fish size={32} />,
// //     title: "Aquaponics Farming",
// //     description:
// //       "An integrated fish and plant cultivation system that creates a natural, self-sustaining ecosystem.",
// //   },
// //   {
// //     icon: <Droplets size={32} />,
// //     title: "90% Less Water Usage",
// //     description:
// //       "Water continuously circulates between fish tanks and grow beds, dramatically reducing water consumption.",
// //   },
// //   {
// //     icon: <Leaf size={32} />,
// //     title: "Chemical-Free Production",
// //     description:
// //       "Fish waste naturally nourishes plants, eliminating the need for chemical fertilizers and pesticides.",
// //   },
// //   {
// //     icon: <Users size={32} />,
// //     title: "Farmer Empowerment",
// //     description:
// //       "Training, technical guidance, and scalable farming models help farmers increase long-term income.",
// //   },
// //   {
// //     icon: <Store size={32} />,
// //     title: "Direct Market Linkage",
// //     description:
// //       "Connecting farmers with retailers and institutional buyers ensures stable demand and fair pricing.",
// //   },
// // ];

// // const Solution = () => {
// //   return (
// //     <section className="solution section">

// //       <div className="container">

// //         <motion.div
// //           className="section-heading"
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           <span className="section-tag">
// //             Our Solution
// //           </span>

// //           <h2>
// //             Where Fish and Greens
// //             <br />
// //             Grow Together
// //           </h2>

// //           <p>
// //             Our innovative aquaponics ecosystem combines aquaculture and
// //             hydroponics to produce fresh, healthy food while conserving
// //             water, protecting the environment, and improving farmer
// //             livelihoods.
// //           </p>
// //         </motion.div>

// //         <div className="solution-wrapper">

// //           <motion.div
// //             className="solution-image"
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <img
// //               src="/images/solution.png"
// //               alt="Aquaponics System"
// //             />
// //           </motion.div>

// //           <div className="solution-grid">

// //             {solutions.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="solution-card"
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: index * 0.12,
// //                 }}
// //               >
// //                 <div className="solution-icon">
// //                   {item.icon}
// //                 </div>

// //                 <div>

// //                   <h3>{item.title}</h3>

// //                   <p>{item.description}</p>

// //                 </div>

// //               </motion.div>
// //             ))}

// //           </div>

// //         </div>

// //         <motion.div
// //           className="solution-cta"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //         >

// //           <button className="btn-primary">
// //             Learn More
// //             <ArrowRight size={18} />
// //           </button>

// //         </motion.div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default Solution;


// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Fish,
//   Leaf,
//   Droplets,
//   Users,
//   Store,
//   ArrowRight,
//   Sparkles,
//   ArrowUpRight,
// } from "lucide-react";

// import "./Solution.css";
// import solutionBg from "../../assets/hero1.png"; // Add your background image
// import solutionImage from "../../assets/hero3.png"; // Your solution image

// const solutions = [
//   {
//     icon: <Fish size={22} strokeWidth={1.5} />,
//     title: "Aquaponics Farming",
//     description: "Integrated fish and plant system creating a self-sustaining ecosystem.",
//     stat: "2x",
//     statLabel: "Yield",
//     color: "#22c55e",
//   },
//   {
//     icon: <Droplets size={22} strokeWidth={1.5} />,
//     title: "90% Less Water",
//     description: "Water circulates between fish tanks and grow beds continuously.",
//     stat: "90%",
//     statLabel: "Savings",
//     color: "#3b82f6",
//   },
//   {
//     icon: <Leaf size={22} strokeWidth={1.5} />,
//     title: "Chemical-Free",
//     description: "Fish waste naturally nourishes plants, no chemicals needed.",
//     stat: "100%",
//     statLabel: "Organic",
//     color: "#f59e0b",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Farmer First",
//     description: "Training, guidance, and scalable models for long-term income.",
//     stat: "3x",
//     statLabel: "Income",
//     color: "#8b5cf6",
//   },
//   {
//     icon: <Store size={22} strokeWidth={1.5} />,
//     title: "Market Connect",
//     description: "Direct linkage with retailers for stable demand and fair pricing.",
//     stat: "100%",
//     statLabel: "Sold",
//     color: "#ec4899",
//   },
// ];

// const Solution = () => {
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
//     hidden: { opacity: 0, x: -20 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay,
//         duration: 0.5,
//         ease: [0.22, 0, 0, 1]
//       }
//     })
//   };

//   return (
//     <section className="solution" ref={sectionRef}>
//       {/* Background */}
//       <div className="solution-bg-wrapper">
//         <motion.div 
//           className="solution-bg-image"
//           style={{ scale: bgScale, y: bgY }}
//         >
//           <img src={solutionBg} alt="" loading="lazy" />
//         </motion.div>
//         <div className="solution-bg-overlay" />
//       </div>

//       <div className="solution-glow" />

//       <div className="solution-container">
//         <div className="solution-layout">
//           {/* Left - Header + Image */}
//           <motion.div
//             className="solution-left"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0}
//           >
//             <div className="solution-badge">
//               <Sparkles size={14} />
//               <span>Our Solution</span>
//             </div>

//             <h2 className="solution-heading">
//               Where fish & greens{" "}
//               <span className="text-gradient">grow together</span>
//             </h2>

//             <p className="solution-desc">
//               Our aquaponics ecosystem combines aquaculture and hydroponics 
//               to produce fresh food while conserving water and empowering farmers.
//             </p>

//             <div className="solution-image-wrapper">
//               <img
//                 src={solutionImage}
//                 alt="Aquaponics System"
//                 className="solution-image"
//               />
//               <div className="solution-image-frame" />
//             </div>
//           </motion.div>

//           {/* Right - Solution Cards */}
//           <motion.div
//             className="solution-right"
//             variants={fadeUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0.2}
//           >
//             <div className="solution-grid">
//               {solutions.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="solution-card"
//                   variants={cardVariants}
//                   custom={0.3 + index * 0.08}
//                   whileHover={{ 
//                     x: 4,
//                     borderColor: `${item.color}40`,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   <div className="solution-card-left">
//                     <div 
//                       className="solution-card-icon"
//                       style={{ 
//                         backgroundColor: `${item.color}12`,
//                         color: item.color 
//                       }}
//                     >
//                       {item.icon}
//                     </div>
//                   </div>

//                   <div className="solution-card-content">
//                     <h3 className="solution-card-title">{item.title}</h3>
//                     <p className="solution-card-desc">{item.description}</p>
//                   </div>

//                   <div className="solution-card-stat" style={{ color: item.color }}>
//                     <span className="card-stat-value">{item.stat}</span>
//                     <span className="card-stat-label">{item.statLabel}</span>
//                   </div>

//                   <div 
//                     className="solution-card-indicator"
//                     style={{ background: item.color }}
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               className="solution-cta"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               variants={fadeUpVariants}
//               custom={0.8}
//               onClick={() => {
//                 document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               <span>Explore the full system</span>
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solution;


import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Fish,
  Leaf,
  Droplets,
  Users,
  Store,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./Solution.css";
import solutionImage from "../../assets/solu.png";

const solutions = [
  {
    icon: <Fish size={22} strokeWidth={1.5} />,
    title: "Aquaponics Farming",
    description: "Integrated fish and plant system creating a self-sustaining ecosystem.",
    stat: "2x",
    statLabel: "Yield",
    color: "#22c55e",
  },
  {
    icon: <Droplets size={22} strokeWidth={1.5} />,
    title: "90% Less Water",
    description: "Water circulates between fish tanks and grow beds continuously.",
    stat: "90%",
    statLabel: "Savings",
    color: "#3b82f6",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.5} />,
    title: "Chemical-Free",
    description: "Fish waste naturally nourishes plants, no chemicals needed.",
    stat: "100%",
    statLabel: "Organic",
    color: "#f59e0b",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Farmer First",
    description: "Training, guidance, and scalable models for long-term income.",
    stat: "3x",
    statLabel: "Income",
    color: "#8b5cf6",
  },
  {
    icon: <Store size={22} strokeWidth={1.5} />,
    title: "Market Connect",
    description: "Direct linkage with retailers for stable demand and fair pricing.",
    stat: "100%",
    statLabel: "Sold",
    color: "#ec4899",
  },
];

const Solution = () => {
  const sectionRef = useRef(null);

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
    hidden: { opacity: 0, x: -20 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: [0.22, 0, 0, 1]
      }
    })
  };

  return (
    <section className="solution" ref={sectionRef} id="solution">
      <div className="solution-container">
        <div className="solution-layout">
          {/* Left - Header + Image */}
          <motion.div
            className="solution-left"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="solution-badge">
              <Sparkles size={14} />
              <span>Our Solution</span>
            </div>

            <h2 className="solution-heading">
              Where fish & greens{" "}
              <span className="text-gradient">grow together</span>
            </h2>

            <p className="solution-desc">
              Our aquaponics ecosystem combines aquaculture and hydroponics 
              to produce fresh food while conserving water and empowering farmers.
            </p>

            <div className="solution-image-wrapper">
              <img
                src={solutionImage}
                alt="Aquaponics System"
                className="solution-image"
              />
              <div className="solution-image-frame" />
            </div>
          </motion.div>

          {/* Right - Solution Cards */}
          <motion.div
            className="solution-right"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="solution-grid">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  className="solution-card"
                  variants={cardVariants}
                  custom={0.3 + index * 0.08}
                  whileHover={{ 
                    x: 4,
                    borderColor: `${item.color}40`,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="solution-card-left">
                    <div 
                      className="solution-card-icon"
                      style={{ 
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        borderColor: `${item.color}30`
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="solution-card-content">
                    <h3 className="solution-card-title">{item.title}</h3>
                    <p className="solution-card-desc">{item.description}</p>
                  </div>

                  <div className="solution-card-stat" style={{ color: item.color }}>
                    <span className="card-stat-value">{item.stat}</span>
                    <span className="card-stat-label">{item.statLabel}</span>
                  </div>

                  <div 
                    className="solution-card-indicator"
                    style={{ background: item.color }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              className="solution-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={fadeUpVariants}
              custom={0.8}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Explore the full system</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;