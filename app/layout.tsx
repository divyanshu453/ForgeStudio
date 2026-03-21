import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge Studio — Digital Product Agency",
  description:
    "We build end-to-end digital products, SaaS platforms, UI/UX systems, and scalable web experiences. Based globally, shipping excellence.",
  keywords: [
    "digital product agency",
    "SaaS development",
    "UI/UX design",
    "web development",
    "scalable platforms",
    "landing pages",
  ],
  openGraph: {
    title: "Forge Studio — Digital Product Agency",
    description: "We build products that define the next generation of the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.className} ${dmSans.className} ${dmMono.className}`}>
      <body>{children}</body>
    </html>
  );
}
