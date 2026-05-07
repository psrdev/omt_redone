import { ContactSection } from "@/components/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
export default function ContactPage() {
  return (
    <>
      <Header />
      <Hero
        image="/images/hero/contact-us.jpg"
        title="Contact Us"
        subtitle="Get in touch with us"
      />
      <ContactSection />
      <Footer />
    </>
  );
}
