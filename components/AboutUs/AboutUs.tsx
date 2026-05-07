"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "../../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BusinessModels from "./BusinessModels";
import Image from "next/image";

import {
  faHotel,
  faTicket,
  faCar,
  faPlane,
  faUmbrellaBeach,
  faPassport,
  faShip,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
const items = [
  { title: "Global Hotels", icon: faHotel },
  { title: "Activities & Tours", icon: faTicket },
  { title: "Transfers", icon: faCar },
  { title: "Flights", icon: faPlane },
  { title: "Holiday Packages", icon: faUmbrellaBeach },
  { title: "Global Visas (Including UAE Tourist Visas)", icon: faPassport },
  { title: "Cruises", icon: faShip },
  { title: "Ground Handling Services", icon: faBuilding },
];

import {
  faMicrochip,
  faHandshake,
  faScrewdriverWrench,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Pillars from "./Pillars";

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
    href: "https://techstack.com",
    img: "/images/brands/TS.svg",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="show"
              className="col-md-4 justify-content-center d-flex"
            >
              <Image
                src="/images/about/skyline.jpg"
                alt="About Us"
                className="img-fluid shadow-light clipped-box"
                width={320}
                height={480}
              />
            </motion.div>
            <div className="col-md-8">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="container"
              >
                <motion.p className="lead" variants={fadeUp}>
                  OutMazed® Tourism is a Dubai-based Travel Technology company
                  redefining how travel products are distributed, bundled, and
                  monetized across global markets.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Recognized with the{" "}
                  <b>
                    2025 International Explorer Award for Digital Travel Service
                    Provider of the Year
                  </b>
                  , OutMazed® operates at the intersection of{" "}
                  <b>technology, distribution, and destination expertise</b> –
                  powering both B2B and B2C ecosystems with scalable, API-driven
                  infrastructure.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Built on a performance-driven foundation, our model blends
                  high-volume distribution with strong margin control – enabling
                  sustainable growth across markets.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MODELS */}
      <BusinessModels />

      {/* PRODUCT PORTFOLIO */}
      <section className="py-5 ">
        <div className="container">
          <div className="mb-4">
            <h2 className="text-primary fw-bold">
              Comprehensive{" "}
              <span className="text-muted">Product Portfolio</span>
            </h2>
            <p className="text-muted">
              A complete ecosystem of travel products powering global
              distribution.
            </p>
          </div>

          <motion.div variants={stagger} className="row g-4">
            {items.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 ">
                <motion.div
                  variants={fadeUp}
                  className="card h-100 border-0 product-card  clipped-box"
                >
                  <div className="card-body py-4">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mb-3 text-primary"
                      style={{ fontSize: "26px" }}
                    />

                    <h6 className="fw-semibold mb-0">{item.title}</h6>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Pillars />

      {/* DIFFERENTIATOR */}

      {/* BRANDS */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="text-primary fw-bold">
              Our <span className="text-muted">Brand Ecosystem</span>
            </h2>
            <p className="text-muted">
              A unified portfolio of travel, technology, and distribution
              brands.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="row g-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`col-12 col-md-6 ${index === 0 || index === 1 ? "col-lg-6" : "col-lg-4"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="brand-card p-4 h-100 position-relative"
                >
                  <div className="mb-3 d-flex align-items-center justify-content-center">
                    <Image
                      src={brand.img}
                      alt={brand.title}
                      className="img-fluid  brand-img"
                      width={200}
                      height={200}
                    />
                  </div>
                  {/* TYPE BADGE */}
                  <span className="brand-badge mb-3 d-inline-block">
                    {brand.type}
                  </span>

                  <h5 className="fw-bold mb-2">{brand.title}</h5>

                  <p className="mb-0 text-muted">{brand.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
