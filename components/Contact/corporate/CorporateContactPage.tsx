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
    value: "outmazedtourism.com",
    href: "https://outmazedtourism.com",
    icon: faGlobe,
    external: true,
  },
  {
    title: "Phone",
    value: "+971 (0)4 223 5534",
    href: "tel:+97142235534",
    icon: faPhone,
  },
  {
    title: "Email",
    value: "corporate@outmazedtourism.com",
    href: "mailto:corporate@outmazedtourism.com",
    icon: faEnvelope,
  },
];

export default function CorporateContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyWebsite: "",
    companyEmail: "",
    subject: "",
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

    console.log("Corporate Form submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        companyWebsite: "",
        companyEmail: "",
        subject: "",
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
            <span className={styles.eyebrowText}>Corporate Contact</span>
          </div>

          <h2>
            Business Travel Support <br />
            <em>For Modern Companies.</em>
          </h2>

          <p>
            Connect with our corporate team for business travel management,
            company travel requirements, employee travel support, and tailored
            corporate tourism solutions.
          </p>
        </motion.div>

        <motion.div className={styles.contactLayout} variants={fadeUp}>
          <aside className={styles.infoColumn}>
            <div className={styles.panelFrame} />

            <div className={styles.infoIntro}>
              <span className={styles.panelLabel}>Corporate Desk</span>

              <h3>Get In Touch</h3>

              <p>
                For corporate travel planning, company accounts, business trip
                support, group travel, and long-term travel partnerships.
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

              <h3>Tell us about your company</h3>

              <p>
                Share your corporate travel requirement and our team will
                connect with the right solution.
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

              <div className={styles.inputGroup}>
                <label htmlFor="company">
                  <FontAwesomeIcon icon={faBriefcase} />
                  Company Name <span>*</span>
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                />
              </div>

              <div className={styles.twoColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="companyWebsite">
                    <FontAwesomeIcon icon={faGlobe} />
                    Company Website <span>*</span>
                  </label>

                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    required
                    placeholder="https://example.com"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="companyEmail">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Company Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                    placeholder="corporate@company.com"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">
                  <FontAwesomeIcon icon={faComment} />
                  Subject <span>*</span>
                </label>

                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your corporate travel inquiry..."
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
