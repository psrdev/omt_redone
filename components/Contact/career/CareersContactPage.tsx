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
  faComment,
  faPaperPlane,
  faCheckCircle,
  faLocationDot,
  faArrowRight,
  faFileLines,
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
    value: "humanresources@outmazed.com",
    href: "mailto:humanresources@outmazed.com",
    icon: faEnvelope,
  },
];

export default function CareersContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      setResume(e.target.files?.[0] || null);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Career Form submitted:", {
      ...formData,
      resume,
    });

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setResume(null);
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
            <span className={styles.eyebrowText}>Careers</span>
          </div>

          <h2>
            Build Your Career <br />
            <em>With OutMazed.</em>
          </h2>

          <p>
            Interested in joining our team? Send your details and resume to our
            HR team for current or future career opportunities across travel,
            tourism, operations, sales, marketing, and technology.
          </p>
        </motion.div>

        <motion.div className={styles.contactLayout} variants={fadeUp}>
          <aside className={styles.infoColumn}>
            <div className={styles.panelFrame} />

            <div className={styles.infoIntro}>
              <span className={styles.panelLabel}>HR Desk</span>

              <h3>Get In Touch</h3>

              <p>
                For job applications, career enquiries, internship requests, HR
                communication, and recruitment-related support.
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
              <span className={styles.panelLabel}>Apply Now</span>

              <h3>Share your profile</h3>

              <p>
                Fill out the form below and upload your CV. Our HR team will
                review your application and contact you when suitable
                opportunities are available.
              </p>
            </div>

            {submitted && (
              <div className={styles.successBox} role="alert">
                <FontAwesomeIcon icon={faCheckCircle} />

                <span>
                  Thank you! We&apos;ve received your application. We&apos;ll be
                  in touch shortly.
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

              <div className={styles.uploadGroup}>
                <label htmlFor="resume" className={styles.uploadLabel}>
                  <span className={styles.uploadIcon}>
                    <FontAwesomeIcon icon={faFileLines} />
                  </span>

                  <span className={styles.uploadContent}>
                    <strong>Upload your CV / Resume</strong>
                    <small>
                      Drag your file here or click to browse. PDF, DOC, DOCX,
                      TXT — Max 5MB.
                    </small>

                    {resume && <em>{resume.name}</em>}
                  </span>
                </label>

                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx,.txt"
                  required
                  className={styles.uploadInput}
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
                  placeholder="Tell us about your experience or the role you are interested in..."
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Submit Application</span>
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
