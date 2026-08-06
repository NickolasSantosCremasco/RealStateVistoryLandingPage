'use client'

import dynamic from 'next/dynamic';
import Preloader from "@/components/Preloader";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/Princing";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import VideoSection from "@/components/videoSection";
import AboutSection from "@/components/AboutSection";

// Importação dinâmica com SSR desativado para o Three.js / WebGL
const Interactive3DHistory = dynamic(
  () => import("@/components/Interactive3DHistory"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <Interactive3DHistory />
      <Service />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}