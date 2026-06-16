"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./InternalHero.module.css";
import { fadeUp, stagger, VIEWPORT } from "@/utils/motion";

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
      <motion.div
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div className={styles.content} variants={stagger}>
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            {eyebrow}
          </motion.span>

          <motion.h1 variants={fadeUp}>
            {title}
            {highlightedTitle && (
              <>
                <br />
                <span>{highlightedTitle}</span>
              </>
            )}
          </motion.h1>

          <motion.p variants={fadeUp}>{description}</motion.p>

          {subDescription && (
            <motion.p variants={fadeUp}>{subDescription}</motion.p>
          )}
        </motion.div>

        <motion.div
          className={styles.imageBox}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={VIEWPORT}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className={styles.imageInner}
            initial={{
              scale: 1.15,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={VIEWPORT}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className={styles.image}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
