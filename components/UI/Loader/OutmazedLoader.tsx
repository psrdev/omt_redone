import styles from "./OutmazedLoader.module.css";

export default function OutmazedLoader() {
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.logoCard}>
        <img
          src="/images/logo/outmazed-tourism-logo-loader-sleek.svg"
          alt="OutMazed Tourism"
          className={styles.logo}
        />
      </div>
    </div>
  );
}
