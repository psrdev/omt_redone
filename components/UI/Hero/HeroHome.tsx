"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import {
  fadeUp,
  imageReveal,
  slideLeft,
  scaleIn,
  stagger,
  VIEWPORT,
  cardHover,
} from "@/utils/motion";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <div className="h-100">
        <div className="row g-0 min-vh-100">
          {/* LEFT SIDE */}
          <motion.div
            className={`col-lg-6 d-flex flex-column justify-content-center position-relative ${styles.left}`}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp} className={styles.eyebrow}>
              <div className={styles.eyebrowDot}></div>

              <span className={styles.eyebrowText}>
                OutMazed Tourism LLC — UAE
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className={styles.headline}>
              Exceptional
              <br />
              <span className={styles.headlineItalic}>Travel Experiences</span>
              <br />
              Redefined.
            </motion.h1>

            <motion.div variants={fadeUp} className={styles.divider} />

            <motion.p variants={fadeUp} className={styles.bodyText}>
              A <strong>UAE-based tourism company</strong> dedicated to creating
              exceptional travel experiences and delivering comprehensive
              travel-related services to customers across the region and beyond.
              <br />
              <br />
              Founded with a vision to{" "}
              <strong>redefine the travel industry</strong> through innovation,
              reliability, and a customer-first approach.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="d-flex flex-wrap gap-3 mt-4"
            >
              <motion.a
                href="#"
                className={styles.btnFill}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                Explore Destinations
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="#brands"
                className={styles.btnOutline}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                Our Brands
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.stats}>
              <div className={styles.statCell}>
                <div className={styles.statNum}>
                  120<span>+</span>
                </div>

                <div className={styles.statLbl}>Destinations</div>
              </div>

              <div className={styles.statPipe}></div>

              <div className={styles.statCell}>
                <div className={styles.statNum}>
                  50K<span>+</span>
                </div>

                <div className={styles.statLbl}>Travellers</div>
              </div>

              <div className={styles.statPipe}></div>

              <div className={styles.statCell}>
                <div className={styles.statNum}>5</div>

                <div className={styles.statLbl}>Travel Brands</div>
              </div>

              <div className={styles.statPipe}></div>

              <div className={styles.statCell}>
                <div className={styles.statNum}>UAE</div>

                <div className={styles.statLbl}>Headquartered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className={`col-lg-6 position-relative ${styles.right}`}
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <div className={styles.edgeStrip}></div>

            {/* TALL IMAGE */}
            <motion.div
              className={`${styles.imgCell} ${styles.tall}`}
              variants={imageReveal}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <img
                src="https://images.pexels.com/photos/9943043/pexels-photo-9943043.jpeg"
                alt="Dubai"
              />
            </motion.div>

            {/* TOP IMAGE */}
            <motion.div
              className={styles.imgCell}
              variants={imageReveal}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <img
                src="https://images.pexels.com/photos/2664046/pexels-photo-2664046.jpeg"
                alt="Maldives"
              />
            </motion.div>

            {/* BOTTOM IMAGE */}
            <motion.div
              className={styles.imgCell}
              variants={imageReveal}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <img
                src="https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg"
                alt="Santorini"
              />
            </motion.div>

            {/* BRAND BADGE */}
            <motion.div
              className={styles.brandBadge}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <div className={styles.brandBadgeTitle}>OutMazed</div>

              <div className={styles.brandBadgeSub}>Outperform · Amazing</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
