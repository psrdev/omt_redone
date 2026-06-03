import styles from "./BuiltForModernTravel.module.css";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerSlow, VIEWPORT } from "@/utils/motion";

const pillars = [
  {
    number: "01",
    title: "Customer First",
    description:
      "Every service, product and experience is designed around customer satisfaction and long-term relationships.",
    variant: "primary",
  },
  {
    number: "02",
    title: "Global Partnerships",
    description:
      "Strong relationships with airlines, hotels, tourism boards and travel suppliers worldwide.",
    variant: "light",
  },
  {
    number: "03",
    title: "Technology Driven",
    description:
      "Leveraging innovation and digital transformation to improve travel experiences and operations.",
    variant: "primary",
  },
  {
    number: "04",
    title: "Industry Expertise",
    description:
      "Deep destination knowledge and operational excellence across multiple travel segments.",
    variant: "light",
  },
  {
    number: "05",
    title: "Integrated Ecosystem",
    description:
      "A connected network of specialized brands working together to create greater value.",
    variant: "primary",
  },
  {
    number: "06",
    title: "Trusted Support",
    description:
      "Transparent communication and reliable assistance throughout every stage of the journey.",
    variant: "light",
  },
];

export default function BuiltForModernTravel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.span
          className={styles.tag}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          WHY OUTMAZED
        </motion.span>

        <div className={styles.header}>
          <motion.h2
            className={styles.heading}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            Built For
            <br />
            Modern Travel.
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            Combining industry expertise, global partnerships, technology and
            customer-centric thinking to create travel solutions designed for
            the future.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {pillars.map((item) => (
            <article
              key={item.number}
              className={`${styles.card} ${
                item.variant === "primary"
                  ? styles.primaryCard
                  : styles.lightCard
              }`}
            >
              <span className={styles.number}>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
