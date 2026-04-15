"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../utils/motion";
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

const pillars = [
  {
    title: "Tech Infrastructure",
    icon: faMicrochip,
  },
  {
    title: "Commercial Contracting Strength",
    icon: faHandshake,
  },
  {
    title: "Operational Execution",
    icon: faScrewdriverWrench,
  },
  {
    title: "Strategic Distribution",
    icon: faGlobe,
  },
  {
    title: "Destination Expertise",
    icon: faLocationDot,
  },
];

const brands = [
  {
    title: "OutMazed Travel",
    type: "B2C",
    desc: "Consumer travel distribution channel delivering curated travel experiences.",
  },
  {
    title: "Wholesale Tourism",
    type: "B2B",
    desc: "High-volume travel distribution platform for global travel agents and partners.",
  },
  {
    title: "Global Visa Shop",
    type: "B2C",
    desc: "One-stop global visa platform including UAE tourist visa solutions.",
  },
  {
    title: "The Global Corporates",
    type: "Enterprise",
    desc: "Smart corporate travel management solution for seamless business travel.",
  },
  {
    title: "Tech & Stack",
    type: "Technology",
    desc: "Core technology division powering OutMazed’s distribution infrastructure.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-md-4 justify-content-center d-flex">
              <Image
                src="/images/about/skyline.jpg"
                alt="About Us"
                className="img-fluid rounded shadow-light"
                width={320}
                height={480}
              />
            </div>
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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="text-primary fw-bold">
              Comprehensive Product Portfolio
            </h2>
            <p className="text-muted">
              A complete ecosystem of travel products powering global
              distribution.
            </p>
          </div>

          <div className="row g-4">
            {items.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm product-card text-center">
                  <div className="card-body py-4">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mb-3 text-primary"
                      style={{ fontSize: "26px" }}
                    />

                    <h6 className="fw-semibold mb-0">{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="engine-premium py-5">
        <div className="container">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="engine-title fw-bold display-6 mb-3">
              Technology-Driven. Volume-Focused. Margin-Controlled.
            </h2>

            <p className="engine-subtitle">
              A travel distribution engine built on scale, precision, and
              intelligence.
            </p>
          </motion.div>

          {/* PILLARS */}
          <div className="row g-4 justify-content-center mb-5">
            {pillars.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="engine-card p-4 text-center h-100"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mb-3"
                    style={{ fontSize: "22px" }}
                  />

                  <h6 className="mb-0 fw-semibold">{item.title}</h6>
                </motion.div>
              </div>
            ))}
          </div>

          {/* MANIFESTO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="engine-quote text-center mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <p className="mb-2">We are not just a travel agency.</p>
            <p className="mb-2">We are not just a technology provider.</p>

            <h5 className="fw-bold mt-3">
              We are a Travel Distribution Engine built from Dubai for the
              world.
            </h5>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-primary fw-bold">Our Brand Ecosystem</h2>
            <p className="text-muted">
              A unified portfolio of travel, technology, and distribution
              brands.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="row g-4">
            {brands.map((brand, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="brand-card p-4 h-100"
                >
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
