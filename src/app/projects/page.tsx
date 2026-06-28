import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import AreasSection from "@/components/AreasSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Recent Projects | KB Electrics Clanfield, Hampshire",
  description:
    "Browse recent electrical projects completed by KB Electrics across Clanfield, Havant, Waterlooville, Portsmouth and the wider Hampshire area.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent Projects"
        title="A few jobs from around Hampshire."
        subtitle="A snapshot of recent domestic and commercial electrical work — consumer units, EV chargers, lighting, solar and more."
      />
      <ProjectsSection />
      <AreasSection />
      <CTASection />
    </>
  );
}
