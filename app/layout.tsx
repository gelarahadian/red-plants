import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "aos/dist/aos.css";
import Subscribe from "@/components/Subscribe";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Plants",
  description: "Beautiful plants that encourage you to get creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Subscribe className="mt-28" />
        <Footer />
      </body>
    </html>
  );
}
