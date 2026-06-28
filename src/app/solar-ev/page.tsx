import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolarSection from "@/components/SolarSection";
import EVSection from "@/components/EVSection";
import FinanceSection from "@/components/FinanceSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Solar Panels, Battery Storage & EV Chargers | KB Electrics Hampshire",
  description:
    "Solar panel installation, battery storage and OLEV-compliant EV charger installation across Hampshire. Finance available on larger renewable energy and EV charging projects.",
};

export default function SolarEVPage() {
  return (
    <>
      <PageHero
        eyebrow="Special Features"
        title="Solar, batteries & EV charging."
        subtitle="The three things people are asking us about most right now — and the three we're proudest of getting right."
      />
      <SolarSection />
      <EVSection />
      <FinanceSection />
      <CTASection />
    </>
  );
}
