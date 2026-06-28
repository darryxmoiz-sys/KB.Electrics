import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | KB Electrics, Clanfield Hampshire",
  description:
    "KB Electrics is a family-run electrical company based in Clanfield, Hampshire. 18th Edition qualified, fully insured, and proud sponsor of the Havant & Waterlooville Women's Walking Football Team.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family business, not a call centre."
        subtitle="Here's a bit more about who we are, how we work, and the local community we're part of."
      />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
