"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
import InternalHero from "@/components/AboutUs/InternalHero";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import AboutUs from "@/components/AboutUs/AboutUs";
import Leadership from "@/components/Leadership/Leadership";
import AboutHero from "@/components/AboutUs/AboutHero";
import TravelEcosystem from "@/components/AboutUs/TravelEcosystem";

export default function Home() {
  return (
    <>
      <Header />
      {/* <AboutHero /> */}
      <InternalHero />
      <TravelEcosystem />
      {/*     
      <Hero
        image="/images/hero/turkey.jpg"
        title="OutMazed® Tourism – Travel Technology That Powers Global Distribution"
        subtitle="OutMazed® Tourism is a Dubai-based Travel Technology company redefining how travel products are distributed, bundled, and monetized across global markets."
      /> */}
      {/* <WhoWeAre />
      <AboutUs /> */}

      <Footer />
    </>
  );
}
