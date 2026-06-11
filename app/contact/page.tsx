import { ContactSection } from "@/components/Contact";
import ContactPageSection from "@/components/Contact/ContactPageSection";

import InternalHero from "@/components/UI/Hero/InternalHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
export default function ContactPage() {
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Contact OutMazed"
        title="Connect with the"
        highlightedTitle="right department."
        description="Whether you are a traveler, travel partner, corporate client, media representative, candidate, or technology partner — reach the right OutMazed team directly."
        image="/images/contact/contact.png"
        imageAlt="Contact OutMazed"
      />

      {/* <Hero
        image="/images/hero/contact-us.jpg"
        title="Contact Us"
        subtitle="Get in touch with us"
        height="30vh"
      /> */}
      {/* <ContactSection /> */}
      <ContactPageSection />
      <Footer />
    </>
  );
}
