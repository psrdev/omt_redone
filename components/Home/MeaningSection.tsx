import styles from "./MeaningSection.module.css";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

export default function MeaningSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.wordmark}>
            <span className={styles.out}>OUT</span>
            <span className={styles.mazed}>MAZED</span>
          </div>

          <div className={styles.content}>
            <motion.span
              className={styles.tag}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              THE MEANING BEHIND OUTMAZED®
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

            <p>
              The name OutMazed® is derived from two powerful principles:
              <strong> Outperform </strong>
              and
              <strong> Amazing</strong>.
            </p>

            <p>
              These values shape every experience we create, every partnership
              we build, and every journey we help bring to life.
            </p>

            <p>
              At OutMazed Tourism, we believe travel is more than reaching a
              destination. It is about creating experiences that enrich lives,
              strengthen connections, and inspire discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
