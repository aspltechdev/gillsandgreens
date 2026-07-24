import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const navLinks = [
  { 
    name: "Home", 
    href: "#hero",
    description: "Discover sustainable farming"
  },
  { 
    name: "About", 
    href: "#about",
    description: "Our mission & values"
  },
  { 
    name: "Solutions", 
    href: "#solution",
    description: "Aquaponics technology"
  },
  { 
    name: "Products", 
    href: "#products",
    description: "Fresh & sustainable"
  },
  { 
    name: "Leadership", 
    href: "#founder",
    description: "Meet our team"
  },
  { 
    name: "Contact", 
    href: "#contact",
    description: "Get in touch"
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.995]);
  const logoWidth = useTransform(scrollY, [0, 200], ["45px", "40px"]);

  // Handle scroll effects
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenu(false);
    }
  };

  return (
    <>
      <motion.header
        ref={navbarRef}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{ 
          opacity: headerOpacity,
          scale: headerScale,
        }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, "#hero")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Gills & Greens Home"
          >
            <motion.div 
              className="logo-mark"
              style={{ width: logoWidth }}
            >
              <img 
                src={logo} 
                alt="Gills & Greens" 
                className="logo-image"
              />
              <div className="logo-ring" />
            </motion.div>
            <div className="logo-text">
              <span className="logo-name">Gills & Greens</span>
              <span className="logo-tagline">Fishy Friends for Greeny Ends</span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
            <ul className="nav-list">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="nav-item"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="nav-item-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="navbar-actions">
            {/* CTA Button */}
            <motion.button
              className="nav-cta"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="cta-text">Get Started</span>
              <ArrowRight size={16} strokeWidth={2.5} className="cta-icon" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="nav-menu-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              <div className={`menu-icon ${mobileMenu ? "open" : ""}`}>
                <span className="menu-icon-line" />
                <span className="menu-icon-line" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenu(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              mass: 1
            }}
          >
            <div className="mobile-drawer-header">
              <div className="mobile-logo">
                <img src={logo} alt="Gills & Greens" className="mobile-logo-img" />
                <div>
                  <span className="mobile-logo-name">Gills & Greens</span>
                  <span className="mobile-logo-tagline">Fishy Friends for Greeny Ends</span>
                </div>
              </div>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <nav className="mobile-nav" role="navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={item.href}
                      className="mobile-nav-item"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="mobile-nav-number">0{index + 1}</span>
                      <div className="mobile-nav-content">
                        <span className="mobile-nav-name">{item.name}</span>
                        <span className="mobile-nav-desc">{item.description}</span>
                      </div>
                      <ChevronRight size={16} strokeWidth={2} className="mobile-nav-arrow" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mobile-drawer-footer">
              <motion.button
                className="mobile-footer-cta"
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenu(false);
                }}
              >
                <span>Get Started</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;