"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import { useState } from "react";
import Hero from "@/components/UI/Hero/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faUser,
  faBriefcase,
  faComment,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import InternalHero from "@/components/UI/Hero/InternalHero";
import MarketingMediaContactPage from "@/components/Contact/marketing-media-legal/MarketingMediaContactPage";

export default function MarketingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Marketing, Media & Legal"
        title="Official communication"
        highlightedTitle="starts here."
        description="Reach the OutMazed team for marketing collaborations, media requests, brand partnerships, press communication, legal notices, and official corporate enquiries."
        subDescription="Your message will be directed to the right department so our team can respond with the appropriate information."
        image="/images/contact/marketingHero.jpg"
        imageAlt="Marketing media and legal contact"
      />
      <MarketingMediaContactPage />

      <Footer />
    </>
  );
}
