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

export default function B2BPage() {
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

      <main className="d-flex flex-column min-vh-100">
        {/* Hero Section */}
        <Hero
          image="/images/hero/contact-us.jpg"
          title="Wholesale Tourism "
          subtitle="Contact us"
          height="30vh"
        />

        {/* Contact Information and Form Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              {/* Left Column - Contact Info and Map */}
              <div className="col-lg-6">
                <div className=" ">
                  <h2 className="mb-4">Get in Touch</h2>

                  {/* Contact Cards */}
                  <div className="mb-4">
                    <div className={`card text-start h-100 mb-3 contactCard`}>
                      <div className="card-body">
                        <h3 className="text-primary mb-2">
                          <FontAwesomeIcon icon={faGlobe} className="me-2" />
                          Website
                        </h3>
                        <a
                          href="https://b2b.wholesaletourism.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark text-decoration-none"
                        >
                          b2b.wholesaletourism.com
                        </a>
                      </div>
                    </div>

                    <div className={`card text-start h-100 mb-3 contactCard`}>
                      <div className="card-body">
                        <h3 className="text-primary mb-2">
                          <FontAwesomeIcon icon={faPhone} className="me-2" />
                          Phone
                        </h3>
                        <a
                          href="tel:+971422355340"
                          className="text-dark text-decoration-none"
                        >
                          +971 (0)4 223 5534
                        </a>
                      </div>
                    </div>

                    <div className={`card text-start h-100 contactCard`}>
                      <div className="card-body">
                        <h3 className="text-primary mb-2">
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                          Email
                        </h3>
                        <a
                          href="mailto:info@wholesaletourism.com"
                          className="text-dark text-decoration-none"
                        >
                          info@wholesaletourism.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="mapContainer">
                    <iframe
                      width="100%"
                      height="400"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: "8px" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5293502271115!2d55.3906747!3d25.1177885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651b6af26ee5%3A0xe96adbf8f38b0ece!2sOutMazed%C2%AE%20Tourism%20LLC!5e0!3m2!1sen!2sin!4v1777899401432!5m2!1sen!2sin"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="col-lg-6">
                <div className="">
                  <h2 className="mb-3">Send us a Message</h2>
                  <p className="text-muted mb-4">
                    Have a question about our wholesale tourism services? Fill
                    out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  {submitted && (
                    <div className="alert alert-success" role="alert">
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      Thank you! We've received your message. We'll be in touch
                      shortly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        {/* <FontAwesomeIcon icon={faUser} className="me-2" /> */}
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <div>
                          <label htmlFor="email" className="form-label">
                            {/* <FontAwesomeIcon icon={faEnvelope} className="me-2" /> */}
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div>
                          <label htmlFor="phone" className="form-label">
                            {/* <FontAwesomeIcon icon={faPhone} className="me-2" /> */}
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 (0)4 223 5534"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">
                        {/* <FontAwesomeIcon icon={faBriefcase} className="me-2" /> */}
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        {/* <FontAwesomeIcon icon={faComment} className="me-2" /> */}
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
