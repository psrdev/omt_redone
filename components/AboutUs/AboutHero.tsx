import styles from "./AboutHero.module.css";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.motifTop}></div>
      <div className={styles.motifBottom}></div>

      <div className={styles.container}>
        <span className={styles.eyebrow}>ABOUT OUTMAZED</span>

        <h1 className={styles.pageTitle}>
          More Than A
          <br />
          <span className={"text-primary"}>Travel Company</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.content}>
            <p>
              OutMazed Tourism LLC is a UAE-based tourism company committed to
              transforming how people travel, explore and experience the world.
            </p>

            <p>
              Through a portfolio of specialized brands, we provide travel,
              visa, corporate and technology solutions under one connected
              ecosystem.
            </p>

            <div className={styles.line}></div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/about/about_outmazed2.png"
              alt="Dubai Skyline"
              className={styles.image}
              width={1200}
              height={600}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
