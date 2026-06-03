import styles from "./CommitmentSection.module.css";

const commitments = [
  "Delivering exceptional customer experiences.",
  "Providing reliable and transparent travel services.",
  "Building strong partnerships across the global travel industry.",
  "Embracing innovation and digital transformation.",
  "Creating sustainable growth opportunities for stakeholders.",
  "Maintaining the highest standards of professionalism and integrity.",
];

export default function CommitmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR COMMITMENT</span>

        <div className={styles.header}>
          <h2 className={styles.heading}>
            Excellence isn't a goal.
            <br />
            <span style={{ color: "var(--primary)" }}> It's our standard.</span>
          </h2>

          <p className={styles.description}>
            Every decision, partnership, and service we deliver is guided by a
            commitment to quality, trust, and long-term value creation.
          </p>
        </div>

        <div className={styles.commitments}>
          {commitments.map((item, index) => (
            <div key={index} className={styles.commitment}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>

              <span className={styles.arrow}>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
