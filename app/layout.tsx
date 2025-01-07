import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import layoutData from "@/data/layout-data.json";

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
  title: "TMD Energy Limited",
  description: "TMD EL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}  >
        <Navbar data={layoutData.navbar} />
        <NavbarMobile />
        <main className="bg-[#fff]"> 
        {children}
        </main>
        <Footer data={layoutData.footer} />
      </body>
    </html>
  );
}
