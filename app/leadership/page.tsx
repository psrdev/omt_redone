"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/HeroSection";
import Leadership from "@/components/Leadership/Leadership";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        image="/images/leadership/leadership.jpg"
        title="Leadership"
        subtitle="Meet the visionary leaders driving OutMazed® Tourism's mission to revolutionize global travel distribution and empower travel businesses worldwide."
      />

      <Leadership />
      <Footer />
    </>
  );
}
