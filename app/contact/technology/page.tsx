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
import TechnologyContactPage from "@/components/Contact/technology/TechnologyContactPage";

export default function TechnologyPage() {
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
        eyebrow="Technology"
        title="Digital support for"
        highlightedTitle="travel innovation."
        description="Connect with the OutMazed technology team for platform support, digital integrations, technical enquiries, and travel technology collaboration."
        subDescription="Whether you need website support, system assistance, integration guidance, or technology partnership information, our team is here to help."
        image="/images/contact/technologyHero.jpg"
        imageAlt="Technology contact OutMazed"
      />
      <TechnologyContactPage />

      <Footer />
    </>
  );
}
