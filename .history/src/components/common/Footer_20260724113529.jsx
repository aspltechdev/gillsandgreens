// import {
//   Leaf,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="container">

//         <div className="footer-grid">

//           {/* Company */}

//           <div className="footer-col">

//             <div className="footer-logo">

//               <Leaf size={28} />

//               <h2>Gills & Greens</h2>

//             </div>

//             <p>
//               Building a sustainable future through innovative
//               aquaponics farming that produces chemical-free fish
//               and pesticide-free greens while empowering farmers
//               across India.
//             </p>

//           </div>

//           {/* Quick Links */}

//           <div className="footer-col">

//             <h3>Quick Links</h3>

//             <ul>

//               <li>
//                 <a href="#hero">Home</a>
//               </li>

//               <li>
//                 <a href="#about">About</a>
//               </li>

//               <li>
//                 <a href="#solution">Solution</a>
//               </li>

//               <li>
//                 <a href="#products">Products</a>
//               </li>

//               <li>
//                 <a href="#founder">Leadership</a>
//               </li>

//               <li>
//                 <a href="#contact">Contact</a>
//               </li>

//             </ul>

//           </div>

//           {/* Products */}

//           <div className="footer-col">

//             <h3>Our Products</h3>

//             <ul>

//               <li>Fresh Organic Greens</li>

//               <li>Chemical-Free Fish</li>

//               <li>Organic Vermicompost</li>

//               <li>Bulk & Institutional Supply</li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div className="footer-col">

//             <h3>Contact Info</h3>

//             <div className="footer-contact">

//               <p>
//                 <Phone size={18} />
//                 <span>+91 97175 94510</span>
//               </p>

//               <p>
//                 <Phone size={18} />
//                 <span>+91 82771 99510</span>
//               </p>

//               <p>
//                 <Mail size={18} />
//                 <span>gillsandgreensbluehills@gmail.com</span>
//               </p>

//               <p>
//                 <MapPin size={18} />
//                 <span>
//                   No. 5/130-C, Village Jackanarai,
//                   Aravenu, Kotagiri,
//                   Nilgiris, Tamil Nadu - 643201
//                 </span>
//               </p>

//             </div>

//           </div>

//         </div>

//         {/* Footer Bottom */}

//         <div className="footer-bottom">

//           <p>
//             © {new Date().getFullYear()} Gills & Greens Private Limited.
//             All Rights Reserved.
//           </p>

//           <div className="footer-social">

//             <a
//               href="#"
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="#"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="#"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn />
//             </a>

//             <a
//               href="#"
//               aria-label="YouTube"
//             >
//               <FaYoutube />
//             </a>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Solution", href: "solution" },
    { name: "Products", href: "products" },
    { name: "Leadership", href: "founder" },
    { name: "Contact", href: "contact" },
  ];

  const products = [
    "Fresh Organic Greens",
    "Chemical-Free Fish",
    "Organic Vermicompost",
    "Bulk & Institutional Supply",
  ];

  return (
    <footer className="footer">
      {/* Top Gradient Border */}
      <div className="footer-top-border" />

      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-col-company">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Leaf size={26} />
              </div>
              <div className="footer-logo-text">
                <h2>Gills & Greens</h2>
                <span>Sustainable Aquaponics</span>
              </div>
            </div>

            <p className="footer-description">
              Building a sustainable future through innovative
              aquaponics farming that produces chemical-free fish
              and pesticide-free greens while empowering farmers
              across India.
            </p>

            {/* Social Links */}
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    <ArrowUpRight size={14} className="link-arrow" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Products</h3>
            <ul className="footer-list">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="footer-list-item">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="footer-contact">
              <a href="tel:+919717594510" className="footer-contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <span>+91 97175 94510</span>
              </a>

              <a href="tel:+918277199510" className="footer-contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <span>+91 82771 99510</span>
              </a>

              <a href="tel:+919599699510" className="footer-contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <span>+91 95996 99510</span>
              </a>

              <a href="mailto:gillsandgreensbluehills@gmail.com" className="footer-contact-item">
                <div className="contact-icon">
                  <Mail size={16} />
                </div>
                <span>info@gillsandgreens.in</span>
              </a>

              <div className="footer-contact-item footer-address">
                <div className="contact-icon">
                  <MapPin size={16} />
                </div>
                <span>
                  Gills and Greens Private Limited<br />
                  KAIRBETTA VILLAGE, Opp to GP CHOCOLATE<br />
                  DONNINGTON Post, KOTAGIRI<br />
                  The Nilgiris, Tamilnadu - 643217
                </span>
              </div>

              <div className="footer-contact-item">
                <div className="contact-icon">
                  <Clock size={16} />
                </div>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Gills & Greens Private Limited. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <button onClick={() => scrollToSection("hero")} className="bottom-link">Privacy Policy</button>
            <span className="bottom-divider">|</span>
            <button onClick={() => scrollToSection("hero")} className="bottom-link">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;