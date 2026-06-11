"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import B2bContactPage from "@/components/Contact/b2b/B2bContactPage";
import InternalHero from "@/components/UI/Hero/InternalHero";

export default function B2BPage() {
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="B2B Partnerships"
        title="Partner with"
        highlightedTitle="OutMazed."
        description="Connect with our B2B team for wholesale tourism solutions, destination management, travel partner support, supplier collaborations, and corporate travel opportunities."
        subDescription="Whether you are a travel agency, tour operator, hotel partner, DMC, or corporate client — our team is here to help you build faster, smarter, and more reliable travel solutions."
        image="/images/contact/b2bHero.png"
        imageAlt="B2B contact OutMazed"
      />
      <B2bContactPage />
      <Footer />
    </>
  );
}
