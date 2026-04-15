import { useState } from "react";
import { motion } from "framer-motion";
import { img, sub } from "framer-motion/client";
import { fadeUp, stagger, VIEWPORT } from "../../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { url } from "inspector";

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
    img: "/images/about/tabs-2.jpg",
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
    img: "/images/about/tabs-1.jpg",
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
    img: "/images/about/tabs-2.jpg",
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
    img: "/images/about/tabs-1.jpg",
  },
];

export default function BusinessModels() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-primary fw-bold">Our 4 Core Business Models </h2>
          <p className="text-muted">
            A structured ecosystem powering global travel distribution
          </p>
        </motion.div>

        {/* TABS */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {models.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`model-tab ${active === i ? "active" : ""}`}
              style={{}}
            >
              {m.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="model-card p-4 p-md-5"
          style={{
            backgroundImage: `
      linear-gradient(
        to right,
        rgba(255,255,255,0.95) 0%,
        rgba(255,255,255,0.95) 35%,
        rgba(255,255,255,0.6) 50%,
        rgba(255,255,255,0.2) 75%,
        rgba(255,255,255,0) 100%
      ),
      url('${models[active].img}')
    `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="col-md-6">
            <h4 className="text-primary fw-bold mb-2">
              <span></span> {models[active].title}
            </h4>

            <p className="text-muted mb-4">{models[active].desc}</p>

            <div className="d-flex flex-wrap gap-2">
              {models[active].points.map((p, i) => (
                <span key={i} className="model-chip">
                  {p}
                </span>
              ))}
              <p className="text-muted mt-4">{models[active].subDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
