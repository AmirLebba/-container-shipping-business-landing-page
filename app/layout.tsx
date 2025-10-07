import { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "GlobalLogistics Pro - Customs Clearance & Container Shipping",
  description:
    "Professional customs clearance and container shipping services. Expert logistics solutions for international trade with real-time tracking and competitive rates.",
  keywords:
    "customs clearance, container shipping, freight forwarding, logistics, international shipping, cargo tracking",
  authors: [{ name: "GlobalLogistics Pro" }],
  creator: "GlobalLogistics Pro",
  openGraph: {
    title: "GlobalLogistics Pro - Customs Clearance & Container Shipping",
    description:
      "Professional customs clearance and container shipping services with real-time tracking.",
    type: "website",
    locale: "en_US",
    siteName: "GlobalLogistics Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalLogistics Pro - Customs Clearance & Container Shipping",
    description: "Professional logistics solutions for international trade.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
