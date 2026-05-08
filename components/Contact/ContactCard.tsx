"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Contact } from "@/data/contacts";

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
      className="contact-card"
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
      <div className="contact-overlay" />

      <motion.div
        className="contact-default-content"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="contact-name fs-4">{contact.name}</p>
      </motion.div>

      <motion.div
        className="contact-hover-content"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="contact-hover-inner">
          <h3 className="contact-hovered-name fs-2">{contact.name}</h3>
          <p className="contact-email fs-4">{contact.email}</p>
          {contact.phone && (
            <p className="contact-phone fs-4">{contact.phone}</p>
          )}
          <div className="contact-btn-wrapper">
            <motion.button
              className="contact-redirect-btn"
              onClick={handleRedirect}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Contact ${contact.name}`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
