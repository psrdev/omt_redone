"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "@/utils/motion";
import styles from "./ClientsPage.module.css";

type Client = {
  name: string;
  logo: string;
};

type Commitment = {
  title: string;
  description: string;
  icon: "reliability" | "value" | "service";
};

const clients: Client[] = [
  { name: "Ask 2 Travel", logo: "/images/clients/ask 2 travel.png" },
  { name: "Atlys", logo: "/images/clients/atlys.png" },
  { name: "Booking Toro", logo: "/images/clients/booking toro.png" },
  { name: "Emerging Travel", logo: "/images/clients/emerging travel.png" },
  { name: "Escala Beds", logo: "/images/clients/escala beds.png" },
  { name: "Methabook", logo: "/images/clients/Methabook.png" },
  { name: "Prime Travel", logo: "/images/clients/prime travel.jpeg" },
  { name: "Stock Hotels", logo: "/images/clients/stockhotels.png" },
  { name: "TravClan", logo: "/images/clients/travclan.png" },
  { name: "Travolgo", logo: "/images/clients/travolgo.png" },
];

const partnerTypes = [
  {
    title: "Travel Agencies",
    description:
      "Supporting agencies with reliable inventory, responsive assistance and competitive travel solutions.",
  },
  {
    title: "Tour Operators",
    description:
      "Helping tour operators build complete journeys through dependable global travel services.",
  },
  {
    title: "Corporate Travel",
    description:
      "Providing professional travel partners with efficient, scalable and consistent support.",
  },
  {
    title: "Industry Professionals",
    description:
      "Collaborating with travel specialists who value transparency, quality and lasting partnerships.",
  },
];

const commitments: Commitment[] = [
  {
    title: "Dependable Service",
    description:
      "Consistent communication, responsive support and careful coordination across every stage of the booking journey.",
    icon: "reliability",
  },
  {
    title: "Competitive Value",
    description:
      "Travel solutions designed to help our partners remain competitive without compromising service quality.",
    icon: "value",
  },
  {
    title: "Shared Growth",
    description:
      "Partnerships built around long-term value, mutual progress and opportunities that benefit everyone involved.",
    icon: "service",
  },
];

function CommitmentIcon({ type }: { type: Commitment["icon"] }) {
  if (type === "reliability") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 5 40 11v12c0 10.2-6.5 17.1-16 20-9.5-2.9-16-9.8-16-20V11L24 5Z" />
        <path d="m17.5 24 4.3 4.3 9-10" />
      </svg>
    );
  }

  if (type === "value") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 15 24 7l16 8-16 8-16-8Z" />
        <path d="m8 24 16 8 16-8" />
        <path d="m8 33 16 8 16-8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="14" cy="18" r="6" />
      <circle cx="34" cy="18" r="6" />
      <path d="M4 39c1.2-7.1 5.1-11 10-11s8.8 3.9 10 11" />
      <path d="M24 39c1.2-7.1 5.1-11 10-11s8.8 3.9 10 11" />
    </svg>
  );
}

export default function ClientsPage() {
  return (
    <main className={styles.clientsPage}>
      <section className={styles.introSection}>
        <div className={styles.introPattern} />

        <div className={styles.container}>
          <motion.div
            className={styles.introGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.introContent} variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>Our Trusted Clients</span>
              </div>

              <h1>
                Partnerships built on{" "}
                <span>trust, performance and shared ambition.</span>
              </h1>

              <p className={styles.introLead}>
                Our clients are at the heart of everything we do.
              </p>

              <p className={styles.introDescription}>
                We are proud to be the trusted travel partner for travel
                agencies, tour operators, corporate travel companies and
                industry professionals who rely on OutMazed Tourism for
                dependable service, competitive pricing and seamless travel
                solutions.
              </p>
            </motion.div>

            <motion.aside
              className={styles.statementPanel}
              variants={imageReveal}
            >
              <div className={styles.statementOrb} />

              <div className={styles.statementTop}>
                <span>Partnership philosophy</span>
                <span className={styles.statementLine} />
              </div>

              <blockquote>
                “Building lasting relationships through trust, reliability and
                shared growth.”
              </blockquote>

              <p>
                Every partnership inspires us to deliver greater value, stronger
                solutions and a more connected travel ecosystem.
              </p>

              <div className={styles.statementStats}>
                <div>
                  <strong>10+</strong>
                  <span>Trusted clients</span>
                </div>
                <div>
                  <strong>B2B</strong>
                  <span>Travel network</span>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <section className={styles.logoSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>Partner Network</span>
              </div>

              <h2>
                Trusted across the <span>travel ecosystem.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              We work alongside established travel brands and professionals who
              share our commitment to dependable service, innovation and
              exceptional customer experiences.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.logoGrid}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.05,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {clients.map((client) => (
              <motion.article
                key={client.name}
                className={styles.logoCard}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <div className={styles.logoImage}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={260}
                    height={120}
                    sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 18vw"
                    loading="lazy"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.ecosystemSection}>
        <div className={styles.ecosystemPattern} />

        <div className={styles.container}>
          <motion.div
            className={styles.ecosystemHeader}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp}>
              <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>Who We Partner With</span>
              </div>

              <h2>
                One connected network. <span>Multiple areas of expertise.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              Our partnership model is designed for businesses operating
              throughout the modern travel industry, from local specialists to
              global distribution partners.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.partnerTypeGrid}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {partnerTypes.map((partner) => (
              <motion.article
                className={styles.partnerTypeCard}
                key={partner.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <span className={styles.partnerTypeAccent} />
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.commitmentSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.commitmentLayout}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.commitmentIntro} variants={fadeUp}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowText}>Our Commitment</span>
              </div>

              <h2>
                What our partnerships <span>are built upon.</span>
              </h2>

              <p>
                Strong relationships are created through consistent actions. We
                focus on the qualities that enable our partners to operate with
                confidence and grow alongside us.
              </p>

              <div className={styles.commitmentMessage}>
                <span className={styles.commitmentMessageLine} />
                <p>
                  Your success is not separate from ours. It is an essential
                  part of how we define progress.
                </p>
              </div>
            </motion.div>

            <motion.div className={styles.commitmentCards} variants={stagger}>
              {commitments.map((commitment) => (
                <motion.article
                  className={styles.commitmentCard}
                  key={commitment.title}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                >
                  <div className={styles.commitmentIcon}>
                    <CommitmentIcon type={commitment.icon} />
                  </div>

                  <div>
                    <h3>{commitment.title}</h3>
                    <p>{commitment.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
