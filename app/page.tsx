import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/Princing";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import VideoSection from "@/components/videoSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <Service />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
