"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./LeadershipSection.module.css";
import { fadeUp, stagger } from "@/utils/motion";

const founder = {
  name: "Aftab Nathani",
  image: "/images/leadership/AN.webp",
  role: "Founder & Group CEO – OutMazed®",
  tags: ["FCCA, UK", "ACA (ICAEW, UK)", "19+ Yrs Exp"],
  quote:
    "Building a globally competitive travel platform where every booking, partnership, and customer journey delivers measurable value.",
  desc: [
    "As the Founder & Group CEO of OutMazed® Tourism, Aftab Nathani leads the company with a technology first vision, positioning the business at the intersection of travel distribution, digital infrastructure, and global tourism services.",
    "Under his leadership, OutMazed® Tourism has evolved into a recognized digital travel services provider, delivering global hotel inventory, exotic holiday packages, UAE tourist visas, international visas, flight bookings, and comprehensive travel solutions across multiple markets.",
    "Aftab’s leadership philosophy balances scale with structure — combining ambitious volume driven growth with financial discipline, operational rigor, and technology enabled efficiency.",
  ],
};

const team = [
  {
    name: "Berna Korkmaz",
    image: "/images/leadership/berna.png",
    role: "Global Commercial Director",
    tags: ["20+ Yrs Sourcing", "WebBeds Alumni"],
    desc: "Berna Korkmaz is a seasoned tourism and hospitality commercial leader with over 20 years of experience in global B2B and B2C sourcing and distribution. At OutMazed® Tourism, Berna leads Global Commercial Strategy and API Connectivity, driving supplier partnerships, expanding distribution networks, and strengthening global contracting frameworks.",
  },
  {
    name: "Karan Wadhwani",
    image: "/images/leadership/karan.png",
    role: "Head of Technology",
    tags: ["8+ Yrs Tech", "IP Leader"],
    desc: "Karan is a Travel Technology specialist with over 8 years of experience building scalable, secure, and performance driven platforms for the Travel & Tourism industry. He leads OutMazed Tourism's API connectivity, system integrations, automation frameworks, and data-driven infrastructure.",
  },
];

export default function LeadershipSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Leadership</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Strategic leadership with <br />
            <em>global travel expertise.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p className={styles.bodyText} variants={fadeUp}>
            The leadership at OutMazed® Tourism brings together deep industry
            expertise, financial acumen, and global experience to drive the
            company’s strategic vision and execution.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.founderSpotlight}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.founderImage}
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="(max-width: 991px) 100vw, 46vw"
              priority
            />
          </motion.div>

          <div className={styles.founderContent}>
            <motion.span className={styles.label} variants={fadeUp}>
              Founder
            </motion.span>

            <h3>{founder.name}</h3>

            <p className={styles.role}>{founder.role}</p>

            <div className={styles.tags}>
              {founder.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <blockquote>{founder.quote}</blockquote>

            <div className={styles.bio}>
              {founder.desc.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.teamHeader}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span variants={fadeUp}>Our Team</motion.span>
          <motion.h3 variants={fadeUp}>Leadership team</motion.h3>
        </motion.div>

        <motion.div
          className={styles.teamGrid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              className={styles.teamCard}
              variants={fadeUp}
            >
              <div className={styles.teamImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className={styles.teamContent}>
                <span className={styles.label}>Leadership</span>

                <h3>{member.name}</h3>

                <p className={styles.teamRole}>{member.role}</p>

                <div className={styles.tags}>
                  {member.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p className={styles.teamDesc}>{member.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
