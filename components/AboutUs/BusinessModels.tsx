import { useState } from "react";
import { motion } from "framer-motion";
import { img, sub } from "framer-motion/client";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "../../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const models = [
  {
    title: "Destination Management",
    points: [
      "UAE Tourist Visas",
      "Ground Handling",
      "Airport Transfers",
      "Hotels & Apartments",
      "Attractions & Theme Parks",
      "Desert Safaris & City Tours",
      "Premium Experiences",
    ],
    desc: "As a UAE-based operator in Dubai, we provide full-spectrum Destination Management Services including: ",
    subDesc:
      "Our physical presence in Dubai gives us a strategic advantage in handling visa processing, supplier contracting, and real-time operational control – ensuring reliability, compliance, and service excellence. ",
    img: "/images/about/tabs-1.webp",
  },
  {
    title: "Travel Management",
    points: [
      "Global Flights",
      "Worldwide Hotels",
      "Transfers & Mobility",
      "Cruises",
      "Visa Assistance",
      "Holiday Packaging",
    ],
    desc: "We support corporate and leisure clients with integrated travel management solutions, offering: ",
    subDesc:
      "Through our tech-enabled systems, we optimize pricing, automate workflows, and enhance post-booking servicing – improving both client experience and operational efficiency. ",
    img: "/images/about/tabs-2.webp",
  },
  {
    title: "Tour Operating",
    points: [
      "Dynamic Holiday Packages",
      "Experiential Travel",
      "Luxury Escapes",
      "Group Series & FIT",
      "Cruise + Land Combinations",
    ],
    desc: "OutMazed® designs and distributes curated holiday programs across multiple destinations, specializing in: ",
    subDesc:
      "Our packaging capabilities are powered by technology that bundles flights, hotels, transfers, and experiences into dynamic, margin-controlled itineraries. Our packaging capabilities are powered by technology that bundles flights, hotels, transfers, and experiences into dynamic, margin-controlled itineraries. ",
    img: "/images/about/tabs-1.webp",
  },
  {
    title: "Wholesale Distribution",
    points: [
      "API Connectivity",
      "Online Booking Engine",
      "Hotel Inventory",
      "Global Attractions",
      "Flights & Ancillaries",
      "Visa Solutions",
    ],
    desc: "Our wholesale division connects global travel agents and tour operators to a powerful inventory ecosystem through: ",
    subDesc:
      "We empower travel partners worldwide with scalable distribution tools that drive volume while maintaining commercial discipline ",
    img: "/images/about/tabs-2.webp",
  },
];

export default function BusinessModels() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-5 bg-light">
      <div className="container ">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-4"
        >
          <h2 className="text-primary fw-bold">Our 4 Core Business Models </h2>
          <p className="text-muted">
            A structured ecosystem powering global travel distribution
          </p>
        </motion.div>
        <div className="tabs-container mb-4">
          {/* TABS */}
          <div className="d-flex flex-wrap m-0">
            {models.map((m, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`model-tab ${active === i ? "active" : ""}`}
                style={{}}
              >
                {m.title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          variants={fadeUp}
          className="model-card p-4 p-md-5 d-flex "
        >
          <div className="row">
            <motion.div
              className="col-lg-6 mt-auto"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.h4
                className="text-primary fw-bold mb-2"
                variants={fadeUp}
              >
                {models[active].title}
              </motion.h4>

              <motion.p className="text-muted mb-4" variants={fadeUp}>
                {models[active].desc}
              </motion.p>

              <div className="d-flex flex-wrap gap-2">
                {models[active].points.map((p, i) => (
                  <motion.span key={i} className="model-chip" variants={fadeUp}>
                    {p}
                  </motion.span>
                ))}
                <motion.p className="text-muted mt-4" variants={fadeUp}>
                  {models[active].subDesc}
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="show"
              className="col-lg-6 justify-content-center d-flex align-items-center"
            >
              <Image
                src={models[active].img}
                alt={models[active].title}
                width={625}
                height={459}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
