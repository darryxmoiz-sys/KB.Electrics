import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services | KB Electrics Clanfield, Hampshire",
  description:
    "Domestic and commercial electrical services across Hampshire — rewires, consumer unit upgrades, EICR testing, PAT testing, landlord certificates, EV chargers and solar. Fully qualified and insured.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six job types. One careful standard."
        subtitle="From a single socket to a full commercial rewire — every job we take on across Hampshire follows the same standard of care."
      />
      <ServicesSection />
      <EmergencyBanner />
      <CTASection />
    </>
  );
}
