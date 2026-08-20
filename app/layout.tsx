import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "nutricionista",
    "nutrição clínica",
    "nutrição esportiva",
    "saúde da mulher",
    "alimentação saudável",
    "acompanhamento nutricional",
    "nutricionista online",
    "Joice Benedett",
  ],

  authors: [
    {
      name: siteConfig.author.name,
    },
  ],

  creator: siteConfig.author.name,

  category: "health",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}