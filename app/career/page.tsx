"use client";
import Career from "@/components/Career/Career";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import InternalHero from "@/components/UI/Hero/InternalHero";
import { useEffect, useState } from "react";

export default function CareerPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Header />
      <InternalHero
        eyebrow="CAREERS"
        title="Build The Future"
        highlightedTitle="Of Travel"
        description="Join a team where technology, tourism expertise, creativity and innovation come together to shape exceptional travel experiences."
        subDescription="At OutMazed Tourism, we believe great journeys begin with great people. Explore opportunities to grow your career, make an impact and help redefine the future of travel."
        image="/images/career/office.jpg"
        imageAlt="OutMazed Tourism Careers"
      />

      <Career />
      <Footer />
    </>
  );
}
