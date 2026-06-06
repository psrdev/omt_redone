import Image from "next/image";
import styles from "./InternalHero.module.css";

export default function InternalHero() {
  return (
    <section className={styles.internalHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>About Us</span>

          <h1>
            More Than A <br />
            <span>Travel Company</span>
          </h1>

          <p>
            OutMazed Tourism LLC is a UAE-based tourism company committed to
            transforming how people travel, explore and experience the world.
          </p>

          <p>
            Through a portfolio of specialized brands, we provide travel, visa,
            corporate and technology solutions under one connected ecosystem.
          </p>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/about/about_outmazed2.png"
            alt="OutMazed Tourism"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
