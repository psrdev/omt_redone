"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BrochureDownloads.module.css";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

const brochures = [
  {
    title: "Company Profile",
    label: "Corporate Overview",
    desc: "A detailed company profile covering OutMazed Tourism, its ecosystem, services, brands, and capabilities.",
    href: "/brochures/company-profile-brochure.pdf",
  },
  {
    title: "Commercial Brochure",
    label: "Partnership Document",
    desc: "A commercial-focused brochure covering distribution, partnership opportunities, and business growth potential.",
    href: "/brochures/commercial-brochure.pdf",
  },
];

export default function BrochureDownloads() {
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <motion.div
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div className={styles.header} variants={fadeUp}>
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            Downloads
          </motion.div>

          <div className={styles.headerGrid}>
            <h2 className={styles.headline}>
              Download The Documents <em>That Matter Most</em>
            </h2>

            <p className={styles.bodyText}>
              Access our key company and commercial documents to understand the
              OutMazed ecosystem, business model, services, and partnership
              opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.downloadGrid} variants={stagger}>
          {brochures.map((item) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={fadeUp}
            >
              <span className={styles.cornerTL} />
              <span className={styles.cornerTR} />
              <span className={styles.cornerBL} />
              <span className={styles.cornerBR} />

              <Link href={item.href} className={styles.cardLink} download>
                <div className={styles.previewPanel}>
                  <div className={styles.documentMockup}>
                    <span className={styles.pdfTag}>PDF</span>

                    <div className={styles.docHeader}>
                      <span />
                      <span />
                    </div>

                    <div className={styles.docTitle}>
                      <span />
                      <span />
                    </div>

                    <div className={styles.docLines}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.docSeal}>
                      <span>OM</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <div className={styles.downloadBtn}>
                    <span className={styles.btnText}>Download PDF</span>
                    <span className={styles.btnIcon}>↓</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
