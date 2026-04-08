"use client";
import Header from "@/components/UI/Header/Header";
import Hero from "@/components/UI/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />;
      <Hero
        backgroundImage="https://picsum.photos/1200/800"
        heading="Welcome to Outmazed Tourism"
        subheading="Discover the world with us - your trusted travel partner for unforgettable experiences."
      />
    </>
  );
}
