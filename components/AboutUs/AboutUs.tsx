"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../utils/motion";

export default function AboutUs() {
  return (
    <>
      <section className="py-5">
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
      </section>

      {/* CORE MODELS */}
      <section className="py-2">
        <div className="container">
          <motion.h2 variants={fadeUp} className="heading text-center">
            Our 4 Core Business Models
          </motion.h2>

          <div className="businessModels">
            <Block
              title="1. Destination Management"
              content={
                <>
                  <p>
                    As a UAE-based operator in Dubai, we provide full-spectrum
                    Destination Management Services including:
                  </p>
                  <ul>
                    <li>UAE Tourist Visas</li>
                    <li>UAE Ground Handling</li>
                    <li>Airport Transfers</li>
                    <li>Hotels & Serviced Apartments</li>
                    <li>Attractions & Theme Parks</li>
                    <li>
                      Desert Safaris & City Tours (with our own unique and
                      exclusive fleet of vehicles)
                    </li>
                    <li>Water Sports & Premium Experiences</li>
                  </ul>
                  <p>
                    Our physical presence in Dubai gives us a strategic
                    advantage in handling visa processing, supplier contracting,
                    and real-time operational control – ensuring reliability,
                    compliance, and service excellence.
                  </p>
                </>
              }
            />

            {/* 2 */}
            <Block
              title="2. Travel Management"
              content={
                <>
                  <p>
                    We support corporate and leisure clients with integrated
                    travel management solutions, offering:
                  </p>
                  <ul>
                    <li>Global Flights</li>
                    <li>Worldwide Hotel Inventory</li>
                    <li>Transfers & Mobility Solutions</li>
                    <li>Cruises</li>
                    <li>Global Visa Assistance</li>
                    <li>
                      Custom Holiday Packaging (Specializing in Exotic Holiday
                      Destinations like Maldives and more)
                    </li>
                  </ul>
                  <p>
                    Through our tech-enabled systems, we optimize pricing,
                    automate workflows, and enhance post-booking servicing –
                    improving both client experience and operational efficiency.
                  </p>
                </>
              }
            />

            {/* 3 */}
            <Block
              title="3. Tour Operating"
              content={
                <>
                  <p>
                    OutMazed® designs and distributes curated holiday programs
                    across multiple destinations, specializing in:
                  </p>
                  <ul>
                    <li>Dynamic Holiday Packages</li>
                    <li>Themed & Experiential Travel</li>
                    <li>Luxury & Exotic Escapes</li>
                    <li>Group Series & FIT Programs</li>
                    <li>Cruise & Land Combinations</li>
                  </ul>
                  <p>
                    Our packaging capabilities are powered by technology that
                    bundles flights, hotels, transfers, and experiences into
                    dynamic, margin-controlled itineraries.
                  </p>
                </>
              }
            />

            {/* 4 */}
            <Block
              className="shadow-lg border-4 border-primary"
              title="4. Wholesale Distribution"
              content={
                <>
                  <p>
                    Our wholesale division connects global travel agents and
                    tour operators to a powerful inventory ecosystem through:
                  </p>
                  <ul>
                    <li>API Connectivity</li>
                    <li>B2B Online Booking Engine (IBE)</li>
                    <li>Contracted & Dynamic Hotel Inventory</li>
                    <li>Global Attractions</li>
                    <li>Flights & Ancillaries</li>
                    <li>Visa Solutions</li>
                  </ul>
                  <p>
                    We empower travel partners worldwide with scalable
                    distribution tools that drive volume while maintaining
                    commercial discipline.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-primary mb-4">Comprehensive Product Portfolio</h2>

          <ul className="list-unstyled fs-5 d-flex flex-wrap flex-column gap-3">
            <li>Global Hotels</li>
            <li>Activities & Tours</li>
            <li>Transfers</li>
            <li>Flights</li>
            <li>Holiday Packages</li>
            <li>Global Visas (Including UAE Tourist Visas)</li>
            <li>Cruises</li>
            <li>Ground Handling Services</li>
          </ul>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="engine">
        <div className="container">
          <h2 className="text-light mb-4 ">
            Technology-Driven. Volume-Focused. Margin-Controlled.
          </h2>

          <p>What differentiates OutMazed® is our ability to combine:</p>

          <ul>
            <li>Tech Infrastructure</li>
            <li>Commercial Contracting Strength</li>
            <li>Operational Execution</li>
            <li>Strategic Distribution</li>
            <li>Destination Expertise</li>
          </ul>

          <div className=" d-flex flex-column  mt-4">
            <p>We are not just a travel agency.</p>
            <p>We are not just a technology provider.</p>
            <p>
              <strong>
                We are a Travel Distribution Engine built from Dubai for the
                world.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-primary mb-4">Our brands comprise of:</h2>

          <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
            <li>OutMazed Travels (B2C distribution channel)</li>
            <li>Wholesale Tourism (B2B distribution channel)</li>
            <li>
              Global Visa Shop (One stop shop for Global Visas including UAE
              Tourist Visas)
            </li>
            <li>
              The Global Corporates (Smart Corporate solution for a seamless
              experience)
            </li>
            <li>
              Tech & Stack (Technology arm of OutMazed that is powering the
              distribution capability of OutMazed Tourism)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

/* Reusable block */
function Block({ title, content }: any) {
  return (
    <motion.div
      className="block p-4 rounded bg-light"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-primary mb-2">{title}</h3>
      {content}
    </motion.div>
  );
}
