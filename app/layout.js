
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

export const metadata = {
  title: "Prague Party Cruise",
  description: "The #1 Boat Party in Prague",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-P5DSX4XJ" />
      <body className="font-poppins">
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
