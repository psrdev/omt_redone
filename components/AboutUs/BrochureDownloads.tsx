"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BrochureDownloads.module.css";
import { fadeUp, stagger } from "@/utils/motion";

const brochures = [
  {
    title: "Company Profile",
    desc: "A detailed company profile covering OutMazed Tourism, its ecosystem, services, brands, and capabilities.",
    href: "/brochures/company-profile-brochure.pdf",
  },
  {
    title: "Commercial Brochure",
    desc: "A commercial-focused brochure covering distribution, partnership opportunities, and business growth potential.",
    href: "/brochures/commercial-brochure.pdf",
  },
];

export default function BrochureDownloads() {
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
            <span className={styles.eyebrowText}>Downloads</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Download the documents <br />
            <em>that matter most.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p className={styles.bodyText} variants={fadeUp}>
            Access our key company and commercial documents to understand the
            OutMazed ecosystem, business model, services, and partnership
            opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.downloadGrid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {brochures.map((item) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={fadeUp}
            >
              <Link href={item.href} className={styles.cardLink} download>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <span className={styles.downloadBtn}>
                  Download PDF <span>↓</span>
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
