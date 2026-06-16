"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import HeroHome from "@/components/UI/Hero/HeroHome";
import BrandsMarquee from "@/components/Home/BrandsMarquee";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger, VIEWPORT, imageReveal } from "@/utils/motion";
import MeaningSection from "@/components/Home/MeaningSection";
import EcosystemSection from "@/components/Home/EcosystemSection";
import TravelEcosystemSection from "@/components/Home/TravelEcosystemSection";
import BuiltForModernTravel from "@/components/Home/BuiltForModernTravel";
import StatsSection from "@/components/Home/StatsSection";
import CommitmentSection from "@/components/Home/CommitmentSection";
import VisionSection from "@/components/Home/VisionSection";
import CTASection from "@/components/Home/CTASection";
import OutmazedLoader from "@/components/UI/Loader/OutmazedLoader";

export default function Home() {
  return (
    <>
      {/* <OutmazedLoader /> */}
      <Header />
      <HeroHome />
      <MeaningSection />
      <EcosystemSection />
      <TravelEcosystemSection />
      <BuiltForModernTravel />
      <CommitmentSection />
      <VisionSection />
      <CTASection />
      {/* <StatsSection /> */}

      {/* <section className="py-2">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="show"
              className="col-md-6 justify-content-center d-flex"
            >
              <Image
                src="/images/home/outmazed.png"
                alt="About Us"
                className="img-fluid shadow-light clipped-box"
                width={516}
                height={500}
              />
            </motion.div>
            <div className="col-md-6">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="container"
              >
                <motion.p className="" variants={fadeUp}>
                  The name OutMazed<sup>®</sup> is inspired by two core values —
                  <b>Outperform</b> and <b>Amazing</b>. These principles guide
                  everything we do, from designing memorable travel experiences
                  to delivering services that consistently exceed customer
                  expectations.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="mt-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="container"
              >
                <motion.p className="" variants={fadeUp}>
                  Over the years, OutMazed Tourism has expanded its presence
                  through a portfolio of specialized brands, each catering to
                  different aspects of the travel and tourism ecosystem:
                </motion.p>
                <ul className="mt-4 custom-list">
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>OutMazed Travel</b> – Curated holiday packages, leisure
                    travel, and customized travel experiences.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Global Visa Shop</b> – Visa assistance, travel
                    documentation, and global mobility support services.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Wholesale Tourism</b> – B2B travel solutions, destination
                    management, and wholesale tourism services for travel
                    partners.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>The Global Corporates</b> – Corporate travel management
                    and business travel solutions.
                  </motion.li>
                  <motion.li variants={fadeUp} className="mb-3">
                    <b>Tech & Stack</b> – Technology solutions that enhance
                    travel operations, customer experiences, and digital
                    transformation within the tourism sector.
                  </motion.li>
                </ul>
                <motion.p className="" variants={fadeUp}>
                  Together, these brands enable OutMazed Tourism to offer a
                  complete travel ecosystem, serving individual travelers,
                  corporate clients, and travel partners through innovative,
                  efficient, and customer-focused services.
                </motion.p>
                <motion.p className="" variants={fadeUp}>
                  With ambitions to become one of the leading tourism groups
                  across the Middle East (ME), OutMazed Tourism continues to
                  invest in technology, strategic partnerships, and service
                  excellence. Our goal is to connect travelers with
                  unforgettable experiences while building a trusted brand
                  recognized for quality, innovation, and reliability across
                  global travel markets.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Brands Carousel Section */}
      {/* <BrandsMarquee /> */}

      <Footer />
    </>
  );
}
