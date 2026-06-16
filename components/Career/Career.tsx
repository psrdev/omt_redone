"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faClock,
  faFileArrowUp,
  faHeart,
  faLightbulb,
  faLocationDot,
  faPaperPlane,
  faRocket,
  faUserTie,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";
import Modal from "../UI/Modal/Modal";
import styles from "./career.module.css";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string[];
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Dubai, UAE",
    type: "Full-time",
    description: [
      "Build scalable systems and lead technical initiatives across our connected travel ecosystem.",
      "You will work closely with product, operations and leadership teams to create reliable digital platforms that support travelers, agents and partners.",
      "This role is ideal for someone who enjoys ownership, clean architecture and solving real business problems through technology.",
    ],
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
    description: [
      "Shape digital experiences and create elegant, intuitive interfaces for travelers and partners.",
      "You will convert complex travel workflows into simple, premium and conversion-focused user journeys.",
    ],
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
    description: [
      "Drive growth strategies, brand communication and high-performing marketing campaigns.",
      "You will work across multiple travel brands, campaigns and digital channels to increase visibility, engagement and qualified leads.",
    ],
    responsibilities: [
      "Plan growth campaigns",
      "Manage paid ads",
      "Improve conversion funnels",
      "Analyze campaign performance",
    ],
  },
];

const cultureItems = [
  {
    title: "Solve for the Traveler",
    icon: faRocket,
    text: "Create meaningful value through every service, system and interaction.",
  },
  {
    title: "Explore Further",
    icon: faLightbulb,
    text: "Bring new ideas, challenge ordinary thinking and improve continuously.",
  },
  {
    title: "Move With Ownership",
    icon: faWrench,
    text: "Stay aligned, act with clarity and take responsibility for the details.",
  },
  {
    title: "Deliver With HEART",
    icon: faHeart,
    text: "Lead with humility, empathy, adaptability, respect and transparency.",
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const applyFormRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    setSelectedJob(null);
    setSelectedFile("");
    setSubmitted(false);
  };

  const scrollToApplyForm = () => {
    applyFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file?.name ?? "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <main className={styles.careerPage}>
        <section className={styles.cultureSection}>
          <div className={styles.container}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className={styles.sectionIntro}
            >
              <motion.div variants={fadeUp}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span className={styles.eyebrowText}>The OutMazed DNA</span>
                </div>

                <h2>Values that guide how we work, grow and serve.</h2>
              </motion.div>

              <motion.p variants={fadeUp}>
                We are building a team where travel expertise, technology,
                creativity and service excellence work together.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className={styles.cultureGrid}
            >
              {cultureItems.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className={styles.cultureCard}
                >
                  <span className={styles.cultureIcon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>

                  <div className={styles.cultureText}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.jobsSection}>
          <div className={styles.container}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.div variants={fadeUp} className={styles.jobsHeader}>
                <div>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    <span className={styles.eyebrowText}>Open Positions</span>
                  </div>

                  <h2>Current opportunities.</h2>
                </div>

                <p>
                  All openings are listed below. Select a role to view details
                  and apply directly.
                </p>
              </motion.div>

              <div className={styles.jobsList}>
                {jobs.map((job) => (
                  <motion.button
                    key={job.id}
                    type="button"
                    variants={fadeUp}
                    className={styles.jobCard}
                    onClick={() => setSelectedJob(job)}
                  >
                    <span className={styles.jobMain}>
                      <span className={styles.department}>
                        {job.department}
                      </span>

                      <span className={styles.jobTitle}>{job.title}</span>

                      <span className={styles.jobDescription}>
                        {job.description[0]}
                      </span>
                    </span>

                    <span className={styles.jobInfo}>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {job.location}
                      </span>

                      <span>
                        <FontAwesomeIcon icon={faClock} />
                        {job.type}
                      </span>
                    </span>

                    <span className={styles.viewRole}>
                      View Role
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className={styles.ctaBox}
            >
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span className={styles.eyebrowText}>Future Roles</span>
                </div>

                <h2>Don&apos;t see the right opening?</h2>

                <p>
                  Send us your profile and tell us where you can create value
                  within the OutMazed ecosystem.
                </p>
              </div>

              <a href="/contact/careers" className={styles.ctaButton}>
                Send General Application
                <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Modal isOpen={!!selectedJob} onClose={closeModal}>
        {selectedJob && (
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.department}>
                  {selectedJob.department}
                </span>

                <h2>{selectedJob.title}</h2>

                <div className={styles.modalMeta}>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {selectedJob.location}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className={styles.modalApplyBtn}
                onClick={scrollToApplyForm}
              >
                Apply Now
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className={styles.modalStack}>
              <div className={styles.roleDetails}>
                <div className={styles.detailBlock}>
                  <h3>About the role</h3>

                  <div className={styles.descriptionContent}>
                    {selectedJob.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className={styles.detailBlock}>
                  <h3>Responsibilities</h3>

                  <ul>
                    {selectedJob.responsibilities.map((item) => (
                      <li key={item}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.applyBox} ref={applyFormRef}>
                <div className={styles.applyHeading}>
                  <FontAwesomeIcon icon={faUserTie} />

                  <div>
                    <span>Application Form</span>
                    <h3>Apply for this role</h3>
                  </div>
                </div>

                {submitted ? (
                  <div className={styles.successBox}>
                    <FontAwesomeIcon icon={faCheck} />
                    <div>
                      <h4>Application received</h4>
                      <p>This is ready for API, email or CRM integration.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <label>
                        <span>Full Name</span>
                        <input type="text" required />
                      </label>

                      <label>
                        <span>Email Address</span>
                        <input type="email" required />
                      </label>
                    </div>

                    <label>
                      <span>Portfolio / LinkedIn</span>
                      <input type="url" placeholder="https://" />
                    </label>

                    <label className={styles.uploadBox}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />

                      <FontAwesomeIcon icon={faFileArrowUp} />

                      <strong>{selectedFile || "Upload Resume / CV"}</strong>
                      <small>PDF, DOC, DOCX · Max 10MB</small>
                    </label>

                    <label>
                      <span>Tell us about yourself</span>
                      <textarea rows={5} required />
                    </label>

                    <button type="submit">
                      Submit Application
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
