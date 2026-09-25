import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book an Appointment",
  description: "Book New Bloom Spa services through Square and view current appointment times in Round Lake, Illinois.",
  path: "/booking",
});

export default function BookingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
