"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "@/utils/motion";
import styles from "./SuppliersPage.module.css";

type Supplier = {
  name: string;
  logo: string;
  category: string;
};

type SupplierCategory = {
  number: string;
  title: string;
  description: string;
};

const suppliers: Supplier[] = [
  {
    name: "Cangooroo",
    logo: "/images/suppliers/cangooroo1.png",
    category: "Travel Technology",
  },
  {
    name: "CruiseXplore",
    logo: "/images/suppliers/cruisexplore.png",
    category: "Cruise Distribution",
  },
  {
    name: "Hotelbeds",
    logo: "/images/suppliers/hotelbeds1.png",
    category: "Accommodation",
  },
  {
    name: "HotelDO",
    logo: "/images/suppliers/hoteldo.jpg",
    category: "Accommodation",
  },
  {
    name: "Hotelrack",
    logo: "/images/suppliers/hotelrack1.jpg",
    category: "Hotel Distribution",
  },
  {
    name: "Miral Destinations",
    logo: "/images/suppliers/miral.png",
    category: "Destinations & Attractions",
  },
  {
    name: "RezLive",
    logo: "/images/suppliers/REZLIVE1.png",
    category: "Accommodation",
  },
  {
    name: "Smart Travel",
    logo: "/images/suppliers/smart travel1.png",
    category: "Travel Services",
  },
  {
    name: "TBO",
    logo: "/images/suppliers/TBO.png",
    category: "Travel Distribution",
  },
  {
    name: "Within Earth",
    logo: "/images/suppliers/WITHIN EARTH.webp",
    category: "Destination Management",
  },
];

const supplierCategories: SupplierCategory[] = [
  {
    number: "01",
    title: "Hotels & Accommodation",
    description:
      "Trusted hotel distribution partners helping us provide extensive inventory, competitive rates and reliable booking options.",
  },
  {
    number: "02",
    title: "Attractions & Experiences",
    description:
      "Destination and attraction specialists that allow our partners to offer memorable experiences across key global markets.",
  },
  {
    number: "03",
    title: "Transport & Mobility",
    description:
      "Dependable transport providers supporting smooth airport transfers, local movement and complete destination journeys.",
  },
  {
    number: "04",
    title: "Cruises & Leisure",
    description:
      "Specialist cruise and leisure partners bringing distinctive holiday products into our connected travel ecosystem.",
  },
  {
    number: "05",
    title: "Destination Management",
    description:
      "Experienced local experts delivering regional knowledge, operational support and carefully coordinated ground services.",
  },
  {
    number: "06",
    title: "Travel Technology",
    description:
      "Technology and distribution platforms helping us improve availability, efficiency and connectivity across every booking.",
  },
];

const partnershipValues = [
  {
    title: "Reliable Supply",
    description:
      "Consistent inventory, accurate information and dependable fulfilment across our travel network.",
  },
  {
    title: "Competitive Value",
    description:
      "Commercial partnerships that help us provide strong rates without compromising service quality.",
  },
  {
    title: "Operational Support",
    description:
      "Responsive collaboration that allows challenges to be resolved quickly and professionally.",
  },
  {
    title: "Mutual Growth",
    description:
      "Long-term relationships designed to create sustainable opportunities for every partner involved.",
  },
];

const logoStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const logoFade: variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function NetworkIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="7" />
      <circle cx="12" cy="16" r="5" />
      <circle cx="52" cy="16" r="5" />
      <circle cx="12" cy="48" r="5" />
      <circle cx="52" cy="48" r="5" />
      <path d="m17 19 10 9" />
      <path d="m47 19-10 9" />
      <path d="m17 45 10-9" />
      <path d="m47 45-10-9" />
    </svg>
  );
}

export default function SuppliersPage() {
  return (
    <main className={styles.suppliersPage}>
      <section className={styles.introSection}>
        <div className={styles.introGridPattern} />

        <div className={styles.container}>
          <motion.div
            className={styles.introLayout}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.introContent} variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>
                  Our Supportive Suppliers
                </span>
              </div>

              <h1>
                A dependable supplier network behind{" "}
                <span>every exceptional journey.</span>
              </h1>

              <p className={styles.introLead}>
                Strong travel experiences begin with strong supplier
                partnerships.
              </p>

              <p className={styles.introDescription}>
                We are proud to collaborate with a diverse network of trusted
                suppliers who play a vital role in delivering exceptional travel
                experiences. From hotels and attractions to transport providers,
                cruise lines and destination management companies, our supplier
                partners help us provide high-quality services, competitive
                rates and seamless travel solutions to clients worldwide.
              </p>
            </motion.div>

            <motion.aside
              className={styles.partnershipStatement}
              variants={imageReveal}
            >
              <div className={styles.statementOrb} />

              <div className={styles.statementHeader}>
                <span className={styles.statementIndex}>OMT / Suppliers</span>
                <span className={styles.statementRule} />
              </div>

              <div className={styles.statementIcon}>
                <NetworkIcon />
              </div>

              <blockquote>
                Together, we drive growth through collaboration, trust and
                long-term partnerships.
              </blockquote>

              <p>
                Every supplier relationship strengthens our ability to create
                greater value, respond with confidence and deliver consistently
                across markets.
              </p>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <section className={styles.supplierSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeading}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>Supplier Network</span>
              </div>

              <h2>
                Supported by trusted names <span>across global travel.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              Our network combines global distribution capabilities with
              specialist regional knowledge, helping us maintain quality, choice
              and dependable service across every booking.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.supplierGrid}
            variants={logoStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {suppliers.map((supplier) => (
              <motion.article
                key={supplier.name}
                className={styles.supplierCard}
                variants={logoFade}
              >
                <div className={styles.logoImage}>
                  <Image
                    src={supplier.logo}
                    alt={supplier.name}
                    width={260}
                    height={120}
                    sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 18vw"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.categoriesDecoration} />

        <div className={styles.container}>
          <motion.div
            className={styles.categoriesIntro}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp}>
              <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>
                  Connected Capabilities
                </span>
              </div>

              <h2>
                One supplier ecosystem.
                <br />
                <span>Every part of the journey.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              Our supplier relationships extend across the complete travel value
              chain, enabling us to bring multiple services together through one
              dependable and connected platform.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.categoryGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {supplierCategories.map((category) => (
              <motion.article
                className={styles.categoryCard}
                key={category.number}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className={styles.categoryNumber}>{category.number}</div>

                <div className={styles.categoryContent}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <div className={styles.categoryLine} />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.valuesLayout}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.valuesIntro} variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>
                  Partnership Foundations
                </span>
              </div>

              <h2>
                What makes our supplier <span>relationships stronger.</span>
              </h2>

              <p>
                Their ongoing support, reliability and commitment to excellence
                enable us to build stronger partnerships, create greater value
                and achieve mutual success.
              </p>

              <div className={styles.valuesQuote}>
                <span />

                <p>
                  The strength of our service is directly connected to the
                  strength of the partners behind it.
                </p>
              </div>
            </motion.div>

            <motion.div className={styles.valuesList} variants={stagger}>
              {partnershipValues.map((value, index) => (
                <motion.article
                  className={styles.valueItem}
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                >
                  <span className={styles.valueIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
