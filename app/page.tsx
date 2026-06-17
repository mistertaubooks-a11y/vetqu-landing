import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import FacilitySection from "./components/FacilitySection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import PromoSection from "./components/PromoSection";
import EducationSection from "./components/EducationSection";
import { getLandingData } from "./lib/data";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const data = await getLandingData();
  
  return (
    <div className="relative selection:bg-purple-100 selection:text-purple-900 scroll-smooth">
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 font-sans font-normal">
        <HeroSection />
        <PromoSection />
        <HowItWorksSection />
        <ServicesSection />
        <TeamSection />
        <FacilitySection />
        <TestimonialSection />
        <EducationSection />
        <FAQSection faqs={data.faqs} ctaLink={data.hero.cta.link} />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
