import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <span>READY TO EXPLORE NEW POSSIBILITIES</span>
          <span>READY TO EXPLORE NEW POSSIBILITIES</span>
          <span>READY TO EXPLORE NEW POSSIBILITIES</span>
          <span>READY TO EXPLORE NEW POSSIBILITIES</span>
        </div>
      </div>

      <div className={styles.container}>
        <span className={styles.tag}>LET'S CONNECT</span>

        <h2 className={styles.heading}>
          The Future of Travel
          <br />
          Is Connected.
        </h2>

        <p className={styles.description}>
          Through specialized brands, strategic partnerships, and
          technology-driven innovation, OutMazed Tourism is creating new
          possibilities for travelers, businesses, and partners worldwide.
        </p>

        <div className={styles.actions}>
          <Link href="/brands" className={styles.primaryBtn}>
            Explore Our Ecosystem →
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
