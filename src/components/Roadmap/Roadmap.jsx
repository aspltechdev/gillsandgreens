// // import { useRef, useState } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import {
// //   FlaskConical,
// //   Users,
// //   Handshake,
// //   Sprout,
// //   Globe,
// //   ArrowRight,
// //   Sparkles,
// //   CheckCircle2,
// //   Target,
// //   ChevronRight,
// // } from "lucide-react";

// // import "./Roadmap.css";
// // import roadmapBg from "../../assets/hero3.png"; // Add your background image

// // const roadmap = [
// //   {
// //     phase: "Phase 01",
// //     year: "2024",
// //     icon: <FlaskConical size={24} strokeWidth={1.5} />,
// //     title: "R&D Excellence",
// //     description: "Develop a dedicated aquaponics research and innovation center to improve farming efficiency and crop yields.",
// //     status: "completed",
// //     highlights: ["Research facility setup", "Crop trials completed", "Technology validation"],
// //     color: "#22c55e",
// //   },
// //   {
// //     phase: "Phase 02",
// //     year: "2025",
// //     icon: <Users size={24} strokeWidth={1.5} />,
// //     title: "Farmer Network",
// //     description: "Train and onboard local farmers to adopt scalable aquaponics farming systems with hands-on support.",
// //     status: "active",
// //     highlights: ["50+ farmers onboarded", "Training programs", "Setup assistance"],
// //     color: "#3b82f6",
// //   },
// //   {
// //     phase: "Phase 03",
// //     year: "2025",
// //     icon: <Handshake size={24} strokeWidth={1.5} />,
// //     title: "Market Connect",
// //     description: "Strengthen partnerships with retailers, aggregators, and institutional buyers for stable demand.",
// //     status: "upcoming",
// //     highlights: ["Retail partnerships", "Institutional tie-ups", "Brand building"],
// //     color: "#f59e0b",
// //   },
// //   {
// //     phase: "Phase 04",
// //     year: "2026",
// //     icon: <Sprout size={24} strokeWidth={1.5} />,
// //     title: "Portfolio Expansion",
// //     description: "Introduce premium vegetables and exotic fish varieties to diversify and increase revenue streams.",
// //     status: "upcoming",
// //     highlights: ["Exotic vegetables", "Premium fish varieties", "Value-added products"],
// //     color: "#8b5cf6",
// //   },
// //   {
// //     phase: "Phase 05",
// //     year: "2027",
// //     icon: <Globe size={24} strokeWidth={1.5} />,
// //     title: "Nationwide Scale",
// //     description: "Build a standardized and replicable aquaponics model for expansion across India.",
// //     status: "upcoming",
// //     highlights: ["Multi-state presence", "Franchise model", "1000+ farmers"],
// //     color: "#ec4899",
// //   },
// // ];

// // const Roadmap = () => {
// //   const sectionRef = useRef(null);
// //   const [activePhase, setActivePhase] = useState(1);
  
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"]
// //   });
  
// //   const smoothProgress = useSpring(scrollYProgress, {
// //     stiffness: 50,
// //     damping: 20,
// //   });
  
// //   const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);
// //   const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);
// //   const progressWidth = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);

// //   const fadeUpVariants = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (delay = 0) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         delay,
// //         duration: 0.7,
// //         ease: [0.22, 0, 0, 1]
// //       }
// //     })
// //   };

// //   const getStatusBadge = (status) => {
// //     switch(status) {
// //       case 'completed':
// //         return { icon: <CheckCircle2 size={12} />, text: 'Completed', class: 'status-completed' };
// //       case 'active':
// //         return { icon: <Target size={12} />, text: 'In Progress', class: 'status-active' };
// //       default:
// //         return { icon: <ChevronRight size={12} />, text: 'Upcoming', class: 'status-upcoming' };
// //     }
// //   };

// //   return (
// //     <section className="roadmap" ref={sectionRef}>
// //       {/* Background */}
// //       <div className="roadmap-bg-wrapper">
// //         <motion.div 
// //           className="roadmap-bg-image"
// //           style={{ scale: bgScale, y: bgY }}
// //         >
// //           <img src={roadmapBg} alt="" loading="lazy" />
// //         </motion.div>
// //         <div className="roadmap-bg-overlay" />
// //       </div>

// //       <div className="roadmap-glow roadmap-glow-1" />
// //       <div className="roadmap-glow roadmap-glow-2" />

// //       <div className="roadmap-container">
// //         {/* Header */}
// //         <motion.div
// //           className="roadmap-header"
// //           variants={fadeUpVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           custom={0}
// //         >
// //           <div className="roadmap-header-badge">
// //             <Sparkles size={14} />
// //             <span>Growth Roadmap</span>
// //           </div>

// //           <h2 className="roadmap-heading">
// //             Our path to{" "}
// //             <span className="text-gradient">revolutionizing</span>
// //             <br />
// //             Indian agriculture
// //           </h2>

// //           <p className="roadmap-header-desc">
// //             A strategic five-phase journey to build India's leading 
// //             aquaponics ecosystem through innovation, partnerships, 
// //             and nationwide expansion.
// //           </p>

// //           {/* Phase Navigation */}
// //           <div className="roadmap-nav">
// //             {roadmap.map((item, index) => (
// //               <motion.button
// //                 key={index}
// //                 className={`roadmap-nav-item ${activePhase === index ? 'active' : ''}`}
// //                 onClick={() => setActivePhase(index)}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 style={{
// //                   '--nav-color': item.color,
// //                 }}
// //               >
// //                 <span className="nav-phase">{item.phase}</span>
// //                 <span className="nav-year">{item.year}</span>
// //                 {activePhase === index && (
// //                   <motion.div 
// //                     className="nav-active-indicator"
// //                     layoutId="activeNav"
// //                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
// //                   />
// //                 )}
// //               </motion.button>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Main Content */}
// //         <div className="roadmap-main">
// //           {/* Progress Line */}
// //           <div className="roadmap-progress">
// //             <div className="progress-track">
// //               <motion.div 
// //                 className="progress-fill"
// //                 style={{ width: progressWidth }}
// //               />
// //             </div>
// //             <div className="progress-dots">
// //               {roadmap.map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className={`progress-dot ${index <= activePhase ? 'active' : ''}`}
// //                   style={{ 
// //                     '--dot-color': item.color,
// //                     left: `${(index / (roadmap.length - 1)) * 100}%`
// //                   }}
// //                   animate={{
// //                     scale: index === activePhase ? 1.3 : index < activePhase ? 1 : 0.8,
// //                   }}
// //                   onClick={() => setActivePhase(index)}
// //                 >
// //                   <div className="dot-inner" />
// //                   {index < activePhase && (
// //                     <CheckCircle2 size={12} className="dot-check" />
// //                   )}
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Active Phase Detail */}
// //           <motion.div
// //             className="roadmap-detail"
// //             key={activePhase}
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, ease: [0.22, 0, 0, 1] }}
// //           >
// //             <div className="detail-card">
// //               <div className="detail-card-glow" style={{ background: `${roadmap[activePhase].color}10` }} />
              
// //               <div className="detail-header">
// //                 <div className="detail-phase-info">
// //                   <span className="detail-phase">{roadmap[activePhase].phase}</span>
// //                   <span className="detail-year">{roadmap[activePhase].year}</span>
// //                 </div>
// //                 <div className={`detail-status ${getStatusBadge(roadmap[activePhase].status).class}`}>
// //                   {getStatusBadge(roadmap[activePhase].status).icon}
// //                   <span>{getStatusBadge(roadmap[activePhase].status).text}</span>
// //                 </div>
// //               </div>

// //               <div className="detail-body">
// //                 <div 
// //                   className="detail-icon"
// //                   style={{ 
// //                     backgroundColor: `${roadmap[activePhase].color}15`,
// //                     color: roadmap[activePhase].color 
// //                   }}
// //                 >
// //                   {roadmap[activePhase].icon}
// //                 </div>
                
// //                 <div className="detail-content">
// //                   <h3 className="detail-title">{roadmap[activePhase].title}</h3>
// //                   <p className="detail-desc">{roadmap[activePhase].description}</p>
                  
// //                   <div className="detail-highlights">
// //                     <h4>Key Milestones</h4>
// //                     <div className="highlights-grid">
// //                       {roadmap[activePhase].highlights.map((highlight, i) => (
// //                         <div key={i} className="highlight-item">
// //                           <CheckCircle2 size={14} />
// //                           <span>{highlight}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Next/Prev Navigation */}
// //             <div className="detail-nav">
// //               <motion.button
// //                 className="detail-nav-btn"
// //                 onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
// //                 disabled={activePhase === 0}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 style={{ opacity: activePhase === 0 ? 0.4 : 1 }}
// //               >
// //                 <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
// //                 <span>Previous</span>
// //               </motion.button>

// //               <div className="detail-counter">
// //                 {String(activePhase + 1).padStart(2, '0')} / {String(roadmap.length).padStart(2, '0')}
// //               </div>

// //               <motion.button
// //                 className="detail-nav-btn"
// //                 onClick={() => setActivePhase(Math.min(roadmap.length - 1, activePhase + 1))}
// //                 disabled={activePhase === roadmap.length - 1}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 style={{ opacity: activePhase === roadmap.length - 1 ? 0.4 : 1 }}
// //               >
// //                 <span>Next</span>
// //                 <ArrowRight size={16} />
// //               </motion.button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Roadmap;


// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FlaskConical,
//   Users,
//   Handshake,
//   Sprout,
//   Globe,
//   ArrowRight,
//   Sparkles,
//   CheckCircle2,
//   Target,
//   ChevronRight,
//   ChevronLeft,
// } from "lucide-react";

// import "./Roadmap.css";

// const roadmap = [
//   {
//     phase: "Phase 01",
//     year: "2024",
//     icon: <FlaskConical size={22} strokeWidth={1.5} />,
//     title: "R&D Excellence",
//     description: "Develop a dedicated aquaponics research and innovation center to improve farming efficiency and crop yields.",
//     status: "completed",
//     highlights: ["Research facility setup", "Crop trials completed", "Technology validation"],
//     color: "#22c55e",
//   },
//   {
//     phase: "Phase 02",
//     year: "2025",
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Farmer Network",
//     description: "Train and onboard local farmers to adopt scalable aquaponics farming systems with hands-on support.",
//     status: "active",
//     highlights: ["50+ farmers onboarded", "Training programs", "Setup assistance"],
//     color: "#3b82f6",
//   },
//   {
//     phase: "Phase 03",
//     year: "2025",
//     icon: <Handshake size={22} strokeWidth={1.5} />,
//     title: "Market Connect",
//     description: "Strengthen partnerships with retailers, aggregators, and institutional buyers for stable demand.",
//     status: "upcoming",
//     highlights: ["Retail partnerships", "Institutional tie-ups", "Brand building"],
//     color: "#f59e0b",
//   },
//   {
//     phase: "Phase 04",
//     year: "2026",
//     icon: <Sprout size={22} strokeWidth={1.5} />,
//     title: "Portfolio Expansion",
//     description: "Introduce premium vegetables and exotic fish varieties to diversify and increase revenue streams.",
//     status: "upcoming",
//     highlights: ["Exotic vegetables", "Premium fish varieties", "Value-added products"],
//     color: "#8b5cf6",
//   },
//   {
//     phase: "Phase 05",
//     year: "2027",
//     icon: <Globe size={22} strokeWidth={1.5} />,
//     title: "Nationwide Scale",
//     description: "Build a standardized and replicable aquaponics model for expansion across India.",
//     status: "upcoming",
//     highlights: ["Multi-state presence", "Franchise model", "1000+ farmers"],
//     color: "#ec4899",
//   },
// ];

// const Roadmap = () => {
//   const sectionRef = useRef(null);
//   const [activePhase, setActivePhase] = useState(1);

//   const getStatusBadge = (status) => {
//     switch(status) {
//       case 'completed':
//         return { icon: <CheckCircle2 size={12} />, text: 'Completed', class: 'status-completed' };
//       case 'active':
//         return { icon: <Target size={12} />, text: 'In Progress', class: 'status-active' };
//       default:
//         return { icon: <ChevronRight size={12} />, text: 'Upcoming', class: 'status-upcoming' };
//     }
//   };

//   return (
//     <section className="roadmap" ref={sectionRef} id="roadmap">
//       <div className="roadmap-container">
//         {/* Header */}
//         <motion.div
//           className="roadmap-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, ease: [0.22, 0, 0, 1] }}
//         >
//           <div className="roadmap-badge">
//             <Sparkles size={14} />
//             <span>Growth Roadmap</span>
//           </div>

//           <h2 className="roadmap-heading">
//             Our path to{" "}
//             <span className="text-gradient">revolutionizing</span>
//             <br />
//             Indian agriculture
//           </h2>

//           <p className="roadmap-desc">
//             A strategic five-phase journey to build India's leading 
//             aquaponics ecosystem through innovation and partnerships.
//           </p>
//         </motion.div>

//         {/* Timeline Navigation */}
//         <motion.div
//           className="roadmap-timeline"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-30px" }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           {/* Progress Bar */}
//           <div className="timeline-track">
//             <div 
//               className="timeline-fill"
//               style={{ width: `${(activePhase / (roadmap.length - 1)) * 100}%` }}
//             />
//           </div>

//           {/* Phase Dots */}
//           <div className="timeline-dots">
//             {roadmap.map((item, index) => (
//               <motion.button
//                 key={index}
//                 className={`timeline-dot ${index <= activePhase ? 'active' : ''} ${item.status}`}
//                 style={{ '--dot-color': item.color }}
//                 onClick={() => setActivePhase(index)}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <div className="dot-icon">
//                   {index < activePhase ? (
//                     <CheckCircle2 size={14} />
//                   ) : index === activePhase ? (
//                     <Target size={14} />
//                   ) : (
//                     <div className="dot-empty" />
//                   )}
//                 </div>
//                 <span className="dot-label">{item.phase}</span>
//                 <span className="dot-year">{item.year}</span>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Active Phase Card */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activePhase}
//             className="roadmap-card"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: [0.22, 0, 0, 1] }}
//           >
//             <div className="roadmap-card-inner">
//               {/* Left - Icon & Status */}
//               <div className="card-left">
//                 <div 
//                   className="card-icon"
//                   style={{ 
//                     backgroundColor: `${roadmap[activePhase].color}12`,
//                     color: roadmap[activePhase].color,
//                     borderColor: `${roadmap[activePhase].color}30`
//                   }}
//                 >
//                   {roadmap[activePhase].icon}
//                 </div>
                
//                 <div className={`card-status ${getStatusBadge(roadmap[activePhase].status).class}`}>
//                   {getStatusBadge(roadmap[activePhase].status).icon}
//                   <span>{getStatusBadge(roadmap[activePhase].status).text}</span>
//                 </div>

//                 <div className="card-phase-info">
//                   <span className="phase-label">{roadmap[activePhase].phase}</span>
//                   <span className="phase-year">{roadmap[activePhase].year}</span>
//                 </div>
//               </div>

//               {/* Right - Content */}
//               <div className="card-right">
//                 <h3 className="card-title">{roadmap[activePhase].title}</h3>
//                 <p className="card-desc">{roadmap[activePhase].description}</p>

//                 {/* Highlights */}
//                 <div className="card-highlights">
//                   <h4>Key Milestones</h4>
//                   <div className="highlights-list">
//                     {roadmap[activePhase].highlights.map((highlight, i) => (
//                       <motion.div
//                         key={i}
//                         className="highlight-item"
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1 + i * 0.1 }}
//                       >
//                         <CheckCircle2 size={14} />
//                         <span>{highlight}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <div className="card-nav">
//               <button
//                 className="nav-arrow"
//                 onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
//                 disabled={activePhase === 0}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <div className="nav-counter">
//                 {String(activePhase + 1).padStart(2, '0')} / {String(roadmap.length).padStart(2, '0')}
//               </div>

//               <button
//                 className="nav-arrow"
//                 onClick={() => setActivePhase(Math.min(roadmap.length - 1, activePhase + 1))}
//                 disabled={activePhase === roadmap.length - 1}
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>

//             {/* Bottom accent line */}
//             <div 
//               className="card-accent"
//               style={{ background: roadmap[activePhase].color }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Bottom CTA */}
//         <motion.div
//           className="roadmap-cta"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <button
//             className="cta-button"
//             onClick={() => {
//               document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//             }}
//           >
//             <span>Join our journey</span>
//             <ArrowRight size={16} strokeWidth={2} />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;  


import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Users,
  Handshake,
  Sprout,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Target,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import "./Roadmap.css";

// Import phase images
import phaseImg1 from "../../assets/road1.png";
import phaseImg2 from "../../assets/road2.png";
import phaseImg3 from "../../assets/road3.png";
import phaseImg4 from "../../assets/road45.png";
import phaseImg5 from "../../assets/road5.png";

const roadmap = [
  {
    phase: "Phase 01",
    year: "2024",
    icon: <FlaskConical size={20} strokeWidth={1.5} />,
    title: "R&D Excellence",
    description: "Develop a dedicated aquaponics research and innovation center to improve farming efficiency and crop yields.",
    status: "completed",
    highlights: ["Research facility setup", "Crop trials completed", "Technology validation"],
    color: "#22c55e",
    image: phaseImg1,
  },
  {
    phase: "Phase 02",
    year: "2025",
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Farmer Network",
    description: "Train and onboard local farmers to adopt scalable aquaponics farming systems with hands-on support.",
    status: "active",
    highlights: ["50+ farmers onboarded", "Training programs", "Setup assistance"],
    color: "#3b82f6",
    image: phaseImg2,
  },
  {
    phase: "Phase 03",
    year: "2025",
    icon: <Handshake size={20} strokeWidth={1.5} />,
    title: "Market Connect",
    description: "Strengthen partnerships with retailers, aggregators, and institutional buyers for stable demand.",
    status: "upcoming",
    highlights: ["Retail partnerships", "Institutional tie-ups", "Brand building"],
    color: "#f59e0b",
    image: phaseImg3,
  },
  {
    phase: "Phase 04",
    year: "2026",
    icon: <Sprout size={20} strokeWidth={1.5} />,
    title: "Portfolio Expansion",
    description: "Introduce premium vegetables and exotic fish varieties to diversify and increase revenue streams.",
    status: "upcoming",
    highlights: ["Exotic vegetables", "Premium fish varieties", "Value-added products"],
    color: "#8b5cf6",
    image: phaseImg4,
  },
  {
    phase: "Phase 05",
    year: "2027",
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: "Nationwide Scale",
    description: "Build a standardized and replicable aquaponics model for expansion across India.",
    status: "upcoming",
    highlights: ["Multi-state presence", "Franchise model", "1000+ farmers"],
    color: "#ec4899",
    image: phaseImg5,
  },
];

const Roadmap = () => {
  const sectionRef = useRef(null);
  const [activePhase, setActivePhase] = useState(1);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return { icon: <CheckCircle2 size={12} />, text: 'Completed', class: 'status-completed' };
      case 'active':
        return { icon: <Target size={12} />, text: 'In Progress', class: 'status-active' };
      default:
        return { icon: <ChevronRight size={12} />, text: 'Upcoming', class: 'status-upcoming' };
    }
  };

  return (
    <section className="roadmap" ref={sectionRef} id="roadmap">
      <div className="roadmap-container">
        {/* Header */}
        <motion.div
          className="roadmap-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 0, 0, 1] }}
        >
          <div className="roadmap-badge">
            <Sparkles size={14} />
            <span>Growth Roadmap</span>
          </div>

          <h2 className="roadmap-heading">
            Our path to{" "}
            <span className="text-gradient">revolutionizing</span>
            <br />
            Indian agriculture
          </h2>

          <p className="roadmap-desc">
            A strategic five-phase journey to build India's leading 
            aquaponics ecosystem through innovation and partnerships.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          className="roadmap-timeline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Progress Bar */}
          <div className="timeline-track">
            <div 
              className="timeline-fill"
              style={{ width: `${(activePhase / (roadmap.length - 1)) * 100}%` }}
            />
          </div>

          {/* Phase Dots */}
          <div className="timeline-dots">
            {roadmap.map((item, index) => (
              <motion.button
                key={index}
                className={`timeline-dot ${index <= activePhase ? 'active' : ''} ${index < activePhase ? 'completed' : ''}`}
                style={{ '--dot-color': item.color }}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="dot-icon">
                  {index < activePhase ? (
                    <CheckCircle2 size={13} />
                  ) : (
                    <span className="dot-number">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </div>
                <span className="dot-label">{item.phase}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Image Card with Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            className="roadmap-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 0, 0, 1] }}
          >
            {/* Background Image */}
            <div className="card-bg-image">
              <motion.img 
                src={roadmap[activePhase].image} 
                alt={roadmap[activePhase].title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Dark Overlay */}
            <div className="card-overlay" />

            {/* Top Badge */}
            <div className={`card-status-badge ${getStatusBadge(roadmap[activePhase].status).class}`}>
              {getStatusBadge(roadmap[activePhase].status).icon}
              <span>{getStatusBadge(roadmap[activePhase].status).text}</span>
            </div>

            {/* Content Overlay */}
            <div className="card-content">
              <div className="card-content-top">
                <div className="card-phase-tag">
                  {roadmap[activePhase].phase} • {roadmap[activePhase].year}
                </div>
                
                <div className="card-icon-wrapper" style={{ color: roadmap[activePhase].color }}>
                  {roadmap[activePhase].icon}
                </div>
              </div>

              <h3 className="card-title">{roadmap[activePhase].title}</h3>
              <p className="card-desc">{roadmap[activePhase].description}</p>

              {/* Highlights */}
              <div className="card-highlights">
                {roadmap[activePhase].highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <CheckCircle2 size={14} />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="card-bottom-nav">
              <button
                className="bottom-nav-btn"
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
              >
                <ChevronLeft size={18} />
                <span>Prev</span>
              </button>

              <div className="bottom-nav-dots">
                {roadmap.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === activePhase ? 'active' : ''}`}
                    style={{ '--dot-color': roadmap[index].color }}
                    onClick={() => setActivePhase(index)}
                  />
                ))}
              </div>

              <button
                className="bottom-nav-btn"
                onClick={() => setActivePhase(Math.min(roadmap.length - 1, activePhase + 1))}
                disabled={activePhase === roadmap.length - 1}
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Bottom accent */}
            <div className="card-accent" style={{ background: roadmap[activePhase].color }} />
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="roadmap-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Join our journey</span>
            <ArrowRight size={16} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;