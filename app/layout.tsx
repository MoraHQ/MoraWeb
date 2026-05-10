import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mora — AI that completes the loop",
  description:
    "Mora is an AI agent platform that takes tasks from intent to completion. No forms, no redirects, no manual steps.",
  keywords: ["AI agents", "autonomous agents", "task completion", "AI that acts"],
  openGraph: {
    title: "Mora — AI that completes the loop",
    description:
      "AI that completes the loop. From intent to done — no middle steps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
