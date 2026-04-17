"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChartLine,
  faBuilding,
  faDollarSign,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { label: "Support for my startup" },
  { label: "Benefits for Emiratis" },
];

const data = [
  {
    icon: faBriefcase,
    title: "Become a member",
    desc: "Apply to join Dubai Founders HQ now to be first in line for new programmes, and get access to The Campus, private events and member-only offers.",
  },
  {
    icon: faChartLine,
    title: "Find data-driven insights",
    desc: "Use the Dubai Ecosystem Navigator to explore Dubai's innovation network for actionable data at your fingertips.",
  },
  {
    icon: faBuilding,
    title: "Start your Dubai company",
    desc: "Learn how to get your Dubai business up and running with our detailed guides on licensing, location, company types and more.",
  },
  {
    icon: faDollarSign,
    title: "Explore funding options",
    desc: "Discover Dubai's government-backed investment funds as well as more avenues to raise capital for your new venture.",
  },
];

export default function StartupOptions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5" style={{ background: "var(--bg-muted)" }}>
      <div className="container">
        <div className="p-4 p-md-5 bg-white rounded-4">
          {/* HEADER */}
          <div className="row align-items-center mb-4">
            <div className="col-md-4">
              <h3 className="fw-bold" style={{ color: "var(--text-dark)" }}>
                What are you looking for?
              </h3>
            </div>

            <div className="col-md-8">
              <div className="d-flex bg-light rounded-pill p-1">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-fill btn rounded-pill ${
                      activeTab === i
                        ? "btn-light shadow-sm"
                        : "btn-transparent"
                    }`}
                    style={{ transition: "var(--transition-medium)" }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="row g-4">
            {data.map((item, i) => (
              <div key={i} className="col-md-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-4 h-100 rounded-4 border position-relative clipped-box"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-white)",
                  }}
                >
                  {/* ICON */}
                  <div
                    className="mb-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "var(--primary)",
                      color: "#fff",
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  {/* TEXT */}
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>

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
        </div>
      </div>
    </section>
  );
}
