"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
import InternalHero from "@/components/UI/Hero/InternalHero";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import AboutUs from "@/components/AboutUs/AboutUs";
import Leadership from "@/components/Leadership/Leadership";
import AboutHero from "@/components/AboutUs/AboutHero";
import TravelEcosystem from "@/components/AboutUs/TravelEcosystem";
import BrandEcosystem from "@/components/AboutUs/BrandEcosystem";
import BrochureDownloads from "@/components/AboutUs/BrochureDownloads";
import LeadershipSection from "@/components/AboutUs/LeadershipSection";
import FounderHero from "@/components/AboutUs/FounderHero";
import ExecutiveLeadership from "@/components/AboutUs/ExecutiveLeadership";

export default function Home() {
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="About Us"
        title="More Than A"
        highlightedTitle="Travel Company"
        description="OutMazed Tourism LLC is a UAE-based tourism company committed to transforming how people travel, explore and experience the world."
        subDescription="Through a portfolio of specialized brands, we provide travel, visa, corporate and technology solutions under one connected ecosystem."
        image="/images/about/about_outmazed2.png"
        imageAlt="OutMazed Tourism"
      />
      <TravelEcosystem />
      <WhoWeAre />
      <BrandEcosystem />
      <BrochureDownloads />
      <FounderHero />
      <ExecutiveLeadership />

      {/* <AboutUs /> */}

      <Footer />
    </>
  );
}
