"use client";
import Career from "@/components/Career/Career";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import { useEffect, useState } from "react";

export default function CareerPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Header />
      <Career />
      <Footer />
    </>
  );
}
