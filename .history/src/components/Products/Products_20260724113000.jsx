// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Leaf,
//   Fish,
//   Recycle,
//   Building2,
//   ArrowRight,
//   Sparkles,
//   ShoppingBag,
// } from "lucide-react";

// import "./Products.css";

// // Import product images
// import greensImg from "../../assets/pro1.png";
// import fishImg from "../../assets/pro2.png";
// import compostImg from "../../assets/abt1.png";
// import bulkImg from "../../assets/abt1.png";
// import productsBg from "../../assets/abt1.png";

// const products = [
//   {
//     id: 1,
//     icon: <Leaf size={20} strokeWidth={1.5} />,
//     title: "Fresh Organic Greens",
//     description: "Premium pesticide-free leafy greens cultivated using advanced aquaponics systems.",
//     badge: "Best Seller",
//     image: greensImg,
//     color: "#22c55e",
//   },
//   {
//     id: 2,
//     icon: <Fish size={20} strokeWidth={1.5} />,
//     title: "Chemical-Free Fresh Fish",
//     description: "Naturally grown Tilapia and Koi fish raised in oxygen-rich recirculating water.",
//     badge: "Premium",
//     image: fishImg,
//     color: "#3b82f6",
//   },
//   {
//     id: 3,
//     icon: <Recycle size={20} strokeWidth={1.5} />,
//     title: "Organic Vermicompost",
//     description: "Eco-friendly compost created from fish waste to naturally enrich agricultural soil.",
//     badge: "Eco-Friendly",
//     image: compostImg,
//     color: "#f59e0b",
//   },
//   {
//     id: 4,
//     icon: <Building2 size={20} strokeWidth={1.5} />,
//     title: "Bulk & Institutional Supply",
//     description: "Reliable large-volume supply of fresh greens and fish for retailers and hotels.",
//     badge: "B2B",
//     image: bulkImg,
//     color: "#8b5cf6",
//   },
// ];

// const Products = () => {
//   const sectionRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });
  
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 40,
//     damping: 25,
//   });
  
//   const bgY = useTransform(smoothProgress, [0, 1], [0, 30]);

//   return (
//     <section className="products" ref={sectionRef} id="products">
//       {/* Background */}
//       <div className="products-bg-wrapper">
//         <motion.div 
//           className="products-bg-image"
//           style={{ y: bgY }}
//         >
//           <img src={productsBg} alt="" loading="lazy" />
//         </motion.div>
//         <div className="products-bg-overlay" />
//       </div>

//       <div className="products-container">
//         {/* Section Header */}
//         <motion.div
//           className="products-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, ease: [0.22, 0, 0, 1] }}
//         >
//           <div className="products-badge">
//             <ShoppingBag size={14} />
//             <span>Our Products</span>
//           </div>

//           <h2 className="products-heading">
//             Sustainable products for{" "}
//             <span className="text-gradient">a healthier tomorrow</span>
//           </h2>

//           <p className="products-desc">
//             Every product from Gills & Greens is developed using sustainable 
//             aquaponics, ensuring freshness, quality, and environmental responsibility.
//           </p>
//         </motion.div>

//         {/* Products Grid */}
//         <div className="products-grid">
//           {products.map((item, index) => (
//             <motion.div
//               key={item.id}
//               className="product-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-30px" }}
//               transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 0, 0, 1] }}
//               whileHover={{ y: -8 }}
//             >
//               {/* Card Image */}
//               <div className="product-card-image">
//                 <img src={item.image} alt={item.title} loading="lazy" />
//               </div>

//               {/* Dark Overlay */}
//               <div className="product-card-overlay" />

//               {/* Badge */}
//               <div className="product-card-badge" style={{ backgroundColor: `${item.color}30`, borderColor: `${item.color}50` }}>
//                 {item.badge}
//               </div>

//               {/* Content */}
//               <div className="product-card-content">
//                 <div className="product-card-icon" style={{ color: item.color }}>
//                   {item.icon}
//                 </div>
                
//                 <h3 className="product-card-title">{item.title}</h3>
//                 <p className="product-card-desc">{item.description}</p>
                
//                 <button className="product-card-btn">
//                   <span>Learn More</span>
//                   <ArrowRight size={16} strokeWidth={2} />
//                 </button>
//               </div>

//               {/* Hover Line */}
//               <div className="product-card-line" style={{ background: item.color }} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Leaf,
  Fish,
  Recycle,
  Building2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import "./Products.css";

// Import product images
import greensImg from "../../assets/pro1.png";
import fishImg from "../../assets/pro2.png";
import compostImg from "../../assets/pro3.png";
import bulkImg from "../../assets/pro4.png";

const products = [
  {
    id: 1,
    icon: <Leaf size={20} strokeWidth={1.5} />,
    title: "Fresh Organic Greens",
    description: "Premium pesticide-free leafy greens cultivated using advanced aquaponics systems.",
    badge: "Best Seller",
    image: greensImg,
    color: "#22c55e",
  },
  {
    id: 2,
    icon: <Fish size={20} strokeWidth={1.5} />,
    title: "Chemical-Free Fresh Fish",
    description: "Naturally grown Tilapia and Koi fish raised in oxygen-rich recirculating water.",
    badge: "Premium",
    image: fishImg,
    color: "#3b82f6",
  },
  {
    id: 3,
    icon: <Recycle size={20} strokeWidth={1.5} />,
    title: "Organic Vermicompost",
    description: "Eco-friendly compost created from fish waste to naturally enrich agricultural soil.",
    badge: "Eco-Friendly",
    image: compostImg,
    color: "#f59e0b",
  },
  {
    id: 4,
    icon: <Building2 size={20} strokeWidth={1.5} />,
    title: "Bulk & Institutional Supply",
    description: "Reliable large-volume supply of fresh greens and fish for retailers and hotels.",
    badge: "B2B",
    image: bulkImg,
    color: "#8b5cf6",
  },
];

const Products = () => {
  const sectionRef = useRef(null);

  return (
    <section className="products" ref={sectionRef} id="products">
      <div className="products-container">
        {/* Section Header */}
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 0, 0, 1] }}
        >
          <div className="products-badge">
            <ShoppingBag size={14} />
            <span>Our Products</span>
          </div>

          <h2 className="products-heading">
            Sustainable products for{" "}
            <span className="text-gradient">a healthier tomorrow</span>
          </h2>

          <p className="products-desc">
            Every product from Gills & Greens is developed using sustainable 
            aquaponics, ensuring freshness, quality, and environmental responsibility.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 0, 0, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Card Image */}
              <div className="product-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              {/* Dark Overlay */}
              <div className="product-card-overlay" />

              {/* Badge */}
              <div className="product-card-badge" style={{ backgroundColor: `${item.color}25`, borderColor: `${item.color}40`, color: item.color }}>
                {item.badge}
              </div>

              {/* Content */}
              <div className="product-card-content">
                <div className="product-card-icon">
                  {item.icon}
                </div>
                
                <h3 className="product-card-title">{item.title}</h3>
                <p className="product-card-desc">{item.description}</p>
                
                {/* <button className="product-card-btn">
                  <span>Learn More</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </button> */}
              </div>

              {/* Hover Line */}
              <div className="product-card-line" style={{ background: item.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;