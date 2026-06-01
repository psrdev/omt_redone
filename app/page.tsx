"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "@/utils/motion";
import Image from "next/image";
import styles from "./brands-carousel.module.css";
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

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        image="/images/hero/turkey.jpg"
        title="OutMazed Tourism LLC"
        subtitle="OutMazed Tourism LLC is a UAE-based tourism company dedicated to creating exceptional travel experiences and delivering comprehensive travel-related services to customers across the region and beyond. Headquartered in the United Arab Emirates, the company was founded with a vision to redefine the travel industry through innovation, reliability, and a customer-first approach."
      />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="show"
              className="col-md-6 justify-content-center d-flex"
            >
              <Image
                src="/images/home/outmazed.png"
                alt="About Us"
                className="img-fluid shadow-light clipped-box"
                width={516}
                height={500}
              />
            </motion.div>
            <div className="col-md-6">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="container"
              >
                <motion.p className="" variants={fadeUp}>
                  The name OutMazed<sup>®</sup> is inspired by two core values —
                  <b>Outperform</b> and <b>Amazing</b>. These principles guide
                  everything we do, from designing memorable travel experiences
                  to delivering services that consistently exceed customer
                  expectations.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="mt-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="container"
              >
                <motion.p className="" variants={fadeUp}>
                  Over the years, OutMazed Tourism has expanded its presence
                  through a portfolio of specialized brands, each catering to
                  different aspects of the travel and tourism ecosystem:
                </motion.p>
                <ul className="mt-4 custom-list">
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>OutMazed Travel</b> – Curated holiday packages, leisure
                    travel, and customized travel experiences.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Global Visa Shop</b> – Visa assistance, travel
                    documentation, and global mobility support services.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Wholesale Tourism</b> – B2B travel solutions, destination
                    management, and wholesale tourism services for travel
                    partners.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>The Global Corporates</b> – Corporate travel management
                    and business travel solutions.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Tech & Stack</b> – Technology solutions that enhance
                    travel operations, customer experiences, and digital
                    transformation within the tourism sector.
                  </motion.li>
                </ul>
                <motion.p className="" variants={fadeUp}>
                  Together, these brands enable OutMazed Tourism to offer a
                  complete travel ecosystem, serving individual travelers,
                  corporate clients, and travel partners through innovative,
                  efficient, and customer-focused services.
                </motion.p>
                <motion.p className="" variants={fadeUp}>
                  With ambitions to become one of the leading tourism groups
                  across the Middle East (ME), OutMazed Tourism continues to
                  invest in technology, strategic partnerships, and service
                  excellence. Our goal is to connect travelers with
                  unforgettable experiences while building a trusted brand
                  recognized for quality, innovation, and reliability across
                  global travel markets.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <section className={styles.brandsCarousel}>
        <div className="container-fluid">
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselTrack}>
              {[...brands, ...brands].map((brand, index) => (
                <motion.a
                  key={index}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.brandCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.brandImage}>
                    <Image
                      src={brand.img}
                      alt={brand.title}
                      width={300}
                      height={170}
                    />
                  </div>
                  {/* <h5 className={styles.brandTitle}>{brand.title}</h5> */}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
