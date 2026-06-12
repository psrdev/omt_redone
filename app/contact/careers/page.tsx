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
import CareersContactPage from "@/components/Contact/career/CareersContactPage";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "file") {
      const files = target.files;
      setFormData((prev) => ({
        ...prev,
        resume: files ? files[0] : null,
      }));
    } else {
      const { name, value } = target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        resume: null,
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />

      <InternalHero
        eyebrow="Careers"
        title="Join the team"
        highlightedTitle="behind OutMazed."
        description="Explore career opportunities with OutMazed and become part of a growing tourism company built on service, innovation, and customer-first travel solutions."
        subDescription="Whether your background is in travel, sales, operations, marketing, customer support, or technology, we would love to hear from you."
        image="/images/contact/careersHero.jpg"
        imageAlt="Careers at OutMazed"
      />
      <CareersContactPage />
      <Footer />
    </>
  );
}
