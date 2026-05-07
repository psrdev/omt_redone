"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
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

export default function Pillars() {
  return (
    <section className="py-5" style={{ background: "var(--bg-muted)" }}>
      <div className="container">
        <div className="p-4 p-md-5 bg-white rounded-4">
          {/* HEADER */}
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h3 className="fw-bold" style={{ color: "var(--primary)" }}>
                Technology-Driven
                <br /> <span>Volume-Focused</span>
                <br /> Margin-Controlled.
              </h3>
              <p className="text-muted">
                A travel distribution engine built on scale, precision, and
                intelligence.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="row g-4">
            {pillars.map((item, i) => (
              <div key={i} className="col-md-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-4 h-100 bg-gradient position-relative engine-card clipped-box"
                >
                  {/* ICON */}
                  <div
                    className="mb-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: 48,
                      height: 48,
                      background: "var(--primary)",
                      color: "#fff",
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  {/* TEXT */}
                  <h5 className="fw-semibold mb-2">{item.title}</h5>

                  {/* ARROW */}
                  <div className="position-absolute bottom-0 end-0 m-3">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--primary)",
                        color: "#fff",
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} size="sm" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="engine-quote text-end ms-auto mt-4"
            style={{ maxWidth: "800px" }}
          >
            <p className="mb-2">"We are not just a travel agency.</p>
            <p className="mb-2">We are not just a technology provider.</p>

            <h5 className="fw-bold mt-3">
              We are a Travel Distribution Engine built from Dubai for the
              world."
            </h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
