"use client";

import { useState } from "react";
import styles from "./career.module.css";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faClock,
  faArrowRight,
  faXmark,
  faBriefcase,
  faUserTie,
  faPaperPlane,
  faFileArrowUp,
  faRocket,
  faLightbulb,
  faWrench,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../UI/Modal/Modal";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Build scalable systems and lead technical initiatives in a fast-paced environment.",

    responsibilities: [
      "Build scalable frontend and backend systems",
      "Lead technical architecture decisions",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
    ],
  },

  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Shape user experiences and create beautiful, intuitive interfaces.",

    responsibilities: [
      "Design modern UI systems",
      "Create interactive prototypes",
      "Conduct UX research",
      "Collaborate with developers",
    ],
  },

  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Drive growth strategies and build brand awareness.",

    responsibilities: [
      "Plan growth campaigns",
      "Manage paid ads",
      "Improve conversion funnels",
      "Analyze campaign performance",
    ],
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <div className={styles.careerPage}>
        {/* HERO */}

        <section className={styles.heroSection}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className={styles.heroInner}
            >
              <motion.h1 variants={fadeUp} className={styles.heroTitle}>
                Build Your Career With Us
              </motion.h1>

              <motion.p variants={fadeUp} className={styles.heroText}>
                Join a team of innovators shaping the future. We're looking for
                talented individuals ready to make an impact.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* DNA */}

        <section className={styles.dnaSection}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
                <div className={styles.departmentBadge}>The OutMazed DNA</div>
              </motion.div>

              <motion.h2 variants={fadeUp} className={styles.dnaHeading}>
                Our Cultural Commitments
              </motion.h2>

              <motion.div
                className={styles.dnaGrid}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
              >
                <motion.div variants={fadeUp} className={styles.dnaCard}>
                  <div className={styles.dnaIcon}>
                    <FontAwesomeIcon
                      icon={faRocket}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <h3 className={styles.dnaCardTitle}>
                    Solve for the Traveler
                  </h3>
                  <p className={styles.dnaCardText}>
                    We're here to create exceptional travel experiences by
                    delivering real value for every traveler. Because we don't
                    just plan trips—we build trust, inspire unforgettable
                    journeys, and create a travel company people return to again
                    and again.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.dnaCard}>
                  <div className={styles.dnaIcon}>
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <h3 className={styles.dnaCardTitle}>
                    Be Bold. Explore Further.
                  </h3>
                  <p className={styles.dnaCardText}>
                    We choose adventure over routine. We embrace new ideas, move
                    with curiosity, learn from every experience, and see every
                    journey as an opportunity to grow—both for our travelers and
                    ourselves.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.dnaCard}>
                  <div className={styles.dnaIcon}>
                    <FontAwesomeIcon
                      icon={faWrench}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <h3 className={styles.dnaCardTitle}>
                    Align, Adapt & Journey Forward
                  </h3>
                  <p className={styles.dnaCardText}>
                    Travel moves fast, and so do we. We stay aligned on what
                    matters most, adapt to every new destination and challenge,
                    and take action to create seamless experiences without
                    waiting for perfect conditions.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.dnaCard}>
                  <div className={styles.dnaIcon}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <h3 className={styles.dnaCardTitle}>
                    Deliver Every Journey with HEART
                  </h3>
                  <p className={styles.dnaCardText}>
                    We make every experience better—for our travelers and for
                    each other. We lead with humility, empathy, adaptability,
                    care, and transparency to create journeys people truly
                    remember.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* JOBS */}

        <section className={styles.jobsSection}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="d-flex flex-column gap-4"
            >
              <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
                Open Positions
              </motion.h2>
              {jobs.map((job) => (
                <motion.div variants={fadeUp}>
                  <div
                    key={job.id}
                    className={styles.jobCard}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
                      <div>
                        <h3 className={styles.jobTitle}>{job.title}</h3>

                        <div className={styles.departmentBadge}>
                          {job.department}
                        </div>
                      </div>

                      <div className={styles.viewBtn}>
                        <span>View Role</span>

                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className={styles.arrowIcon}
                        />
                      </div>
                    </div>

                    <p className={styles.jobDescription}>{job.description}</p>

                    <div className="d-flex flex-wrap gap-4">
                      <div className={styles.jobMeta}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className={styles.metaIcon}
                        />

                        <span>{job.location}</span>
                      </div>

                      <div className={styles.jobMeta}>
                        <FontAwesomeIcon
                          icon={faClock}
                          className={styles.metaIcon}
                        />

                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}

        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div variants={fadeUp} className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Don't See Your Role?</h2>

              <p className={styles.ctaText}>
                We're always looking for talented people to join our team. Send
                us your resume and let us know how you can contribute.
              </p>

              <a href="/contact/careers" className={styles.ctaButton}>
                Send General Application
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && (
          <>
            <div className={styles.modalTop}>
              <div className={styles.departmentBadge}>
                {selectedJob.department}
              </div>

              <div className={styles.modalTitleWrap}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className={styles.modalTitleIcon}
                />

                <h2 className={styles.modalTitle}>{selectedJob.title}</h2>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className={styles.jobMeta}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.metaIcon}
                  />

                  <span>{selectedJob.location}</span>
                </div>

                <div className={styles.jobMeta}>
                  <FontAwesomeIcon icon={faClock} className={styles.metaIcon} />

                  <span>{selectedJob.type}</span>
                </div>
              </div>
            </div>

            <p className={styles.modalDescription}>{selectedJob.description}</p>

            <div className={styles.modalSection}>
              <h4>Responsibilities</h4>

              <ul>
                {selectedJob.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* APPLY FORM */}

            <div className={styles.applyBox}>
              <div className={styles.applyTitleWrap}>
                <FontAwesomeIcon
                  icon={faUserTie}
                  className={styles.applyIcon}
                />

                <h4 className={styles.applyTitle}>Apply for this role</h4>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={styles.input}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={styles.input}
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Portfolio / LinkedIn"
                    className={styles.input}
                  />
                </div>

                <div className="col-12">
                  <label className={styles.uploadBox}>
                    <input type="file" className={styles.fileInput} />

                    <FontAwesomeIcon
                      icon={faFileArrowUp}
                      className={styles.uploadIcon}
                    />

                    <div>
                      <h5>Upload Resume / CV</h5>

                      <p>PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  </label>
                </div>

                <div className="col-12">
                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className={styles.applyBtn}>
                    <FontAwesomeIcon icon={faPaperPlane} />

                    <span>Submit Application</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
