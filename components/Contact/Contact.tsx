"use client";

import { contacts } from "@/data/contacts";
import { ContactCard } from "./ContactCard";
import styles from "./contact.module.css";

export const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
