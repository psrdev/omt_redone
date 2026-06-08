"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BrochureDownloads.module.css";
import { fadeUp, stagger } from "@/utils/motion";

const brochures = [
  {
    title: "Quick Overview Profile",
    desc: "A concise snapshot of OutMazed Tourism, its ecosystem, and core business focus.",
    href: "/brochures/quick-overview-profile.pdf",
  },
  {
    title: "Company Profile & Brochure",
    desc: "A complete company profile covering OutMazed Tourism, services, brands, and capabilities.",
    href: "/brochures/company-profile-brochure.pdf",
  },
  {
    title: "Wholesale Tourism B2B Brochure",
    desc: "Dedicated B2B brochure for travel agents, partners, and wholesale tourism distribution.",
    href: "/brochures/wholesale-tourism-b2b-brochure.pdf",
  },
  {
    title: "Commercial Brochure",
    desc: "Commercial-focused brochure covering partnership, distribution, and growth opportunities.",
    href: "/brochures/commercial-brochure.pdf",
  },
];

export default function BrochureDownloads() {
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
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Downloads</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Explore OutMazed <br />
            <em>through our brochures.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p className={styles.bodyText} variants={fadeUp}>
            Download our company profiles and commercial brochures to understand
            the OutMazed ecosystem, services, business model, and partnership
            opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.downloadBox}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div className={styles.featurePanel} variants={fadeUp}>
            <span>Brochures Library</span>

            <h3>Company documents ready to download.</h3>

            <p>
              Choose the brochure that best matches your requirement — from a
              quick overview to detailed B2B and commercial information.
            </p>
          </motion.div>

          <div className={styles.list}>
            {brochures.map((item) => (
              <motion.article
                key={item.title}
                className={styles.card}
                variants={fadeUp}
              >
                <Link href={item.href} className={styles.cardLink} download>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <span className={styles.downloadBtn}>
                    Download
                    <span>↓</span>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
