"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import InternalHero from "@/components/UI/Hero/InternalHero";
import SuppliersPage from "@/components/Suppliers/SuppliersPage";

export default function SupplierPage() {
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Strategic Supplier Network"
        title="Powered by"
        highlightedTitle="Trusted Suppliers."
        description="We proudly collaborate with a diverse network of trusted suppliers who play a vital role in delivering exceptional travel experiences. From hotels and attractions to transport providers, cruise lines, and destination management companies, our partners help us provide high-quality services, competitive rates, and seamless travel solutions worldwide."
        subDescription="Their reliability, commitment to excellence, and ongoing support enable us to create greater value, strengthen partnerships, and drive mutual success through long-term collaboration."
        image="/images/hero/suppliers.png"
        imageAlt="OutMazed global supplier and hospitality partner network"
      />
      <SuppliersPage />

      <Footer />
    </>
  );
}
