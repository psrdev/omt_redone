"use client";

import { motion } from "framer-motion";
import LeaderCard from "./LeaderCard";
import {
  fadeUp,
  stagger,
  slideLeft,
  VIEWPORT,
  imageReveal,
  cardHover,
} from "@/utils/motion";

export default function Leadership() {
  return (
    <>
      {/* INTRO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="py-5"
      >
        <div className="container text-center">
          <motion.h2 variants={fadeUp} className="heading mb-3">
            Leadership
          </motion.h2>

          <motion.p variants={slideLeft} className="lead mx-auto">
            The leadership at OutMazed® Tourism brings together deep industry
            expertise, financial acumen, and global experience to drive the
            company’s strategic vision and execution.
          </motion.p>
        </div>
      </motion.section>

      {/* LEADER PROFILE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <div className="col-lg-5">
              <motion.img
                src="/images/leadership/AN.webp"
                alt="Aftab Nathani"
                className="img-fluid rounded omt-shadow"
                variants={imageReveal}
              />
            </div>

            {/* CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="col-lg-7"
            >
              <motion.h3 className="text-primary mb-1" variants={fadeUp}>
                Aftab Nathani
              </motion.h3>
              <motion.ul variants={fadeUp} className="custom-badge">
                <li>FCCA, UK</li>
                <li>ACA (ICAEW, UK)</li>
                <li>19+ Yrs Exp</li>
              </motion.ul>

              <motion.p variants={fadeUp} className="mb-3">
                <strong>Founder & Group CEO – OutMazed®</strong>
              </motion.p>

              <motion.p variants={fadeUp} className="mb-3">
                As the Founder & Group CEO of OutMazed® Tourism, Aftab Nathani
                leads the company with a technology first vision, positioning
                the business at the intersection of travel distribution, digital
                infrastructure, and global tourism services. He defines the long
                term strategy while ensuring disciplined execution through
                structured management, scalable systems, and performance led
                governance.
              </motion.p>

              <motion.p variants={fadeUp} className="mb-3">
                Under his leadership, OutMazed® Tourism has evolved into a
                recognized digital travel services provider, delivering global
                hotel inventory, exotic holiday packages, UAE tourist visas,
                international visas, flight bookings, and comprehensive travel
                solutions across multiple markets. The company’s innovation
                driven approach was recently recognized with the prestigious
                International Explorer Award - Digital Travel Service Provider
                of the Year, reflecting its growing impact within the travel
                ecosystem.
              </motion.p>

              <motion.p variants={fadeUp} className="mb-3">
                Aftab’s leadership philosophy balances scale with structure -
                combining ambitious volume driven growth with financial
                discipline, operational rigor, and technology enabled
                efficiency. His focus remains clear: to build a globally
                competitive travel platform where every booking, partnership,
                and customer journey delivers measurable value and meaningful
                experiences.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      {/* <section className="py-5 bg-light">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="container text-center"
        >
          <motion.h3 variants={fadeUp} className="text-primary mb-4">
            Leadership Philosophy
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            The leadership approach at OutMazed® Tourism is built on strong
            financial discipline, strategic clarity, and execution excellence.
            With a foundation rooted in global corporate experience and
            entrepreneurial vision, the focus remains on building scalable,
            sustainable, and high-impact travel solutions.
          </motion.p>
        </motion.div>
      </section> */}
      <section className="py-5">
        <div className="container">
          <div className="container text-center">
            <motion.h2 className="heading mb-3" variants={fadeUp}>
              Our Team
            </motion.h2>

            <motion.p variants={fadeUp} className="lead mx-auto">
              The leadership at OutMazed® Tourism brings together deep industry
              expertise, financial acumen, and global experience to drive the
              company’s strategic vision and execution.
            </motion.p>
          </div>
          <div className="row g-4">
            {/* CARD 1 */}
            <LeaderCard
              image="/images/leadership/aysha.png"
              name="Aysha Omar"
              col={12}
              role="General Manager"
              badges={["25+ Yrs Tourism", "Ops Expert"]}
              content={[
                "Aysha Omar is an accomplished industry veteran with extensive C-level leadership experience across Europe and the Middle East. With a career spanning strategic management, commercial structuring, and operational excellence, she brings a wealth of global insight to OutMazed® Tourism.",
                "Recognized as an impeccable negotiator, Aysha plays a pivotal role in driving high value commercial product contracting, building strong supplier relationships, and securing competitive global inventory across hotels, holiday packages, and travel services. Her ability to align commercial strategy with operational precision ensures that every agreement translates into measurable business performance.",
                "At OutMazed®, Aysha leads with discipline and clarity - strengthening operational frameworks, optimizing supplier networks, and supporting scalable growth across both B2B and B2C channels. Her leadership continues to reinforce the company’s commitment to delivering technology-enabled travel solutions with strong commercial foundations.",
              ]}
            />

            {/* CARD 2 */}
            <LeaderCard
              image="/images/leadership/berna.png"
              name="Berna Korkmaz"
              col={6}
              role="Global Commercial Director"
              badges={["20+ Yrs Sourcing", "Webbeds Alumni"]}
              content={[
                "Berna Korkmaz is a seasoned tourism and hospitality commercial leader with over 20 years of experience in global B2B and B2C sourcing and distribution. She has played instrumental roles in scaling international travel businesses, including being part of the founding success of Lots of Hotels (now WebBeds) and contributing to the growth of TDS Travel and Miki Travel across new regions.",
                "At OutMazed® Tourism, Berna leads Global Commercial Strategy and API Connectivity, driving supplier partnerships, expanding distribution networks, and strengthening global contracting frameworks.",
                "At OutMazed®, she leads Global Commercial Strategy and API Connectivity.",
              ]}
            />

            {/* CARD 3 */}
            <LeaderCard
              image="/images/leadership/karan.png"
              name="Karan Wadhwani"
              role="Head of Technology"
              col={6}
              badges={["8+ Yrs Tech", "IP Leader"]}
              content={[
                "Karan is a Travel Technology specialist with over 8 years of experience building scalable, secure, and performance driven platforms for the Travel & Tourism industry. As Head of Technology at OutMazed® Tourism, he leads the execution of the company’s technology roadmap, developing in-house solutions that enhance operational efficiency, strengthen margins, improve customer retention, and create long-term enterprise value.",
                "He plays a critical role in advancing OutMazed Tourism's API connectivity, system integrations, automation frameworks, and data-driven infrastructure thereby ensuring that technology remains a commercial enabler.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h3 className="text-primary mb-3">Our Philosophy </h3>

              <p>
                We are driven by a highly successful and proven concept that
                emphasizes providing service quality, honesty, integrity, and
                social awareness in order to meet and surpass the expectations
                of all of our customers, no matter how big or small – all of
                this has been enabled by the technology we are backed with. This
                idea has ingrained in every element of the company, and it is
                with this in mind that we truly aspire to achieve success in our
                undertakings.
              </p>

              <p>
                We conduct all our businesses in accordance with our corporate
                philosophy, built on our Vision and Core Values, ensuring a
                common thread of understanding of all that OutMazed® Tourism
                stands for, no matter what Tourism vertical we operate in.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://picsum.photos/seed/future/600/450"
                className="img-fluid rounded omt-shadow"
                alt="Future Vision"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
