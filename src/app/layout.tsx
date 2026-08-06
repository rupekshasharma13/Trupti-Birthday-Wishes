import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { birthdayConfig } from "@/config/birthday.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${birthdayConfig.celebrant.name}'s Birthday Celebration ✨`,
  description: birthdayConfig.celebrant.heroSubtitle,
  keywords: ["Birthday", "Celebration", "Sophia", "Interactive Card", "Special Wish"],
  authors: [{ name: "Birthday Celebration Team" }],
  openGraph: {
    title: birthdayConfig.celebrant.title,
    description: birthdayConfig.celebrant.heroSubtitle,
    images: [birthdayConfig.celebrant.avatarUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0B0714",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="bg-[#0B0714] text-white antialiased selection:bg-pink-500/30 selection:text-pink-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
