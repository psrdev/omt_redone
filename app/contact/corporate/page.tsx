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
import CorporateContactPage from "@/components/Contact/corporate/CorporateContactPage";

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyWebsite: "",
    companyEmail: "",
    subject: "",
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
      setFormData({
        name: "",
        company: "",
        companyWebsite: "",
        companyEmail: "",
        subject: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Corporate Travel"
        title="Travel solutions for"
        highlightedTitle="modern businesses."
        description="Connect with the OutMazed corporate team for business travel, employee travel support, company travel planning, and tailored corporate tourism solutions."
        subDescription="Whether you manage frequent business trips, group movement, executive travel, or long-term corporate travel needs, our team is ready to support your company."
        image="/images/contact/corporateHero.jpg"
        imageAlt="Corporate travel contact"
      />
      <CorporateContactPage />

      <Footer />
    </>
  );
}
