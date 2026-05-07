"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Contact } from "@/data/contacts";
import styles from "./contact-card.module.css";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleRedirect = () => {
    if (!contact.link) return;

    // Check if it's an internal route (starts with /)
    if (contact.link.startsWith("/")) {
      router.push(contact.link);
    } else if (contact.link.startsWith("http")) {
      // External link
      window.open(contact.link, "_blank");
    } else if (contact.link.startsWith("mailto:")) {
      // Email link
      window.location.href = contact.link;
    }
  };

  return (
    <motion.div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${contact.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.overlay} />

      <motion.div
        className={styles.defaultContent}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        pointerEvents={isHovered ? "none" : "auto"}
      >
        <p className={`${styles.contactName} fs-1`}>{contact.name}</p>
      </motion.div>

      <motion.div
        className={styles.hoverContent}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        pointerEvents={isHovered ? "auto" : "none"}
      >
        <div className={styles.hoverInner}>
          <h3 className={`${styles.hoveredName} fs-1`}>{contact.name}</h3>
          <p className={`${styles.email} fs-2`}>{contact.email}</p>
          {contact.phone && (
            <p className={`${styles.phone} fs-2`}>{contact.phone}</p>
          )}
          <motion.button
            className={styles.redirectBtn}
            onClick={handleRedirect}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Contact ${contact.name}`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
