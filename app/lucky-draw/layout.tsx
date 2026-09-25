import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Lucky Draw",
  description: "Use the New Bloom Spa Lucky Draw and review the current in-store rules for claiming a result.",
  path: "/lucky-draw",
});

export default function LuckyDrawLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
