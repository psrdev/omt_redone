import styles from "./StatsSection.module.css";

const stats = [
  {
    value: "05",
    label: "Specialized Brands",
  },
  {
    value: "B2C",
    label: "Travel Experiences",
  },
  {
    value: "Visa",
    label: "Solutions",
  },
  {
    value: "Corporate",
    label: "Travel",
  },
  {
    value: "B2B",
    label: "Distribution",
  },
  {
    value: "Tech",
    label: "Innovation",
  },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>AT A GLANCE</span>

        <h2 className={styles.heading}>
          Built around specialized expertise across the entire travel ecosystem.
        </h2>

        <div className={styles.grid}>
          {stats.map((item) => (
            <div key={item.value} className={styles.stat}>
              <div className={styles.value}>{item.value}</div>

              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
