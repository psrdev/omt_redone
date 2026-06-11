"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../B2bContactPage.module.css";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faUser,
  faBriefcase,
  faComment,
  faPaperPlane,
  faCheckCircle,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const contactItems = [
  {
    title: "Website",
    value: "b2b.wholesaletourism.com",
    href: "https://b2b.wholesaletourism.com",
    icon: faGlobe,
    external: true,
  },
  {
    title: "Phone",
    value: "+971 (0)4 223 5534",
    href: "tel:+971422355340",
    icon: faPhone,
  },
  {
    title: "Email",
    value: "info@wholesaletourism.com",
    href: "mailto:info@wholesaletourism.com",
    icon: faEnvelope,
  },
];

export default function B2bContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.pattern} />

      <motion.div
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div className={styles.sectionHeader} variants={fadeUp}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Contact Details</span>
          </div>

          <h2>
            Reach The Right Team <br />
            <em>For Your Inquiry.</em>
          </h2>

          <p>
            Use the contact details below or send us a message directly. Our
            team will respond with the right information for your travel
            partnership or wholesale tourism requirement.
          </p>
        </motion.div>

        <motion.div className={styles.contactLayout} variants={fadeUp}>
          <aside className={styles.infoColumn}>
            <div className={styles.panelFrame} />

            <div className={styles.infoIntro}>
              <span className={styles.panelLabel}>Contact Desk</span>

              <h3>Get In Touch</h3>

              <p>
                For B2B travel products, hotel inventory, visa support,
                destination services, and commercial partnership enquiries.
              </p>
            </div>

            <div className={styles.contactCards}>
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <span className={styles.iconBox}>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>

                  <span className={styles.cardText}>
                    <strong>{item.title}</strong>
                    <span>{item.value}</span>
                  </span>

                  <span className={styles.cardArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.locationCard}>
              <span className={styles.locationIcon}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>

              <div>
                <strong>Location</strong>
                <p>
                  OutMazed<sup>®</sup> Tourism LLC, United Arab Emirates
                </p>
              </div>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.panelFrame} />

            <div className={styles.formHeader}>
              <span className={styles.panelLabel}>Send Inquiry</span>

              <h3>Tell us what you need</h3>

              <p>
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            {submitted && (
              <div className={styles.successBox} role="alert">
                <FontAwesomeIcon icon={faCheckCircle} />

                <span>
                  Thank you! We&apos;ve received your message. We&apos;ll be in
                  touch shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUser} />
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.twoColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 (0)4 223 5534"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="company">
                  <FontAwesomeIcon icon={faBriefcase} />
                  Company Name
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">
                  <FontAwesomeIcon icon={faComment} />
                  Message <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div className={styles.mapBlock} variants={fadeUp}>
          <div className={styles.mapText}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>Find Us</span>
            </div>

            <h3>
              OutMazed<sup>®</sup> Tourism Location
            </h3>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              title="OutMazed Tourism LLC Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5293502271115!2d55.3906747!3d25.1177885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651b6af26ee5%3A0xe96adbf8f38b0ece!2sOutMazed%C2%AE%20Tourism%20LLC!5e0!3m2!1sen!2sin!4v1777899401432!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
