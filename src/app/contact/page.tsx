import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contact Us | KB Electrics, Clanfield Hampshire",
  description:
    "Get in touch with KB Electrics for a free quote. Call 07809 211836, email leggattp@yahoo.com, or fill in our online enquiry form. Based in Clanfield, covering Hampshire.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request a callback, or just ring us."
        subtitle="We aim to get back to every enquiry the same day. Free quotes, no pressure."
      />
      <ContactSection />
      <FAQSection />
      <MapSection />
    </>
  );
}
