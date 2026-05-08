import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mora — Remove the Delay",
  description:
    "Mora is a headless financial ecosystem that enables AI agents to plan, negotiate, and settle transactions across web and mobile platforms — no manual checkouts, sub-second execution.",
  keywords: ["AI payments", "autonomous agents", "headless checkout", "machine payment protocol"],
  openGraph: {
    title: "Mora — Remove the Delay",
    description:
      "The execution layer for AI agents that settle transactions in under a second.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
