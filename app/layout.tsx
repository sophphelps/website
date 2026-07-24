import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Sophia Phelps | Physics Researcher", template: "%s | Sophia Phelps" },
  description: "NSF Graduate Research Fellow studying exoplanet detection, stellar magnetic activity, and precision radial velocities.",
  openGraph: {
    title: "Sophia Phelps | Physics Researcher",
    description: "Research in exoplanet detection, stellar variability, and precision spectroscopy.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-ink px-4 py-2 text-sm text-white focus:translate-y-0">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
