'use client'


import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/Princing";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import VideoSection from "@/components/videoSection";
import AboutSection from "@/components/AboutSection";

// Importação dinâmica com SSR desativado para o Three.js / WebGL

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <Service />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}