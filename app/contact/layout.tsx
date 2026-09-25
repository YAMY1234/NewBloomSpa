import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Directions",
  description: "Call, email, get directions to, or book New Bloom Spa at 1829 S Cedar Lake Rd in Round Lake, Illinois.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
