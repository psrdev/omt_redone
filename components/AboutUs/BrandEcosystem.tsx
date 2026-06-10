"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BrandEcosystem.module.css";
import { fadeUp, stagger } from "@/utils/motion";

const AUTO_CHANGE_DURATION = 4000;

const brands = [
  {
    title: "OutMazed Travel",
    type: "B2C",
    desc: "Consumer travel distribution channel delivering curated travel experiences.",
    href: "https://outmazed.com",
    img: "/images/brands/OT.svg",
  },
  {
    title: "Global Visa Shop",
    type: "B2C",
    desc: "One-stop global visa platform including UAE tourist visa solutions.",
    href: "https://globalvisashop.com",
    img: "/images/brands/GVS.svg",
  },
  {
    title: "Wholesale Tourism",
    type: "B2B",
    desc: "High-volume travel distribution platform for global travel agents and partners.",
    href: "https://wholesaletourism.com",
    img: "/images/brands/WST.svg",
  },
  {
    title: "The Global Corporates",
    type: "Enterprise",
    desc: "Smart corporate travel management solution for seamless business travel.",
    href: "https://globalcorporates.com",
    img: "/images/brands/GC.svg",
  },
  {
    title: "Tech & Stack",
    type: "Technology",
    desc: "Core technology division powering OutMazed’s distribution infrastructure.",
    href: "https://techandstack.com",
    img: "/images/brands/TS.svg",
  },
];

export default function BrandEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeBrand = brands[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, AUTO_CHANGE_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Our Brand Ecosystem</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            One OutMazed ecosystem. <br />
            <em>Five specialized brands.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p className={styles.bodyText} variants={fadeUp}>
            Each brand serves a focused market, while OutMazed Tourism connects
            them under one unified travel distribution ecosystem.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.ecosystemBox}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className={styles.parentBlock} variants={fadeUp}>
            <span>Parent Company</span>
            <h3>OutMazed Tourism LLC</h3>
            <p>
              Unified travel, visa, B2B, corporate, and technology ecosystem.
            </p>
          </motion.div>

          <div className={styles.connector}>
            <span />
          </div>

          <motion.div
            key={activeBrand.title}
            className={styles.activePanel}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.activeType}>{activeBrand.type}</span>

            <div>
              <h3>{activeBrand.title}</h3>
              <p>{activeBrand.desc}</p>
            </div>

            <Link
              href={activeBrand.href}
              target="_blank"
              className={styles.activeLink}
            >
              Visit Website <span>→</span>
            </Link>
          </motion.div>

          <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
              <motion.button
                key={brand.title}
                type="button"
                className={`${styles.brandCard} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onBlur={() => setIsPaused(false)}
                onClick={() => setActiveIndex(index)}
                variants={fadeUp}
              >
                <img
                  src={brand.img}
                  alt={brand.title}
                  className={styles.brandLogo}
                />

                <span className={styles.mobileTitle}>{brand.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
