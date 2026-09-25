import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { localBusinessJsonLd, SITE_URL } from "@/lib/seo";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "New Bloom Spa - Massage, Facials & Foot Care in Round Lake",
    template: "%s | New Bloom Spa",
  },
  description: "New Bloom Spa offers massage, couples massage, facial treatments, and foot care in Round Lake, Illinois.",
  keywords: ["spa", "massage", "couples massage", "facial care", "foot care", "Round Lake", "Illinois"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "New Bloom Spa",
    title: "New Bloom Spa - Massage, Facials & Foot Care in Round Lake",
    description: "New Bloom Spa offers massage, couples massage, facial treatments, and foot care in Round Lake, Illinois.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "New Bloom Spa - Massage, Facials & Foot Care in Round Lake",
    description: "New Bloom Spa offers massage, couples massage, facial treatments, and foot care in Round Lake, Illinois.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
