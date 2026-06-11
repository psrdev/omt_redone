import Image from "next/image";
import styles from "./InternalHero.module.css";

type InternalHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  subDescription?: string;
  image: string;
  imageAlt: string;
};

export default function InternalHero({
  eyebrow,
  title,
  highlightedTitle,
  description,
  subDescription,
  image,
  imageAlt,
}: InternalHeroProps) {
  return (
    <section className={styles.internalHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{eyebrow}</span>

          <h1>
            {title}
            {highlightedTitle && (
              <>
                <br />
                <span>{highlightedTitle}</span>
              </>
            )}
          </h1>

          <p>{description}</p>

          {subDescription && <p>{subDescription}</p>}
        </div>

        <div className={styles.imageBox}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
