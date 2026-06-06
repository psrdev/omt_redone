"use client";

import { motion } from "framer-motion";
import styles from "./WhoWeAre.module.css";

const items = [
  {
    id: "01",
    title: "Redefining Travel Distribution",
    description:
      "OutMazed® Tourism is redefining how travel products are distributed, bundled, and monetized across global markets.",
  },
  {
    id: "02",
    title: "Award Winning Excellence",
    description:
      "Recognized with the 2025 International Explorer Award for Digital Travel Service Provider of the Year.",
  },
  {
    id: "03",
    title: "Technology Driven",
    description:
      "Operating at the intersection of technology, distribution and destination expertise through scalable API-driven infrastructure.",
  },
  {
    id: "04",
    title: "B2B + B2C Ecosystem",
    description:
      "Powering both consumer and partner ecosystems through a connected travel platform built for scale.",
  },
  {
    id: "05",
    title: "Sustainable Growth",
    description:
      "Combining high-volume distribution with strong margin control to enable long-term market expansion.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            WHO WE ARE
          </motion.span>

          <motion.h2 variants={fadeUp}>
            Building The Future Of <br />
            <em>Travel Distribution.</em>
          </motion.h2>

          <motion.p variants={fadeUp}>
            OutMazed® Tourism brings travel expertise, destination knowledge,
            digital infrastructure, and commercial distribution into one
            connected ecosystem.
          </motion.p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.statementPanel}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.panelLabel}>OutMazed Tourism</span>

            <h3>
              Not just a travel company — a distribution engine built from Dubai
              for the world.
            </h3>

            <div className={styles.metrics}>
              <div>
                <strong>B2B</strong>
                <span>Partner ecosystem</span>
              </div>

              <div>
                <strong>B2C</strong>
                <span>Consumer travel brands</span>
              </div>

              <div>
                <strong>API</strong>
                <span>Scalable infrastructure</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.list}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            {items.map((item) => (
              <motion.article
                key={item.id}
                className={styles.item}
                variants={fadeUp}
              >
                <span className={styles.number}>{item.id}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
