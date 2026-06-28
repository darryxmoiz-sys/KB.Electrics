import type { Metadata } from "next";
import { Space_Grotesk, Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MobileCTABar from "@/components/MobileCTABar";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KB Electrics | Family-Run Electricians in Clanfield, Hampshire",
    template: "%s | KB Electrics",
  },
  description:
    "KB Electrics is a trusted family-run electrical company based in Clanfield, Hampshire. 18th Edition qualified, fully insured electricians covering rewires, consumer units, EV chargers, solar and landlord certificates across Hampshire.",
  keywords: [
    "electrician Clanfield",
    "electrician Waterlooville",
    "electrician Havant",
    "electrician Hampshire",
    "EV charger installation Hampshire",
    "EICR Hampshire",
    "PAT testing Hampshire",
    "solar panel installation Hampshire",
  ],
  openGraph: {
    title: "KB Electrics | Family-Run Electricians in Clanfield, Hampshire",
    description:
      "Trusted local family-run electricians. 18th Edition qualified, fully insured. Free quotes across Hampshire.",
    type: "website",
    locale: "en_GB",
    url: "https://www.kbelectrics.co.uk",
    siteName: "KB Electrics",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "KB Electrics Clanfield" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KB Electrics | Family-Run Electricians in Hampshire",
    description: "18th Edition qualified, fully insured electricians serving Clanfield and Hampshire.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${grotesk.variable} ${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0B1120" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: "KB Electrics",
              image: "https://www.kbelectrics.co.uk/og-image.jpg",
              url: "https://www.kbelectrics.co.uk",
              telephone: "+447809211836",
              email: "leggattp@yahoo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Henwood Grove",
                addressLocality: "Clanfield",
                addressRegion: "Hampshire",
                postalCode: "PO8 0ZE",
                addressCountry: "GB",
              },
              areaServed: [
                { "@type": "City", name: "Clanfield" },
                { "@type": "City", name: "Havant" },
                { "@type": "City", name: "Waterlooville" },
                { "@type": "City", name: "Portsmouth" },
                { "@type": "City", name: "Hayling Island" },
                { "@type": "City", name: "Horndean" },
                { "@type": "City", name: "Petersfield" },
              ],
              priceRange: "££",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
