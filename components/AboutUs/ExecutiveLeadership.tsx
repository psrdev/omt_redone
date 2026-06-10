"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ExecutiveLeadership.module.css";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

const leaders = [
  {
    name: "Berna Korkmaz",
    role: "Global Commercial Director",
    image: "/images/leadership/berna.png",
    tags: ["Global Sourcing", "WebBeds Alumni"],
    focus: "Commercial Strategy",
    desc: "Berna Korkmaz is a seasoned tourism and hospitality commercial leader with deep experience in global B2B and B2C sourcing and distribution. At OutMazed® Tourism, Berna leads Global Commercial Strategy and API Connectivity, driving supplier partnerships, expanding distribution networks, and strengthening global contracting frameworks.",
  },
  {
    name: "Karan Wadhwani",
    role: "Head of Technology",
    image: "/images/leadership/karan.png",
    tags: ["Travel Technology", "IP Leader"],
    focus: "Technology Infrastructure",
    desc: "Karan is a Travel Technology specialist with strong experience building scalable, secure, and performance-driven platforms. He leads API connectivity, automation frameworks, integrations, and data-driven infrastructure ensuring technology remains a commercial enabler.",
  },
];

export default function ExecutiveLeadership() {
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
            Leadership
          </motion.div>

          <div className={styles.headerGrid}>
            <h2 className={styles.headline}>
              Commercial Expertise Meets <em>Technology Innovation</em>
            </h2>

            <p className={styles.bodyText}>
              Supporting OutMazed®'s growth through global supplier
              relationships, scalable infrastructure, operational excellence,
              and long-term value creation.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.board} variants={stagger}>
          {leaders.map((leader, idx) => (
            <motion.article
              key={leader.name}
              className={`${styles.card} ${
                idx % 2 === 1 ? styles.reverse : ""
              }`}
              variants={fadeUp}
            >
              <span className={styles.cornerTL} />
              <span className={styles.cornerTR} />
              <span className={styles.cornerBL} />
              <span className={styles.cornerBR} />

              <div className={styles.imagePanel}>
                <div className={styles.imageWrap}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 38vw"
                    className={styles.image}
                  />
                </div>

                <div className={styles.verticalRole}>
                  <span>{leader.focus}</span>
                </div>
              </div>

              <div className={styles.contentPanel}>
                <span className={styles.eyebrow}>Leadership Team</span>

                <div className={styles.titleBlock}>
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>

                <div className={styles.tags}>
                  {leader.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p className={styles.description}>{leader.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
