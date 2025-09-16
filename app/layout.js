
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// Note: Using web fonts for Sailors, Lovelo, The Seasons via CSS imports
// Open Sans will be loaded via Google Fonts
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Prague Party Cruise",
  description: "The #1 Boat Party in Prague",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <GoogleTagManager gtmId="GTM-P5DSX4XJ" />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Sailors:wght@400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lovelo@1.0.0/lovelo.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=The+Seasons:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-brand-white">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5DSX4XJ"
      height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
