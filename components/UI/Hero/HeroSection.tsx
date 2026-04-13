"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

type HeroProps = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function HeroSection({
  image,
  eyebrow,
  title,
  subtitle,
}: HeroProps) {
  return (
    <section className="hero position-relative d-flex align-items-end overflow-hidden">
      {/* Background Image */}
      <div className="bg" style={{ backgroundImage: `url(${image})` }} />

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className="container content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}

          <h1 className="title">{title}</h1>

          {subtitle && <p className="subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
