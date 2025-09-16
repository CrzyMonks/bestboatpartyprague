import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 border-t border-brand-orange/20 overflow-hidden min-h-[200px] sm:min-h-[250px]">
      {/* Background Image */}
      <Image 
        src="/graphics/footerBg.png" 
        alt="Footer Background" 
        fill
        className="absolute inset-0 object-cover z-0 w-full h-full scale-110 sm:scale-100"
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          minHeight: '100%',
          minWidth: '100%'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-3">
          {/* Logo/Title */}
          <h2 className="text-3xl font-bold text-brand-gold">
            PRAGUE PARTY CRUISE
          </h2>
          
          {/* Tagline */}
          <p className="text-white/60 text-base">
            Experience Luxury on the Waves
          </p>
          
          {/* Navigation Links */}
          <div className="flex gap-6 mt-1">
            <Link 
              href="https://www.facebook.com/warehouseentertainmentprague/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange text-sm hover:opacity-80 transition-opacity"
            >
              Know More
            </Link>
            <Link 
              href="/contact" 
              className="text-brand-orange text-sm hover:opacity-80 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Social Media */}
          <a 
            href="https://www.instagram.com/prague_party_cruise?igsh=ZXF6OG0yMDZsM2Ny" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 p-1.5 rounded-full border border-brand-orange/20 hover:border-brand-orange transition-colors"
          >
            <Instagram className="w-5 h-5 text-brand-orange" />
          </a>
          
          {/* Copyright */}
          <p className="text-white/40 text-xs mt-4">
            © 2025 Prague boat cruise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 