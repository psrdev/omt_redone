"use client";

import ClientsPage from "@/components/Clients/ClientsPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import InternalHero from "@/components/UI/Hero/InternalHero";

export default function ClientPage() {
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Trusted Partnerships"
        title="Trusted by"
        highlightedTitle="Industry Leaders."
        description="Our clients are at the heart of everything we do. We are proud to be the trusted travel partner for travel agencies, tour operators, corporate travel companies, and industry professionals who rely on OutMazed Tourism for dependable service, competitive pricing, and seamless travel solutions."
        subDescription="Their continued trust and partnership inspire us to deliver excellence, innovation, and value in every booking and every journey—building lasting relationships through reliability, collaboration, and shared growth."
        image="/images/Hero/clients.png"
        imageAlt="OutMazed trusted clients and travel industry partnerships"
      />
      <ClientsPage />

      <Footer />
    </>
  );
}
