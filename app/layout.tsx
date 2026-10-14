import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kongalla Srisailam | Full Stack Developer & Enterprise CMS Architect",
  description:
    "Official portfolio of Kongalla Srisailam. 3+ years delivering enterprise-grade web applications, custom CMS platforms, and high-traffic production websites including the official Chhota Bheem platform.",
  keywords: [
    "Kongalla Srisailam",
    "Full Stack Developer",
    "PHP Developer",
    "Laravel",
    "React.js",
    "CodeIgniter",
    "Next.js",
    "Enterprise CMS Architect",
    "Chhota Bheem Developer",
  ],
  authors: [{ name: "Kongalla Srisailam" }],
  openGraph: {
    title: "Kongalla Srisailam | Full Stack Developer",
    description:
      "Results-driven Full Stack Developer with 3+ years experience delivering enterprise web apps, custom CMS platforms, and high-traffic systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="antialiased selection:bg-[#0055ff] selection:text-white">
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
