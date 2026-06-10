"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import styles from "./LeadershipSection.module.css";
import { fadeUp, stagger } from "@/utils/motion";

const leaders = [
  {
    name: "Berna Korkmaz",
    role: "Global Commercial Director",
    image: "/images/leadership/berna.png",
    tags: ["20+ Years", "WebBeds Alumni"],
    quote:
      "Expanding global partnerships through strong supplier relationships and scalable commercial strategy.",
    description:
      "Berna leads supplier partnerships, contracting, sourcing, and global distribution growth across multiple markets.",
    founder: false,
  },
  {
    name: "Karan Wadhwani",
    role: "Head of Technology",
    image: "/images/leadership/karan.png",
    tags: ["8+ Years", "Technology Leader"],
    quote:
      "Building scalable travel infrastructure powered by automation, connectivity, and innovation.",
    description:
      "Karan oversees API connectivity, automation frameworks, infrastructure architecture, and digital innovation.",
    founder: false,
  },
];

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.pattern} />

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
            Leadership
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Leadership driving
            <br />
            <em>the OutMazed vision.</em>
          </motion.h2>

          <motion.p className={styles.bodyText} variants={fadeUp}>
            Meet the leadership team shaping the future of travel distribution,
            technology, and global tourism.
          </motion.p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={styles.swiper}
        >
          {leaders.map((leader) => (
            <SwiperSlide key={leader.name}>
              <div className={styles.showcase}>
                <div className={styles.backgroundName}>{leader.name}</div>

                <div className={styles.portraitCenter}>
                  <motion.div
                    className={styles.backgroundPortrait}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 640px"
                      priority
                      className={styles.backgroundImg}
                    />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={leader.name}
                    className={styles.card}
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className={styles.cardTop}>
                      <div
                        className={`${styles.cardImage} ${
                          leader.founder ? styles.founderImage : ""
                        }`}
                      >
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="120px"
                          className={styles.cardImg}
                        />
                      </div>

                      <div className={styles.cardInfo}>
                        <span>{leader.founder ? "Founder" : "Leadership"}</span>

                        <h3>{leader.name}</h3>

                        <p>{leader.role}</p>
                      </div>
                    </div>

                    <blockquote>{leader.quote}</blockquote>

                    <div className={styles.tags}>
                      {leader.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <p className={styles.description}>{leader.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.avatarNav}>
          {leaders.map((leader, index) => (
            <button
              type="button"
              key={leader.name}
              onClick={() => handleAvatarClick(index)}
              className={`${styles.avatarBtn} ${
                activeIndex === index ? styles.active : ""
              } ${leader.founder ? styles.founderAvatar : ""}`}
              aria-label={`View ${leader.name}`}
            >
              <div className={styles.avatar}>
                <Image src={leader.image} alt={leader.name} fill sizes="80px" />
              </div>

              <span>{leader.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
