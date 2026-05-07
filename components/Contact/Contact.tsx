"use client";

import { contacts } from "@/data/contacts";
import { ContactCard } from "./ContactCard";

export const ContactSection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="contactGrid">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
