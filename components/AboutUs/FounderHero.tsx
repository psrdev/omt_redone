import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./FounderHero.module.css";
import { fadeUp, imageReveal, stagger, VIEWPORT } from "../../utils/motion";

const credentials = ["FCCA, UK", "ACA (ICAEW, UK)", "19+ Yrs Exp"];

export default function FounderHero() {
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />

      <motion.div
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div className={styles.heading} variants={fadeUp}>
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            Founder & Group CEO
          </motion.div>

          <h2 className={styles.headline}>
            A Technology-First Vision For <em>The Future Of Travel</em>
          </h2>

          <p>
            Leading OutMazed® Tourism with strategic discipline, scalable
            systems, performance-led governance, and a clear focus on building a
            globally competitive travel platform.
          </p>
        </motion.div>

        <div className={styles.founderCard}>
          <motion.div className={styles.visualWrap} variants={imageReveal}>
            <span className={styles.cornerTL} />
            <span className={styles.cornerTR} />
            <span className={styles.cornerBL} />
            <span className={styles.cornerBR} />

            <div className={styles.imageShell}>
              <Image
                src="/images/leadership/AN2.png"
                alt="Aftab Nathani, Founder and Group CEO of OutMazed"
                fill
                sizes="(max-width: 768px) 92vw, 42vw"
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.imageName}>
              <span>Aftab Nathani</span>
              <strong>Founder & Group CEO</strong>
            </div>

            <div className={styles.experienceBadge}>
              <strong>19+</strong>
              <span>Years Experience</span>
            </div>
          </motion.div>

          <motion.div className={styles.content} variants={fadeUp}>
            <div className={styles.titleBlock}>
              <span className={styles.kicker}>Leadership Profile</span>

              <h3>
                Aftab <em>Nathani</em>
              </h3>

              <span className={styles.role}>
                Founder & Group CEO – OutMazed®
              </span>

              <div className={styles.credentials}>
                {credentials.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className={styles.copy}>
              <p>
                As the Founder & Group CEO of OutMazed® Tourism, Aftab Nathani
                leads the company with a technology-first vision, positioning
                the business at the intersection of travel distribution, digital
                infrastructure, and global tourism services.
              </p>

              <p>
                He defines the long-term strategy while ensuring disciplined
                execution through structured management, scalable systems, and
                performance-led governance.
              </p>

              <p>
                Under his leadership, OutMazed® Tourism has evolved into a
                recognized digital travel services provider, delivering global
                hotel inventory, exotic holiday packages, UAE tourist visas,
                international visas, flight bookings, and comprehensive travel
                solutions across multiple markets.
              </p>
            </div>

            <div className={styles.awardBox}>
              <span>Recent Recognition</span>

              <strong>
                International Explorer Award — Digital Travel Service Provider
                of the Year
              </strong>

              <p>
                Reflecting OutMazed® Tourism’s growing impact within the travel
                ecosystem.
              </p>
            </div>

            <blockquote className={styles.quote}>
              His leadership philosophy balances scale with structure —
              combining ambitious volume-driven growth with financial
              discipline, operational rigor, and technology-enabled efficiency.
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
