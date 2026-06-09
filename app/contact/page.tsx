import { ContactSection } from "@/components/Contact";
import ContactPageSection from "@/components/Contact/ContactPageSection";
import InternalHero from "@/components/Contact/InternalHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
export default function ContactPage() {
  return (
    <>
      <Header />
      <InternalHero />

      {/* <Hero
        image="/images/hero/contact-us.jpg"
        title="Contact Us"
        subtitle="Get in touch with us"
        height="30vh"
      /> */}
      {/* <ContactSection /> */}
      <ContactPageSection />
      <Footer />
    </>
  );
}
