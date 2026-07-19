// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Send,
// } from "lucide-react";

// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact section">

//       <div className="container">

//         <motion.div
//           className="section-heading"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >

//           <span className="section-tag">
//             Contact Us
//           </span>

//           <h2>
//             Let's Start A
//             <br />
//             Sustainable Journey
//           </h2>

//           <p>
//             We'd love to hear from you. Whether you're interested in
//             aquaponics, partnerships, investments, or sustainable
//             farming solutions, our team is ready to connect.
//           </p>

//         </motion.div>

//         <div className="contact-wrapper">

//           {/* Left Side */}

//           <motion.div
//             className="contact-info"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >

//             <div className="info-card">

//               <Phone size={24} />

//               <div>
//                 <h4>Call Us</h4>

//                 <p>+91 97175 94510</p>

//                 <p>+91 82771 99510</p>
//               </div>

//             </div>

//             <div className="info-card">

//               <Mail size={24} />

//               <div>
//                 <h4>Email</h4>

//                 <p>gillsandgreensbluehills@gmail.com</p>
//               </div>

//             </div>

//             <div className="info-card">

//               <MapPin size={24} />

//               <div>

//                 <h4>Location</h4>

//                 <p>
//                   No.5/130-C Village Jackanarai,
//                   Aravenu,
//                   Kotagiri,
//                   Nilgiris,
//                   Tamil Nadu - 643201
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//           {/* Right Side */}

//           <motion.div
//             className="contact-form"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >

//             <form>

//               <input
//                 type="text"
//                 placeholder="Your Name"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//               />

//               <textarea
//                 rows="5"
//                 placeholder="Tell us about your requirement..."
//               ></textarea>

//               <button type="submit">

//                 Send Message

//                 <Send size={18} />

//               </button>

//             </form>

//           </motion.div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Contact;



import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" ref={sectionRef} id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 0, 0, 1] }}
        >
          <div className="contact-header-badge">
            <Sparkles size={14} />
            <span>Contact Us</span>
          </div>

          <h2 className="contact-heading">
            Let's start a{" "}
            <span className="text-gradient">sustainable</span>
            <br />
            journey together
          </h2>

          <p className="contact-header-desc">
            We'd love to hear from you. Whether you're interested in
            aquaponics, partnerships, investments, or sustainable
            farming solutions, our team is ready to connect.
          </p>
        </motion.div>

        {/* Contact Wrapper */}
        <div className="contact-wrapper">
          {/* Left - Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Phone Card */}
            <motion.div 
              className="info-card"
              whileHover={{ x: 6, borderColor: "rgba(34, 197, 94, 0.3)" }}
            >
              <div className="info-card-icon info-card-icon-green">
                <Phone size={22} />
              </div>
              <div className="info-card-content">
                <h4>Call Us</h4>
                <a href="tel:+919717594510" className="info-link">+91 97175 94510</a>
                <a href="tel:+918277199510" className="info-link">+91 82771 99510</a>
                <a href="tel:+919599699510" className="info-link">+91 95996 99510</a>
              </div>
              <div className="info-card-accent info-accent-green" />
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="info-card"
              whileHover={{ x: 6, borderColor: "rgba(59, 130, 246, 0.3)" }}
            >
              <div className="info-card-icon info-card-icon-blue">
                <Mail size={22} />
              </div>
              <div className="info-card-content">
                <h4>Email</h4>
                <a href="mailto:gillsandgreensbluehills@gmail.com" className="info-link">
                  gillsandgreensbluehills@gmail.com
                </a>
              </div>
              <div className="info-card-accent info-accent-blue" />
            </motion.div>

            {/* Location Card */}
            <motion.div 
              className="info-card"
              whileHover={{ x: 6, borderColor: "rgba(245, 158, 11, 0.3)" }}
            >
              <div className="info-card-icon info-card-icon-amber">
                <MapPin size={22} />
              </div>
              <div className="info-card-content">
                <h4>Location</h4>
                <p className="info-address">
                  Gills and Greens Private Limited<br />
                  KAIRBETTA VILLAGE<br />
                  Opp to GP CHOCOLATE<br />
                  DONNINGTON Post, KOTAGIRI<br />
                  The Nilgiris, Tamilnadu - 643217
                </p>
              </div>
              <div className="info-card-accent info-accent-amber" />
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              className="info-card"
              whileHover={{ x: 6, borderColor: "rgba(139, 92, 246, 0.3)" }}
            >
              <div className="info-card-icon info-card-icon-purple">
                <Clock size={22} />
              </div>
              <div className="info-card-content">
                <h4>Business Hours</h4>
                <p className="info-text">Monday - Saturday</p>
                <p className="info-text">9:00 AM - 6:00 PM</p>
              </div>
              <div className="info-card-accent info-accent-purple" />
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <div className="contact-form-card">
              {/* Form Header */}
              <div className="form-header">
                <h3>Send us a message</h3>
                <p>Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row form-row-split">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirement, inquiry, or partnership interest..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`form-submit-btn ${submitted ? 'submitted' : ''}`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                  <span className="btn-shine" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;