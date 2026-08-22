import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HeaderActions } from "@/components/HeaderActions";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://adarshsrivastav.in";
const siteTitle = "Adarsh Srivastav | Graphic Designer & Video Editor";
const siteDescription =
  "Portfolio of Adarsh Srivastav — graphic designer and video editor building brand identity, social creatives and campaign films for Bharat, with AI-powered creative production.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  verification: {
    google: "a2bo5Tfocvn6Y5-rIBFKUpPJ1XAKpsAqHeJ-iZaSS80",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Adarsh Srivastav Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adarsh Srivastav",
  jobTitle: "Senior Executive – Graphic Designer",
  description:
    "Graphic designer and video editor with 2+ years across education, healthcare and FMCG brands — from metro pillar graphics and hoardings to social campaigns, product creatives and brand mascots. Most of my work is built for Bharat: non-metro, Hindi-first audiences where clarity matters more than trend, and the same asset has to hold up on a hoarding and on WhatsApp. I pair traditional design craft with AI production tools, using Photoshop, Illustrator and Premiere alongside Gemini, Veo and Firefly to move from concept to finished asset faster.",
  url: siteUrl,
  email: "adarshxsrivastav@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/adarsh-srivastav-3947b3201",
    "https://www.behance.net/adarshsrivastav",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased transition-colors duration-300 bg-[#FAF8F5] dark:bg-[#0B0B0C] text-[#16150F] dark:text-[#F2F0ED]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <HeaderActions />
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
