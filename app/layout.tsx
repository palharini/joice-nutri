import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    default: "Joice Benedett | Nutricionista",
    template: "%s | Joice Benedett",
  },
  description:
    "Nutricionista com atuação em Nutrição Clínica, Esportiva e Saúde da Mulher. Conteúdos e acompanhamento nutricional com foco em saúde, equilíbrio e autonomia.",
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
      name: "Joice Benedett",
    },
  ],
  creator: "Joice Benedett",
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