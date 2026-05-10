import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arctic Spark | Endeavor into New Territories",
  description:
    "Arctic Spark is a small team of engineers and designers who build thoughtful digital products — from community platforms to data-driven experiences.",
  keywords: ["Arctic Spark", "software", "Hong Kong", "web development", "digital products"],
  openGraph: {
    title: "Arctic Spark | Endeavor into New Territories",
    description:
      "A team of engineers and designers who build thoughtful digital products.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
