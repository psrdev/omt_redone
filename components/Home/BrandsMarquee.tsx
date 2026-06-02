import Image from "next/image";
import styles from "./brands-carousel.module.css";
import { motion } from "framer-motion";

export default function BrandsMarquee() {
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
  return (
    <section className={styles.brandsCarousel} id="brands">
      <div className="container">
        {" "}
        <h2 className="text-center mb-2 text-primary fw-bold">
          Your Journey, Our Expertise
        </h2>
        <p className="text-center mb-5 text-muted col-lg-7 mx-auto">
          No matter where you're headed, OutMazed Tourism connects you with
          exceptional travel experiences, personalized services, and trusted
          solutions that turn every trip into an unforgettable adventure.
        </p>{" "}
      </div>

      <div className="container-fluid">
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...brands, ...brands, ...brands].map((brand, index) => (
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
                    width="170"
                    height="220"
                  />
                </div>
                {/* <h5 className={styles.brandTitle}>{brand.title}</h5> */}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
