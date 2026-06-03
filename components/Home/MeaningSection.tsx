import styles from "./MeaningSection.module.css";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

export default function MeaningSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.wordmark}>
            <motion.span
              className={styles.out}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              OUT
            </motion.span>
            <motion.span
              className={styles.mazed}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              MAZED
            </motion.span>
          </div>

          <div className={styles.content}>
            <motion.span
              className={styles.tag}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              THE MEANING BEHIND OUTMAZED<sup>®</sup>
            </motion.span>

            <motion.h2
              className={styles.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              Outperform.
              <br />
              Amazing.
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.p variants={fadeUp}>
                The name OutMazed<sup>®</sup> is derived from two powerful
                principles:
                <strong> Outperform </strong>
                and
                <strong> Amazing</strong>.
              </motion.p>

              <motion.p variants={fadeUp}>
                These values shape every experience we create, every partnership
                we build, and every journey we help bring to life.
              </motion.p>

              <motion.p variants={fadeUp}>
                At OutMazed Tourism, we believe travel is more than reaching a
                destination. It is about creating experiences that enrich lives,
                strengthen connections, and inspire discovery.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
