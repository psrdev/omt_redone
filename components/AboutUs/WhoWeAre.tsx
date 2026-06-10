"use client";

import { motion } from "framer-motion";
import styles from "./WhoWeAre.module.css";
import { fadeUp, stagger } from "@/utils/motion";

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

const pillars = [
  {
    title: "B2B",
    desc: "Travel Partner Network",
  },
  {
    title: "B2C",
    desc: "Consumer Travel Brands",
  },
  {
    title: "API",
    desc: "Distribution Infrastructure",
  },
  {
    title: "Corporate",
    desc: "Business Travel Solutions",
  },
  {
    title: "Tech",
    desc: "Digital Innovation Stack",
  },
];

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Who We Are</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Building The Future Of <br />
            <em>Travel Distribution.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p className={styles.bodyText} variants={fadeUp}>
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

            <div className={styles.pillars}>
              {pillars.map((pillar) => (
                <div key={pillar.title} className={styles.pillar}>
                  <strong>{pillar.title}</strong>
                  <span>{pillar.desc}</span>
                </div>
              ))}
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
