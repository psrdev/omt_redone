import Image from "next/image";
import styles from "./InternalHero.module.css";

export default function InternalHero() {
  return (
    <section className={styles.internalHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Contact OutMazed</span>

          <h1>
            Connect with the
            <br />
            <span>right department.</span>
          </h1>

          <p>
            Whether you are a traveler, travel partner, corporate client, media
            representative, candidate, or technology partner — reach the right
            OutMazed team directly.
          </p>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/contact/contact.png"
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
