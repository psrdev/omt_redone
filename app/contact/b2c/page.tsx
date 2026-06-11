"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import { useState } from "react";
import Hero from "@/components/UI/Hero/HeroSection";
import InternalHero from "@/components/UI/Hero/InternalHero";
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
import B2cContactPage from "@/components/Contact/b2c/B2cContactPage";

export default function B2CPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <InternalHero
        eyebrow="Travel Assistance"
        title="Let's plan your"
        highlightedTitle="next adventure."
        description="From dream holidays and family vacations to visa assistance and travel planning, our experts are ready to help make your journey seamless."
        subDescription="Get personalized guidance, quick support, and trusted travel solutions from the OutMazed team."
        image="/images/contact/b2cHero.jpg"
        imageAlt="Travel support"
      />
      <B2cContactPage />

      <Footer />
    </>
  );
}
