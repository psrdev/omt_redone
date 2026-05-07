"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
import AboutUs from "@/components/AboutUs/AboutUs";
import Leadership from "@/components/Leadership/Leadership";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        image="/images/hero/turkey.jpg"
        title="OutMazed® Tourism – Travel Technology That Powers Global Distribution"
        subtitle="OutMazed® Tourism is a Dubai-based Travel Technology company redefining how travel products are distributed, bundled, and monetized across global markets."
      />
      <AboutUs />

      <Footer />
    </>
  );
}
