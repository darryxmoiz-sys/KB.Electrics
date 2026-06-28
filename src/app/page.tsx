import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import SolarSection from "@/components/SolarSection";
import EVSection from "@/components/EVSection";
import FinanceSection from "@/components/FinanceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "KB Electrics | Family-Run Electricians in Clanfield, Hampshire",
  description:
    "Trusted family-run electrical company in Clanfield, Hampshire. 18th Edition qualified, fully insured. Rewires, EICR, EV chargers, solar & landlord certificates. Free quotes — call 07809 211836.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <EmergencyBanner />
      <SolarSection />
      <EVSection />
      <FinanceSection />
      <ProjectsSection />
      <ReviewsSection />
      <AreasSection />
      <FAQSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
