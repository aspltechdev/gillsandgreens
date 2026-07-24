// import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   Briefcase,
//   Award,
// } from "lucide-react";

// import "./Founder.css";

// const founders = [
//   {
//     id: 1,
//     image: "/images/founder.jpg",
//     name: "Jeyaraj Mani",
//     designation: "Founder",

//     icon: <Award size={22} />,

//     description:
//       "Retired Sergeant from the Indian Air Force with over 20 years of disciplined technical service. Passionate about sustainable agriculture and climate-resilient farming models that empower farmers.",

//     education: "M.Sc. Mathematics",
//   },

//   {
//     id: 2,
//     image: "/images/co-founder.jpg",
//     name: "Swathi Murugan",
//     designation: "Co-Founder",

//     icon: <Briefcase size={22} />,

//     description:
//       "Technology professional with expertise in software development, digital transformation, and process optimization. Driving innovation through scalable and transparent farming solutions.",

//     education: "B.Tech Information Technology",
//   },
// ];

// const Founder = () => {
//   return (
//     <section className="founder section">

//       <div className="container">

//         <motion.div
//           className="section-heading"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >

//           <span className="section-tag">
//             Leadership Team
//           </span>

//           <h2>
//             Meet The Visionaries
//             <br />
//             Behind Gills & Greens
//           </h2>

//           <p>
//             Guided by experienced professionals with expertise
//             in technology, operations and sustainable agriculture,
//             Gills & Greens is building a future where innovation
//             and farming grow together.
//           </p>

//         </motion.div>

//         <div className="founder-grid">

//           {founders.map((person, index) => (

//             <motion.div
//               key={person.id}
//               className="founder-card"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * .2,
//                 duration: .7,
//               }}
//             >

//               <div className="founder-image">

//                 <img
//                   src={person.image}
//                   alt={person.name}
//                 />

//               </div>

//               <div className="founder-content">

//                 <div className="founder-icon">
//                   {person.icon}
//                 </div>

//                 <h3>{person.name}</h3>

//                 <span>{person.designation}</span>

//                 <div className="education">

//                   <GraduationCap size={18} />

//                   <p>{person.education}</p>

//                 </div>

//                 <p className="description">
//                   {person.description}
//                 </p>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Founder;

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  Quote,
} from "lucide-react";

import "./Founder.css";

// Import founder images
import founderImg from "../../assets/f2.png"; // Swathi - Founder
import coFounderImg from "../../assets/f1.png"; // Jeyaraj - Co-Founder

const founders = [
  {
    id: 1,
    image: founderImg,
    name: "Swathi Murugan",
    designation: "Founder & CEO",
    icon: <Briefcase size={22} />,
    description:
      "Technology professional with expertise in software development, digital transformation, and process optimization. Driving innovation through scalable and transparent farming solutions.",
    education: "B.Tech Information Technology",
    color: "#3b82f6",
  },
  {
    id: 2,
    image: coFounderImg,
    name: "Jeyaraj Mani",
    designation: "Co-Founder & Director",
    icon: <Award size={22} />,
    description:
      "Retired Sergeant from the Indian Air Force with over 20 years of disciplined technical service. Passionate about sustainable agriculture and climate-resilient farming models that empower farmers.",
    education: "M.Sc. Mathematics",
    color: "#22c55e",
  },
];

const Founder = () => {
  const sectionRef = useRef(null);

  return (
    <section className="founder" ref={sectionRef} id="founder">
      <div className="founder-container">
        {/* Section Header */}
        <motion.div
          className="founder-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 0, 0, 1] }}
        >
          <div className="founder-header-badge">
            <Sparkles size={14} />
            <span>Leadership Team</span>
          </div>

          <h2 className="founder-heading">
            Meet The Visionaries
            <br />
            Behind Gills & Greens
          </h2>

          <p className="founder-header-desc">
            Guided by experienced professionals with expertise
            in technology, operations and sustainable agriculture,
            Gills & Greens is building a future where innovation
            and farming grow together.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="founder-grid">
          {founders.map((person, index) => (
            <motion.div
              key={person.id}
              className="founder-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: [0.22, 0, 0, 1]
              }}
            >
              {/* Image Section */}
              <div className="founder-image">
                <img
                  src={person.image}
                  alt={person.name}
                />
                {/* Image overlay gradient */}
                <div className="founder-image-overlay" />
              </div>

              {/* Content Section */}
              <div className="founder-content">
                {/* Role Icon - Overlaps image */}
                {/* <div 
                  className="founder-icon"
                  style={{ 
                    backgroundColor: `${person.color}15`, 
                    color: person.color,
                    borderColor: `${person.color}30`
                  }}
                >
                  {person.icon}
                </div> */}

                {/* Quote decoration */}
                <Quote size={40} className="founder-quote-decoration" />

                {/* Name & Designation */}
                <h3 className="founder-name">{person.name}</h3>
                <span className="founder-designation">{person.designation}</span>

                {/* Underline */}
                <div className="founder-underline" style={{ background: `linear-gradient(90deg, ${person.color}, transparent)` }} />

                {/* Education */}
                <div className="founder-education">
                  <GraduationCap size={18} />
                  <p>{person.education}</p>
                </div>

                {/* Description */}
                <p className="founder-description">{person.description}</p>

                {/* Bottom accent line */}
                <div 
                  className="founder-card-accent"
                  style={{ background: person.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
