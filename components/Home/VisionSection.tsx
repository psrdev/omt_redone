import styles from "./VisionSection.module.css";

export default function VisionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>VISION FOR THE FUTURE</span>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            Building one of the
            <br />
            region's most trusted
            <br />
            travel ecosystems.
          </h2>

          <p className={styles.description}>
            As the travel industry continues to evolve, OutMazed Tourism remains
            focused on expanding across the Middle East and Africa while
            strengthening its global reach through innovation, strategic
            partnerships, and customer-centric solutions.
          </p>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span>MEA</span>
            <p>Regional Expansion</p>
          </div>

          <div className={styles.metric}>
            <span>Global</span>
            <p>Partnership Network</p>
          </div>

          <div className={styles.metric}>
            <span>Digital</span>
            <p>Transformation Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
