import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesPreview from "@/components/ServicesPreview";
import EmergencyBanner from "@/components/EmergencyBanner";
import ReviewsPreview from "@/components/ReviewsPreview";
import CTASection from "@/components/CTASection";

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
      <ServicesPreview />
      <EmergencyBanner />
      <ReviewsPreview />
      <CTASection />
    </>
  );
}
