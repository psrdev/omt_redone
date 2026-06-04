import styles from "./TravelEcosystemSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "@/utils/motion";

export default function TravelEcosystemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <motion.div
              className={styles.image}
              initial="hidden"
              variants={imageReveal}
              whileInView="show"
              viewport={VIEWPORT}
            >
              <Image
                src="/images/home/travel-ecosystem-illustration.png"
                alt="Ecosystem"
                fill
              />
            </motion.div>
          </div>
          <motion.div
            className={styles.content}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.span
              className={styles.tag}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              DELIVERING A COMPLETE ECOSYSTEM
            </motion.span>

            <motion.h2
              className={styles.headline}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              A Complete
              <br />
              <span className={styles.headlineItalic}>Travel</span>
              <br /> Infrastructure.
            </motion.h2>

            <motion.p
              className={styles.description}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              OutMazed Tourism combines leisure travel, visa services, wholesale
              distribution, corporate travel, and technology into one connected
              ecosystem designed for modern travelers, businesses, and partners.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
