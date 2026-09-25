import type { Metadata } from "next";

export const SITE_URL = "https://new-bloom-spa.vercel.app";
export const SQUARE_BOOKING_URL = "https://new-bloom-spa.square.site/";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | New Bloom Spa`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "New Bloom Spa",
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "New Bloom Spa",
  url: SITE_URL,
  telephone: "+1-224-800-9337",
  email: "newbloomspa@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1829 S Cedar Lake Rd",
    addressLocality: "Round Lake",
    addressRegion: "IL",
    postalCode: "60073-5711",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/Monday",
      opens: "10:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      opens: "09:30",
      closes: "20:30",
    },
  ],
  sameAs: [
    "https://www.instagram.com/newbloomspa/",
    "https://www.tiktok.com/@newbloomspa",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: SQUARE_BOOKING_URL,
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
  },
};
