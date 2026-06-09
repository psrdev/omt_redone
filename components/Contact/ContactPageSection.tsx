"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactPage.module.css";
import { fadeUp, stagger } from "@/utils/motion";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  link: string;
};

const contacts: Contact[] = [
  {
    id: "1",
    name: "Business To Consumer",
    email: "sales@outmazedtravel.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/b2c.jpg",
    link: "/contact/b2c",
  },
  {
    id: "2",
    name: "Business To Business",
    email: "info@wholesaletourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/b2b.jpg",
    link: "/contact/b2b",
  },
  {
    id: "3",
    name: "Corporate",
    email: "corporate@outmazedtourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/corporate.jpg",
    link: "/contact/corporate",
  },
  {
    id: "4",
    name: "Marketing, Media & Legal",
    email: "marketing@outmazedtourism.com",
    phone: "+971 (0)4 223 5534",
    image: "/images/contact/marketing.jpg",
    link: "/contact/marketing-media-legal",
  },
  {
    id: "5",
    name: "Careers",
    email: "humanresources@outmazed.com",
    phone: "",
    image: "/images/contact/careers.jpg",
    link: "/contact/careers",
  },
  {
    id: "6",
    name: "Technology",
    email: "tech@outmazedtourism.com",
    phone: "",
    image: "/images/contact/technology.jpg",
    link: "/contact/technology",
  },
];

export default function ContactPageSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

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
            <span className={styles.eyebrowText}>Contact Directory</span>
          </motion.div>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            Choose the right <br />
            <em>OutMazed team.</em>
          </motion.h2>

          <motion.div className={styles.divider} variants={fadeUp} />

          <motion.p variants={fadeUp}>
            Select the department that matches your enquiry and connect directly
            with the relevant team.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {contacts.map((contact, index) => {
            const isBlue = index % 2 !== 0;
            const isActive = activeId === contact.id;

            return (
              <motion.article
                key={contact.id}
                className={`${styles.card} ${
                  isBlue ? styles.blueCard : styles.whiteCard
                }`}
                variants={fadeUp}
                onMouseEnter={() => setActiveId(contact.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(contact.id)}
                onBlur={() => setActiveId(null)}
              >
                <Link href={contact.link} className={styles.cardLink}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className={styles.content}>
                    <span className={styles.cardLabel}>Department</span>

                    <h3>{contact.name}</h3>

                    <div className={styles.info}>
                      <span>{contact.email}</span>

                      <AnimatePresence>
                        {contact.phone && isActive && (
                          <motion.span
                            key="phone"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                          >
                            {contact.phone}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className={styles.action}>
                      Contact Team <span>→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
