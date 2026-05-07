"use client";

import { contacts } from "@/data/contacts";
import { ContactCard } from "./ContactCard";
import styles from "./contact.module.css";

export const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      {/* <div className={styles.header}>
        <div className={styles.headerImage}>
          <img
            src="/images/contact/hero-contact.jpg"
            alt="Contact Us"
            className={styles.heroImage}
          />
        </div>
        <h1 className={styles.title}>Contact Us</h1>
      </div> */}

      <div className={styles.grid}>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
};
